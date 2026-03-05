

## Locale-Based URL Routing

Adding a language prefix to URLs (e.g., `/en/products`, `/tr/products`, `/ar/contact-us`) is a common best practice for multilingual sites. It improves SEO (search engines index each language version separately), enables shareable locale-specific links, and allows users to bookmark pages in their preferred language.

### Current State
- Language is stored in i18next's internal state (memory only)
- All routes are language-agnostic (`/products`, `/lenses`, etc.)
- Switching language doesn't change the URL
- Refreshing the page resets to English

### Proposed Changes

**1. Add a `/:lang` prefix to all routes in `App.tsx`**

Wrap all existing routes under a `/:lang` path parameter. Add a redirect from `/` to `/en` (or the user's detected/saved language).

```
/en/products
/tr/lenses
/ar/contact-us
/de/product/4k-line-scan-lens
```

**2. Create a `LanguageRouter` wrapper component**

A layout component that:
- Reads the `:lang` param from the URL
- Syncs it with i18next (`i18n.changeLanguage(lang)`)
- Redirects to `/en/...` if the lang param is missing or invalid
- Renders an `<Outlet />` for child routes

**3. Update language switcher in `Navbar.tsx`**

When the user changes language, navigate to the same page but with the new locale prefix (e.g., `/tr/products` instead of `/en/products`) using `useNavigate`.

**4. Update all internal `<Link>` components**

Create a helper (e.g., `useLocalePath`) that prepends the current language to any path. Update links in:
- `Navbar.tsx` (navigation links, mega menu links)
- `Footer.tsx` (footer links)
- `ProductDetail.tsx` (breadcrumbs)
- `ProductCard.tsx` (product links)
- `Hero.tsx`, `CTA.tsx`, `FeaturedProducts.tsx`, `Applications.tsx`

**5. Root redirect**

`/` redirects to `/${detectedOrDefaultLanguage}` based on browser language or saved preference.

### File Changes Summary

| File | Change |
|------|--------|
| `src/App.tsx` | Restructure routes under `/:lang`, add root redirect |
| `src/components/LanguageRouter.tsx` | New wrapper component syncing URL lang with i18next |
| `src/hooks/useLocalePath.ts` | New helper hook for prefixed paths |
| `src/components/Navbar.tsx` | Update language switcher and all links |
| `src/components/Footer.tsx` | Update all links |
| `src/pages/ProductDetail.tsx` | Update breadcrumb links |
| `src/components/ProductCard.tsx` | Update product links |
| `src/components/Hero.tsx` | Update CTA links |
| `src/components/CTA.tsx` | Update links |
| `src/components/FeaturedProducts.tsx` | Update links |
| `src/components/Applications.tsx` | Update links if any |

