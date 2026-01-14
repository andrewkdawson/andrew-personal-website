# Duke Color System - Implementation Guide

## Quick Start

### 1. Add Theme to `tailwind.config.ts`

The theme is already configured in `tailwind.config.ts`. The semantic tokens are mapped to CSS variables defined in `app/globals.css`.

**No additional configuration needed** - the tokens are ready to use!

### 2. Using CSS Variables Directly

When not using Tailwind utilities (e.g., in global styles or component-scoped CSS), reference the CSS variables:

```css
.my-custom-element {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.custom-link {
  color: var(--color-link);
  transition: color 150ms ease;
}

.custom-link:hover {
  color: var(--color-link-hover);
}
```

### 3. Using Tailwind Utilities (Recommended)

Use semantic tokens via Tailwind classes:

```jsx
// Backgrounds
<div className="bg-background">        {/* Main background */}
<div className="bg-section">           {/* Section background */}
<div className="bg-surface">           {/* Card/surface */}
<div className="bg-elevated">          {/* Hover/elevated state */}

// Text
<h1 className="text-text-primary">     {/* Primary text */}
<p className="text-text-secondary">    {/* Secondary text */}
<span className="text-text-muted">     {/* Muted text (metadata) */}

// Accents & Links
<button className="bg-accent text-white">           {/* Primary button */}
<a href="#" className="text-link hover:text-link-hover"> {/* Links */}

// Borders
<div className="border border-border">              {/* Standard border */}
<hr className="border-border-subtle">               {/* Subtle divider */}
```

## Color Token Reference

### Background Tokens

- `bg-background` - Main page background (#262626)
- `bg-section` - Section backgrounds (#1e1e1e)
- `bg-surface` - Cards, elevated surfaces (#2a2a2a)
- `bg-elevated` - Hover states, raised surfaces (#333333)

### Text Tokens

- `text-text-primary` - Headings, primary body text (#ffffff)
- `text-text-secondary` - Secondary text (#e5e7eb)
- `text-text-muted` - Metadata, timestamps, captions (#9ca3af)

### Accent Tokens

- `bg-accent` / `text-accent` - Duke Navy Blue (#012169) - Use with white text
- `bg-accent-strong` / `text-accent-strong` - Duke Royal Blue (#00539b) - Hover/active states

### Interactive Tokens

- `text-link` - Default link color (#60a5fa)
- `text-link-hover` - Link hover state (#93c5fd)
- `border-focus` - Focus ring color (#60a5fa)

### Border Tokens

- `border-border` - Standard borders (#404040)
- `border-border-subtle` - Subtle dividers (#2a2a2a)

## Dark Mode / Theme Toggle

The color system uses **class-based dark mode** via Tailwind's `darkMode: 'class'` setting.

### Current Implementation

The site defaults to dark mode. The `html` element has the `dark` class applied:

```tsx
// app/layout.tsx
<html lang="en" className="dark" suppressHydrationWarning>
```

### Adding Theme Toggle (Optional)

To add a theme toggle, you can:

1. **Toggle the `dark` class on the `html` element:**
   ```tsx
   // Toggle function
   const toggleTheme = () => {
     document.documentElement.classList.toggle('dark');
     localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
   };
   ```

2. **Read from localStorage on mount:**
   ```tsx
   useEffect(() => {
     const theme = localStorage.getItem('theme');
     if (theme === 'light') {
       document.documentElement.classList.remove('dark');
     } else {
       document.documentElement.classList.add('dark');
     }
   }, []);
   ```

**Important**: All color tokens automatically work with dark mode because they reference CSS variables that change based on the `.dark` class.

## Runtime Theme Switching

To support runtime theme switching (e.g., user preference), update the CSS variables in JavaScript:

```tsx
// Change accent color at runtime
document.documentElement.style.setProperty('--color-accent', '#YOUR_COLOR');
```

All Tailwind utilities will automatically pick up the change because they reference the CSS variables.

## Common Patterns

### Buttons

```jsx
// Primary button
<button className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-strong transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus">
  Click Me
</button>

// Secondary button
<button className="bg-surface text-text-primary px-4 py-2 rounded border border-border hover:bg-elevated transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus">
  Secondary
</button>
```

### Cards

```jsx
<div className="bg-surface border border-border rounded-lg p-6 hover:bg-elevated transition-colors">
  <h3 className="text-text-primary text-xl font-bold mb-2">Card Title</h3>
  <p className="text-text-secondary mb-4">Card content goes here.</p>
  <span className="text-text-muted text-sm">Metadata</span>
</div>
```

### Links

```jsx
<a href="#" className="text-link hover:text-link-hover transition-colors underline">
  Visit link
</a>
```

### Forms

```jsx
<input
  type="text"
  className="bg-surface border border-border text-text-primary rounded px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
  placeholder="Enter text..."
/>
```

## Accessibility Best Practices

1. **Always use focus states** for interactive elements:
   ```jsx
   <button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-focus">Click me</button>
   <a href="#" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-focus">Link</a>
   ```

2. **Use appropriate text colors**:
   - Primary text: `text-text-primary` (for headings, important content)
   - Secondary text: `text-text-secondary` (for body text)
   - Muted text: `text-text-muted` (for metadata only, not body text)

3. **Button text on accent backgrounds**: Always use `text-white` with `bg-accent` or `bg-accent-strong`

4. **Links**: Use `text-link` for default state, `hover:text-link-hover` for hover

## How to Change the Accent Color

To change the primary accent color site-wide, update **only** the CSS variables in `app/globals.css`:

```css
.dark {
  --color-accent: #YOUR_COLOR_HERE;              /* Primary accent */
  --color-accent-strong: #YOUR_HOVER_COLOR;      /* Hover state (lighter) */
}
```

**No Tailwind config changes needed!** All `bg-accent`, `text-accent`, `border-accent` utilities automatically use the new color.

**Important**: Ensure your new accent color meets WCAG AA contrast requirements when used with white text (4.5:1 minimum).

## Troubleshooting

### Colors not updating

1. **Clear Tailwind cache**: Delete `.next` folder and restart dev server
2. **Check CSS variables**: Verify variables are defined in `globals.css`
3. **Check Tailwind config**: Ensure tokens are mapped in `tailwind.config.ts`

### Contrast issues

- Use the contrast ratio checker in `DUKE_COLOR_SYSTEM.md`
- Ensure you're using the correct text color for the background
- For accent backgrounds, always use `text-white`

### Focus rings not showing

- Ensure `focus-ring` utility is applied to interactive elements
- Check that `focus-visible` is being triggered (use Tab key, not mouse click)

## File Structure

```
my-site/
├── app/
│   └── globals.css              # CSS variables and theme definitions
├── tailwind.config.ts           # Tailwind config with semantic tokens
├── DUKE_COLOR_SYSTEM.md         # Color palette documentation
├── IMPLEMENTATION_GUIDE.md      # This file
└── components/
    └── examples/                # Example components using semantic tokens
        ├── NavBarExample.tsx
        ├── ExperienceCardExample.tsx
        └── SectionExample.tsx
```

## Next Steps

1. Review the example components in `components/examples/`
2. Gradually migrate existing components to use semantic tokens
3. Test with Lighthouse accessibility audit
4. Validate contrast ratios using browser DevTools or WAVE extension
5. Test focus states by keyboard navigation
