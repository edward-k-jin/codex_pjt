// .github/scripts/notion-release-sync.js
const { Client } = require("@notionhq/client");

function must(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function normalizeNotionId(id) {
  // Notion은 하이픈 없는 32자리도 받지만, 혹시 공백/하이픈 섞여도 정리
  return id.replace(/-/g, "").trim();
}

async function main() {
  const notion = new Client({ auth: must("NOTION_TOKEN") });

  const databaseId = normalizeNotionId(must("NOTION_DATABASE_ID"));
  const projectName = must("PROJECT_NAME");
  const vercelProdUrl = must("VERCEL_PROD_URL");

  const githubRepo = must("GITHUB_REPO");
  const releaseTag = must("RELEASE_TAG");
  const releaseName = process.env.RELEASE_NAME || releaseTag;
  const releaseUrl = must("RELEASE_URL");
  const releaseBody = process.env.RELEASE_BODY || "";
  const publishedAt = process.env.PUBLISHED_AT || new Date().toISOString();

  // 1) Project 이름으로 row 찾기
  const query = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Project",
      title: { equals: projectName },
    },
    page_size: 1,
  });

  const props = {
    Project: { title: [{ text: { content: projectName } }] },
    Repo: { url: `https://github.com/${githubRepo}` },
    Vercel: { url: vercelProdUrl.startsWith("http") ? vercelProdUrl : `https://${vercelProdUrl}` },
    "Last Updated": { date: { start: publishedAt } },
    "Release Notes": {
      rich_text: [
        { text: { content: `Release: ${releaseName} (${releaseTag})\n` } },
        { text: { content: `${releaseUrl}\n\n` } },
        { text: { content: releaseBody.slice(0, 1900) } }, // 노션 리치텍스트 길이 과도 방지
      ],
    },
  };

  // 2) 없으면 만들고, 있으면 업데이트
  if (query.results.length === 0) {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: props,
    });
    console.log("Created new row:", projectName);
  } else {
    const pageId = query.results[0].id;
    await notion.pages.update({
      page_id: pageId,
      properties: props,
    });
    console.log("Updated row:", projectName);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
