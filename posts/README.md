---
title: "README"
date: "2025-12-18"
tag: "Test"
excerpt: "Just a sample to see if things are working."
---

# Posts Folder

Drop your Markdown files here to automatically generate writing pages.

## Workflow

1. **Write in Word/Docs/Pages** - Write your content however you're comfortable
2. **Convert to Markdown** - Use Pandoc or a similar tool:
   ```bash
   pandoc your-file.docx -o your-file.md
   ```
3. **Add Frontmatter** - Add this YAML block at the very top of your `.md` file:
   ```yaml
   ---
   title: "Your Post Title"
   date: "2025-12-31"
   tag: "Books"
   excerpt: "A short description that appears on the Writing index page."
   ---
   ```
4. **Save as `[slug].md`** - Use a URL-friendly name (e.g., `red-bull-case.md`, `basketball-thoughts.md`)
5. **Done!** - The post will automatically appear on your Writing page

## Frontmatter Fields

- **title** (required): The post title
- **date** (required): Publication date in YYYY-MM-DD format
- **tag** (optional): Category/tag (e.g., "Books", "Sports", "Product")
- **excerpt** (optional): Short description for the card on the Writing index page

## Example

```markdown
---
title: "What Basketball Taught Me About Product Teams"
date: "2025-01-15"
tag: "Sports • Product"
excerpt: "A short reflection on growing up around gyms in Hawaiʻi and how pick-and-roll reads aren't that different from building great products."
---

Your content here. Use normal Markdown:

- Lists
- **Bold** and *italic*
- Headings with ##

Everything will be styled automatically with your existing prose classes.
```

