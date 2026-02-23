# Codex + Notion Operating Guide

## Communication Rules
- The user is a non-developer.
- Ask at most 5 questions at once.
- Prioritize questions around goal, constraints (what is forbidden), and success criteria.

## Git Workflow
- Work on `codex/*` branches.
- Open a Pull Request from `codex/*` to `main`.
- Merge to `main` only through PR review and approval.

## Definition of Done
- `lint` passes.
- `typecheck` passes.
- `unit` tests pass.
- `build` passes.

## Required Docs Artifacts
- Keep `docs/PRD.md` up to date.
- Keep `docs/ADR/*` up to date.
- Keep `docs/CHANGELOG.md` up to date.
- Keep `docs/RELEASE_NOTES.md` up to date.

## Notion Auto Logging Rules
Target: Notion `Codex Projects` -> `Projects DB`

1. Find row by `Project` name; if missing, create a new row.
2. Update these properties on each run:
   - `Repo`
   - `Vercel`
   - `Last Updated`
   - `Owner`
   - `Status`
3. Update the project page body (template-backed sections):
   - `Overview`: current goal and scope
   - `PRD`: key feature list and user-flow summary
   - `Changelog`: PR-level change summary with date
   - `Release Notes`: user-impact-focused release summary
   - `Links`: GitHub PR URL, Vercel Preview URL, Vercel Production URL

