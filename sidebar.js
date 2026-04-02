/**
 * sidebar.js
 * Injects the shared sidebar into any page that includes this script.
 * Usage: <div id="sidebar-root"></div><script src="../sidebar.js"></script>
 * For root-level pages: <script src="sidebar.js"></script>
 * Adjust ROOT_PATH to point to the workspace root from the current page.
 */
(function () {
  const ROOT_PATH = (function () {
    const depth = (document.currentScript?.src || '').split('/').length - 3;
    return depth > 0 ? '../'.repeat(depth) : './';
  })();

  const P = (path) => ROOT_PATH + path;

  const SIDEBAR_HTML = `
<div class="sidebar">
  <h4 style="color:#807CDF;">Computerized Accounting<p style="font-size:10px;">Management Information System</p></h4>
  <ul>

    <li id="Integ-Arrow" class="toggle-btn" onclick="toggleSubmenu('IntSub')">
      <a href="#"><i class="fas fa-clapperboard" style="color:rgb(11,161,11);font-size:18px"></i>
      Integrations<i style="position:absolute;right:10px;" class="fa-solid fa-angle-down"></i></a>
    </li>
    <ul class="submenu" id="IntSub">
      <ul id="IntegDtS"><li><a href="${P('pages/integrations/detailed-status.html')}"><i class="fas fa-list" style="color:rgb(10,186,10);font-size:14px"></i>Detailed Status</a></li></ul>
      <ul id="IntegExP"><li><a href="${P('pages/integrations/extraction-progress.html')}"><i class="fas fa-list" style="color:rgb(10,186,10);font-size:14px"></i>Extraction Progress</a></li></ul>
      <ul id="IntegSum"><li class="icon-text"><a href="${P('pages/integrations/summarized-status.html')}"><i class="fas fa-list" style="color:rgb(10,186,10);font-size:14px"></i></a><span>Summarized <br>Integration Status</span></li></ul>
    </ul>

    <li id="FT-Arrow" class="toggle-btn" onclick="toggleSubmenu('FTSub')">
      <a href="#"><i class="fas fa-money-bill-transfer" style="color:rgb(11,161,11);font-size:18px"></i>
      Fund Transfer<i style="position:absolute;right:10px;" class="fas fa-angle-down"></i></a>
    </li>
    <ul class="submenu" id="FTSub">
      <ul id="FT-RcR"><li><a href="${P('pages/fund-transfer/recon-report.html')}"><i class="fas fa-calculator" style="color:rgb(10,186,10);font-size:14px"></i>Recon Report</a></li></ul>
      <ul id="FT-TxL"><li><a href="${P('pages/fund-transfer/transaction-list.html')}"><i class="fas fa-table-list" style="color:rgb(10,186,10);font-size:14px"></i>Transaction List</a></li></ul>
    </ul>

    <li id="Trnx-Arrow" class="toggle-btn" onclick="toggleSubmenu('TrnxSub')">
      <a href="#"><i class="fas fa-cash-register" style="color:rgb(11,161,11);font-size:18px"></i>
      Transactions<i style="position:absolute;right:10px;" class="fas fa-angle-down"></i></a>
    </li>
    <ul class="submenu" id="TrnxSub">
      <li><a href="${P('pages/transactions/head-office.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Head Office</a></li>
      <ul id="BCAS"><li><a href="${P('pages/transactions/branch-cas.html')}"><i class="fas fa-hourglass-half" style="color:rgb(11,161,11);font-size:14px"></i>Branch CAS</a></li></ul>
    </ul>

    <li id="Exp-Arrow" class="toggle-btn" onclick="toggleSubmenu('ExpSub')">
      <a href="#"><i class="fas fa-money-check-dollar" style="color:rgb(11,161,11);font-size:18px"></i>
      Expenses<i style="position:absolute;right:10px;" class="fas fa-angle-down"></i></a>
    </li>
    <ul class="submenu" id="ExpSub">
      <li><a href="${P('pages/expenses/manage-categories.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Manage Categories</a></li>
      <li><a href="${P('pages/expenses/manage-contract.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Manage Contract</a></li>
      <li class="icon-text"><a href="${P('pages/expenses/manage-contract-items.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i></a><span>Manage Contract <br>Items</span></li>
      <li><a href="${P('pages/expenses/manage-vendors.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Manage Vendors</a></li>
    </ul>

    <li id="Earn-Arrow" class="toggle-btn" onclick="toggleSubmenu('EarnSub')">
      <a href="#"><i class="fas fa-money-bill-1" style="color:rgb(11,161,11);font-size:18px"></i>
      Earnings<i style="position:absolute;right:10px;" class="fas fa-angle-down"></i></a>
    </li>
    <ul class="submenu" id="EarnSub">
      <li><a href="${P('pages/earnings/earning-reports.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Earning Reports</a></li>
      <li><a href="${P('pages/earnings/employee-earnings.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Employee Earnings</a></li>
      <li><a href="${P('pages/earnings/manage-earnings.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Manage Earnings</a></li>
      <li class="icon-text"><a href="${P('pages/earnings/manage-employee-roles.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i></a><span>Manage <br>Employee Roles</span></li>
    </ul>

    <li id="Settle-Arrow" class="toggle-btn" onclick="toggleSubmenu('SettleSub')">
      <a href="#"><i class="fas fa-money-bill-transfer" style="color:rgb(11,161,11);font-size:18px"></i>
      Settlements<i style="position:absolute;right:10px;" class="fas fa-angle-down"></i></a>
    </li>
    <ul class="submenu" id="SettleSub">
      <li><a href="${P('pages/settlements/settlement-window.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Settlement Window</a></li>
    </ul>

    <li id="Reprt-Arrow" class="toggle-btn" onclick="toggleSubmenu('ReprtSub')">
      <a href="#"><i class="fas fa-paste" style="color:rgb(11,161,11);font-size:18px"></i>
      Reporting<i style="position:absolute;right:10px;" class="fas fa-angle-down"></i></a>
    </li>
    <ul class="submenu" id="ReprtSub">
      <ul id="RprtASum"><li><a href="${P('pages/reporting/account-summary.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Account Summary</a></li></ul>
      <ul id="RprtDtlr"><li class="icon-text"><a href="${P('pages/reporting/detailed-ledger.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i></a><span>Detailed <br>Ledger Reports</span></li></ul>
      <ul id="RprtFinR"><li><a href="${P('pages/reporting/financial-reports.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Financial Reports</a></li></ul>
      <ul id="RprtAreaD"><li><a href="${P('pages/reporting/area-detailed-report.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Area Detailed Report</a></li></ul>
      <ul id="RprtBookA"><li><a href="${P('pages/reporting/book-of-accounts.html')}"><i class="fas fa-list-check" style="color:rgb(10,186,10);font-size:14px"></i>Book of Accounts</a></li></ul>
    </ul>

    <li id="Montr-Arrow" class="toggle-btn" onclick="toggleSubmenu('MontrSub')">
      <a href="#"><i class="fas fa-earth-america" style="color:rgb(11,161,11);font-size:18px"></i>
      Monitoring<i style="position:absolute;right:10px;" class="fas fa-angle-down"></i></a>
    </li>
    <ul class="submenu" id="MontrSub">
      <ul id="Mntr-Upld"><li><a href="${P('pages/monitoring/upload-monitoring.html')}"><i class="fas fa-magnifying-glass" style="color:rgb(10,186,10);font-size:14px"></i>Upload Monitoring</a></li></ul>
      <ul id="Mntr-Aud"><li><a href="${P('pages/monitoring/audit-trail.html')}"><i class="fas fa-magnifying-glass" style="color:rgb(10,186,10);font-size:14px"></i>Audit Trail</a></li></ul>
    </ul>

    <li id="Setup-Arrow" class="toggle-btn" onclick="toggleSubmenu('SetupSub')">
      <a href="#"><i class="fas fa-gear" style="color:rgb(11,161,11);font-size:18px"></i>
      Setup<i style="position:absolute;right:10px;" class="fas fa-angle-down"></i></a>
    </li>
    <ul class="submenu" id="SetupSub">
      <li><a href="${P('pages/setup/accounts.html')}"><i class="fas fa-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Accounts</a></li>
      <li><a href="${P('pages/setup/area-profiles.html')}"><i class="fas fa-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Area Profiles</a></li>
      <li><a href="${P('pages/setup/bank-accounts.html')}"><i class="fas fa-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Bank Accounts</a></li>
      <li><a href="${P('pages/setup/branch-profiles.html')}"><i class="fas fa-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Branch Profiles</a></li>
      <li><a href="${P('pages/setup/bizlink-config.html')}"><i class="fas fa-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Bizlink Configurations</a></li>
      <li><a href="${P('pages/setup/business-services.html')}"><i class="fas fa-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Business Services</a></li>
      <li><a href="${P('pages/setup/business-summaries.html')}"><i class="fas fa-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Business Summaries</a></li>
      <li><a href="${P('pages/setup/cluster-profiles.html')}"><i class="fas fa-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Cluster Profiles</a></li>
      <li><a href="${P('pages/setup/file-profiles.html')}"><i class="fas fa-wrench" style="color:rgb(10,186,10);font-size:14px"></i>File Profiles</a></li>
      <li><a href="${P('pages/setup/ho-transactions.html')}"><i class="fas fa-wrench" style="color:rgb(10,186,10);font-size:14px"></i>HO Transactions</a></li>
      <li><a href="${P('pages/setup/settlement-setup.html')}"><i class="fas fa-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Settlement Setup</a></li>
    </ul>

    <li id="IntSetup-Arrow" class="toggle-btn" onclick="toggleSubmenu('IntSetupSub')">
      <a href="#"><i class="fas fa-gears" style="color:rgb(11,161,11);font-size:18px"></i>
      Integration Setup<i style="position:absolute;right:10px;" class="fas fa-angle-down"></i></a>
    </li>
    <ul class="submenu" id="IntSetupSub">
      <li><a href="${P('pages/integration-setup/agents.html')}"><i class="fas fa-screwdriver-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Agents</a></li>
      <li><a href="${P('pages/integration-setup/agent-scheme.html')}"><i class="fas fa-screwdriver-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Agent Scheme</a></li>
      <li><a href="${P('pages/integration-setup/agent-branches.html')}"><i class="fas fa-screwdriver-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Agent Branches</a></li>
      <li><a href="${P('pages/integration-setup/bank-profiles.html')}"><i class="fas fa-screwdriver-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Bank Profiles</a></li>
      <li><a href="${P('pages/integration-setup/domestic-agents.html')}"><i class="fas fa-screwdriver-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Domestic Agents</a></li>
      <li><a href="${P('pages/integration-setup/international-agents.html')}"><i class="fas fa-screwdriver-wrench" style="color:rgb(10,186,10);font-size:14px"></i>International Agents</a></li>
      <li><a href="${P('pages/integration-setup/extraction-profiles.html')}"><i class="fas fa-screwdriver-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Extraction Profiles</a></li>
      <li><a href="${P('pages/integration-setup/netsuite-entities.html')}"><i class="fas fa-screwdriver-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Netsuite Entities</a></li>
      <li><a href="${P('pages/integration-setup/extraction-mapping.html')}"><i class="fas fa-screwdriver-wrench" style="color:rgb(10,186,10);font-size:14px"></i>Extraction Mapping</a></li>
      <li><a href="${P('pages/integration-setup/pos-fees.html')}"><i class="fas fa-screwdriver-wrench" style="color:rgb(10,186,10);font-size:14px"></i>POS Fees</a></li>
    </ul>

    <li style="border-top:1px solid #bdb8d7;"></li>
  </ul>
</div>`;

  const root = document.getElementById('sidebar-root');
  if (root) {
    root.innerHTML = SIDEBAR_HTML;
  } else {
    document.write(SIDEBAR_HTML);
  }

  // Highlight active menu item based on current page
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar a').forEach(a => {
    if (a.href && a.href.includes(currentPage)) {
      a.style.color = '#a8d8a8';
      a.style.fontWeight = 'bold';
    }
  });

  // Submenu toggle
  window.toggleSubmenu = function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
  };
})();
