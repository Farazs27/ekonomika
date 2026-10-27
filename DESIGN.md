---
name: Ekonomika
description: Modern Swedish Corporate Advisory — Nordic Executive Accounting & Advisory for Stockholm's digital accounting firm
colors:
  white: "#FFFFFF"
  surface-alt: "#F4F7F5"
  sage-soft: "#E8F0EC"
  forest-dark: "#183328"
  forest: "#244536"
  forest-hover: "#2E5946"
  sage-accent: "#D9E7C8"
  ink: "#14241D"
  ink-secondary: "#22352C"
  muted: "#43564D"
  muted-light: "#687B72"
  border: "#E2EAE5"
  border-strong: "#CBD8D1"
typography:
  display:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.25rem, 3.8vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  page-display:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.15rem, 3.4vw, 2.85rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  section-display:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.35rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  card-headline:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  row-title:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.65rem)"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  step-title:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.65
  lead-compact:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.09375rem"
    fontWeight: 400
    lineHeight: 1.65
  subhead:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "15px"
    fontWeight: 600
  label:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
rounded:
  sm: "6px"
  md: "10px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "32px"
  xl: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "14px 26px"
  button-primary-hover:
    backgroundColor: "{colors.forest-dark}"
    textColor: "{colors.white}"
  button-light:
    backgroundColor: "{colors.sage-accent}"
    textColor: "{colors.forest-dark}"
    rounded: "{rounded.sm}"
    padding: "14px 26px"
  button-light-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.forest-dark}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "14px 26px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.ink}"
  button-nav-cta:
    backgroundColor: "{colors.sage-accent}"
    textColor: "{colors.forest-dark}"
    rounded: "{rounded.sm}"
    padding: "11px 22px"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
  service-pillar-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "36px 32px"
---

# Design System: Ekonomika

## Overview

**Creative North Star: "Nordic Executive Accounting & Advisory"**

Ekonomika presents itself with the calm, institutional credibility of a modern Swedish corporate accounting and advisory firm—benchmarked against **Aspia**, **Ludvig & Co**, and **Grant Thornton Sverige**. Built for Swedish business owners across trades and professions (builders, hairdressers, medical clinicians, lawyers, and founders) as well as private declaration clients, the visual system replaces boxed brutalist grids, monospace badges, and terracotta template chrome with generous white space, deep executive forest-green authority, and straightforward service clarity.

The system alternates a crisp white primary canvas (`--white`) with soft Nordic sage-mist section bands (`--surface-alt`) and full-bleed executive forest-dark bands (`--forest-dark`) for the header, hero, digital workflow section, and footer. A unified corporate sans-serif family (`Public Sans`) handles every typographic role from `700`-weight display headlines down to `400`-weight Swedish prose and `600`-weight form labels, keeping the reading experience calm, direct, and unhurried.

**Key Characteristics:**
- **Alternating Executive Bands:** Full-bleed deep executive forest (`--forest-dark`) hero and workflow bands alternate with crisp white (`--white`) and soft Nordic sage-mist (`--surface-alt`) editorial sections.
- **Single-Family Corporate Sans:** `Public Sans` across all display, headline, title, body, and label roles (`tabular-nums` enabled globally on `body`) with zero decorative kickers, eyebrows, or monospace badge housings.
- **Restrained Hairline Separation:** Subtle `1px solid` hairline dividers (`--border` on light surfaces, `rgba(255, 255, 255, 0.08)` to `0.14` on dark forest surfaces) separate section bands, editorial service rows, and card headers without boxing content into rigid cells.
- **Measured Corner Geometry:** Restrained `6px` radii (`--radius-sm`) for buttons, form inputs, and social icon buttons paired with `10px` radii (`--radius-md`) for editorial photography frames, service pillar cards, and the contact form card.
- **Natural Stockholm Advisory Photography:** Real and bespoke natural-light Nordic office photography (`aspect-ratio: 4 / 3` and `16 / 10`) grounded by soft ambient elevation shadows.

## Colors

The palette balances crisp daylight white and Nordic sage-mist surfaces with deep executive forest greens and luminous sage-lime accents on dark bands.

### Primary
- **Executive Forest Dark** (`#183328`): Primary institutional anchor used for the sticky top navigation bar, full-bleed hero band, digital workflow section (`.workflow-section`), site footer, primary button hover state, and sub-headings inside pillar cards and contact details.
- **Corporate Pine Forest** (`#244536`): Resting background fill and border for `.btn-primary`, checklist checkmark icons (`.service-checklist svg`), text selection highlight (`::selection`), caret color, `:focus-visible` outlines, and form input focus borders.
- **Forest Hover Spruce** (`#2E5946`): Interactive hover state for inline advisory text links (`.text-link:hover`).

