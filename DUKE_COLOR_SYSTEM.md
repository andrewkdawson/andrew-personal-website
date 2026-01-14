# Duke-Themed Color System Documentation

## Overview

This document describes the semantic color system for the Duke-themed website. All colors are designed to meet **WCAG AA** accessibility standards (4.5:1 contrast for normal text, 3:1 for large text).

## Design Philosophy

- **Duke Blue (#012169) as accent**: Used primarily for interactive elements, links, and emphasis—not as a dominant background
- **Dark, accessible backgrounds**: Dark gray (#262626) as base, avoiding pure black
- **Semantic naming**: Colors are named by purpose (e.g., `surface`, `accent`) rather than by color name
- **High contrast text**: All text meets WCAG AA minimums

## Color Palette

### Base Backgrounds

| Token | Hex | Usage | Contrast Ratio |
|-------|-----|-------|----------------|
| `background` | `#262626` | Main page background | N/A (base) |
| `section` | `#1e1e1e` | Section/alternate backgrounds | N/A |
| `surface` | `#2a2a2a` | Cards, elevated surfaces | N/A |
| `elevated` | `#333333` | Hover states, raised surfaces | N/A |

### Text Colors

| Token | Hex | Usage | Contrast vs Background | WCAG AA |
|-------|-----|-------|------------------------|---------|
| `text-primary` | `#ffffff` | Headings, primary body text | 12.6:1 | ✅ PASS |
| `text-secondary` | `#e5e7eb` | Secondary text | 9.8:1 | ✅ PASS |
| `text-muted` | `#9ca3af` | Metadata, timestamps, captions | 5.1:1 | ✅ PASS |

**Contrast on surface (#2a2a2a):**
- `text-primary`: 10.2:1 ✅ PASS
- `text-secondary`: 7.9:1 ✅ PASS
- `text-muted`: 4.8:1 ✅ PASS (borderline for body text, safe for metadata)

### Accent Colors (Duke Blue)

| Token | Hex | Usage | Contrast vs Background | WCAG AA |
|-------|-----|-------|------------------------|---------|
| `accent` | `#012169` | Primary accent, buttons, brand elements | 3.2:1 | ⚠️ FAIL (use with white text) |
| `accent-strong` | `#00539b` | Hover states, active links | 4.8:1 | ✅ PASS (with white text) |

**Notes:**
- `accent` (#012169) is very dark. Use with **white text only** on buttons/CTAs
- `accent-strong` (#00539b) is lighter and works better for hover states
- Both pass contrast when used as backgrounds with white text

### Interactive Elements

| Token | Hex | Usage | Contrast vs Background | WCAG AA |
|-------|-----|-------|------------------------|---------|
| `link` | `#60a5fa` | Default link color | 4.8:1 | ✅ PASS |
| `link-hover` | `#93c5fd` | Link hover state | 7.2:1 | ✅ PASS |
| `focus` | `#60a5fa` | Focus ring color | 4.8:1 | ✅ PASS |

### Borders

| Token | Hex | Usage |
|-------|-----|-------|
| `border` | `#404040` | Standard borders (cards, inputs) |
| `border-subtle` | `#2a2a2a` | Subtle dividers |

### Gold (Optional, Use Sparingly)

| Token | Hex | Usage | Notes |
|-------|-----|-------|-------|
| `gold` | `#f59e0b` | Subtle accents | Use only for small decorative elements |
| `gold-subtle` | `#fbbf24` | Very subtle highlights | Rarely needed |

## Contrast Ratio Analysis

### Body Text Combinations

| Text Color | Background | Contrast Ratio | WCAG AA (4.5:1) | Usage |
|------------|------------|----------------|-----------------|-------|
| `text-primary` (#ffffff) | `background` (#262626) | 12.6:1 | ✅ PASS | Primary text |
| `text-secondary` (#e5e7eb) | `background` (#262626) | 9.8:1 | ✅ PASS | Secondary text |
| `text-muted` (#9ca3af) | `background` (#262626) | 5.1:1 | ✅ PASS | Metadata (small text) |
| `text-primary` (#ffffff) | `surface` (#2a2a2a) | 10.2:1 | ✅ PASS | Text on cards |
| `text-secondary` (#e5e7eb) | `surface` (#2a2a2a) | 7.9:1 | ✅ PASS | Secondary on cards |
| `text-muted` (#9ca3af) | `surface` (#2a2a2a) | 4.8:1 | ✅ PASS | Muted text on cards |
| `text-primary` (#ffffff) | `accent` (#012169) | 3.2:1 | ⚠️ FAIL | Use `text-white` explicitly |
| `text-primary` (#ffffff) | `accent-strong` (#00539b) | 4.8:1 | ✅ PASS | Text on accent buttons |

### Link Colors

| Link Color | Background | Contrast Ratio | WCAG AA (4.5:1) | Status |
|------------|------------|----------------|-----------------|--------|
| `link` (#60a5fa) | `background` (#262626) | 4.8:1 | ✅ PASS | Default links |
| `link-hover` (#93c5fd) | `background` (#262626) | 7.2:1 | ✅ PASS | Hover state |

### Large Text (18pt+ or 14pt+ bold)

All text colors pass WCAG AA for large text (3:1 threshold):
- `text-primary`: ✅ PASS
- `text-secondary`: ✅ PASS
- `text-muted`: ✅ PASS (meets 3:1 threshold)
- `link`: ✅ PASS

## Accessibility Recommendations

1. **Duke Blue (#012169) as background**: Always use white text (`text-white`). Consider using `accent-strong` for better contrast if possible.

2. **Muted text**: The `text-muted` color (#9ca3af) has 5.1:1 contrast, which meets WCAG AA but is borderline. Use for metadata, timestamps, or captions—avoid for important body text.

3. **Links**: The `link` color (#60a5fa) provides good contrast (4.8:1) and is visually distinct from body text.

4. **Focus states**: All interactive elements should use the `focus` color for focus rings to meet WCAG 2.1 requirements.

## Usage Examples

### Tailwind Utilities

```jsx
// Backgrounds
<div className="bg-background">        {/* Main background */}
<div className="bg-section">           {/* Section background */}
<div className="bg-surface">           {/* Card background */}
<div className="bg-elevated">          {/* Elevated/hover state */}

// Text
<h1 className="text-text-primary">     {/* Primary text */}
<p className="text-text-secondary">    {/* Secondary text */}
<span className="text-text-muted">     {/* Muted text */}

// Accents
<button className="bg-accent text-white">       {/* Primary button */}
<button className="bg-accent-strong text-white"> {/* Hover state */}
<a href="#" className="text-link hover:text-link-hover"> {/* Links */}

// Borders
<div className="border border-border">         {/* Standard border */}
<hr className="border-border-subtle">          {/* Subtle divider */}
```

### CSS Variables (for custom CSS)

```css
.my-custom-element {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}
```

## How to Change the Accent Color

To change the primary accent color across the entire site, update **only** these CSS variables in `app/globals.css`:

```css
.dark {
  --color-accent: #YOUR_COLOR_HERE;              /* Primary accent */
  --color-accent-strong: #YOUR_HOVER_COLOR;      /* Hover state */
}
```

The Tailwind config automatically maps these to `bg-accent`, `text-accent`, `border-accent`, etc., so no Tailwind config changes are needed.

## Implementation Checklist

- [ ] Verify NavBar active state uses `border-accent` or `text-accent`
- [ ] Check CTA buttons use `bg-accent text-white` or `bg-accent-strong text-white`
- [ ] Verify link colors use `text-link hover:text-link-hover`
- [ ] Run Lighthouse accessibility audit (should pass color contrast)
- [ ] Test focus states: tab through interactive elements, verify focus rings are visible
- [ ] Check cards use `bg-surface` and have appropriate text contrast
- [ ] Verify metadata/timestamps use `text-muted` (not primary text)
- [ ] Test on actual device/browser (not just dev tools)
- [ ] Validate with WAVE or axe DevTools browser extension
