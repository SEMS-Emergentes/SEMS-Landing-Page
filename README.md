# SEMS — Landing Page

Landing page of **SEMS (Smart Energy Management System)**, a product by **Energix**.

Built with **HTML5, CSS3 and JavaScript**, with no framework and no build step,
following the **Material Design 3** design language.

## Running it

There is nothing to install. Open `index.html` in a browser, or serve the
folder if you prefer a local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
index.html              Home page
terms.html              Terms and conditions, privacy policy and SLA
assets/css/styles.css   Material Design tokens, components and layout
assets/js/config.js     URL of the web application the CTAs point to
assets/js/i18n.js       en-US and es-419 dictionaries for the home page
assets/js/i18n.legal.js Dictionaries used only by terms.html
assets/js/main.js       Language, theme, navigation, FAQ and reveals
assets/img/favicon.svg  Icon
```

## Internationalization (i18n)

The default language of the product is **English (en-US)**, so it is what is
written directly in the HTML: if the scripts fail to load, the page is still
readable. **Latin American Spanish (es-419)** is applied on top at runtime.

To translate a string, give the element a `data-i18n` attribute with its key and
add that key to **both** dictionaries. To translate an attribute instead of the
text — an `aria-label`, for instance — add `data-i18n-attr` with the attribute
name.

```html
<h2 data-i18n="problem.title">Your bill arrives already decided</h2>
<button data-i18n-attr="aria-label" data-i18n="a11y.theme" aria-label="Switch to dark theme">
```

The visitor's choice is stored in `localStorage`. With no stored choice, the
page opens in Spanish only if the browser asks for it; otherwise it opens in
English.

## Accessibility (a11y)

- Skip link as the first focusable element.
- Landmarks (`header`, `nav`, `main`, `footer`) and one `h1` per page.
- `aria-label` on every navigation and icon-only control, translated as well.
- FAQ accordion built on `aria-expanded` / `aria-controls`, operable by keyboard.
- `aria-pressed` on the theme toggle so its state is announced.
- Visible focus ring on every interactive element and 48 px touch targets.
- `prefers-reduced-motion` and `prefers-contrast` are honoured.

## Pointing the CTAs at the web application

Every call to action carries `data-app-link` with the path to open. The base URL
lives in one place:

```js
// assets/js/config.js
window.SEMS_CONFIG = {
  APP_BASE_URL: "https://sems-web-application.vercel.app"
};
```

Change that line to repoint the whole landing page at a different deployment.

## Deployment

Pushing to `main` publishes the site to GitHub Pages through
`.github/workflows/deploy.yml`. There is no build: the repository is uploaded as
it stands. All paths are relative, so the same source works under any
organization without configuring a base URL.

## Sources of the figures shown

- Share of the commercial sector and annual GWh: MINEM, *Anuario Estadístico de
  Electricidad 2024*, chapter 5, table 5.3.3.1.
- Peak hours from 18:00 to 23:00 every day of the year, with the exclusion of
  Sundays available at the customer's request: OSINERGMIN, *Annex B — Tariff
  options and conditions of application*.