### Secondary
- **Luminous Sage Accent** (`#D9E7C8`): High-contrast executive accent on dark `--forest-dark` surfaces—used for the navigation bar `Kontakta oss` CTA (`.nav-cta`), primary hero CTA (`.btn-light`), active navigation underline (`border-bottom-color`), workflow step `h3` headings, and footer social link hover fills.
- **Soft Nordic Sage Tint** (`#E8F0EC`): Subtle circular badge fill (`--sage-soft` / `--surface-tint`) behind the 4-pillar trust bar checkmarks (`.benefit-check`).

### Neutral
- **Crisp Advisory White** (`#FFFFFF`): Primary page background (`body`), service pillar cards (`.service-pillar`), contact form card (`.contact-card`), form input backgrounds, and primary text on `--forest-dark` bands.
- **Nordic Sage-Mist Surface** (`#F4F7F5`): Secondary alternating section band (`--surface-alt`) used on `.advisory-services`, `.services-page`, `.contact-section`, and `.btn-secondary:hover`.
- **Slate-Forest Ink** (`#14241D`): Primary typographic ink (`--ink`) for body copy, `h1`–`h3` headings on light surfaces, and `.btn-secondary` labels.
- **Secondary Pine Ink** (`#22352C`): Elevated body copy (`--ink-secondary`) for lead paragraphs (`.home-intro-lead`, `.about-lead`), checklist items, contact detail values, and form labels.
- **Muted Sage Slate** (`#43564D`): Standard narrative paragraph color (`--muted`) across light and sage-mist sections.
- **Muted Light Slate** (`#687B72`): Supporting metadata captions (`.contact-meta`) and form input placeholders (`--muted-light`).
- **Hairline Sage Border** (`#E2EAE5`): Standard `1px solid` divider and card border token (`--border`) separating section bands, editorial service rows, card headers, and photography frames.
- **Strong Sage Border** (`#CBD8D1`): Higher-contrast `1px solid` stroke (`--border-strong`) reserved for interactive form inputs, textareas, and resting `.btn-secondary` borders.

### Named Rules
**The Alternating Band Rule.** Page rhythm comes from full-bleed horizontal surface transitions between Executive Forest Dark (`#183328`), Crisp Advisory White (`#FFFFFF`), and Nordic Sage-Mist (`#F4F7F5`). Never place heavy outer box borders around entire page sections.

**The Sage-On-Forest Contrast Rule.** Luminous Sage Accent (`#D9E7C8`) with `#183328` text is reserved exclusively for primary triggers and highlights sitting on `#183328` dark forest bands (`.nav-cta`, `.btn-light`, `.workflow-step h3`, active nav underline). On light `#FFFFFF` or `#F4F7F5` surfaces, primary actions always use solid Corporate Pine Forest (`#244536`) with `#FFFFFF` text.

## Typography

**Display Font:** `Public Sans` (weights `600`, `700`, fallback `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
**Body Font:** `Public Sans` (weights `400`, `500`, `600`, fallback `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)

**Character:** Clean, institutional, and contemporary—`Public Sans` delivers calm Scandinavian corporate clarity across every heading, narrative paragraph, and form control, with `font-variant-numeric: tabular-nums` enabled globally for financial precision.

### Hierarchy
- **Display** (`700`, `clamp(2.25rem, 3.8vw, 3.25rem)` on `.hero h1`; `clamp(2rem, 3.4vw, 2.85rem)` on interior page `h1`s, `line-height: 1.12–1.15`, `letter-spacing: -0.025em`): Primary page headlines across `Hem`, `Våra Tjänster`, `Om Oss`, and `Kontakt`.
- **Headline** (`700`, `clamp(1.75rem, 2.6vw, 2.35rem)`, `line-height: 1.2`, `letter-spacing: -0.02em`): Section-level `h2` headings in `.home-intro-content`, `.advisory-header`, and `.workflow-intro-copy`.
- **Title** (`700` or `650`, `1.25rem` to `clamp(1.35rem, 2vw, 1.65rem)`, `line-height: 1.25`, `letter-spacing: -0.015em`): Service pillar card titles (`1.375rem`, `700`), contact card header (`1.5rem`, `700`), alternating advisory row `h3` headings (`clamp(1.35rem, 2vw, 1.65rem)`, `650`), and workflow step titles (`1.25rem`, `650`).
- **Body** (`400` regular / `500` lead, `1rem` base, `1.03125rem–1.125rem` narrative and lead copy, `line-height: 1.65–1.7`): Calm Swedish prose constrained to `54ch–65ch` for effortless reading.
- **Label** (`600`, `0.875rem–0.9375rem`, `line-height: 1.35–1.5`): Form field labels (`0.875rem`), benefit bar labels (`0.9375rem`), button text (`15px`), and inline advisory `.text-link` triggers (`0.9375rem`).

