

## Problem

Both SVG logos (`alarge-logo.svg` and `alarge-logo-footer.svg`) use a `<text>` element with `font-family: Inter` to render the word "camera". In private/incognito browsing, the Inter font from Google Fonts may not be cached, causing the text to render in a fallback system font before (or instead of) Inter loading.

## Solution

Embed a Google Fonts `@import` for Inter directly inside each SVG file within a `<style>` block in `<defs>`. This makes the SVGs self-contained -- they will fetch and use Inter regardless of browser cache state.

## Changes

**`src/assets/alarge-logo.svg`** and **`src/assets/alarge-logo-footer.svg`**

Add the following inside the existing `<defs>` block of each SVG:

```xml
<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Inter&amp;display=swap');
</style>
```

This is a minimal, non-destructive change -- no paths or shapes are altered, and the text element continues to work as before, but now with a guaranteed font source embedded in the SVG itself.

