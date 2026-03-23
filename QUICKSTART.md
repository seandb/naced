# NACED Website — Quick Start Guide

## Overview

This is a static Astro site with a Sanity CMS backend. The Astro project lives in the root of `/NACED/` and the Sanity Studio lives in `/NACED/studio/`.

---

## Step 1: Create a Sanity Project

### Option A — Via the CLI (recommended)

```bash
# Log into Sanity
npx sanity login

# Navigate to the studio folder
cd /path/to/NACED/studio

# Initialize a new project (follow prompts, choose "Clean project with no predefined schemas")
npx sanity init
```

When prompted, **do not overwrite** the existing schema files. Just note the projectId that gets generated.

### Option B — Via the web dashboard

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Create a new project (name it "NACED")
3. Choose dataset: `production`
4. Copy your **Project ID**

---

## Step 2: Add the Project ID

### 2a. Create `.env` in the root of NACED

Copy the example file and fill it in:

```bash
cp .env.example .env
```

Edit `.env`:

```
PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
PUBLIC_SANITY_DATASET=production
```

### 2b. Update `studio/sanity.cli.js`

Replace `YOUR_PROJECT_ID` with your actual project ID:

```js
module.exports = {
  api: {
    projectId: 'abc123xyz',  // <-- your real project ID
    dataset: 'production',
  },
};
```

### 2c. Update `studio/sanity.config.js`

Replace `YOUR_PROJECT_ID` on the `projectId` line.

---

## Step 3: Add a CORS Origin in Sanity

In [manage.sanity.io](https://manage.sanity.io) → your project → **API** → **CORS Origins**, add:

- `http://localhost:4321` (for local dev)
- `https://your-netlify-domain.netlify.app` (for Netlify preview)
- `https://naced.org` (for production)

---

## Step 4: Run the Sanity Studio

```bash
cd studio
npm install
npm run dev
```

Visit [http://localhost:3333](http://localhost:3333) to access the studio and add content.

---

## Step 5: Run the Astro site locally

```bash
# From the root NACED directory
npm install
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321)

---

## Step 6: Deploy the Sanity Studio

You'll need a Sanity auth token. Get one from:
**manage.sanity.io → your project → API → Tokens → Add API Token** (role: Deploy Studio)

Then deploy:

```bash
cd studio
SANITY_AUTH_TOKEN=your_token_here npx sanity deploy --yes
```

You'll be asked to choose a hostname (e.g., `naced.sanity.studio`).

---

## Step 7: Deploy to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create a project** → **Connect to Git**
2. Select your GitHub repo
3. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add environment variables:
   - `PUBLIC_SANITY_PROJECT_ID` = your project ID
   - `PUBLIC_SANITY_DATASET` = `production`
   - `NODE_VERSION` = `20`
5. Hit **Save and Deploy**

No config file needed — everything is set in the dashboard.

---

## Step 8: Set Up Sanity → Cloudflare Webhook (for automatic rebuilds)

When you publish content in Sanity, you want Cloudflare Pages to rebuild the site automatically.

1. In **Cloudflare** → Pages → your project → **Settings** → **Builds & deployments** → **Deploy hooks** → Add hook
   - Name: `Sanity CMS`
   - Branch: `main`
   - Copy the generated webhook URL

2. In **manage.sanity.io** → your project → **API** → **Webhooks** → Add webhook:
   - Name: `Cloudflare Rebuild`
   - URL: paste the Cloudflare deploy hook URL
   - Trigger on: **Create**, **Update**, **Delete** (all three)
   - Dataset: `production`
   - HTTP method: `POST`

Now every publish in Sanity triggers a Cloudflare rebuild.

---

## Step 9: Add Initial Content

After setting up the studio, add content in this order:

1. **Site Settings** — site name, tagline, contact info, social links
2. **Home Page** — hero section, impact stats, featured programs references
3. **Programs** — add 3-6 programs with icons, descriptions, outcomes
4. **Events** — add upcoming events with dates and registration links
5. **News Posts** — add 3+ posts with excerpts and categories
6. **About Page** — mission, vision, values, team members

The site displays graceful fallback content when Sanity returns no data, so it looks polished even before content is added.

---

## Zeffy Donation Integration

1. Create a free account at [zeffy.com](https://www.zeffy.com)
2. Set up your donation form / fundraising page
3. Copy the embed URL from Zeffy
4. In Sanity Studio → **Site Settings** → paste the URL in **Zeffy Donation Page URL**
5. The donation embed will appear automatically on `/donate`

---

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_SANITY_PROJECT_ID` | Yes | Sanity project ID from manage.sanity.io |
| `PUBLIC_SANITY_DATASET` | Yes | Usually `production` |
| `SANITY_API_TOKEN` | Optional | Read token for authenticated requests / preview |

---

## Lessons Learned (from BenBetts experience)

- **`studio/sanity.cli.js` must be CJS** (`module.exports = {}`). Never ESM. The CLI requires it.
- **`studio/package.json` must NOT have `"type": "module"`**. The studio uses Vite internally which handles ESM in `sanity.config.js` fine, but the CLI process itself needs CommonJS.
- **Sanity `@sanity/vision` plugin** is only for development queries — it's listed as a dependency in `sanity.config.js` but is included in the sanity package itself.
- **`urlFor` helper** requires `@sanity/image-url` — make sure it's in dependencies.
- **CORS errors?** Add your origin in Sanity project settings → API → CORS Origins.
- **Static site + Sanity** = `output: 'static'` in `astro.config.mjs` and `getStaticPaths()` on all dynamic routes.
- **Graceful fallbacks** — always provide fallback content in `.astro` pages so the site looks real before CMS content is added.
