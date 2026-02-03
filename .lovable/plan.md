
# Product Specifications Table for 1/1.7" FA Lenses

## Summary
Replace the current Technical Specifications section on the 1/1.7 inch FA Lenses product page with a horizontal comparison table that displays all 7 lens models in rows with their specifications in columns.

## Table Layout

```text
+--------------------+-----+-------------+----------+------------+--------------------+-------+
| Model              | EFL | Img. Circle | F#       | WD Range   | Optical Distortion | Mount |
+--------------------+-----+-------------+----------+------------+--------------------+-------+
| DZO_LA0628A_1712   | 6   | 1/1.7"      | F2.8-16  | 100-inf    | -0.37%             | C     |
| DZO_LA0828A_1712   | 8   | 1/1.7"      | F2.8-16  | 100-inf    | -0.37%             | C     |
| DZO_LA1228A_1712   | 12  | 1/1.7"      | F2.8-16  | 100-inf    | -0.18%             | C     |
| DZO_LA1628A_1712   | 16  | 1/1.7"      | F2.8-16  | 100-inf    | -0.05%             | C     |
| DZO_LA2528A_1712   | 25  | 1/1.7"      | F2.8-16  | 100-inf    | 0.06%              | C     |
| DZO_LA3528A_1712   | 35  | 1/1.7"      | F2.8-16  | 200-inf    | 0.03%              | C     |
| DZO_LA5028A_1712   | 50  | 1/1.7"      | F2.8-16  | 250-inf    | 0.09%              | C     |
+--------------------+-----+-------------+----------+------------+--------------------+-------+
```

## Implementation Steps

### 1. Add FA Lens Variants Data
Create a `faLensVariants` array in `ProductDetail.tsx` containing all 7 lens models with their specifications:
- Model name
- EFL (mm)
- Image Circle
- F-number range
- Working Distance Range (mm)
- Optical Distortion (%)
- Mount type

### 2. Update Technical Specifications Section
For the `1-1-7-inch-fa-lenses` product only, replace the current vertical key-value table (lines 176-201) with:
- A horizontal comparison table using the Table component
- Header row with column names: Model, EFL, Img. Circle, F#, WD Range, Optical Distortion, Mount
- 7 data rows, one for each lens variant

### 3. Conditional Rendering
Keep the existing specifications table for other products (like the camera), but use the new comparison table specifically for the FA Lenses product page.

### 4. Responsive Design
- Add horizontal scroll wrapper for smaller screens
- Use the existing Table UI components for consistent styling
- Apply alternating row colors for readability

---

## Technical Details

**File to modify:** `src/pages/ProductDetail.tsx`

**Imports to add:**
- Table, TableHeader, TableBody, TableHead, TableRow, TableCell from `@/components/ui/table`

**Changes:**
1. Add `faLensVariants` data array with all 7 products
2. Add conditional check: if slug is `1-1-7-inch-fa-lenses`, render the comparison table
3. Otherwise, render the existing vertical specifications table

**Styling:**
- Use existing Table components which already have proper styling
- Add `overflow-x-auto` wrapper for mobile responsiveness
- Maintain visual consistency with the rest of the page
