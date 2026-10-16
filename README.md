# Smokin Wolf Website

Cinematic red and black one-page website for the Smokin Wolf smoke shop. Plain HTML, CSS and JavaScript, no build step.

## Structure

- `index.html`: page markup
- `css/style.css`: all styles
- `js/main.js`: animations (smoke canvas, hero title, card reveal, cart demo)
- `assets/`: logo, product images and smoke background

## Run locally

Open `index.html` in a browser, or serve the folder:

    python3 -m http.server 8000

## Deploy on GitHub Pages

1. Push these files to a GitHub repository.
2. Open Settings, then Pages.
3. Set the source to the main branch and the root folder, then save.

## Notes

- The cart and the contact form are demos. They do not place orders or send email.
- To swap a product image, replace the file in `assets/` with the same name (or edit the paths at the top of `js/main.js`).
- Fonts (Anton and Manrope) load from Google Fonts.
