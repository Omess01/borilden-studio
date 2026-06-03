# Photo Album Workflow

Use this guide when adding finished photo albums to the Astro site.

## Recommended Folder Structure

Store web-ready album images in Astro's `public/` folder:

```text
public/
  media/
    photo-sets/
      nmbu-2024/
        cover.jpg
        photo-01.jpg
        photo-02.jpg
        photo-03.jpg
```

Files inside `public/` are served from the website root. So this file:

```text
public/media/photo-sets/nmbu-2024/photo-01.jpg
```

is available at:

```text
/media/photo-sets/nmbu-2024/photo-01.jpg
```

On the live site, that means:

```text
https://borildenstudio.no/media/photo-sets/nmbu-2024/photo-01.jpg
```

Anyone with that URL can view the raw single image directly. Do not put private images, originals, sensitive files, or full-resolution files you do not want exposed inside `public/`.

## Album Markdown Example

Create an album Markdown file in `src/content/albums/`:

```text
src/content/albums/nmbu-2024.md
```

Then reference the images using their public URL paths:

```yaml
---
title: "NMBU 2024"
description: "Photos from my university years."
date: 2024-05-01
location: "NMBU"
featured: true
cover:
  src: "/media/photo-sets/nmbu-2024/cover.jpg"
  alt: "Cover photo from the NMBU 2024 album"
photos:
  - src: "/media/photo-sets/nmbu-2024/photo-01.jpg"
    alt: "Short description of photo one"
  - src: "/media/photo-sets/nmbu-2024/photo-02.jpg"
    alt: "Short description of photo two"
  - src: "/media/photo-sets/nmbu-2024/photo-03.jpg"
    alt: "Short description of photo three"
tags:
  - Photography
  - Album
---

Optional text about the album can go here.
```

That Markdown file creates an album page at:

```text
/albums/nmbu-2024/
```

The raw images remain available at their media URLs:

```text
/media/photo-sets/nmbu-2024/photo-01.jpg
```

## Image Formats

Good defaults:

- Use `.jpg` or `.jpeg` for normal photography.
- Use `.png` only when you need transparency or a specific lossless look.
- Consider `.webp` later if you want smaller files and better performance.

For edited photos, `.jpg` is usually the best starting point.

## Image Size

Do not publish full-resolution exports unless you truly want visitors downloading huge files.

A reasonable starting point:

- Covers: around `1600px` wide.
- Gallery images: around `1600px` to `2400px` wide.
- Quality: roughly `75` to `85` for JPEG exports.

You can always keep original full-resolution files somewhere private and only publish web-sized versions.

## Mounted Server Volume Option

You can store photos outside the Astro project if your web server or container exposes them publicly.

Example server path:

```text
/mnt/photos/web/photo-sets/nmbu-2024/photo-01.jpg
```

Mounted or served as:

```text
/media/photo-sets/nmbu-2024/photo-01.jpg
```

The Markdown does not care where the file lives on disk. It only needs the browser-accessible URL:

```yaml
photos:
  - src: "/media/photo-sets/nmbu-2024/photo-01.jpg"
    alt: "Short description"
```

## Rebuild Notes

If you add a new album Markdown file or edit the `photos:` list, rebuild and redeploy the Astro site.

If you only replace an image file at the same URL, the page can show the new image without changing the Markdown. Browser or CDN caching may still delay the visible update.

## Practical Workflow

1. Export web-sized finished images from your editor.
2. Place them in `public/media/photo-sets/name-of-album/`.
3. Create `src/content/albums/name-of-album.md`.
4. Add the `cover` and `photos` paths.
5. Add useful `alt` text for each image.
6. Add tags like `Photography` and `Album`.
7. Rebuild the Astro site.
