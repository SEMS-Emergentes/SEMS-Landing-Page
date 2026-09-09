/* ==========================================================================
   Landing page behaviour: language, theme, navigation, FAQ and reveals.
   Plain JavaScript, no dependencies.
   ========================================================================== */
(function () {
  "use strict";

  var DEFAULT_LANG = "en-US";           // default language of every product
  var ALT_LANG     = "es-419";
  var dict         = window.SEMS_I18N || {};
  var html         = document.documentElement;

  /* localStorage throws in some privacy modes, so every access is guarded. */
  function remember(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }
  function recall(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  /* ------------------------------------------------------------ language */

  function applyLang(lang) {
    var table = dict[lang] || dict[DEFAULT_LANG];
    if (!table) { return; }

    html.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var text = table[key];
      if (text == null) { return; }

      // An element may translate an attribute instead of its text content.
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) { el.setAttribute(attr, text); }
      else { el.textContent = text; }
    });

    // Only fall back to the home-page title when this page has not declared
    // one of its own: terms.html carries data-i18n on its <title>, and the
    // loop above has already translated it.
    var titleEl = document.querySelector("title[data-i18n]");
    if (!titleEl && table["meta.title"]) { document.title = table["meta.title"]; }

    // The button shows the language it switches TO, not the current one.
    var other = lang === DEFAULT_LANG ? ALT_LANG : DEFAULT_LANG;
    document.querySelectorAll("[data-lang-label]").forEach(function (el) {
      el.textContent = other === ALT_LANG ? "ES" : "EN";
    });

    remember("sems-lang", lang);
  }

  var currentLang = recall("sems-lang");
  if (currentLang !== DEFAULT_LANG && currentLang !== ALT_LANG) {
    // No stored choice: honour the browser only when it asks for Spanish.
    var nav = (navigator.language || "").toLowerCase();
    currentLang = nav.indexOf("es") === 0 ? ALT_LANG : DEFAULT_LANG;
  }
  applyLang(currentLang);

  var langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      currentLang = currentLang === DEFAULT_LANG ? ALT_LANG : DEFAULT_LANG;
      applyLang(currentLang);
    });
  }

  /* --------------------------------------------------------------- theme */

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    remember("sems-theme", theme);

    var btn = document.getElementById("themeToggle");
    if (!btn) { return; }
    // aria-pressed tells assistive tech whether dark mode is on.
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    var icon = btn.querySelector("[data-theme-icon]");
    if (icon) { icon.textContent = theme === "dark" ? "☀" : "🌙"; }
  }

  applyTheme(html.getAttribute("data-theme") || "light");

  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      applyTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  /* ------------------------------------------------- call-to-action links */

  // Every CTA points at the web application. The base URL lives in config.js
  // so that a deployment can be repointed without touching the markup.
  var appBase = (window.SEMS_CONFIG && window.SEMS_CONFIG.APP_BASE_URL) || "";
  if (appBase) {
    appBase = appBase.replace(/\/$/, "");
    document.querySelectorAll("[data-app-link]").forEach(function (el) {
      el.setAttribute("href", appBase + el.getAttribute("data-app-link"));
      el.setAttribute("rel", "noopener");
    });
  }

  /* ---------------------------------------------------------- navigation */

  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var open = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu after following a link on small screens.
    primaryNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        primaryNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------------------------------- FAQ */

  // Accordion built on buttons with aria-expanded/aria-controls, so it is
  // reachable and announced correctly with a keyboard and a screen reader.
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      if (panel) { panel.hidden = open; }
    });
  });

  /* ------------------------------------------------------ scroll reveals */

  var reveals = document.querySelectorAll(".reveal");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* --------------------------------------------------------------- misc */

  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }
})();
