# Quick Editing Guide

This is a quick reference for where to edit different parts of your website.

## 🏠 Home Page
**File:** `app/page.tsx`

- **Hero text** (line ~20): "Aloha, I'm Andrew"
- **Intro paragraph** (lines ~25-28): The main introduction text
- **Currently section** (lines ~35-40): Current role and description
- **Studying section** (lines ~42-45): Education information

## 👤 About Page
**File:** `app/about/page.tsx`

- **Short bio** (lines ~20-25): Quick introduction
- **My Story** (lines ~30-40): Longer biography
- **Interests & Hobbies** (lines ~45-55): Personal interests list

## 💼 Experience Page
**File:** `app/experience/page.tsx`

- **Work Experience** (lines ~25-92): Edit the `workExperience` array
- **Leadership** (lines ~96-118): Edit the `leadershipExperience` array

Each entry has:
- `title`: Job title
- `organization`: Company/organization name
- `location`: City, State
- `dateRange`: Date range (e.g., "Jan 2025 – Present")
- `bullets`: Array of bullet points

## 📧 Contact Page
**File:** `app/contact/page.tsx`

- **Contact info** (lines ~15-18): Email and LinkedIn
- **Page description** (lines ~25-28): Intro text
- **Form**: See `components/ContactForm.tsx` for form customization

## 🎨 Styling

- **Global styles**: `app/globals.css`
- **Tailwind config**: `tailwind.config.ts`
- **Component styles**: Edit individual component files

## 🧩 Components

All components are in the `components/` folder:
- `NavBar.tsx` - Navigation bar
- `Footer.tsx` - Site footer
- `Hero.tsx` - Hero section
- `ExperienceCard.tsx` - Experience card component
- `ContactForm.tsx` - Contact form
- `ContentSection.tsx` - Section wrapper
- `DarkModeToggle.tsx` - Dark mode button

## 📝 Resume Citation

All experience content is sourced from:
**Andrew_Dawson_Resume_26_v9.pdf**

This is noted in:
- `app/experience/page.tsx` (header comments)
- `README.md` (Content Source section)

---

**Tip:** Use your code editor's search function (Cmd/Ctrl + F) to quickly find text you want to change!

