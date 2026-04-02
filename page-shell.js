/**
 * page-shell.js
 * Auth guard + logout for all sub-pages.
 * Uses window.SITE_ROOT if set, otherwise auto-detects from pathname.
 */
(function () {
  function resolveRoot() {
    if (window.SITE_ROOT) return window.SITE_ROOT.replace(/\/?$/, '/');
    const path = window.location.pathname;
    const pagesIdx = path.indexOf('/pages/');
    if (pagesIdx !== -1) return path.substring(0, pagesIdx + 1).replace(/^\//, '') || './';
    return './';
  }

  const R = resolveRoot();

  // Auth guard — skip on file:// (dev mode)
  if (!sessionStorage.getItem('userRole') && window.location.protocol !== 'file:') {
    window.location.href = R + 'index.html';
    return;
  }

  // Logout
  window.logout = function () {
    sessionStorage.clear();
    window.location.href = R + 'index.html';
  };

  // Set user role in header
  document.addEventListener('DOMContentLoaded', () => {
    const roleEl = document.getElementById('userRole');
    if (roleEl) roleEl.innerText = sessionStorage.getItem('userRole') || '';
  });
})();