### Named Rules
**The Direct Heading Rule.** Every `h1`, `h2`, and `h3` opens directly at its natural typographic scale without uppercase kickers, category eyebrows, or boxed numeral prefixes.

**The Single-Voice Sans Rule.** All headings, body copy, navigation links, buttons, and form controls use `Public Sans` (`--font-sans`). Never introduce decorative display serifs or monospace badge fonts.

## Layout

All sections align to a centered `.wrap` container (`width: min(1200px, calc(100% - 48px))`, narrowing to `calc(100% - 32px)` below `760px`). Vertical section rhythm uses generous `80px–96px` top/bottom padding on desktop (`64px` on mobile):

- **Corporate Hero Band (`.hero-inner`):** 2-column grid (`1.05fr 0.95fr`, `gap: 64px`, `align-items: center`) inside a full-bleed `--forest-dark` band (`padding: 84px 0 92px`). Left column (`max-width: 580px`) holds `h1`, `.hero-lead` (`max-width: 54ch`), and `.hero-actions`; right column displays a `4 / 3` advisory photograph.
- **4-Pillar Trust Strip (`.benefits-bar`):** Full-width `--white` bar (`padding: 28px 0`, `border-bottom: 1px solid var(--border)`) housing a 4-column list (`repeat(4, minmax(0, 1fr))`, `gap: 24px`) of circular sage-soft check badges and `600`-weight pillar labels.
- **Editorial Presentation & Advisory Rows (`.home-intro-grid`, `.advisory-row`, `.about-layout`, `.workflow-intro`):** Balanced 2-column splits (`1.05fr 0.95fr` or `1fr 1fr`, `gap: 56px–64px`). In `.advisory-rows`, rows alternate image/copy order via `.advisory-row-reverse` and are separated by `1px solid var(--border)` with `64px` vertical spacing.
- **3-Column Service Pillars & Workflow Steps (`.services-pillars`, `.workflow-steps`):** Equal 3-column grids (`repeat(3, minmax(0, 1fr))`, `gap: 28px–32px`) presenting structured checklists (`Ekonomi`, `Administration`, `Kompetens & Rådgivning`) and the 3-step digital accounting flow.
- **Contact Split (`.contact-grid`):** Asymmetric 2-column layout (`1fr 1.1fr`, `gap: 64px`) pairing direct contact channels on the left with the elevated `.contact-card` form on the right.
- **Responsive Breakpoints:**
  - **Tablet (`max-width: 1024px`):** All 2-column and 3-column layouts (`.hero-inner`, `.home-intro-grid`, `.advisory-row`, `.workflow-intro`, `.about-layout`, `.contact-grid`, `.services-pillars`, `.workflow-steps`) stack cleanly to `1fr` (`gap: 24px–40px`), `.advisory-row-reverse` resets to natural media-first order, `.benefits-list` shifts to `repeat(2, minmax(0, 1fr))`, and `.footer-top` shifts to `1fr 1fr`.
  - **Mobile (`max-width: 760px`):** Container side gutters adjust to `16px` each side (`calc(100% - 32px)`), header height condenses from `82px` to `72px` with `.menu-toggle` revealing the full-width `.nav-links.open` drawer, `.benefits-list`, `.about-highlights`, `.form-row`, and `.footer-top` stack to `1fr`, and card padding tightens to `28px 22px`.

## Elevation & Depth

Depth combines **alternating tonal surface bands (`#183328`, `#FFFFFF`, `#F4F7F5`)** with **soft, diffused corporate elevation shadows** on cards and photography frames.

