# Vestige

Digital archive of traces from failed futures.

Each *vestige* is a photo or object, paired with two texts:
- **[desc.]**: what the image shows and its context (public or private sphere).
- **[f.f.]**: the failed future it points to and how it still affects the present.

Visitors explore the collection freely. Every piece is blurred until it is clicked. Public pieces are revealed in full on the detail view. Private pieces keep the image blurred, but their texts are always readable.

## Stack
- Next.js + TypeScript (app and API routes)
- PixiJS (WebGL canvas for the free-pan Collection)
- Supabase (Postgres, Auth, Storage, Row Level Security)
- Sharp (server-side blur, thumbnails, EXIF removal)
- EB Garamond (self-hosted through `@fontsource`)
- Vercel (hosting)

## Principles
- **Private means private.** Blur is generated on the server. The original file never reaches the browser unless its owner or an admin requests it.
- **Anonymity.** Authors are stored for ownership but are never exposed through public APIs or the UI.
- **Nothing is deleted silently.** Pieces that leave the Collection are *retired* (archived), not erased. Authors can see and re-submit them.

## Repository layout
```
supabase/schema.sql   Tables, views, RLS policies, retirement function
src/lib/layout.ts     Relative sizing for the Collection
.env.example          Environment variables (no secrets)
```

## Setup
1. Create a Supabase project and run `supabase/schema.sql` in the SQL editor.
2. Copy `.env.example` to `.env.local` and fill in the values.
3. `npm install` then `npm run dev`.

## Secrets
Never commit `.env*` files or the Supabase `service_role` key. The `anon` key is public by design; security comes from RLS.

## Status
Foundations only: schema, sizing logic and project configuration. Upload, Collection canvas, detail view, owner panel and `/admin` are next.

## License
To be decided.
