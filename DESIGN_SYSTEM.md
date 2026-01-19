# Nouranto Design System

## Overview
This document outlines the visual design system and CSS conventions for the Nouranto B2B agriculture export website. The project utilizes **Tailwind CSS** (via CDN) for styling, with a custom configuration embedded directly in the `index.html` file.

## Color Palette

The color scheme reflects a "Bold Minimalism" aesthetic, using deep greens for heritage and growth, accented by earth tones and clean backgrounds.

| Color Name | Hex Code | Tailwind Class | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | `#153721` | `text-primary`, `bg-primary` | Main text, buttons, footer background, borders. Deep forest green. |
| **Accent** | `#B4715F` | `text-accent`, `bg-accent` | CTAs, highlights, badges, hover states. Terracotta/Earth tone. |
| **Muted Gold** | `#CFA979` | `text-muted-gold` | Stats numbers, icons, subheading accents. |
| **Background Light** | `#f6f8f7` | `bg-background-light` | Main page background (light mode). Off-white/light gray. |
| **Background Dark** | `#141e18` | `bg-background-dark` | Main page background (dark mode). Dark green/black. |
| **White** | `#FFFFFF` | `text-white`, `bg-white` | Text on dark backgrounds, card backgrounds. |

## Typography

The typography pairs a modern sans-serif for readability with a classic serif for headings to convey heritage and trust.

### Font Families
*   **Display/Body:** `Manrope` (Sans-serif)
    *   Class: `font-display` (configured), or default sans stack.
    *   Usage: Body text, navigation links, buttons, small labels.
*   **Headings:** `Noto Serif` (Serif)
    *   Class: `font-serif` (configured) or `.serif-heading`.
    *   Usage: Section titles, hero headlines, large stats numbers.

### Type Scale & Styles
*   **Hero Headline:** `text-5xl lg:text-7xl font-bold leading-[1.1]`
*   **Section Headings:** `text-4xl font-bold serif-heading`
*   **Card Titles:** `text-2xl font-bold serif-heading`
*   **Body Text:** `text-lg lg:text-xl` (Lead), `text-sm` (Standard)
*   **Labels/Badges:** `text-xs font-bold uppercase tracking-wider`

## Visual Elements

### Border Radius
*   **Standard:** `rounded-lg` (0.5rem) - Buttons, inputs.
*   **Cards:** `rounded-2xl` (1rem) - Product cards, feature blocks.
*   **Large Containers:** `rounded-[2.5rem]` - Global Partnership Banner.
*   **Images:** `rounded-[2rem]` - Hero image.

### Shadows & Effects
*   **Soft Shadow:** `shadow-sm` (Cards default state)
*   **Hover Shadow:** `shadow-xl` (Cards hover state, Buttons)
*   **Transitions:** `transition-all duration-300` (or `duration-500` for cards)
*   **Glassmorphism:** `bg-background-light/80 backdrop-blur-md` (Sticky Header)

### Icons
*   **Library:** Google Material Symbols Outlined.
*   **Usage:** Embedded as spans: `<span class="material-symbols-outlined">icon_name</span>`

## Layout & Spacing

### Grid System
*   **Container:** `max-w-[1440px] mx-auto`
*   **Padding:** `px-6 lg:px-20` (Standard horizontal padding)
*   **Grid Columns:**
    *   `grid-cols-1 lg:grid-cols-12` (Hero)
    *   `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` (Products, Footer)

### Responsiveness
*   **Mobile First:** Default classes are for mobile.
*   **Breakpoints:**
    *   `md:` Tablet layout adjustments.
    *   `lg:` Desktop layout (sidebar, navigation, grid expansions).

## Components

### Buttons
*   **Primary:** `bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary/90`
*   **Secondary/Outline:** `border-2 border-primary/20 bg-transparent px-8 py-4 rounded-xl font-bold hover:border-primary`
*   **Text Link:** `text-accent font-bold flex items-center gap-2 hover:gap-4`

### Cards (Product)
*   **Structure:** Flex column, `bg-white dark:bg-white/5`, `border border-primary/5`.
*   **Image:** Aspect ratio container, `bg-cover bg-center`.
*   **Interactions:** Group hover scales image (`group-hover:scale-110`), button fills color.

### Navigation
*   **Sticky Header:** Fixed position (`sticky top-0 z-50`), blurred background.
*   **Links:** `text-sm font-semibold hover:text-accent`.

## CSS Configuration (Tailwind)
The configuration is injected via a script tag in `index.html`:

```javascript
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#153721",
                "accent": "#B4715F",
                // ... other colors
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "serif": ["Noto Serif", "serif"]
            },
            // ... border radius extensions
        },
    },
}
```
