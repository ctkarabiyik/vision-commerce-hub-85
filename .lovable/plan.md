

# Combine About Us and Industries into One Page

## What we'll do

Create a dedicated **About Us** page at `/about` that contains two sections stacked together:

1. **Why Choose Us** -- the existing company trust signals (Authorized Distributor, Fast Shipping, Expert Support, etc.)
2. **Industries We Serve** -- the existing Applications component showing the 6 industry categories (Manufacturing, Automotive, Pharmaceutical, etc.)

## Changes

### 1. Create new page: `src/pages/AboutUs.tsx`
- Include Navbar, Footer, and a hero/header area with breadcrumb navigation (matching the style of other pages like Software Downloads and Knowledge Base)
- Render the existing `WhyChooseUs` component
- Render the existing `Applications` component
- Optionally add a brief company intro paragraph at the top

### 2. Update `src/App.tsx`
- Import the new `AboutUs` page
- Add route: `/about`

### 3. Update `src/components/Navbar.tsx`
- Change the "About Us" link from `href="#about"` to a proper `Link` component pointing to `/about` (both desktop and mobile nav)

### 4. Update `src/pages/Index.tsx` (optional)
- Consider whether to keep `WhyChooseUs` on the homepage as well, or remove it since it now lives on the About page. Recommendation: keep it on the homepage too, since it serves as a trust signal for first-time visitors.

## Technical Details

- The new page reuses the existing `WhyChooseUs` and `Applications` components with no modifications needed to those components
- The `id="about"` anchor on WhyChooseUs can be kept for backwards compatibility
- Navbar links will use `react-router-dom`'s `Link` component instead of anchor tags
