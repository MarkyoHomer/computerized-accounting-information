/**
 * moneychanger_ho.js
 * Head Office report — consolidated view across all areas + rate management.
 * All data via Firestore through moneychanger_db.js.
 */

import {
  getTransactions, getInventory, getLatestRates, saveRate,
  getBranches, getAreas, seedIfEmpty, todayDate,
} from './moneychanger_db.js';
import { toDisplayDate } from './db_service.js';

export async function mcHOInit() {
  await seedIfEmpty();
  await mcHOPopulateAreas();
  await mcHOPopulateCurrencies();

  const today = todayDate();
  const fromEl = document.getElementById('mc-ho-filter-from');
  const toEl   = document.getElementById('mc-ho-filter-to');
  if (fromEl) fromEl.value = today;
  if (toEl)   toEl.value   = today;

  document.getElementById('mc-ho-area-select')?.addEventListener('change', async () => {
    await mcHOPopulateBranches();
    await mcHOLoadReport();
    await mcHOLoadInventory();
  });

  await mcHOLoadReport();
  await mcHOLoadInventory();
  await mcHOLoadRateBoard();

  // Expose to HTML onclick
  window.mcHOLoadReport    = mcHOLoadReport;
  window.mcHOLoadInventory = mcHOLoadInventory;
  window.mcHOExportExcel   = mcHOExportExcel;
  window.mcHOExportInventory = mcHOExportInventory;
  window.mcHOEditRate      = mcHOEditRate;
  window.mcHOSaveRate      = mcHOSaveRate;
}

async function mcHOPopulateAreas() {
  const sel = document.getElementById('mc-ho-area-select');
  if (!sel) return;
  const areas = await getAreas();
  sel.innerHTML = '<option value="">-- All Areas --</option>';
  areas.forEach(a => { sel.innerHTML += `<option value="${a.code}">${a.name}</option>`; });
}

async function mcHOPopulateBranches() {
  const area = document.getElementById('mc-ho-area-select')?.value || '';
  const sel  = document.getElementById('mc-ho-branch-select');
  if (!sel) return;
  const branches = await getBranches(area || undefined);
  sel.innerHTML = '<option value="">-- All Branches --</option>';
  branches.forEach(b => { sel.innerHTML += `<option value="${b.code}">${b.name}</option>`; });
}

async function mcHOPopulateCurrencies() {
  const sel = document.getElementById('mc-ho-filter-currency');
  if (!sel) return;
  const rates = await getLatestRates();
  sel.innerHTML = '<option value="">-- All Currencies --</option>';
  rates.forEach(r => { sel.innerHTML += `<option value="${r.currency}">${r.currency}</option>`; });
}

async function mcHOLoadReport() {
  const area     = document.getElementById('mc-ho-area-select')?.value     || '';
  const branch   = document.getElementById('mc-ho-branch-select')?.value   || '';
  const currency = document.getElementById('mc-ho-filter-currency')?.value || '';
  const dateFrom = document.getElementById('mc-ho-filter-from')?.value     || '';
  const dateTo   = document.getElementById('mc-ho-filter-to')?.value       || '';

  const txns = await getTransactions({
    area     : area     || undefined,
    branchCode: branch   || undefined,
    currency  : currency || undefined,
    dateFrom  : dateFrom || undefined,
    dateTo    : dateTo   || undefined,
    status    : 'Active',
  });

  const map = {};
  txns.forEach(t => {
    const key = `${t.area}||${t.currency}`;
    if (!map[key]) map[key] = {
      area: t.area, currency: t.currency, branchCount: new Set(),
      buyCount:0, buyFX:0, buyPHP:0, sellCount:0, sellFX:0, sellPHP:0,
    };
    map[key].branchCount.add(t.branchCode);
    if (t.type === 'Buy')  { map[key].buyCount++;  map[key].buyFX  += t.fxAmount; map[key].buyPHP  += t.phpAmount; }
    if (t.type === 'Sell') { map[key].sellCount++; map[key].sellFX += t.fxAmount; map[key].sellPHP += t.phpAmount; }
  });

  const rows  = Object.values(map);
  const tbody = document.getElementById('mc-ho-report-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (!rows.length) {
    tbody.innerHTML = '<tr><td colspan="10" style="text-align:center;color:#888;">No data found.</td></tr>';
    _setHOTotals(0,0,0,0); return;
  }

  let totBuyFX=0, totBuyPHP=0, totSellFX=0, totSellPHP=0;
  rows.forEach(r => {
    const net = r.sellPHP - r.buyPHP;
    totBuyFX  += r.buyFX;  totBuyPHP  += r.buyPHP;
    totSellFX += r.sellFX; totSellPHP += r.sellPHP;
    tbody.innerHTML += `
      <tr>
        <td>${r.area}</td><td>${r.branchCount.size}</td><td>${r.currency}</td>
        <td class="mc-num">${r.buyCount}</td>
        <td class="mc-num">${r.buyFX.toFixed(2)}</td>
        <td class="mc-num">${r.buyPHP.toFixed(2)}</td>
        <td class="mc-num">${r.sellCount}</td>
        <td class="mc-num">${r.sellFX.toFixed(2)}</td>
        <td class="mc-num">${r.sellPHP.toFixed(2)}</td>
        <td class="mc-num ${net>=0?'mc-pos':'mc-neg'}">${net.toFixed(2)}</td>
      </tr>`;
  });
  _setHOTotals(totBuyFX, totBuyPHP, totSellFX, totSellPHP);
}

