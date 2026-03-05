

## Bug: Double Asterisk on Form Labels

The required field marker `*` is duplicated because it exists in **two places**:

1. **Translation strings** (e.g., `tr.ts`): `firstName: "Ad *"` — already includes `*`
2. **Component template** (`ContactUs.tsx`): `{t("contactPage.firstName")} *` — appends another `*`

### Fix

**Remove the ` *` from all translation strings** across all 6 locale files (`en.ts`, `tr.ts`, `de.ts`, `ru.ts`, `it.ts`, `ar.ts`). The asterisk should only live in the component template since it's a visual indicator, not translatable content.

Affected keys in each locale: `firstName`, `lastName`, `email`, and any other label that has `*` baked into the translation value.