### Shadow Vocabulary
- **Card Elevation Shadow** (`--shadow-card: 0 12px 32px -12px rgba(20, 36, 29, 0.08)`): Applied to white corporate cards (`.service-pillar`, `.contact-card`) and daylight editorial photography frames (`.home-intro-media img`, `.advisory-media img`).
- **Elevated Media & Drawer Shadow** (`--shadow-elevated: 0 20px 44px -16px rgba(20, 36, 29, 0.14)`): Applied to featured office photography (`.about-media`) and the open mobile navigation dropdown (`.nav-links` below `760px`).
- **Dark-Band Media Shadow** (`0 24px 48px rgba(8, 20, 15, 0.28)` on `.hero-visual img`; `0 20px 40px rgba(8, 20, 15, 0.25)` on `.workflow-intro-media img`): Grounds photography mounted inside `--forest-dark` bands.

### Named Rules
**The Restrained Lift Rule.** Interactive buttons and social links never cast heavy drop shadows; on `:hover` and `:focus-visible`, they respond with a subtle `-1px` to `-2px` vertical lift (`transform: translateY(-1px)`) and crisp color transitions over `0.2s cubic-bezier(0.22, 1, 0.36, 1)`.

## Shapes

The form language uses **softened corporate geometry** with two primary border-radius tokens and `1px solid` borders:

