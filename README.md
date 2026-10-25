# SRS Vision — Official Website Starter

A responsive, dark neon digital-agency website based on the supplied SRS Vision visual direction.

## Files
- `index.html` — website structure and content
- `styles.css` — responsive styling and visual system
- `app.js` — mobile navigation, portfolio filters, service preselection, active nav, and contact-form validation

## Run locally
1. Extract this folder.
2. Open `index.html` in a modern browser.
3. For a more realistic local server, open this folder in VS Code and use the Live Server extension, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

No build step is required. Google Fonts require internet access; system fallback fonts are provided.

## Current working interactions
- Responsive mobile navigation
- Smooth anchor navigation and active section indicator
- Portfolio category filtering
- Service links preselect the matching contact-form option
- Client-side form validation and accessible status messages
- Current year in footer

## Not connected yet
- Contact form delivery / email notifications
- Authentication and private team dashboard
- Database, project records, client accounts, payment processing, and file uploads
- Production analytics, SEO metadata beyond the starter basics, and deployment domain

The contact form intentionally does not claim to send messages. Before public launch, connect it to a secure backend or form provider, validate on the server, add spam protection, and publish a privacy notice. Never put Supabase service-role keys or other secrets in frontend code.

## Pre-launch checklist
- Replace sample project concepts with real work or label them clearly as concepts.
- Confirm company contact details, social links, policies, and service pricing.
- Test keyboard navigation and reduced-motion preferences.
- Test at narrow mobile widths and on real devices.
- Check contrast, performance, image optimization, and browser console.
- If adding Supabase, use Row Level Security and test access as signed-out, ordinary, and admin users.
