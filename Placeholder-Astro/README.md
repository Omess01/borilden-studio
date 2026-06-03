# Børilden Studio Astro Templates

This folder is a starter kit for turning the current static site into an Astro site while keeping the existing Børilden Studio visual style.

## Suggested Astro Structure

When you create or open the real Astro project, these files map cleanly into `src`:

- `Layout.astro` -> `src/Layout.astro`
- `components/` -> `src/components/`
- `data/` -> `src/data/`
- `pages/` -> `src/pages/`
- `content/` -> `src/content/`
- `content.config.ts` -> `src/content.config.ts`

Move the current static assets from `site/assets` to Astro's `public/assets` folder so the layout can keep using paths like `/assets/images/logo.png`.

## Page Templates Included

- `pages/index.astro` for the homepage.
- `pages/about.astro` for a personal/about page.
- `pages/links.astro` for the compact link hub.
- `pages/journey.astro` for photography or learning timeline entries.
- `pages/infrastructure.astro` for the homelab/current setup page.
- `pages/gaming.astro` for gaming profiles.
- `pages/tools/index.astro` for tools.
- `pages/portfolio/index.astro` and `pages/portfolio/[slug].astro` for project/portfolio entries.
- `pages/albums/index.astro` and `pages/albums/[slug].astro` for photo albums.
- `pages/writing/index.astro` and `pages/writing/[slug].astro` for notes/blog posts.

## Content Workflow

Add new Markdown files inside `content/`:

- `content/writing/` for blog posts and notes.
- `content/projects/` for portfolio or project pages.
- `content/albums/` for photography albums.
- `content/tools/` for tools you want to list.
- `content/timeline/` for journey entries.

Each folder has an example file with frontmatter you can copy.

For blog posts, copy `content/writing/_blog-post-template.md`, rename it,
write the post, and set `draft: false` when it is ready to publish.

`pages/writing/index.astro` is the big overview page for all published posts.
Other pages use `components/TaggedWritingSection.astro` and `data/pageTags.ts`
to show posts that match relevant tags.

For photo albums, see `content/albums/README.md`. The recommended setup is to
store published, web-sized photos under `public/media/photo-sets/name-of-album/`
and reference those image URLs from album Markdown files.

## First Steps

1. Create a real Astro project or open your existing one.
2. Copy these folders into `src`.
3. Copy `site/assets` into `public/assets`.
4. Update any placeholder text in `data/site.ts`, `data/home.ts`, and the Markdown examples.
5. Run `npm run dev` from the Astro project root.

The templates use your existing classes from `styles.css` and `page.css`, so they should feel like the current website as soon as the assets and CSS are in place.
