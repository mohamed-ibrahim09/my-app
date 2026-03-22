# Targeted Changes Prompt
# Apply ONLY what is listed. Touch nothing else.

---

## 1. DARK MODE — NEW COLOR VALUES ONLY

In `src/styles/globals.css`, replace ONLY the `html.dark` block with this:

```css
html.dark {
  --void: #09090b;
  --glass: #111113;
  --glass-border: #27272a;
  --glass-hover: #18181b;
  --lilac: #a78bfa;
  --lilac-dim: rgba(167, 139, 250, 0.5);
  --body: #fafafa;
  --body-muted: rgba(250, 250, 250, 0.65);
  --body-faint: #a1a1aa;
  --label: rgba(250, 250, 250, 0.38);
  --section-alt: rgba(9, 9, 11, 0.8);
  --tag-muted-bg: #18181b;
  --tag-muted-text: #a1a1aa;
  --tag-purple-bg: rgba(124, 58, 237, 0.12);
  --tag-purple-text: rgba(167, 139, 250, 0.9);
  --slate: var(--body);
  --slate-dim: var(--body-muted);
  --slate-muted: var(--body-faint);
}
```

Do NOT touch the `:root` (light mode) block. Do NOT change anything else in this file.

---

## 2. DARK MODE — MODAL HARDCODED COLORS

In the modal component (`src/app/page.tsx` or wherever `ProjectModal` lives),
find all `dark:` Tailwind classes and update ONLY these values:

```
dark:bg-[#1a1d27]      →  dark:bg-[#111113]
dark:border-[#2a2d3a]  →  dark:border-[#27272a]
dark:bg-[#252837]      →  dark:bg-[#18181b]
dark:bg-[#1a1d27]/95   →  dark:bg-[#111113]/95
```

Do NOT change any light mode classes. Do NOT change anything else.

---

## 3. FILE LOCATIONS — drop these files here, no code change needed

| File | Path in repo |
|---|---|
| Profile photo | `public/profile.jpg` or `public/profile.png` (either works) |
| CV PDF | `public/cv.pdf` |
| OG image | `public/og-preview.png` |

---

## 4. OG META TAGS + FAVICONS

In `src/app/layout.tsx`, add or replace the `metadata` export with this:

```ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mohamed Elhadad — Junior DevOps & Cloud Engineer',
  description:
    'AI student with a Cybersecurity specialization building DevOps and cloud skills. Open to remote internships and freelance work.',
  openGraph: {
    title: 'Mohamed Elhadad — Junior DevOps & Cloud Engineer',
    description:
      'AI student with a Cybersecurity specialization building DevOps and cloud skills.',
    url: 'https://mohamedelhadad.vercel.app',
    siteName: 'Mohamed Elhadad',
    images: [{ url: '/og-preview.png', width: 1200, height: 630, alt: 'Mohamed Elhadad Portfolio' }],
    locale: 'en_US',
    type: 'website',
  },
};
```

If `layout.tsx` does not exist, create it at `src/app/layout.tsx`:

```tsx
import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Mohamed Elhadad — Junior DevOps & Cloud Engineer',
  description:
    'AI student with a Cybersecurity specialization building DevOps and cloud skills. Open to remote internships and freelance work.',
  openGraph: {
    title: 'Mohamed Elhadad — Junior DevOps & Cloud Engineer',
    description:
      'AI student with a Cybersecurity specialization building DevOps and cloud skills.',
    url: 'https://mohamedelhadad.vercel.app',
    siteName: 'Mohamed Elhadad',
    images: [{ url: '/og-preview.png', width: 1200, height: 630, alt: 'Mohamed Elhadad Portfolio' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## 5. LINKEDIN & GITHUB SOCIAL ICONS IN META

Inside the same `metadata` export, add this after `openGraph`:

```ts
icons: {
  icon: '/favicon.ico',
},
```

For LinkedIn and GitHub preview icons when sharing — these are handled automatically
by the `og:image` above. No extra code needed. LinkedIn and GitHub both read
`og:image`, `og:title`, and `og:description` from the meta tags above.

To verify after deploying: paste your URL into https://www.opengraph.xyz

---

## SUMMARY — what changes, what doesn't

| | Changed |
|---|---|
| Dark mode CSS variables | ✅ yes — modern black palette |
| Light mode CSS variables | ❌ no — untouched |
| Modal dark: classes | ✅ yes — match new dark bg |
| OG meta tags | ✅ yes — added to layout.tsx |
| Everything else | ❌ no — untouched |

## File drop locations

```
your-repo/
├── public/
│   ├── profile.jpg     ← your photo
│   ├── cv.pdf          ← your CV
│   └── og-preview.png  ← 1200×630 OG image
└── src/
    └── app/
        └── layout.tsx  ← add metadata export here
```
