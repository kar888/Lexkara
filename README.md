# Lexkara & Co — Codebase

**Lexkara & Co** · 7 Bell Yard, London WC2A 2JR · Company No. 14432463  
Kenneth Awoonor-Renner · Barrister of England & Wales · Legal 500

---

## Repository Structure

```
lexkara/
├── website/          # Production website — lexkara.co
│   ├── index.html          # Homepage
│   ├── practice.html       # Practice areas (9 specialisms)
│   ├── about.html          # The firm & Kenneth bio
│   ├── insights.html       # Thought leadership
│   ├── contact.html        # Contact page
│   ├── privacy-policy.html # GDPR privacy policy
│   ├── terms.html          # Terms & conditions
│   ├── complaints.html     # Complaints process
│   ├── style.css           # Design system
│   ├── app.js              # Navigation, dark mode, animations
│   └── lexkara-logo.jpg    # Firm logo
│
├── platform/         # Lexkara Operations Platform v0.1
│   └── index.html          # Internal law firm management system
│                           # Modules: Matters, Contacts, Time & Billing,
│                           # Compliance, Research Log, Learning Loop, Settings
│
└── docs/             # Documentation
    └── README.md
```

---

## Website

The public-facing website at [lexkara.co](https://www.lexkara.co).

Design: Minimal, warm off-white (#F9F7F4), Lexkara crimson (#8B1A1A) accent, Instrument Serif + General Sans typography.

## Operations Platform

Internal law firm management system. Runs entirely in the browser using localStorage. No backend required at v0.

Modules:
- **Matters** — Matter management, time entries, correspondence, compliance checklist
- **Contacts** — Client and panel solicitor database
- **Time & Billing** — Billable time logging, KPI cards, CSV export
- **Compliance** — AML/KYC checklist per matter, deadline tracker
- **Research Log** — Research source tracking per matter
- **Learning Loop** — Closed-loop improvement engine: draft feedback, outcome patterns, auto-insights, training data export
- **Settings** — Firm configuration, data export

---

## Version History

| Version | Date | Notes |
|---|---|---|
| v0.1 | 24 Mar 2026 | Initial build — website (8 pages) + operations platform (7 modules) |

---

## Technology Stack

| Layer | Technology |
|---|---|
| Website | HTML5, CSS3, Vanilla JS |
| Platform | Single-page HTML app, localStorage |
| Fonts | Instrument Serif (Google), General Sans (Fontshare), DM Sans (Google) |
| Hosting | IONOS / Cloudflare Pages |
| Version Control | GitHub (this repository) |

---

*Built with [Perplexity Computer](https://www.perplexity.ai/computer)*  
*© 2026 Lexkara & Co · All rights reserved*
