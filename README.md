# MORIS | Engineering refactor

Base: `main2` @ `01fd635d4e4d00888ed309a12302113666f8d4af`. New branch is independent; source branches remain unchanged.

## What changed
- Retained every existing image, study note, and BEM `__` class.
- Kept `scss/_vars.scss` **unchanged** as requested.
- Reorganized SCSS by component; consolidated duplicate header/product category styles.
- Preserved main2's **absolute right-aligned product category image** and flowing description.
- Restored category keyboard focus and hover feedback, made the product Swiper responsive, added reduced-motion support, and improved drawer keyboard behavior.
- Fixed social preview URLs in Korean and English HTML.
- Added repeatable Sass build and tests.

## Work locally
Use Node.js 22+.

```bash
npm install
npm run build
npm test
```

The source of truth is `scss/layout.scss`. `css/layout.css` and `css/layout.min.css` are compiled outputs; **do not edit them by hand**. The reset CSS is loaded by HTML from `scss/_reset.css`, so it is not imported a second time by `layout.scss`.

## Verification and remaining checks
Static SCSS structure, CSS selector generation, BEM/HTML wiring, and source consistency were checked during this change. The checked-in CSS was transpiled from the covered SCSS syntax; **run `npm run build` with the official Sass compiler before deployment or merge**, and inspect visual differences at desktop/tablet/mobile widths. GitHub Actions compiles with Dart Sass and runs integrity tests.
