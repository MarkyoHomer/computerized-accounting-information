/**
 * page-shell.js
 * Builds the shared page shell (header + sidebar wrapper) for all sub-pages.
 * Include AFTER sidebar.js.
 */
(function () {
  const ROOT_PATH = (function () {
    const depth = (document.currentScript?.src || '').split('/').length - 3;
    return depth > 0 ? '../'.repeat(depth) : './';
  })();

  // Auth guard
  if (!sessionStorage.getItem('userRole') && window.location.protocol !== 'file:') {
    window.location.href = ROOT_PATH + 'index.html';
  }

  // Logout
  window.logout = function () {
    sessionStorage.clear();
    window.location.href = ROOT_PATH + 'index.html';
  };

  // Set user role in header
  document.addEventListener('DOMContentLoaded', () => {
    const roleEl = document.getElementById('userRole');
    if (roleEl) roleEl.innerText = sessionStorage.getItem('userRole') || '';
  });
})();
