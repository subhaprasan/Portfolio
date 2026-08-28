# Subha Prasan Dash — Portfolio

A single-page portfolio site for an Industrial Automation / SCADA / RTU Commissioning Engineer, styled like a control-room HMI: dark panel UI, amber/cyan signal colors, and an animated single-line diagram (SLD) that maps real client projects (Indian Railways, GAIL, TATA Power, OPTCL) as substation nodes.

No build step — it's plain HTML/CSS/JS, so it hosts on GitHub Pages for free with zero configuration.

## File structure

```
.
├── index.html          # the whole site (HTML + CSS + JS)
└── assets/
    └── subha-dash.jpg  # profile photo, extracted from the resume
```

## Deploy to GitHub Pages (free)

1. Create a new **public** repository on GitHub (e.g. `subha-portfolio`).
2. Upload `index.html` and the `assets/` folder to the repo (drag-and-drop on github.com works, or via git — see below).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick branch **main** and folder **/ (root)**, then **Save**.
6. Wait ~1 minute — your site will be live at:
   `https://<your-github-username>.github.io/<repo-name>/`

### Or via git command line

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then enable Pages as in steps 3–6 above.

## Before you publish — 2 things to check

1. **LinkedIn URL** — the resume only gave a "LinkedIn" link label, not the actual URL, so the two LinkedIn links currently point to `https://www.linkedin.com/`. Open `index.html`, search for `linkedinURL`, and replace it with your real profile URL.
2. **"55+ RTUs commissioned"** in the hero stat strip is a reasonable estimate built from the numbers stated in the résumé (8 for Indian Railways + 47 replaced at Tata Power, plus GAIL/OPTCL deployments). Adjust it in `index.html` (search for `RTUs Commissioned`) if you'd like an exact figure instead.

## Customizing

- **Colors / fonts**: all defined as CSS variables at the top of the `<style>` block in `index.html` (`--amber`, `--cyan`, `--bg-void`, etc.).
- **Content**: each résumé section is a clearly labeled `<section>` — overview, skills, experience (the SLD diagram + client panels), credentials, and contact.
- **Photo**: swap `assets/subha-dash.jpg` with a higher-resolution headshot any time for a sharper hero image.
