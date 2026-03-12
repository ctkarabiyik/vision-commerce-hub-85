

## Fix: Breadcrumb category link should pre-select the category filter

**Problem**: The breadcrumb link on the ProductDetail page (line 1401) navigates to `/${product.categorySlug}` (e.g., `/products` or `/lenses`) without a `?category=` query param, so the category filter is not pre-selected.

**Solution**: Add a mapping from `product.category` to the corresponding URL category filter ID, and append it as a query parameter.

### Changes in `src/pages/ProductDetail.tsx`

1. Add a `categoryFilterMap` that maps product category names to their filter IDs:

```
"Line Scan Cameras" → "line-scan"
"Area Scan Cameras" → "area-scan"
"Other" → "other"
"FA Lenses" → "fa-lenses"
"Telecentric Lenses" → "telecentric"
"Line Scan Lenses" → "line-scan"
"Macro Lenses" → "macro"
"Infrared Lenses" → "infrared"
"VR Lenses" → "vr"
"Scheimpflug Lenses" → "scheimpflug"
"Large Format Lenses" → "large-format"
```

2. Update the breadcrumb `LocaleLink` (line 1401) from:
   ```
   to={`/${product.categorySlug}`}
   ```
   to:
   ```
   to={`/${product.categorySlug}?category=${categoryFilterMap[product.category] || ""}`}
   ```

This ensures clicking "Line Scan Cameras" in the breadcrumb navigates to `/products?category=line-scan`, pre-selecting the filter on the catalog page.

