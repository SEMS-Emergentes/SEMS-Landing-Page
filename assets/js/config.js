/* ==========================================================================
   Site configuration.

   APP_BASE_URL is the web application the landing page hands the visitor over
   to. Every call-to-action carries a data-app-link attribute with the path it
   should open, and main.js joins the two. Changing this one line repoints the
   whole landing page at a different deployment.
   ========================================================================== */
window.SEMS_CONFIG = {
  APP_BASE_URL: "https://sems-web-application.vercel.app"
};
