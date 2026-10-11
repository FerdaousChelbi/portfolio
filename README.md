# Ferdaous Chelbi — Portfolio

React + Vite + Tailwind CSS. All content is in `src/data/content.js`.

## Commands
```bash
npm install      # install
npm run dev      # dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Deploy on Vercel
1. Push to GitHub: `git init && git add . && git commit -m "Portfolio" && git branch -M main && git remote add origin <repo-url> && git push -u origin main`
2. vercel.com → Add New → Project → import the repo.
3. Framework preset: Vite (auto-detected). Build `npm run build`, output `dist`. Deploy.

## What to edit later
| What | File | Field |
|---|---|---|
| Name, links, status, photo | `src/data/content.js` | `site` |
| CV | `public/cv/Ferdaous_Chelbi_CV.pdf` | replace the file |
| Photo | `public/ferdaous.webp` | replace the file |
| Project GitHub / demo buttons | `src/data/content.js` | `projects[].github`, `projects[].demo` |
| Certificate links | `src/data/content.js` | `certifications[].url` |
| French / English level | `src/data/content.js` | `languages[].level` |
| Social preview image | `index.html` | add an `og:image` meta tag |
