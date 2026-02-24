# Design System and Spec Template

## Purpose
Defines visual direction, design tokens, component rules, and motion constraints for implementation.

## Source of Truth Rule
- `docs/PRD.md` is the product scope source of truth.
- `docs/UX_FLOW.md` is the interaction flow source of truth.
- Design decisions must trace back to both.

## Owner Approval
- Required phrase:
  - `[Owner Approval] Gate 3 Approved by <Owner Name> on <YYYY-MM-DD>.`

## Apple-like Principles
1. Minimal interfaces: remove non-essential UI.
2. Typography hierarchy: clear, consistent title/body/caption scale.
3. Generous spacing: emphasize readability and touch comfort.
4. Consistency: same pattern for same intent across screens.
5. Single point color: one accent color for primary emphasis.
6. Restrained motion: purposeful transitions only.

## Color and Theme Rules
- Neutral base palette:
- Point color (single accent):
- Semantic colors (success/warning/error/info):
- Contrast minimum target: WCAG AA baseline.

## Typography Rules
- Font family:
- Scale (Display/H1/H2/Body/Caption):
- Line-height strategy:
- Weight usage rules:

## Spacing and Layout Rules
- Base spacing unit:
- Container widths:
- Grid system:
- Corner radius system:

## Token Definitions
```json
{
  "color": {
    "bg": "",
    "fg": "",
    "accent": "",
    "border": ""
  },
  "space": {
    "xs": "",
    "sm": "",
    "md": "",
    "lg": "",
    "xl": ""
  },
  "type": {
    "h1": "",
    "h2": "",
    "body": "",
    "caption": ""
  },
  "radius": {
    "sm": "",
    "md": "",
    "lg": ""
  },
  "motion": {
    "fast": "",
    "normal": "",
    "slow": ""
  }
}
```

## Component Rules
| Component | Variants | States | Accessibility Notes |
|---|---|---|---|
| Button |  | default/hover/focus/disabled/loading |  |
| Input |  | default/focus/error/disabled |  |
| Modal |  | open/closing |  |

## Motion Rules
- Allowed motion types: fade, slight translate, scale-in under threshold.
- Duration guideline: 120ms-240ms for UI feedback, up to 320ms for layout shifts.
- Easing guideline: standard and deceleration curves only.
- Prohibited: decorative continuous motion without user value.

## Figma MCP Handoff
- File URL:
- Node IDs:
- Code connect mapping:
- Asset export notes:
- Implementation caveats:
