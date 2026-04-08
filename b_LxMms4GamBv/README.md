# Terminal-Style Developer Portfolio

A modern, terminal-inspired developer portfolio built with Next.js, Tailwind CSS, and featuring a dark theme with green accent colors reminiscent of classic Linux terminals.

## Features

- **Terminal Aesthetic**: Dark background with matrix green and amber accents, monospace typography throughout
- **Responsive Design**: Mobile-first approach with seamless adaptation to all screen sizes
- **Multiple Sections**:
  - **Home**: Hero section with featured projects and blog previews
  - **About**: Professional bio, tech stack, education, and certifications
  - **Projects**: Filterable project showcase with descriptions and tech tags
  - **Experience**: Work history, education timeline, and testimonials
  - **Blog**: Article listings with categories and reading time estimates
  - **Contact**: Integrated contact form with Formspree, social links, and contact information

- **Interactive Elements**:
  - Typewriter effect on hero subtitle
  - Cursor blinking animations
  - Hover effects with green highlights
  - Smooth transitions and scroll animations
  - Mobile-responsive navigation with hamburger menu

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS with custom terminal theme
- **Font**: JetBrains Mono (monospace) from Google Fonts
- **Icons**: Lucide React
- **Form Handling**: Formspree
- **Deployment**: Vercel

## Installation & Setup

1. **Clone or download the project**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Update Personal Information**
   - Modify portfolio details in component files:
     - Name and title in `components/Hero.tsx` and `components/Navigation.tsx`
     - Bio and skills in `app/about/page.tsx`
     - Projects in `app/projects/page.tsx` and `app/page.tsx`
     - Experience in `app/experience/page.tsx`
     - Blog posts in `app/blog/page.tsx`
     - Contact info in `app/contact/page.tsx`

4. **Set Up Contact Form**
   - Create a Formspree account at https://formspree.io
   - Create a new form and get your form ID
   - Replace `'https://formspree.io/f/xyzqwerty'` in `app/contact/page.tsx` with your actual Formspree endpoint

5. **Run Development Server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

6. **Build for Production**
   ```bash
   pnpm build
   pnpm start
   ```

## Color System

The portfolio uses a terminal-inspired color palette:

- **Background**: `#0a0a0a` (pure black)
- **Primary**: `#00ff41` (matrix green)
- **Secondary**: `#f0a500` (amber/gold)
- **Accent**: `#39d353` (bright green)
- **Foreground**: `#e2e8f0` (light gray)
- **Muted**: `#4a5568` & `#a0aec0` (various grays)
- **Border**: `#1e1e1e` (dark gray)

## Customization

### Update Colors
Edit `/app/globals.css` to modify the color variables in the `:root` and `.dark` sections.

### Change Typography
Modify font imports in `/app/layout.tsx` to use different monospace fonts (currently JetBrains Mono).

### Add New Pages
Create new directories under `/app` following Next.js App Router conventions. Use existing components like `SectionHeader` and reusable component patterns.

### Modify Animations
Animation keyframes are defined in `globals.css`. Customize timing and effects as needed.

## File Structure

```
project/
├── app/
│   ├── layout.tsx              # Root layout with nav and footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles and theme
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── projects/
│   │   └── page.tsx            # Projects page
│   ├── experience/
│   │   └── page.tsx            # Experience page
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx        # Individual blog post
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── Navigation.tsx          # Top navigation bar
│   ├── Footer.tsx              # Footer component
│   ├── Hero.tsx                # Home hero section
│   ├── SectionHeader.tsx       # Terminal-style section headers
│   ├── ProjectCard.tsx         # Project card component
│   ├── BlogCard.tsx            # Blog post card
│   ├── TechStackCard.tsx       # Tech stack display
│   └── ui/                     # shadcn/ui components
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Set any required environment variables in Vercel dashboard

### Deploy to Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Heroku
- Docker containers
- Self-hosted servers

## SEO & Metadata

Update the metadata in `app/layout.tsx` to match your portfolio:
- Title
- Description
- Keywords
- Social media meta tags

## Performance Optimizations

- Font loading optimized with Next.js font system
- Images can be optimized with Next.js Image component
- CSS is minified and purged of unused styles
- Code splitting on page boundaries
- Static optimization where applicable

## License

This portfolio template is provided as-is. Feel free to customize and use for your personal portfolio.

## Support

For issues or questions:
1. Check the code comments for guidance
2. Review Next.js documentation: https://nextjs.org
3. Check Tailwind CSS docs: https://tailwindcss.com
4. Formspree documentation: https://formspree.io/docs

---

Built with passion for developers and engineers. Showcase your skills with style!
