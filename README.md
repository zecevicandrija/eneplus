This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Static locale routing

`src/i18n/routing-config.mjs` is the shared source for public Serbian/English paths
and next-intl navigation. `next.config.mjs` generates locale redirects, internal
rewrites and alternate-language HTTP headers at build time. There is no locale
middleware: the URL determines the language, and `/` redirects to `/sr`.
Existing explicit legacy redirects take precedence over generated rules.

Keep public pages statically renderable. The locale layout supplies the locale
and messages explicitly, and blog language links are serialized into that layout
from the Markdown frontmatter during the build. They require no Server Action.
The email form continues to use `/api/send-energy-passport-request`.

After changing routes, build and check a local production server:

```bash
npm run build
npm run start -- --port 3100
# In a second terminal:
npm run check:routing
```

The check covers public routes, legacy redirects, both languages, blog translation
links, static rendering, RSC prefetch responses, canonical/hreflang links,
sitemap targets, and 404s. `ROUTING_TEST_ORIGIN` can select another server.
After deploying, verify navigation on Vercel and compare **new** Active CPU usage
by Type over comparable traffic periods. Historical usage remains in the rolling
30-day window; a deploy does not reset the quota.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
