# Content Collections

These Markdown files are examples for Astro content collections.

## Writing

Use `content/writing/` for blog posts, project logs, and longer notes.

Published posts are listed on `/writing/`. They can also appear on related
pages when their tags match the page tag map in `data/pageTags.ts`.

Required frontmatter:

- `title`
- `description`
- `pubDate`

Optional frontmatter:

- `updatedDate`
- `draft`
- `tags`
- `heroImage`

## Projects

Use `content/projects/` for portfolio entries, website experiments, or long-running projects.

Useful fields:

- `title`
- `description`
- `status`
- `featured`
- `order`
- `tags`
- `heroImage`
- `externalUrl`

## Albums

Use `content/albums/` for photo sets.

Useful fields:

- `title`
- `description`
- `date`
- `location`
- `cover`
- `photos`
- `tags`

## Tools

Use `content/tools/` for site utilities.

Useful fields:

- `title`
- `description`
- `href`
- `status`
- `icon`
- `tags`

## Timeline

Use `content/timeline/` for journey entries.

Useful fields:

- `title`
- `description`
- `date`
- `order`
- `tags`
