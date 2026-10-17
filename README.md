# Vestige

Digital archive of traces from failed futures: historical objects, plans and projects that never happened and still remain.

Each piece has:
- **[vstg–####]**: its code
- **[desc.]**: what the object is
- **[f.f. expl.]**: the future it points to, and how it still reaches the present
- **Source**: the reference where the object is documented
- **Licence**: the conditions for reusing the image

## Stack
- Next.js + TypeScript
- PixiJS (the free-moving plane)
- Libre Baskerville (type)
- GitHub Pages (static hosting)

No database and no accounts. All content lives in `src/data/vestiges.ts` and `public/vestigios/`.

## Adding a piece
1. Download the image with a licence that allows reuse, and save it in `public/vestigios/`.
2. Add an entry to `src/data/vestiges.ts`, with its source and licence.
3. Commit and push. Vercel publishes the change.

## Publishing
The site is published with GitHub Pages at https://ricardovaleragarcia-commits.github.io/vestige/

Every push to `main` builds the site and publishes it, through `.github/workflows/pages.yml`.

One-time setup: in the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

## Running locally
```bash
npm install
npm run dev
```
