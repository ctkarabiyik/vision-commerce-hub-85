

# Fix: Desktop Nav Centering on Page Refresh

## Problem
The desktop navigation div (Products / Support links) uses `ltr:ml-auto` and `rtl:mr-auto` Tailwind variants to push itself to the right (or left in RTL). These variants only activate when the `dir` attribute is set on the `<html>` element.

On initial page load, `dir` is not set until a language change event fires. Without `dir="ltr"`, the `ltr:ml-auto` class has no effect, so the nav items sit centered in the flex container. Changing the language triggers the `languageChanged` handler which sets `dir`, fixing the layout.

## Solution
Set the initial `dir` and `lang` attributes on `<html>` at startup, not only on language change.

### `src/i18n/config.ts`

After `i18n.init(...)`, add:

```ts
// Set initial direction
const initialDir = RTL_LANGUAGES.includes(i18n.language) ? "rtl" : "ltr";
document.documentElement.dir = initialDir;
document.documentElement.lang = i18n.language;
```

This ensures `dir="ltr"` is present immediately on load, so `ltr:ml-auto` applies right away. No other files need changes.

