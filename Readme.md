# alirohde.com

Personal website and blog.

Built with [Next.js](https://nextjs.org/) and deployed on [Vercel](https://vercel.com).

## Features

- MDX blog posts with rich embeds (tweets, YouTube videos, code snippets)
- Portfolio section with select investments
- Testimonials from founders
- Email subscriptions via [Beehiiv](https://www.beehiiv.com/) API
- Light/dark mode
- RSS feed
- Vercel Analytics & Speed Insights
- Claude Code GitHub Actions integration

## Setup

### Environment Variables

Create a `.env.local` file:

```
BEEHIIV_API_KEY=your_api_key
BEEHIIV_PUBLICATION_ID=pub_your_publication_id
```

### Development

```bash
npm install
npm run dev
```

### Deployment

Push to `main` branch to trigger automatic Vercel deployment, or:

```bash
npx vercel --prod
```

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- MDX via `next-mdx-remote`
- `react-tweet`, `react-youtube`, `recharts`
- Beehiiv API for subscriptions
- Vercel for hosting