function _setHOTotals(buyFX, buyPHP, sellFX, sellPHP) {
  const net = sellPHP - buyPHP;
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('mc-ho-tot-buyfx',   buyFX.toFixed(2));
  set('mc-ho-tot-buyphp',  buyPHP.toFixed(2));
  set('mc-ho-tot-sellfx',  sellFX.toFixed(2));
  set('mc-ho-tot-sellphp', sellPHP.toFixed(2));
  set('mc-ho-tot-net',     net.toFixed(2));
  const netEl = document.getElementById('mc-ho-tot-net');
  if (netEl) netEl.className = `mc-num ${net>=0?'mc-pos':'mc-neg'}`;
}

async function mcHOLoadInventory() {
  const area   = document.getElementById('mc-ho-area-select')?.value   || '';
  const branch = document.getElementById('mc-ho-branch-select')?.value || '';
  const inv    = await getInventory({ area: area||undefined, branchCode: branch||undefined });

  const tbody = document.getElementById('mc-ho-inv-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (!inv.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#888;">No inventory data.</td></tr>';
    return;
  }

  const map = {};
  inv.forEach(i => {
    const key = `${i.area}||${i.currency}`;
    if (!map[key]) map[key] = { area: i.area, currency: i.currency, fxBalance: 0, phpBalance: 0, branches: 0 };
    map[key].fxBalance  += i.fxBalance;
    map[key].phpBalance += i.phpBalance;
    map[key].branches++;
  });

  Object.values(map).forEach(i => {
    const alert = i.fxBalance < 1000 ? '<span class="mc-alert-badge">⚠ Low</span>' : '';
    tbody.innerHTML += `
      <tr class="${i.fxBalance<1000?'mc-row-low':''}">
        <td>${i.area}</td><td>${i.branches}</td><td>${i.currency}</td>
        <td class="mc-num ${i.fxBalance<0?'mc-neg':''}">${i.fxBalance.toFixed(2)} ${alert}</td>
        <td class="mc-num ${i.phpBalance<0?'mc-neg':''}">${i.phpBalance.toFixed(2)}</td>
      </tr>`;
  });
}

async function mcHOLoadRateBoard() {
  const rates = await getLatestRates();
  const tbody = document.getElementById('mc-ho-rates-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  rates.forEach(r => {
    tbody.innerHTML += `
      <tr>
        <td>${r.currency}</td>
        <td class="mc-num">${Number(r.buyRate).toFixed(4)}</td>
        <td class="mc-num">${Number(r.sellRate).toFixed(4)}</td>
        <td>${r.effectiveDate}</td>
        <td>${r.setBy}</td>
        <td><button class="mc-btn mc-btn-sm" onclick="mcHOEditRate('${r.currency}',${r.buyRate},${r.sellRate})">Edit</button></td>
      </tr>`;
  });
}

function mcHOEditRate(currency, buyRate, sellRate) {
  document.getElementById('mc-rate-currency').value = currency;
  document.getElementById('mc-rate-buy').value      = buyRate;
  document.getElementById('mc-rate-sell').value     = sellRate;
  document.getElementById('mc-rate-modal').style.display = 'flex';
}

async function mcHOSaveRate() {
  const currency = document.getElementById('mc-rate-currency').value;
  const buyRate  = parseFloat(document.getElementById('mc-rate-buy').value);
  const sellRate = parseFloat(document.getElementById('mc-rate-sell').value);
  if (!currency || isNaN(buyRate) || isNaN(sellRate) || buyRate <= 0 || sellRate <= 0) {
    alert('Please enter valid rates.'); return;
  }
  if (sellRate < buyRate) { alert('Sell rate must be ≥ buy rate.'); return; }
  await saveRate({ currency, buyRate, sellRate, effectiveDate: todayDate(), setBy: 'HO Admin' });
  document.getElementById('mc-rate-modal').style.display = 'none';
  await mcHOLoadRateBoard();
}

async function mcHOExportExcel() {
  const area     = document.getElementById('mc-ho-area-select')?.value     || '';
  const branch   = document.getElementById('mc-ho-branch-select')?.value   || '';
  const currency = document.getElementById('mc-ho-filter-currency')?.value || '';
  const dateFrom = document.getElementById('mc-ho-filter-from')?.value     || '';
  const dateTo   = document.getElementById('mc-ho-filter-to')?.value       || '';

  const txns = await getTransactions({
    area: area||undefined, branchCode: branch||undefined,
    currency: currency||undefined, dateFrom: dateFrom||undefined, dateTo: dateTo||undefined,
    status: 'Active',
  });

  if (!txns.length) { alert('No data to export.'); return; }

  const rows = txns.map(t => ({
    Date: toDisplayDate(t.date), RefNo: t.refNo, Area: t.area, Branch: t.branchCode,
    Type: t.type, Currency: t.currency,
    'FX Amount': t.fxAmount, 'PHP Amount': t.phpAmount,
    Customer: t.customer, 'ID Type': t.idType, 'ID No': t.idNo,
    Teller: t.teller, Status: t.status, Remarks: t.remarks,
  }));

  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'HO Consolidated');
  XLSX.writeFile(wb, `MC_HO_Report_${dateFrom}_${dateTo}.xlsx`);
}

async function mcHOExportInventory() {
  const inv = await getInventory();
  if (!inv.length) { alert('No inventory data.'); return; }
  const rows = inv.map(i => ({
    Area: i.area, Branch: i.branchCode, Currency: i.currency,
    'FX Balance': i.fxBalance, 'PHP Balance': i.phpBalance,
    'Last Updated': i.lastUpdated,
  }));
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Inventory');
  XLSX.writeFile(wb, `MC_Inventory_${todayDate()}.xlsx`);
}