- **Small Control Radius (`--radius-sm: 6px`):** Applied to all buttons (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-light`, `.btn-outline-light`, `.nav-cta`, `.menu-toggle`), form inputs and textareas, and `38px × 38px` footer social icon buttons.
- **Medium Container & Media Radius (`--radius-md: 10px`):** Applied to `.service-pillar` cards, `.workflow-step` cards, `.contact-card`, and all photography frames (`.hero-visual img`, `.home-intro-media img`, `.advisory-media img`, `.workflow-intro-media img`, `.about-media`).
- **Circular Trust Badges (`border-radius: 50%`):** Used exclusively for the `28px × 28px` `.benefit-check` icons in the 4-pillar trust strip.
- **Hairline Borders (`1px solid`):** Light-surface cards and photographs use `1px solid var(--border)` (`#E2EAE5`); form controls and secondary buttons use `1px solid var(--border-strong)` (`#CBD8D1`); dark-band cards and images use `1px solid rgba(255, 255, 255, 0.12)` to `0.14`.

## Components

### Buttons
Corporate rectangular buttons with `6px` corners (`--radius-sm`), `Public Sans` `15px` (`600` weight) labels, and `14px 26px` padding (`11px 22px` for `.nav-cta`).
- **Primary (`.btn-primary`, `.button`):** Corporate Pine Forest fill (`#244536`), `#FFFFFF` text, `1px solid #244536` border. Hover shifts fill and border to Executive Forest Dark (`#183328`) with `transform: translateY(-1px)`.
- **Light On Dark (`.btn-light`, `.nav-cta`):** Luminous Sage Accent fill (`#D9E7C8`) with `#183328` text; hover shifts to crisp `#FFFFFF` fill with `#183328` text and `transform: translateY(-1px)`.
- **Outline On Dark (`.btn-outline-light`):** Transparent fill with `#FFFFFF` text and `1px solid rgba(255, 255, 255, 0.32)` border; hover adds `rgba(255, 255, 255, 0.08)` fill and solid `#FFFFFF` border.
- **Secondary (`.btn-secondary`):** `#FFFFFF` fill with `#14241D` ink text and `1px solid #CBD8D1` (`--border-strong`) border; hover shifts fill to `#F4F7F5` (`--surface-alt`) and border to `#244536` (`--forest`).
- **Inline Advisory Link (`.text-link`):** Borderless inline action (`0.9375rem`, `600`, `#183328`) with a `16px × 16px` round-capped arrow SVG (`gap: 8px`). Hover shifts text to `#2E5946` (`--forest-hover`) and expands `gap` to `12px`.

### Cards / Containers
- **Service Pillar Columns (`.service-pillar`):** Open corporate advisory columns on `--white` separated by `1px solid #E2EAE5` (`--border`) vertical hairlines (`40px 36px` padding). Contains a bottom-bordered header (`.service-pillar-head`, `padding-bottom: 24px`, `margin-bottom: 24px`) and a vertical `.service-checklist` (`gap: 14px`) with `18px × 18px` `#244536` check icons.
- **Executive Workflow Columns (`.workflow-step`):** Open 3-column steps inside `--forest-dark` separated by `1px solid rgba(255, 255, 255, 0.14)` vertical hairlines (`8px 36px` padding). Each step opens with a `0.875rem` (`700`, `--sage-accent`) tabular step number (`01`, `02`, `03`) above a `1.25rem` (`650`) `#FFFFFF` heading and `rgba(255, 255, 255, 0.82)` body copy.
- **Contact Form Card (`.contact-card`):** `#FFFFFF` card (`40px` padding, `1px solid #E2EAE5` border, `10px` corner radius via `--radius-md`, and `--shadow-card` elevation) housing the 2-column `.form-row` grid (`gap: 18px`) and full-width submit button.

### Inputs / Fields (`.form-group`)
Clean corporate form controls inside `.contact-card`.
- **Style:** `0.875rem` (`600`, `#22352C`) `<label>` stacked `7px` above a `#FFFFFF` input or textarea (`12px 14px` padding, `1px solid #CBD8D1` border, `6px` corner radius via `--radius-sm`, `0.96875rem` text size, and `#687B72` placeholder).
- **Focus:** `border-color: #244536` (`--forest`) with a soft `0 0 0 3px rgba(36, 69, 54, 0.12)` focus ring (`outline: none`).
- **Status Note (`.contact-form-note`):** Live polite status region (`0.9rem`, `#43564D`) that shifts to `#244536` (`600` weight) when `.is-success` is applied.

### Navigation (`.site-header`, `.nav`)
Sticky full-bleed Crisp Advisory White (`#FFFFFF`) header bar (`height: 82px` desktop, `72px` mobile) with `border-bottom: 1px solid #E2EAE5` (`--border`).
- **Brand Mark (`.brand img`):** Full-color green Ekonomika wordmark (`ekonomika-logo-gron.png`, `width: 210px` desktop, `175px` mobile).
- **Links (`.nav-links a:not(.nav-cta)`):** `Public Sans` `15px` (`500`), `#43564D` (`--muted`) text with `6px 0` vertical padding and a `2px solid transparent` bottom border (`gap: 32px` between items). Hover shifts text to `#14241D` (`--ink`); active page (`[aria-current="page"]`) sets `#183328` (`--forest-dark`) text, `font-weight: 600`, and `border-bottom-color: #183328`.
- **Primary Nav CTA (`.nav-cta`):** Solid `#183328` (`--forest-dark`) button (`11px 22px` padding, `6px` corner radius via `--radius-sm`, `#FFFFFF` text, `600` weight) that shifts to `#2E5946` (`--forest-hover`) on hover.

### Benefits Trust Bar (`.benefits-bar`)
A clean, full-width horizontal trust strip directly beneath the hero section on `Hem/index.html`.
- **Structure:** 4-column grid (`.benefits-list`) on `#FFFFFF` with `border-bottom: 1px solid #E2EAE5` and `28px 0` vertical padding.
- **Items (`.benefit-item`):** Pairs a `28px × 28px` circular `#E8F0EC` (`--sage-soft`) badge containing a `15px × 15px` `#183328` checkmark icon with a `0.9375rem` (`600`, `#14241D`) label (`Digitala Lösningar`, `Kvalificerade Redovisningsekonomer`, `Personlig Kundservice`, `Administration`).

## Do's and Don'ts

### Do:
- **Do** alternate section backgrounds cleanly between `#183328` (`--forest-dark`), `#FFFFFF` (`--white`), and `#F4F7F5` (`--surface-alt`), using `1px solid #E2EAE5` (`--border`) only for subtle horizontal section or row separation.
- **Do** set all typography in `Public Sans` (`--font-sans`) with `700` weight for `h1`/`h2` headings (`-0.02em` to `-0.025em` tracking) and `400`–`500` weight for Swedish body prose (`54ch–65ch`).
- **Do** use `--radius-sm` (`6px`) on buttons and form inputs and `--radius-md` (`10px`) on cards and photography frames, paired with `--shadow-card` or `--shadow-elevated`.
- **Do** use `#D9E7C8` (`--sage-accent`) with `#183328` text for primary CTAs and active indicators on dark `#183328` bands, and solid `#244536` (`--forest`) with `#FFFFFF` text for primary CTAs on light surfaces.
- **Do** use round-capped (`stroke-linecap="round"`, `stroke-linejoin="round"`) SVG checkmarks and directional arrows across lists, trust strips, and text links.

### Don't:
- **Don't** introduce heavy `1.5px` brutalist outer grids, `0px` sharp-cornered plates, or exposed cell borders around content sections.
- **Don't** use terracotta, brass, or orange accent colors (`#B86438`), display serifs (`Bricolage Grotesque`), or boxed monospace numeral badges (`Azeret Mono`).
- **Don't** place uppercase kickers, category eyebrows, or pill tags above `h1`, `h2`, or `h3` headings.
- **Don't** fabricate customer testimonials, client logo walls, or numeric pricing tiers.
