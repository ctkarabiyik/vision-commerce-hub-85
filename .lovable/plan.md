

## Mobile Menu: Slide-Right Sub-Panels

Replace the current accordion-style (expand downward) mobile menu with a sliding panel approach where clicking "Products" or "Support" slides a new panel in from the right, with a back button to return to the main menu.

### Design

```text
┌──────────────┐    click Products    ┌──────────────┐   click Cameras   ┌──────────────┐
│ Products  >  │  ─────────────────>  │ ← Products   │  ──────────────>  │ ← Cameras    │
│ Support   >  │                      │ Cameras    > │                   │ Line Scan    │
│ ─────────── │                      │ Lenses     > │                   │ Area Scan    │
│ 🇬🇧 English │                      │              │                   │ Other        │
│ [Contact Us] │                      │              │                   │              │
└──────────────┘                      └──────────────┘                   └──────────────┘
```

Three-level navigation: Main menu -> Products/Support -> Cameras/Lenses categories.

### Changes in `src/components/Navbar.tsx`

1. **Add a `mobileMenuLevel` state** (`'main' | 'products' | 'support' | 'cameras' | 'lenses'`) to track which panel is shown, replacing the boolean toggle states (`mobileProducts`, `mobileSupport`, `mobileCameras`, `mobileLenses`).

2. **Replace the accordion markup** (lines 212-313) with a container that uses `overflow-hidden` and translates panels horizontally based on `mobileMenuLevel`:
   - **Main panel**: Shows "Products >" and "Support >" buttons, language selector, and Contact Us.
   - **Products panel**: Shows back arrow + "Cameras >" and "Lenses >" buttons.
   - **Support panel**: Shows back arrow + support links list.
   - **Cameras panel**: Shows back arrow + camera category links.
   - **Lenses panel**: Shows back arrow + all lens category links.

3. Each panel uses `transition-transform` with `translate-x-0` (visible) or `translate-x-full`/`-translate-x-full` (off-screen) for smooth sliding.

4. **Reset level to `'main'`** when the hamburger menu is closed (`setIsOpen(false)`).

5. Use `ChevronRight` instead of `ChevronDown` for the forward-pointing arrows, and an `ArrowLeft` icon for the back button.

