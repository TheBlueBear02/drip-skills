# TOKENS — MOTION

## Motion Philosophy
Motion in Luxury Bold is minimal and subtle, designed to bring attention to interactions without distracting from content. Transitions should communicate focus and user intention with grace.

## Duration Scale
| Token | Value | Usage |
|--|--|--|
| fast | 100ms | Quick interactions like button clicks |
| normal | 200ms | Standard hover effects |
| slow | 300ms | Rare, for transitions between major views |

## Easing Curves
| Name | Value | Usage |
|--|--|--|
| default | ease-in-out | Standard for all transitions |

## Keyframe Library
- Minimal use given the flat aesthetic.
- Stresses and animations should be used only for emphasis when necessary.

## Component-Specific Patterns
- Button hover: Slight color transition.
- Link focus: Underline grow effect.

## Reduced Motion
Respect `prefers-reduced-motion` and ensure alternatives are available to all animated effects, falling back to instant transitions.

## What Must Never Be Animated
1. Headings and critical text positions.
2. Background colors—color should remain consistent.
3. Any form of bounce or exaggerated keyframes.
4. Avoid large-scale animations that are distracting.
```

```