

# Restyle Product Info Row to Match Website Design

## Summary
Update the 3-column product info section (Main Features, Technical Specification, Application) to use the same card-based styling found throughout the rest of the website.

## Current vs. Proposed Design

**Current styling:**
- Plain divs with no background or border
- Small Award icons aligned to the right of headers
- Simple list items with dashes

**Proposed styling (matching site patterns):**
- Each column wrapped in a card container with `bg-card border border-border rounded-lg p-6`
- Icon positioned above the heading in a colored container (`w-12 h-12 rounded-lg bg-primary/10`)
- Hover effect on cards (`hover:border-primary/50 transition-colors`)
- Use more appropriate icons: Star/Award for Main Features, Settings/Cog for Technical Specs, Target for Applications
- List items with subtle bullet styling matching other components

## Visual Reference

Looking at the Applications component and FeaturedProducts component, the standard card pattern is:
```text
+----------------------------------+
|  [Icon Container]                |
|                                  |
|  Title                           |
|                                  |
|  • List item 1                   |
|  • List item 2                   |
|  • List item 3                   |
+----------------------------------+
```

## Implementation Steps

### 1. Update Icon Imports
Add new icons for better semantic meaning:
- `Star` for Main Features
- `Settings` for Technical Specification  
- `Target` for Application

### 2. Restyle the 3-Column Grid
Wrap each column in a card container matching the site's established pattern:
- Add `bg-card border border-border rounded-lg p-6` to each column
- Add hover effect `hover:border-primary/50 transition-colors`
- Move icon to top-left in a `w-12 h-12 rounded-lg bg-primary/10` container
- Add `group` class for hover states

### 3. Update Header and List Styling
- Remove the flex layout that placed icon next to header
- Position icon above the heading
- Change list item prefix from `-` to `•` for consistency
- Adjust spacing between elements

---

## Technical Details

**File to modify:** `src/pages/ProductDetail.tsx`

**Icon changes:**
- Import `Star`, `Settings`, `Target` from lucide-react (remove or keep `Award`)

**Class changes for each column:**
```
Before: <div>
After:  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group">
```

**Icon container change:**
```
Before: <Award className="w-6 h-6 text-primary" />
After:  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Star className="w-6 h-6 text-primary" />
        </div>
```

**List item change:**
```
Before: - {feature}
After:  • {feature}
```

