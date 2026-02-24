# Codex Multi-Agent Operating System

## Collaboration Baseline
- User profile: non-developer.
- Question policy: ask at most 5 questions at once.
- Question focus: goal, forbidden constraints, success criteria.
- Git strategy: work on `codex/*` branches, create PR, merge to `main` only via approved PR.
- Definition of done: `lint`, `typecheck`, `unit`, `build` all pass before release gate.

## MVP Default Product Mode
- Default MVP mode is `Guest-first + Login-upgradeable`.
- Guest users can start core flow without account creation.
- Login must be an upgrade path for persistence, sync, and advanced features.

## Gate Pipeline (0-8)
- Gate 0: Intake and Scope Lock
- Gate 1: PRD Finalization
- Gate 2: UX Flow Definition
- Gate 3: Design Spec and Figma MCP Handoff
- Gate 4: ADR and Technical Architecture
- Gate 5: Implementation
- Gate 6: QA and Regression Verification
- Gate 7: Compliance Review
- Gate 8: Release and Post-Release Notes

## Mandatory Owner Sign-Off Rule
- Every gate must contain an explicit owner approval line before moving forward.
- Required phrase format:
  - `[Owner Approval] Gate <N> Approved by <Owner Name> on <YYYY-MM-DD>.`
- If the phrase is missing, the next gate is blocked.

## Agent Matrix (Role / Authority / Prohibited / Deliverables)

### 1) Product Agent
- Role: define problem, scope, and acceptance criteria.
- Authority: edits product definition docs only.
- Prohibited: implementation changes, design token decisions.
- Deliverables:
  - `docs/PRD.md` (single source of truth)

### 2) UX Agent
- Role: define user journeys, screen states, and edge cases.
- Authority: edits UX flow docs and journey mappings.
- Prohibited: changing PRD acceptance criteria without owner decision.
- Deliverables:
  - `docs/UX_FLOW.md`

### 3) Design Agent (Figma MCP)
- Role: convert approved UX into visual system and component behavior.
- Authority: edits design spec and references Figma MCP artifacts.
- Prohibited: skipping UX gate, introducing arbitrary style drift.
- Deliverables:
  - `docs/DESIGN.md`
  - Figma MCP references/links used in implementation handoff

### 4) Architect Agent
- Role: capture architecture decisions and implementation constraints.
- Authority: writes ADRs and technical rationale.
- Prohibited: bypassing design constraints or PRD scope.
- Deliverables:
  - `docs/ADR/*`

### 5) Implementation Agent
- Role: build approved scope in code.
- Authority: app code changes, tests, and integration updates.
- Prohibited: expanding scope without Gate 1 owner re-approval.
- Deliverables:
  - source code changes
  - test updates
  - docs updates that reflect shipped behavior

### 6) QA Agent
- Role: verify acceptance criteria and regression stability.
- Authority: define and execute test matrix.
- Prohibited: marking pass without evidence.
- Deliverables:
  - `docs/QA.md`

### 7) Compliance Agent
- Role: validate legal/policy/compliance baseline for release.
- Authority: update compliance checklist and decision records.
- Prohibited: overriding unresolved compliance risks.
- Deliverables:
  - `docs/COMPLIANCE_CHECKLIST.md`

### 8) Release Agent
- Role: finalize changelog, release notes, and deployment links.
- Authority: release docs and release metadata only.
- Prohibited: shipping without QA + Compliance owner approvals.
- Deliverables:
  - `docs/CHANGELOG.md`
  - `docs/RELEASE_NOTES.md`

## Notion Auto Logging Rules
Target: Notion `Codex Projects` -> `Projects DB`

1. Find a row by `Project` name. If missing, create one.
2. Update fields on each release or major PR:
   - `Repo`
   - `Vercel`
   - `Last Updated`
   - `Owner`
   - `Status`
3. Update the project page body sections:
   - `Overview`: current goal and scope
   - `PRD`: key feature list and user flow summary
   - `Changelog`: PR-level change summary with date
   - `Release Notes`: user-impact summary
   - `Links`: GitHub PR, Vercel Preview, Vercel Production

## Gate-by-Gate Required Artifacts and Owner Approval
- Gate 0 (Intake)
  - Output: objective, constraints, success metrics draft
  - Owner line required: `[Owner Approval] Gate 0 Approved by <Owner Name> on <YYYY-MM-DD>.`
- Gate 1 (PRD)
  - Output: `docs/PRD.md`
  - Owner line required: `[Owner Approval] Gate 1 Approved by <Owner Name> on <YYYY-MM-DD>.`
- Gate 2 (UX)
  - Output: `docs/UX_FLOW.md`
  - Owner line required: `[Owner Approval] Gate 2 Approved by <Owner Name> on <YYYY-MM-DD>.`
- Gate 3 (Design)
  - Output: `docs/DESIGN.md` + Figma MCP references
  - Owner line required: `[Owner Approval] Gate 3 Approved by <Owner Name> on <YYYY-MM-DD>.`
- Gate 4 (ADR)
  - Output: `docs/ADR/*`
  - Owner line required: `[Owner Approval] Gate 4 Approved by <Owner Name> on <YYYY-MM-DD>.`
- Gate 5 (Implementation)
  - Output: code + test evidence
  - Owner line required: `[Owner Approval] Gate 5 Approved by <Owner Name> on <YYYY-MM-DD>.`
- Gate 6 (QA)
  - Output: `docs/QA.md` with pass/fail evidence and regression results
  - Owner line required: `[Owner Approval] Gate 6 Approved by <Owner Name> on <YYYY-MM-DD>.`
- Gate 7 (Compliance)
  - Output: `docs/COMPLIANCE_CHECKLIST.md`
  - Owner line required: `[Owner Approval] Gate 7 Approved by <Owner Name> on <YYYY-MM-DD>.`
- Gate 8 (Release)
  - Output: changelog/release notes + deployment links
  - Owner line required: `[Owner Approval] Gate 8 Approved by <Owner Name> on <YYYY-MM-DD>.`

## Fixed Release Notes Format
Use this exact section order in `docs/RELEASE_NOTES.md`:
1. Highlights
2. Changes
3. Fixes
4. Breaking Changes
5. Migration Notes
6. Known Issues
7. Compliance Notes
