# Andrew Kwon Dawson - Personal Website

A modern, responsive personal website built with Next.js, React, and TailwindCSS. This site features a clean design, dark mode support, and is fully customizable.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
my-site/
├── app/                    # Next.js app directory (file-based routing)
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── experience/
│   │   └── page.tsx       # Experience page
│   ├── contact/
│   │   └── page.tsx       # Contact page
│   ├── layout.tsx         # Root layout (NavBar, Footer)
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── NavBar.tsx        # Navigation bar
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section component
│   ├── ExperienceCard.tsx # Experience/role card
│   ├── ContactForm.tsx   # Contact form
│   ├── ContentSection.tsx # Section wrapper
│   └── DarkModeToggle.tsx # Dark mode toggle button
├── public/               # Static assets (images, etc.)
└── README.md            # This file
```

## ✏️ Where to Edit Content

### Home Page (`app/page.tsx`)

- **Hero text** (line ~20): Change "Aloha, I'm Andrew"
- **Intro paragraph** (lines ~25-28): Update the introduction text
- **Currently section** (lines ~35-40): Update current role and description
- **Studying section** (lines ~42-45): Update education information

### About Page (`app/about/page.tsx`)

- **Short bio** (lines ~20-25): Edit the bio section
- **Longer biography** (lines ~30-40): Update "My Story" section
- **Interests & Hobbies** (lines ~45-55): Modify the interests list
- **Add new sections**: Copy the section structure to add more content

### Experience Page (`app/experience/page.tsx`)

- **Work Experience** (lines ~20-80): Edit the `workExperience` array
  - Add/remove roles
  - Update titles, organizations, dates, and bullet points
- **Leadership** (lines ~85-100): Edit the `leadershipExperience` array

### Contact Page (`app/contact/page.tsx`)

- **Contact info** (lines ~15-18): Update email and LinkedIn URL
- **Page description** (lines ~25-28): Modify the intro text
- **Form behavior**: See `components/ContactForm.tsx` for form customization

### Navigation (`components/NavBar.tsx`)

- **Nav links** (lines ~15-20): Add/remove/modify navigation items
- **Site title** (line ~30): Change "Andrew Kwon Dawson" to your name

### Footer (`components/Footer.tsx`)

- **Copyright text** (line ~15): Update copyright information
- **Footer message** (line ~20): Change the footer text

## 🎨 Customizing Styles

### Color Scheme

The site uses a Hawaiian-inspired color palette with:
- **Primary**: Blue (#2563eb) - ocean-inspired
- **Accent**: Can be customized to warm orange/coral
- **Neutral**: Gray scale for text and backgrounds

To change colors, edit:
- `app/globals.css` - Global color variables and theme
- `tailwind.config.ts` - Tailwind color extensions
- Individual component files for specific styling

### Dark Mode

Dark mode is enabled by default and can be toggled using the button in the navigation bar. The preference is saved in localStorage.

To customize dark mode colors, edit the `dark:` classes throughout the components.

## 📝 Content Source

All work experience and leadership content is sourced from:
**Andrew_Dawson_Resume_26_v9.pdf**

The resume content has been included verbatim (cleaned for web display) in the Experience page.

## 🔧 Connecting the Contact Form

The contact form currently has placeholder functionality. To connect it to a backend:

### Option 1: Netlify Forms (Easiest)
1. Add `netlify` attribute to the form in `components/ContactForm.tsx`
2. Add `name` attributes to form fields
3. Deploy to Netlify - forms work automatically

### Option 2: SendGrid
1. Install: `npm install @sendgrid/mail`
2. Create API route: `app/api/contact/route.ts`
3. Add SendGrid API key to environment variables
4. Update form submission handler

### Option 3: Formspree
1. Sign up at formspree.io
2. Get your form endpoint
3. Update the form action URL

### Option 4: Custom API Route
1. Create `app/api/contact/route.ts`
2. Implement POST handler
3. Connect to your email service or database

See comments in `components/ContactForm.tsx` for detailed instructions.

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy

### Other Platforms

- **Netlify**: Connect GitHub repo, build command: `npm run build`, publish directory: `.next`
- **AWS Amplify**: Connect repo, auto-detects Next.js
- **Self-hosted**: Run `npm run build` and serve the `.next` folder

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: TailwindCSS 4
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono (via Next.js)

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark mode toggle
- ✅ Accessible navigation
- ✅ SEO-friendly metadata
- ✅ Clean, commented code
- ✅ Easy content editing
- ✅ Reusable components

## 🐛 Troubleshooting

### Dark mode not working?
- Ensure `darkMode: 'class'` is set in `tailwind.config.ts`
- Check that the `dark` class is being added to `<html>` (see `components/DarkModeToggle.tsx`)

### Styles not applying?
- Make sure TailwindCSS is properly configured
- Check that `globals.css` imports Tailwind
- Restart the dev server after config changes

### Build errors?
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (requires 18+)
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

## 📄 License

This project is private and personal. All content is property of Andrew Kwon Dawson.

## 🙏 Credits

- Resume content: Andrew_Dawson_Resume_26_v9.pdf
- Built with Next.js and TailwindCSS
- Fonts: Geist by Vercel

---

**Questions?** Edit the code comments or reach out for help customizing your site!
