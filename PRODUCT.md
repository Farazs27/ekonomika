# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS, and vanilla JavaScript deployed on GitHub Pages, organized into page directories (`Hem/`, `Tjanster/`, `Om/`, `Kontakt/`) with shared layout partials and assets in `General/`.

## Users

- **Small and medium business owners across trades and professions** (e.g., builders, hair salons, medical clinicians, legal practices, florists, and consultants) who want reliable accounting without spending evenings on administration.
- **Founders starting a new company (`bolagsstart`)** who need structured guidance on company formation and setting up sound financial routines from day one.
- **Private individuals (`privata deklarationer`)** without a company who need qualified help preparing and filing private tax returns.

## Product Purpose

Ekonomika is a Stockholm-based digital accounting firm (`digital redovisningsbyrå`) that takes care of ongoing bookkeeping, payroll, VAT, annual reports, tax declarations, and financial advisory so business owners can relax after work and focus on their core craft.

## Positioning

Combines qualified accounting economists (`Kvalificerade Redovisningsekonomer`, K2 and K3 competence) with tailored digital workflows that connect receipt sources, corporate cards, and mail into a single automated inbox—delivering personal service and competitive pricing by respecting the client's time.

## Operating Context

- Clients interact with Ekonomika digitally (digital document/receipt flows, digital meetings, email/phone contact) and evaluate the firm through its four-page Swedish marketing website (`Hem`, `Våra Tjänster`, `Om Oss`, `Kontakt`).
- Tailored integration with the client's existing accounting system (`01 — ANSLUT: System`), unified receipt collection (`02 — UNDERLAG: Inkorg`), and structured review of reports, budgets, and declarations (`03 — GRANSKA: Kontrollera`).

## Capabilities and Constraints

- **Core service pillars**:
  - **Ekonomi**: Löpande bokföring, Fakturering, Momsredovisning, Lönehantering, Bokslut, Årsredovisning, Deklarationer, Rapportering.
  - **Administration**: System, Personal, Bolagsbildningar, Ekonomisk Rådgivning, Digital Arkivering och Dokument.
  - **Kompetens**: K2, K3, bolagsstart, and privata deklarationer.
- **Technical constraints**: Static site hosted on GitHub Pages (`index.html` root redirect to `Hem/`, client-side `data-include` HTML partial loading via `General/main.js`, FormSubmit contact form posting to `ekonomikakontakt@gmail.com`).
- **Copy constraint**: Swedish language (`lang="sv"`). Existing factual Swedish copy, service claims, logos, and assets remain the source of truth; unfinished placeholder Step 04 (`TOM`) in `Tjanster/tjansteflode.html` is removed, and bespoke generated imagery may be added where suitable to elevate the visual presentation.

## Brand Commitments

- **Brand name**: Ekonomika
- **Logos & marks**: Existing brand assets in `General/assets/` (`ekonomika-logo.png`, `ekonomika-logo-gron.png`, `ekonomika-logo-vit.png`, `ekonomika-icon.png`, `ekonomika-wordmark.png`, `favicon-ekonomika.svg`).
- **Standing visual & brand preference**: Modern Swedish Corporate Advisory aesthetic benchmarked against **Aspia**, **Ludvig & Co**, and **Grant Thornton Sverige** — crisp white space (`#FFFFFF` and soft `#F4F7F5` bands), deep executive forest green (`#183328` / `#244536`), clean corporate sans-serif typography, natural photography, and zero boxy brutalist grids, monospace badges, or terracotta/orange AI-template accents.
- **Voice**: Approachable, trustworthy, calm, and clear Swedish prose that speaks directly to working business owners across industries without bureaucratic jargon.

## Evidence on Hand

- Brand marks and icons in `General/assets/`.
- Existing photography in `General/assets/` (`header-person-vanster.png`, `header-person-hoger.png`, `redovisning-kontor.png`, `tjanster-starta-bolag.jpg`, `tjanster-redovisning.jpg`, `tjanster-privat-deklaration.jpg`), plus user permission to generate and integrate suitable bespoke imagery.
- Real contact endpoint (`ekonomikakontakt@gmail.com`, Stockholm location). Phone number in `Kontakt/contact.html` (`+4699999`) is a placeholder until replaced by the firm's live phone number.
- No customer testimonials, case studies, or pricing tiers are on hand; future work must not fabricate testimonials, client logos, or numeric pricing claims.

## Product Principles

1. **Calm authority over accounting anxiety**: Every page should make financial administration feel ordered, approachable, and under control.
2. **Digital efficiency with human accountability**: Highlight both automated receipt/system flows and the personal commitment of experienced accounting economists.
3. **Cross-industry clarity**: Speak to tradespeople and specialists alike (builders, hairdressers, doctors, lawyers, founders) with direct, plain-spoken Swedish structure.
4. **Static simplicity**: Maintain a clean, zero-build folder structure that deploys directly to GitHub Pages.
