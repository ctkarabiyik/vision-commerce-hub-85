

# Fix: Dropdown Menus Flashing on Page Refresh

## Problem
The Products and Support mega menus are always present in the DOM, hidden only via `opacity-0 invisible` with `transition-all duration-200`. On page refresh, the browser briefly renders them in their default position before applying the hidden styles, causing a visible flash of centered content.

## Solution
Use **conditional rendering** instead of opacity/visibility toggling. Only mount the dropdown DOM elements when they are actually open. This eliminates any flash on page load because the elements simply don't exist until triggered.

## Changes

### `src/components/Navbar.tsx`

**Products Mega Menu (line ~308-462):**
- Replace `opacity-0 invisible` / `opacity-100 visible` toggle with conditional rendering (`{productsDropdownOpen && ...}`)
- Remove the transition classes since mount/unmount handles show/hide

**Support Mega Menu (line ~465-489):**
- Same approach: wrap in `{supportDropdownOpen && ...}`
- Remove the transition classes

Both dropdowns already have `onMouseEnter` / `onMouseLeave` handlers, so hover behavior will continue working identically. The only difference is the elements won't exist in the DOM when closed, preventing any flash on refresh.

