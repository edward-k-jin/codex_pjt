# QA Plan and Results Template

## Purpose
Capture acceptance-criteria-based validation and regression results before release.

## Source of Truth Rule
- `docs/PRD.md` defines acceptance criteria.
- QA pass/fail is evaluated against PRD acceptance criteria first.

## Owner Approval
- Required phrase:
  - `[Owner Approval] Gate 6 Approved by <Owner Name> on <YYYY-MM-DD>.`

## Test Scope
- Release/PR ID:
- Build/Commit SHA:
- Environment (local/staging/prod-preview):
- In scope:
- Out of scope:

## Acceptance Criteria Coverage
| AC ID (PRD) | Scenario | Test Type | Result (Pass/Fail) | Evidence |
|---|---|---|---|---|
| AC-01 |  | Manual/Unit/E2E |  |  |
| AC-02 |  | Manual/Unit/E2E |  |  |

## Functional Test Cases
| Case ID | Given | When | Then | Result | Notes |
|---|---|---|---|---|---|
| QA-001 |  |  |  |  |  |

## Regression Checklist
- [ ] Critical user journey regression passed
- [ ] Guest-first journey regression passed
- [ ] Login-upgrade path regression passed
- [ ] Existing bugfix non-regression confirmed
- [ ] Backward compatibility spot-check completed

## Non-Functional Checks
- [ ] Performance sanity check completed
- [ ] Accessibility smoke test completed
- [ ] Error handling and fallback paths verified

## Defect Log
| Defect ID | Severity | Description | Status | Owner |
|---|---|---|---|---|
| BUG-001 |  |  | Open/Closed |  |

## Final QA Verdict
- Verdict: Pass / Conditional Pass / Fail
- Blocking issues:
- Recommended release decision:
