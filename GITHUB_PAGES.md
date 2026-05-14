# GitHub Pages Guide

This is a standalone static website. It can be published directly with GitHub Pages from the repository root.

## Site Structure

```text
architecture-studio-site/
  index.html
  about.html
  photos.html
  contact.html
  styles.css
  script.js
  assets/
    logo.svg
    photos/
```

## Main Files

- `index.html` controls the home page layout.
- `about.html` contains the summarized professional profile.
- `photos.html` contains the gallery.
- `contact.html` contains contact details.
- `styles.css` contains all visual styling.
- `script.js` handles the mobile menu and photo carousel.

## Assets

- Replace `assets/logo.svg` with the final logo when ready.
- Replace files in `assets/photos/` with final project images, keeping the same filenames if you want to avoid editing HTML.
- Inspiration/reference files are listed in `.gitignore` and should not be committed.

## Deployment

For a standalone GitHub Pages repository:

1. Commit this folder as its own repository.
2. Push to GitHub.
3. Go to **Settings** > **Pages**.
4. Set source to branch `main`.
5. Set folder to `/root`.

Because this is plain HTML/CSS/JS, GitHub Pages does not need any build command.

## Local Preview

Open `index.html` directly in a browser. If you prefer using a local server, serve the project root and visit:

```text
http://127.0.0.1:8002
```
