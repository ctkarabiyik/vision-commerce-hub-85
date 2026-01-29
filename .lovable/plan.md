

# Update Header and Footer Logos

This plan will update the logos used in the website header (navbar) and footer with the newly provided SVG files.

## Summary

Replace the current logo files with the two new logos you've provided:
- **Header**: Use `alarge-camera-3.svg`
- **Footer**: Use `alarge-camera-2-2.svg`

## Implementation Steps

### Step 1: Replace Header Logo
Copy the uploaded `alarge-camera-3.svg` to `src/assets/alarge-logo.svg`, replacing the existing file.

### Step 2: Replace Footer Logo
Copy the uploaded `alarge-camera-2-2.svg` to `src/assets/alarge-logo-footer.svg`, replacing the existing file.

## Files to Modify

| File | Change |
|------|--------|
| `src/assets/alarge-logo.svg` | Replace with `alarge-camera-3.svg` |
| `src/assets/alarge-logo-footer.svg` | Replace with `alarge-camera-2-2.svg` |

## Technical Details

No code changes are required in the component files (`Navbar.tsx` and `Footer.tsx`) since the import paths will remain the same - only the underlying SVG files are being swapped out.

Current imports that will continue to work:
- Navbar: `import alargeLogo from "@/assets/alarge-logo.svg"`
- Footer: `import alargeLogo from "@/assets/alarge-logo-footer.svg"`

