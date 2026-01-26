# AK-Portfolio

> *Because apparently, we still need portfolio websites in 2026. Thanks, recruiters.*

## Stack

**Next.js 14+** - because react alone wasn't complicated enough  
**TypeScript** - for people who like their javaScript with trust issues  
**Tailwind CSS** - inline styles but make it fancy
**shadcn/ui** - pre-built components for developers who value their sanity

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

if you add any, create a `.env.local` and **DON'T COMMIT IT**. i know you know, but I'm saying it anyway and i'm not f..,

## Security Notes

- all client-side code is visible, because that's how browsers work.
- no API keys in the frontend. Ever. i'm watching you.
- Content Security Policy? In a portfolio? let's not get crazy.

## Contributing

Found a bug? Fork it. Fix it. PR it.  
Found a feature request? Open an issue. Or don't. I'm not your manager.

---

**Built with no caffeine and questionable life choices.**  
*localhost:3000 - where satisfactions are compiled*