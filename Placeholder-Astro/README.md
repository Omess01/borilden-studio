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

## Moving From Static Site To Astro With Docker

The current Docker setup serves the static `site/` folder with Nginx:

```yaml
services:
  borildenstudio:
    image: nginx:1-alpine
    volumes:
      - ./site/:/usr/share/nginx/html
```

Astro can still work with this pattern. By default, Astro builds a static site into a `dist/` folder. Nginx can serve that folder the same way it currently serves `site/`.

### Recommended First Deployment

Use Astro as a static site generator:

```text
Astro source files -> npm run build -> dist/ -> Nginx serves dist/
```

For this setup, the compose volume would eventually change from:

```yaml
volumes:
  - ./site/:/usr/share/nginx/html
```

to something like:

```yaml
volumes:
  - ./dist/:/usr/share/nginx/html:ro
```

If the Astro project lives in its own folder, use that build output instead:

```yaml
volumes:
  - ./astro-site/dist/:/usr/share/nginx/html:ro
```

The `:ro` means read-only. It is a good default because the Nginx container only needs to serve the files, not edit them.

### TrueNAS Scale Notes

On TrueNAS Scale, the bind mount path may be an absolute dataset path rather than a relative path. The same idea applies:

```yaml
volumes:
  - /mnt/tank/apps/borilden-studio/dist:/usr/share/nginx/html:ro
```

Use whatever dataset path matches where the Astro build output is stored on the server.

### Caddy Network

Your compose file already attaches the Nginx container to `caddy_net`:

```yaml
networks:
  - caddy_net
```

That can stay the same. Caddy can keep reverse-proxying to the Nginx container as long as the service/container name and internal port stay consistent.

With `nginx:1-alpine`, the internal web port is still `80`.

### Photo Albums With A Mounted Media Volume

If album images are stored outside the Astro project, mount them into the public web root at the same URL path used in album Markdown.

Example Markdown image URL:

```yaml
src: "/media/photo-sets/nmbu-2024/photo-01.jpg"
```

Example compose volume:

```yaml
volumes:
  - ./dist/:/usr/share/nginx/html:ro
  - /mnt/tank/photos/photo-sets:/usr/share/nginx/html/media/photo-sets:ro
```

That would make this server file:

```text
/mnt/tank/photos/photo-sets/nmbu-2024/photo-01.jpg
```

available on the website as:

```text
/media/photo-sets/nmbu-2024/photo-01.jpg
```

### When You Need To Rebuild

Rebuild Astro when you change:

- Astro pages in `src/pages/`
- Components in `src/components/`
- Data files in `src/data/`
- Markdown content in `src/content/`
- The album Markdown `photos:` list

You usually do not need to rebuild Astro if you only replace an image file at the same mounted URL path.

### Later Option: Build Inside Docker

The simplest first setup is to build Astro outside the Nginx container and mount `dist/`.

Later, you can create a custom Dockerfile that runs `npm install` and `npm run build`, then copies `dist/` into an Nginx image. That is cleaner for automated deployments, but it is more setup work than you need at the beginning.
