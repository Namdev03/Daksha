# Hack Halt Security Website

A premium, responsive React + Vite website for Hack Halt Security, with an emphasis on school safety, privacy-conscious design, and Daksha product positioning.

## Tech stack

- React.js with functional components and hooks
- JavaScript (ES6+)
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React

## Installation

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/
    home/
    layout/
    ui/
  data/
  pages/
  services/
  utils/
  App.jsx
  main.jsx
  index.css
public/
  logo/
  favicon.svg
  robots.txt
  sitemap.xml
```

## Deployment notes

This is a client-side React SPA. For direct route access and refreshes, configure the hosting platform to rewrite all requests to `index.html`.

Examples:

- Netlify: `public/_redirects` with `/* /index.html 200`
- Vercel: use a rewrites config or static hosting platform fallback
- Apache/Nginx: route unknown requests to the app entry

## Contact form behaviour

The contact form is intentionally marked as a non-live prototype until a backend or approved third-party form service is configured.

- Live submission requires `VITE_CONTACT_SERVICE_URL` to be set in the environment.
- When it is not configured, the interface explains this clearly and points users to the approved company contact details.
- The form validates inputs on the client and prevents submission without required details.

## Environment variables

Copy `.env.example` to a local environment file and update values as required:

```bash
cp .env.example .env
```

Example:

```env
VITE_CONTACT_SERVICE_URL=
VITE_SITE_URL=https://example.com
```

## Required asset note

The supplied company logo was not available in the workspace, so a clearly marked placeholder logo asset was created at `public/logo/hack-halt-logo.svg`. Replace this with the official company-approved logo before production use.

## Testing checklist

- Mobile-first layout reviewed at small, medium, and large widths
- Header and mobile menu navigation work correctly
- All routes render properly
- Contact form validation works
- Prototype mode is clearly labelled
- Privacy and terms pages are present
- Metadata titles and descriptions update by page
- Production build completes without errors

## Dependency list

- react
- react-dom
- react-router-dom
- lucide-react
- tailwindcss
- @tailwindcss/vite
- @vitejs/plugin-react
- vite

## Production readiness and limitations

This project follows a SPA-compatible setup for metadata and route handling. For advanced SEO or indexing needs beyond a public marketing site, prerendering or server-side rendering may be recommended depending on the hosting provider and search requirements.
