# Mobile Webpage Design Notes

Use this file as a working checklist when designing pages that should feel good on phones first. The matching Astro starter lives at `src/pages/_mobile-page-template.astro`.

## Core Principle

Design the first screen around one job: help the visitor understand where they are, what matters, and what they can do next.

## Mobile-First Structure

1. Start with the shortest useful hero: page title, one sentence, and one primary action.
2. Keep the next section visible or easy to reach. Avoid making the hero so tall that it hides the actual page content.
3. Add a small jump nav when the page has three or more major sections.
4. Use cards for repeated items, not for wrapping whole page sections.
5. Put detailed or optional information in accordions only when it helps scanning.
6. End with a clear CTA or next step.

## Layout Rules

- Build single-column by default, then enhance for wider screens.
- Keep horizontal padding comfortable: around `1rem` to `1.25rem` on small screens.
- Use `min-height: 44px` for links, buttons, and form controls that are meant to be tapped.
- Leave room around sticky bottom actions with extra page padding.
- Avoid fixed-width elements unless they also have responsive limits.
- Avoid side-by-side layouts on mobile unless both items remain readable and tappable.

## Typography

- Use compact headings inside cards and panels.
- Keep paragraph lengths short.
- Avoid viewport-based font scaling.
- Keep letter spacing at `0` unless a component has a very specific reason.
- Make link text descriptive enough to make sense out of context.

## Navigation

- Use short labels in mobile menus and jump navs.
- Keep sticky navigation thin.
- Do not stack multiple sticky elements at the same edge of the screen.
- Make sure the browser back button still feels like the natural escape route.

## Images And Media

- Use real, relevant images when the page is about a person, product, place, project, or object.
- Lazy-load non-critical images.
- Give images stable dimensions with `aspect-ratio` where layout shifts would be noticeable.
- Avoid large decorative assets that do not help the visitor understand the page.

## Forms

- Keep forms single-column on mobile.
- Use labels above controls.
- Prefer generous input height and spacing.
- Keep required fields to the real minimum.
- Put the submit button close to the final field.

## Performance

- Keep the first screen light.
- Avoid loading scripts for components that are not used on the page.
- Compress images before publishing.
- Prefer Astro components and static HTML for simple content.

## Accessibility

- Use semantic landmarks: `header`, `main`, `section`, `nav`, and `footer`.
- Keep focus states visible.
- Make touch targets at least 44px tall.
- Use meaningful `alt` text for informative images and empty alt text for decorative images.
- Test the page with keyboard navigation.

## Astro Component Suggestions

- Use `Layout.astro` for the shared shell and metadata.
- Use `Section.astro` for page sections.
- Use `Card.astro` and `CardGrid.astro` for repeated items.
- Use `LinkButton.astro` for actions.
- Use `CTA.astro` for strong next steps.
- Use `Accordion.astro` for optional detail.
- Use `ContactForm.astro` for simple contact pages.
- Use `ReadingProgress.astro` on long articles.

## Final Mobile Check

- Can the visitor understand the page in the first 5 seconds?
- Is the main action visible without searching?
- Can every control be tapped comfortably?
- Does any text wrap awkwardly or overlap?
- Does the page still work with JavaScript disabled, except for explicitly interactive enhancements?
- Are images useful, stable, and not heavier than they need to be?
