---
name: Modern Corporate Utility
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#424654'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#737785'
  outline-variant: '#c3c6d6'
  surface-tint: '#0957cc'
  primary: '#0048af'
  on-primary: '#ffffff'
  primary-container: '#1e60d5'
  on-primary-container: '#dee5ff'
  inverse-primary: '#b1c5ff'
  secondary: '#516070'
  on-secondary: '#ffffff'
  secondary-container: '#d5e4f8'
  on-secondary-container: '#576676'
  tertiary: '#534d49'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c6560'
  on-tertiary-container: '#ede3dd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b1c5ff'
  on-primary-fixed: '#001946'
  on-primary-fixed-variant: '#00419e'
  secondary-fixed: '#d5e4f8'
  secondary-fixed-dim: '#b9c8db'
  on-secondary-fixed: '#0e1d2b'
  on-secondary-fixed-variant: '#3a4858'
  tertiary-fixed: '#eae1da'
  tertiary-fixed-dim: '#cec5bf'
  on-tertiary-fixed: '#1f1b17'
  on-tertiary-fixed-variant: '#4b4641'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  container-max: 80rem
---

## Brand & Style
The design system reflects a modern corporate identity tailored for an established business computing center and internet workspace. It combines the reliability of high-grade enterprise IT services with the approachable utility of a modern productivity hub. The visual language balances structure and precision with warm hospitality, designed to evoke competence, institutional trust, speed, and quiet focus.

The design movement combines **Corporate Modern** with **Soft Precision**: clean surfaces, refined hairline dividers, generous uniform spacing, and balanced container radii. The visual aesthetic avoids cold sterility through warm architectural neutrals and an earthy stone ribbon accent, establishing an atmosphere that feels grounded, established, and distinctly professional.

## Colors
The color palette establishes clean optical contrast while strictly adhering to WCAG AA accessibility standards across all interactive states and text levels.

- **Primary (`#1E60D5`):** A clear, mid-tone royal corporate blue delivering authoritative presence and high visual clarity for primary calls-to-action, key indicators, and active navigation nodes.
- **Secondary (`#DBEAFE`):** A soft powder-blue tint used for surface fills, active container highlights, table row selections, and muted badges.
- **Tertiary Accent (`#78716C`):** A warm, grounding stone taupe derived from classic ribbon insignia and architectural materials, reserved for subtle status indicators, subtle category markers, and premium badge accents.
- **Neutral Base (`#1E293B`):** Deep charcoal slate providing optimal reading contrast against light backdrops. Body copy uses `#334155`, while secondary metadata utilizes `#64748B`.
- **Canvas & Surfaces:** Primary background is a warm tinted off-white (`#F8FAFC`), layered over with pure white (`#FFFFFF`) card containers to deliver crisp foreground separation.

## Typography
The system employs a dual-typeface structure to marry institutional authority with digital legibility:
- **Headings & Display:** Set in **Plus Jakarta Sans** for its clean, geometric balance and contemporary corporate air. Tight negative letter-spacing applied across displays provides a crisp, structured finish.
- **Body, Inputs & Data UI:** Standardized on **Inter** to ensure maximum legibility across complex data matrices, workstation availability schedules, pricing calculators, and peripheral device statuses. Numerical figures render with tabular alignment in financial and operational contexts.

## Layout & Spacing
The layout adheres to a predictable 8pt baseline grid built on a 12-column responsive fluid model. 

- **Desktop (1024px+):** 12 columns, 24px gutters, maximum container width capped at 1280px (`80rem`) centered with auto margins.
- **Tablet (768px - 1023px):** 8 columns, 20px gutters, 24px outer horizontal margins.
- **Mobile (320px - 767px):** 4 columns, 16px gutters, 16px outer margin. Side-by-side status metrics reflow into vertical card stacks.

Content surfaces follow uniform density scales. Internal card padding is strictly uniform at `1.5rem` (`24px`), maintaining consistent rhythm across disparate workstation management, billing, and booking dashboards.

## Elevation & Depth
Elevation is rendered through clean surface layering and soft, daylight-inspired ambient shadows rather than harsh physical skeuomorphism:

- **Level 0 (Flat):** Primary canvas at `#F8FAFC`, flush containers, and embedded input frames using a 1px boundary stroke of `#E2E8F0`.
- **Level 1 (Cards & Workstation Panels):** White surface (`#FFFFFF`) with a subtle composite shadow: `0 1px 3px 0 rgba(30, 41, 59, 0.04), 0 1px 2px -1px rgba(30, 41, 59, 0.04)` combined with a 1px `#E2E8F0` border.
- **Level 2 (Popovers, Dropdowns & Menus):** Elevated white surface with `0 10px 15px -3px rgba(30, 41, 59, 0.07), 0 4px 6px -4px rgba(30, 41, 59, 0.04)`.
- **Level 3 (Modals & Command Palettes):** Centered floating dialogs over a 40% opacity slate scrim (`rgba(15, 23, 42, 0.40)` with `backdrop-filter: blur(4px)`), elevated with `0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 8px 10px -6px rgba(30, 41, 59, 0.05)`.

## Shapes
A roundedness factor of `2` dictates the structural curvature across the interface. Structural cards, service panels, and hero modules prominently feature `rounded-xl` (1.5rem / 24px) corners, delivering a friendly yet engineered enclosure. Standard form inputs, interactive buttons, and table rows resolve at regular rounded radii (0.5rem / 8px to 0.75rem / 12px) to preserve density and edge clarity.

## Components

- **Buttons:**
  - *Primary:* Solid fill `#1E60D5`, white text, 10px 20px padding, 8px corner radius. Hover: `#1950B5`. Focus: 3px ring of `#DBEAFE` with `#1E60D5` outline.
  - *Secondary:* Powder-blue fill `#DBEAFE`, deep blue text `#1E60D5`. Hover: `#BFDBFE`.
  - *Accent Ribbon Variant:* Warm stone stroke `#78716C`, text `#44403C`, white fill for tertiary actions.
- **Cards & Enclosures:**
  - Base white surface, 24px inner padding, `rounded-xl` boundary with `1px solid #E2E8F0`. Hoverable cards transition to a subtle translateY(-1px) with an expanded ambient shadow.
- **Form Inputs:**
  - Height of 44px, 12px horizontal padding, `rounded-md` (8px). Stroke `#CBD5E1` on resting state, transitioning to `#1E60D5` stroke with a 3px `#DBEAFE` halo on focus. Error states swap border to `#DC2626` and focus ring to `#FEE2E2`.
- **Chips & Badges:**
  - Workstation status, bandwidth tiers, and pricing tags use 4px vertical / 10px horizontal padding, rounded-full geometry, Inter `label-sm`. Active workstation badges pair `#DCFCE7` with `#15803D` text; corporate tier badges pair `#F5F5F4` with stone accent `#78716C` text.
- **Checkboxes & Radios:**
  - 18px square (checkbox) and circle (radio), `#CBD5E1` border resting, `#1E60D5` fill when checked with pure white geometric checkmarks and center dots.
- **Service & Workstation Grid Rows:**
  - Striped or bordered list units with 16px vertical padding, hover highlights in `#F8FAFC`, right-aligned tabular status tags, and tactile interactive affordances.