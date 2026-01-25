# AK-Portfolio

> *Because apparently, we still need portfolio websites in 2026. Thanks, recruiters.*

## Stack

**Next.js 14+** - Because React alone wasn't complicated enough  
**TypeScript** - For people who like their JavaScript with trust issues  
**Tailwind CSS** - Inline styles but make it ✨fancy✨  
**shadcn/ui** - Pre-built components for developers who value their sanity

## Local Deployment

*Or as some call it: "Making it work on your machine"*

```bash
# Install dependencies (this will take a while, grab coffee)
npm install

# Fire up the dev server
npm run dev

# Access at http://localhost:3000
# Yes, localhost. No, it's not exposed to the internet. Yet.
```

**Pro tip:** The page hot-reloads. Change `app/page.tsx` and watch the magic happen. Or the errors. Probably errors.

## Project Structure

```
src/
├── app/              # Next.js 14 App Router (RIP pages directory)
├── components/       # React components (because everything is a component)
└── lib/              # Utilities (home of that one function you copied from Stack Overflow)
```

## Environment Variables

*What environment variables? There are no secrets here. This is a frontend portfolio.*

If you add any, create a `.env.local` and **DON'T COMMIT IT**. I know you know, but I'm saying it anyway.

## Build & Deploy

```bash
# Production build
npm run build

# Deploy to Vercel (one command, zero brain cells required)
vercel deploy
```

## Security Notes

- All client-side code is visible. Because that's how browsers work.
- No API keys in the frontend. Ever. I'm watching you.
- Content Security Policy? In a portfolio? Let's not get crazy.

## Contributing

Found a bug? Fork it. Fix it. PR it.  
Found a feature request? Open an issue. Or don't. I'm not your manager.

---

**Built with caffeine, Stack Overflow, and questionable life choices.**  
*localhost:3000 - Where dreams are compiled*
