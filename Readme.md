# alirohde.com

Personal website and blog for Ali Rohde, Managing Partner at [Outset Capital](https://www.outsetcapital.com/).

Built with [Next.js](https://nextjs.org/) and deployed on [Vercel](https://vercel.com).

## Features

- Blog posts powered by [Beehiiv](https://www.beehiiv.com/) CMS
- Email subscriptions via Beehiiv API
- Light/dark mode toggle
- Testimonials section
- Reading time estimates
- RSS feed
- Responsive design

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
- Tailwind CSS
- Beehiiv API for blog content
- Vercel for hosting
