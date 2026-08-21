# Rojhat Yildirim - Portfolio

Personal portfolio of Rojhat Yildirim, Data Scientist. The website is built with Astro and includes sections for projects, experience, tools, and contact.

## Technology

- Astro 7
- TypeScript
- Poppins via Fontsource
- Lucide and Font Awesome icons
- Formspree for the contact form
- Responsive CSS without a client-side UI framework

## Requirements

- Node.js 22.12 or newer
- npm

## Local Development

Install the dependencies:

```sh
npm install
```

Create a local `.env` file based on `.env.example`:

```env
PUBLIC_FORMSPREE_FORM_ID=your-form-id
```

Use only the ID from the Formspree endpoint. For `https://formspree.io/f/abcdefgh`, the ID is `abcdefgh`.

Start the development server:

```sh
npm run dev
```

The website is available at `http://localhost:4321` by default.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the static production site in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run astro -- --help` | Lists the available Astro CLI commands |

## Project Structure

```text
src/
|- components/    Astro components used on the page
|- data/          Portfolio content
|- layouts/       Shared HTML layout
|- pages/         Page routes
`- styles/        Global styles and responsive rules
```

The main portfolio content is stored in `src/data/profile.ts`. The contact form logic and Formspree integration are located in `src/components/Contact.astro`.

## Contact Form

The form submits through Formspree and includes:

- Native input validation
- AJAX submission without a page refresh
- Success and error feedback
- A `_gotcha` honeypot for basic spam bots
- A disabled submit button while a request is in progress

`PUBLIC_FORMSPREE_FORM_ID` is a public configuration value, not a secret. The local `.env` file is not committed to Git. When the hosting provider builds the website from Git, the same environment variable must be configured there.

## Deployment Checklist

- [ ] Configure `PUBLIC_FORMSPREE_FORM_ID` at the hosting provider.
- [ ] Connect the final domain to the website.
- [ ] Open the form settings in Formspree.
- [ ] Set **Restrict to Domain** to the final domain without `https://`.
- [ ] Use the root domain without `www` when both the `www` and non-`www` versions are available.
- [ ] Confirm that CAPTCHA and spam protection remain enabled in Formspree.
- [ ] Send a test message from the live domain after deployment.
- [ ] Confirm that the message reaches the correct email address and that replies work correctly.

## Production Check

Run at least the following command before every deployment:

```sh
npm run build
```

Then check the website on desktop and mobile, paying particular attention to navigation, scroll animations, and the contact form.
