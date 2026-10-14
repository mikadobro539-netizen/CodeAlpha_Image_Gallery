# FRAME — CodeAlpha Image Gallery

A responsive, dark editorial photography gallery built with **HTML, CSS, and vanilla JavaScript**.

## Features

- Responsive gallery grid for desktop, tablet, and mobile
- Category filters: All works, Nature, Architecture, Travel, Details
- Live search by photo title, location, description, or category
- Lightbox viewer with previous/next navigation
- Keyboard support: `←` / `→` to navigate and `Esc` to close
- Open a card with `Enter` or `Space` when focused
- Hover animations, smooth transitions, and a compact-grid toggle
- Accessible labels, focus styles, reduced-motion support, and image alt text
- No frameworks, build tools, or dependencies required

## Project structure

```text
CodeAlpha_Image_Gallery/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally

1. Download or clone this project.
2. Open the folder.
3. Double-click `index.html` to open it in your browser.

For a more realistic local-development workflow, open the folder in VS Code and use the **Live Server** extension, then click **Go Live**.

The photos and web fonts are loaded from external services, so an internet connection is needed for those assets. The gallery itself uses plain HTML, CSS, and JavaScript.

## Deploy on GitHub Pages

1. Create a GitHub repository named `CodeAlpha_Image_Gallery`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. The URL will appear in the Pages section.

## Deploy on Netlify

1. Sign in to Netlify.
2. Choose **Add new site → Deploy manually** (wording may vary).
3. Drag the project folder into the deployment area, or connect the GitHub repository.
4. Netlify will publish the static site; no build command is needed.

## Customise it

- **Add a photograph:** add a new object to the `photos` array in `script.js`. Give it a unique `id`, a title, location, category, description, image URL, full-size image URL, and descriptive `alt` text.
- **Add a category:** add its key and display name to `categoryNames` in `script.js`, then add a matching filter button in `index.html`.
- **Change colours:** edit the CSS custom properties under `:root` in `style.css`.
- **Change the hero image:** update the hero `<img>` URL in `index.html`.

## Before submitting to CodeAlpha

- Test filters, search, lightbox, previous/next, Escape, and arrow keys.
- Test at desktop and mobile widths.
- Confirm all image URLs load reliably.
- Push the source code to a repository named `CodeAlpha_Image_Gallery`.
- Record a short LinkedIn demo, include the GitHub repository link, and submit using the form shared by CodeAlpha.

## Image credits

The sample photographs use Unsplash image URLs. Replace them with your own images if you prefer a fully personal collection, and follow the image provider's current terms and attribution requirements.
