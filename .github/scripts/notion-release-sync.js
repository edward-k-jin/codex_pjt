// .github/scripts/notion-release-sync.js
const { Client } = require("@notionhq/client");

function must(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function normalizeNotionId(idOrUrl) {
  // Allow raw id (32 hex) or UUID-like with hyphens
  // If URL, pick first 32-hex chunk
  const s = String(idOrUrl).trim();
  const m = s.match(/[0-9a-fA-F]{32}/);
  if (m) return m[0];
  return s.replace(/-/g, "");
}

function notionUrlFromId(id32) {
  // Not required, but handy for debug
  const a = id32.slice(0, 8);
  const b = id32.slice(8, 12);
  const c = id32.slice(12, 16);
  const d = id32.slice(16, 20);
  const e = id32.slice(20);
  return `${a}-${b}-${c}-${d}-${e}`;
}

async function main() {
  const notion = new Client({ auth: must("NOTION_TOKEN") });
  const database_id = normalizeNotionId(must("NOTION_DATABASE_ID"));

  const PROJECT_NAME = must("PROJECT_NAME");
  const GITHUB_REPO = process.env.GITHUB_REPO || "";
  const VERCEL_PROD_URL = process.env.VERCEL_PROD_URL || "";

  const RELEASE_TAG = process.env.RELEASE_TAG || "";
  const RELEASE_NAME = process.env.RELEASE_NAME || "";
  const RELEASE_URL = process.env.RELEASE_URL || "";
  const RELEASE_BODY = process.env.RELEASE_BODY || "";
  const PUBLISHED_AT = process.env.PUBLISHED_AT || new Date().toISOString();

  // Find existing row where "Project" title == PROJECT_NAME
  const query = await notion.databases.query({
    database_id,
    filter: {
      property: "Project",
      title: {
        equals: PROJECT_NAME,
      },
    },
  });

  const pageId = query.results[0]?.id;

  const props = {
    // Your Notion DB property names must match EXACTLY.
    Project: { title: [{ type: "text", text: { content: PROJECT_NAME } }] },

    // These are optional if the column exists as URL / rich text.
    Repo: GITHUB_REPO ? { url: `https://github.com/${GITHUB_REPO}` } : undefined,
    Vercel: VERCEL_PROD_URL ? { url: VERCEL_PROD_URL } : undefined,

    // Date type property recommended
    "Last Updated": { date: { start: PUBLISHED_AT } },

    // Rich text columns
    "Release Notes": {
      rich_text: [
        { type: "text", text: { content: `${RELEASE_TAG} ${RELEASE_NAME}`.trim() } },
        ...(RELEASE_URL ? [{ type: "text", text: { content: `\n${RELEASE_URL}` } }] : []),
        ...(RELEASE_BODY ? [{ type: "text", text: { content: `\n\n${RELEASE_BODY}` } }] : []),
      ],
    },

    // If you keep these as URL columns, you can swap to { url: "..." }
    PRD: undefined,
    Changelog: undefined,
    Status: undefined,
    Owner: undefined,
  };

  // Remove undefined props (Notion API rejects them)
  Object.keys(props).forEach((k) => props[k] === undefined && delete props[k]);

  if (pageId) {
    await notion.pages.update({
      page_id: pageId,
      properties: props,
    });
    console.log(`Updated existing Notion row for Project="${PROJECT_NAME}"`);
  } else {
    await notion.pages.create({
      parent: { database_id },
      properties: props,
    });
    console.log(`Created new Notion row for Project="${PROJECT_NAME}"`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
