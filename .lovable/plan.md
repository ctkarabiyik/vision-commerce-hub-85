
# Remove Unused Files and Dependencies

## Summary
Clean up dead code by removing 3 unused component files and 3 unused npm packages that are not referenced anywhere in the project.

## Files to Delete

1. **`src/components/SpinningCube.tsx`** — A 3D rotating cube demo component. Not imported by any page or component.
2. **`src/components/NavLink.tsx`** — A NavLink wrapper component. Not imported anywhere.
3. **`src/components/ui/navigation-menu.tsx`** — Radix navigation menu UI component. Not imported anywhere.

## Dependencies to Remove

These packages are only used by SpinningCube and can be uninstalled:

- `@react-three/fiber`
- `@react-three/drei`
- `three`

## What stays

- All shadcn/ui components (even unused ones like `slider`, `toggle`, etc.) — these are standard scaffolding kept for future use
- All asset images — they are referenced across pages and components
- `src/components/ui/use-toast.ts` — re-exports from hooks, used by toaster

## Technical details

- Remove the 3 files listed above
- Remove the 3 npm packages from `package.json` dependencies
- No other files need updating since none of these are imported anywhere
