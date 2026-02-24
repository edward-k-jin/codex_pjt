# Compliance Checklist Template

## Purpose
Track minimum compliance checks for each release candidate.

## Source of Truth Rule
- Product scope and data usage context must match `docs/PRD.md`.
- Compliance decisions must reference implemented behavior only.

## Owner Approval
- Required phrase:
  - `[Owner Approval] Gate 7 Approved by <Owner Name> on <YYYY-MM-DD>.`

## Release Info
- Release/PR:
- Commit SHA:
- Reviewer:
- Review date:

## 1) Privacy and Personal Data
- [ ] Personal data categories are documented.
- [ ] Data collection purpose is documented and limited.
- [ ] Data retention/deletion policy exists.
- [ ] Sensitive data storage and transport protections are in place.
- [ ] User rights workflow (access/delete/correct) is defined.

## 2) Tracking and Analytics
- [ ] Tracking events are documented.
- [ ] Consent requirement is evaluated by region.
- [ ] Non-essential tracking can be disabled where required.
- [ ] Third-party SDK data sharing is reviewed.

## 3) Copyright and Licenses
- [ ] All dependencies have acceptable licenses.
- [ ] Fonts, icons, images, and media usage rights are verified.
- [ ] Attribution obligations are satisfied.
- [ ] Prohibited or copyleft-incompatible licenses are absent.

## 4) E-commerce (if applicable)
- [ ] Price, tax, shipping, and refund policy disclosures are accurate.
- [ ] Terms at checkout are clearly presented.
- [ ] Payment provider compliance boundary is documented.
- [ ] Order confirmation and invoice requirements are met.

## 5) Advertising and Claims (if applicable)
- [ ] Marketing claims are evidence-backed.
- [ ] Paid promotion labeling/disclosure is present.
- [ ] Before/after, ranking, or guarantee claims are substantiated.

## 6) Accessibility Baseline
- [ ] Keyboard navigation works for core journeys.
- [ ] Focus indicators are visible.
- [ ] Form labels and errors are programmatically associated.
- [ ] Color contrast meets baseline requirements.
- [ ] Basic screen reader checks completed.

## Risk Log
| Risk ID | Area | Description | Severity | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|
| COMP-001 |  |  |  |  |  | Open |

## Compliance Verdict
- Verdict: Pass / Conditional Pass / Fail
- Blocking issues:
- Required follow-up actions:
