# ADR 0001: Initial Stack

- Status: Accepted
- Date: 2026-02-23

## Context
The project needs a repeatable workflow that keeps code and documentation versioned in GitHub and project history synchronized in Notion.

## Decision
- Use GitHub as the source of truth for code and markdown docs under `docs/`.
- Use Notion `Codex Projects` -> `Projects DB` as the project history ledger.
- Standardize release documentation using:
  - `docs/PRD.md`
  - `docs/CHANGELOG.md`
  - `docs/RELEASE_NOTES.md`
- Enforce quality gates: lint, typecheck, unit, build.

## Consequences
- Positive:
  - Traceable product history across GitHub and Notion.
  - Consistent handoff artifacts for planning and release communication.
- Negative:
  - Additional maintenance overhead to keep docs and Notion in sync.

