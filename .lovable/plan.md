

# Add Line Scan Camera Subcategories to Products Page

## Overview

Replace the current placeholder camera products on the `/products` page with 3 real Line Scan Camera product types (1GigE, 2.5GigE, 10GigE), each with its own detail page following the same lens template. Update sidebar filters, navigation dropdown, and product detail data accordingly.

## Changes

### 1. Copy uploaded images to `src/assets/`
- `user-uploads://1.png` -> `src/assets/line-scan-camera-1gige.png`
- `user-uploads://2.png` -> `src/assets/line-scan-camera-2-5gige.png`
- `user-uploads://3.png` -> `src/assets/line-scan-camera-10gige.png`

### 2. Update `src/pages/Products.tsx`
- Replace the current 12 placeholder camera products with 3 real line scan camera entries:
  - **1GigE Line Scan Camera** (category: `line-scan`, slug: `1gige-line-scan-camera`)
  - **2.5GigE Line Scan Camera** (category: `line-scan`, slug: `2-5gige-line-scan-camera`)
  - **10GigE Line Scan Camera** (category: `line-scan`, slug: `10gige-line-scan-camera`)
- Update `cameraCategories` counts: All Cameras = 3, Line Scan = 3, Frame Scan = 0, Other = 0 (or remove empty categories for now)
- Add `slug` property to products (matching the Lenses page pattern)
- Update sidebar labels to use "Product Type/Types" with conditional pluralization
- Import the 3 new camera images

### 3. Update `src/pages/ProductDetail.tsx`
- Add 3 new entries to `productData` for the line scan cameras, using the lens-style template with `mainFeatures`, `quickSpecs`, and `applications` fields
- Add corresponding `modelVariants` entries with camera-specific specs (resolution, line rate, interface, pixel size, etc.)
- Set `categorySlug: "products"` and `category: "Line Scan Cameras"` for proper breadcrumb navigation
- Use the new camera thumbnail images

### 4. Update `src/components/Navbar.tsx`
- Update the "Line Scan Cameras" entries in `productsByCategory` to show the 3 new real products with correct slugs and images
- Update the Line Scan Cameras category count from 84 to 3
- Import the 3 new camera images
- Update camera category labels to use "Product Type/Types" with conditional pluralization

### 5. Update `src/components/ProductCard.tsx` (if needed)
- Ensure the ProductCard links to `/product/{slug}` when a slug is provided (same pattern as Lenses page)

## Technical Details

- Each camera product detail page will use the `hasLensLayout` (three-column cards) template when `mainFeatures` is present
- Model tables will use the multi-row comparison format with camera-specific headers (Model, Resolution, Line Rate, Interface, Pixel Size, etc.)
- Images are imported as ES6 modules from `src/assets/` for proper bundling
- Sidebar filter counts and pluralization logic will match the Lenses page pattern
