function downftallcsv() {
    const table = document.getElementById("ft-data-table");
    const rows = table.querySelectorAll('tr');

    let csvData = [];

    // Iterate through each row in the table (skip the first row)
    rows.forEach((row, index) => {
      // Skip the first row (header) by checking the row index
      const rowStyle = window.getComputedStyle(row);
      if (rowStyle.display === "none" || rowStyle.visibility === "hidden" || rowStyle.opacity === "0") {
        return; // Skip hidden rows
      }

      const rowData = [];
      // Skip the first column (index 0) and extract data from the rest of the columns
      row.querySelectorAll('td, th').forEach((cell, cellIndex) => {
        // Skip the first column (cellIndex === 0)
        if (cellIndex === 0) return;
        
        // Get cell data and escape commas by wrapping it in quotes
        let cellData = cell.innerText.trim();
        if (cellData.includes(',')) {
          cellData = `"${cellData}"`; // Enclose in quotes if there is a comma
        }
        rowData.push(cellData); // Add the sanitized cell data
      });

      // Push the row data into csvData if it has data
      if (rowData.length > 0) {
        csvData.push(rowData.join(',')); // Join cells with commas
      }
    });

    // Convert the csvData array to a CSV string
    const csvString = csvData.join('\n');
   
    // Create a temporary download link
    const blob = new Blob([csvString], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    const currentDate = new Date();
    const dateString = currentDate.toISOString().replace(/[-T:.Z]/g, "-");
    link.download = `Fund-Transfer-List_${dateString}.csv`; // Default file name

    // Programmatically click the download link
    link.click();
}


  function downftbankcsv() {
    const table = document.getElementById("banktable");
    const rows = table.querySelectorAll('tr');

    let csvData = [];

    // Iterate through each row in the table (skip the first row)
    rows.forEach((row, index) => {
      // Skip the first row (header) by checking the row index
      const rowStyle = window.getComputedStyle(row);
      if (rowStyle.display === "none" || rowStyle.visibility === "hidden" || rowStyle.opacity === "0") {
        return; // Skip hidden rows
      }

      const rowData = [];
      // Skip the first column (index 0) and extract data from the rest of the columns
      row.querySelectorAll('td, th').forEach((cell, cellIndex) => {
        // Skip the first column (cellIndex === 0)
        if (cellIndex === 0) return;
        
        // Get cell data and escape commas by wrapping it in quotes
        let cellData = cell.innerText.trim();
        if (cellData.includes(',')) {
          cellData = `"${cellData}"`; // Enclose in quotes if there is a comma
        }
        rowData.push(cellData); // Add the sanitized cell data
      });

      // Push the row data into csvData if it has data
      if (rowData.length > 0) {
        csvData.push(rowData.join(',')); // Join cells with commas
      }
    });

    // Convert the csvData array to a CSV string
    const csvString = csvData.join('\n');

    // Create a temporary download link
    const blob = new Blob([csvString], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    const currentDate = new Date();
    const dateString = currentDate.toISOString().replace(/[-T:.Z]/g, "-");
    link.download = `Fund-Transfer-List-${dateString}.csv`; // Default file name

    // Programmatically click the download link
    link.click();
}


function downftbranchcsv() {
  const table = document.getElementById("branchtable");
  const rows = table.querySelectorAll('tr');

  let csvData = [];

  // Iterate through each row in the table (skip the first row)
  rows.forEach((row, index) => {
    // Skip the first row (header) by checking the row index
    const rowStyle = window.getComputedStyle(row);
    if (rowStyle.display === "none" || rowStyle.visibility === "hidden" || rowStyle.opacity === "0") {
      return; // Skip hidden rows
    }

    const rowData = [];
    // Skip the first column (index 0) and extract data from the rest of the columns
    row.querySelectorAll('td, th').forEach((cell, cellIndex) => {
      // Skip the first column (cellIndex === 0)
      if (cellIndex === 0) return;
      
      // Get cell data and escape commas by wrapping it in quotes
      let cellData = cell.innerText.trim();
      if (cellData.includes(',')) {
        cellData = `"${cellData}"`; // Enclose in quotes if there is a comma
      }
      rowData.push(cellData); // Add the sanitized cell data
    });

    // Push the row data into csvData if it has data
    if (rowData.length > 0) {
      csvData.push(rowData.join(',')); // Join cells with commas
    }
  });

  // Convert the csvData array to a CSV string
  const csvString = csvData.join('\n');

  // Create a temporary download link
  const blob = new Blob([csvString], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  const currentDate = new Date();
  const dateString = currentDate.toISOString().replace(/[-T:.Z]/g, "-");
  link.download = `Fund-Transfer-List_${dateString}.csv`; // Default file name

  // Programmatically click the download link
  link.click();
}

//dropdown with input-----------------------------------------------------------------

const searchInput = document.getElementById("ft-Area-drop");
const dropdownList = document.getElementById("dropdownList");

function toggleDropdown() {
  // Toggle the visibility of the dropdown list
  dropdownList.style.display = dropdownList.style.display === "block" ? "none" : "block";
}

function filterDropdown() {
  const filter = searchInput.value.toUpperCase();
  const items = dropdownList.getElementsByTagName("div");

  // Show dropdown if there's input, otherwise hide it
  dropdownList.style.display = filter ? "block" : "none";

  for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const txtValue = item.textContent || item.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          item.style.display = "";
      } else {
          item.style.display = "none";
      }
  }
}

// Handle item selection
dropdownList.addEventListener("click", function(event) {

  if (event.target.tagName === "DIV") {
      searchInput.value = event.target.textContent;
      dropdownList.style.display = "none"; // Hide the dropdown after selection
  }
});

// Close dropdown if clicked outside
window.addEventListener("click", function(event) {

  if (!event.target.closest('.dropdown')) {
      dropdownList.style.display = "none";
  }
});
//dropdown with input-----------------------------------------------------------------

const searchInput1 = document.getElementById("ft-branch-drop");
const dropdownList1 = document.getElementById("dropdownList-branch");

function toggleDropdownbranch() {

// Toggle the visibility of the dropdown list
dropdownList1.style.display = dropdownList1.style.display === "block" ? "none" : "block";
}

function filterDropdownbranch() {
const filter1 = searchInput1.value.toUpperCase();
const items1 = dropdownList1.getElementsByTagName("div");

// Show dropdown if there's input, otherwise hide it
dropdownList1.style.display = filter1 ? "block" : "none";

for (let i = 0; i < items1.length; i++) {
    const item1 = items1[i];
    const txtValue1 = item1.textContent || item1.innerText;

    if (txtValue1.toUpperCase().indexOf(filter1) > -1) {
        item1.style.display = "";
    } else {
        item1.style.display = "none";
    }
}
}

// Handle item selection
dropdownList1.addEventListener("click", function(event) {

if (event.target.tagName === "DIV") {
    searchInput1.value = event.target.textContent;
    dropdownList1.style.display = "none"; // Hide the dropdown after selection
}
});

// Close dropdown if clicked outside
window.addEventListener("click", function(event) {

if (!event.target.closest('.dropdown')) {
    dropdownList1.style.display = "none";
}
});

//dropdown with input-----------------------------------------------------------------

const searchInput2 = document.getElementById("ft-status-drop");
const dropdownList2 = document.getElementById("dropdownList-stat");

function toggleDropdownstat() {
// Toggle the visibility of the dropdown list
dropdownList2.style.display = dropdownList2.style.display === "block" ? "none" : "block";
}

function filterDropdownstat() {
const filter2 = searchInput2.value.toUpperCase();
const items2 = dropdownList2.getElementsByTagName("div");

// Show dropdown if there's input, otherwise hide it
dropdownList2.style.display = filter2 ? "block" : "none";

for (let i = 0; i < items2.length; i++) {
    const item2 = items2[i];
    const txtValue2 = item2.textContent || item2.innerText;

    if (txtValue2.toUpperCase().indexOf(filter2) > -1) {
        item2.style.display = "";
    } else {
        item2.style.display = "none";
    }
}
}

// Handle item selection
dropdownList2.addEventListener("click", function(event) {

if (event.target.tagName === "DIV") {
    searchInput2.value = event.target.textContent;
    dropdownList2.style.display = "none"; // Hide the dropdown after selection
}
});

// Close dropdown if clicked outside
window.addEventListener("click", function(event) {

if (!event.target.closest('.dropdown')) {
    dropdownList2.style.display = "none";
}
});

//-------------------------------------------

const selectElement1 = document.getElementById('ft-Area-drop');

selectElement1.addEventListener('change', function () {
// Check if the placeholder option is selected (value is empty string)
if (selectElement1.value === '') {
  selectElement1.value = '';  // This will ensure the value is set to blank
}
});

const selectElement2 = document.getElementById('ft-branch-drop');
selectElement2.addEventListener('change', function () {
// Check if the placeholder option is selected (value is empty string)
if (selectElement2.value === '') {
  selectElement2.value = '';  // This will ensure the value is set to blank
}
});


const selectElement3 = document.getElementById('ft-status-drop');
selectElement3.addEventListener('change', function () {
// Check if the placeholder option is selected (value is empty string)
if (selectElement3.value === '') {
  selectElement3.value = '';  // This will ensure the value is set to blank
}
});


//-----------------------------------------------------------------------------------------

function filterftallTable() {

    // Get filter values for each column
    const ftarea = document.getElementById('ft-Area-drop').value.toLowerCase();
    const ftbranch = document.getElementById('ft-branch-drop').value.toLowerCase();
    const ftstatus = document.getElementById('ft-status-drop').value.toLowerCase();
    const search1 = document.getElementById('searchftall').value.toLowerCase();
    const search2 = document.getElementById('searchftbranch').value.toLowerCase();
    const search3 = document.getElementById('searchftbank').value.toLowerCase();
    const startDate = document.getElementById('datefromFTlist').value;
    const endDate = document.getElementById('datetoFTlist').value;

    // Get table rows
    const table1 = document.getElementById('ft-data-table').querySelectorAll('tbody tr');
    const table2 = document.getElementById('branchtable').querySelectorAll('tbody tr');
    const table3 = document.getElementById('banktable').querySelectorAll('tbody tr');

    // Filter rows in the first table (ft-data-table)
    filterTableRows(table1, ftarea, ftbranch, ftstatus, search1, startDate, endDate);

    // Filter rows in the second table (branchtable)
    filterTableRows(table2, ftarea, ftbranch, ftstatus, search2, startDate, endDate);

    // Filter rows in the third table (banktable)
    filterTableRows(table3, ftarea, ftbranch, ftstatus, search3, startDate, endDate);
}

function filterTableRows(rows, ftarea, ftbranch, ftstatus, search, startDate, endDate) {
    rows.forEach(row => {
        const col1 = row.cells[11].innerText.toLowerCase();
        const col2 = row.cells[6].innerText.toLowerCase();
        const col3 = row.cells[7].innerText.toLowerCase();
        const col4 = row.cells[10].innerText.toLowerCase();
        const col5 = row.cells[2].innerText.toLowerCase();
        const col6 = row.cells[3].innerText.toLowerCase();
        const col7 = row.cells[4].innerText.toLowerCase();
        const col8 = row.cells[5].innerText.toLowerCase();
        const col9 = row.cells[8].innerText.toLowerCase();
        const col10 = row.cells[9].innerText.toLowerCase();

        const date = row.cells[1].innerText;
        const start = new Date(startDate);
        const end = new Date(endDate);
        const dateParts = date.split('/');
        const rowDate = new Date(`${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`);
        const dateFilter = (!startDate || rowDate >= start) && (!endDate || rowDate <= end);

        // Check if the row matches the filter criteria
        const areaMatch = ftarea ? col1.includes(ftarea) : true;
        const branchMatch = ftbranch ? (col2.includes(ftbranch) || col3.includes(ftbranch)) : true;
        const statusMatch = ftstatus ? col4.includes(ftstatus) : true;
        const searchMatch = [col5, col6, col7, col8, col9, col10].some(col => col.includes(search));

        // Show or hide the row based on filter matching
        if (areaMatch && branchMatch && statusMatch && searchMatch && dateFilter) {
            row.style.display = ''; // Show row
        } else {
            row.style.display = 'none'; // Hide row
        }
    });
}








//------------------------------------------------------------------------------------
document.getElementById('searchftall').addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the form from being submitted
}
});

function searchTable() {
var searchInput3 = document.getElementById("searchftall").value.toLowerCase();
var tablesearch = document.getElementById("ft-data-table");
var rowssearch = tablesearch.getElementsByTagName("tr");

// Filter dropdown values
const sftarea = document.getElementById('ft-Area-drop').value.toLowerCase();
const sftbranch = document.getElementById('ft-branch-drop').value.toLowerCase();
const sftstatus = document.getElementById('ft-status-drop').value.toLowerCase();

// Date range filters
const startDate = document.getElementById('datefromFTlist').value;
const endDate = document.getElementById('datetoFTlist').value;

// Convert input dates to Date objects for comparison
const start = new Date(startDate);
const end = new Date(endDate);

// Loop through all rows (except the header row)
for (var i = 1; i < rowssearch.length; i++) {
  var cellssearch = rowssearch[i].getElementsByTagName("td");

  // Extract relevant columns (adjust column indexes as needed)
  var namesearch = cellssearch[2].textContent.toLowerCase();
  var typesearch = cellssearch[3].innerText.toLowerCase();
  var idsearch = cellssearch[4].innerText.toLowerCase();
  var amountsearch = cellssearch[5].innerText.toLowerCase();
  var memosearch = cellssearch[8].innerText.toLowerCase();
  var createsearch = cellssearch[9].innerText.toLowerCase();
  
  // Columns for filtering (area, branch, status, etc.)
  const col41 = cellssearch[11].innerText.toLowerCase(); // Area
  const col42 = cellssearch[6].innerText.toLowerCase();  // Branch (orig)
  const col43 = cellssearch[7].innerText.toLowerCase();  // Branch (dest)
  const col44 = cellssearch[10].innerText.toLowerCase(); // Status

  // Get date from the row and convert to Date object
  const date = cellssearch[1].innerText; // Assumed to be in mm/dd/yyyy format
  const dateParts = date.split('/');
  const rowDate = new Date(`${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`);

  // Check if the row's date is within the selected range
  const dateFilter = (!startDate || rowDate >= start) && (!endDate || rowDate <= end);

  // Area, branch, and status filters
  const area1 = sftarea ? col41.includes(sftarea) : true;
  const orig1 = sftbranch ? col42.includes(sftbranch) : true;
  const dest1 = sftbranch ? col43.includes(sftbranch) : true;
  const stat1 = sftstatus ? col44.includes(sftstatus) : true;

  // Search term match for relevant fields
  const matchesSearch = namesearch.includes(searchInput3) ||
                        typesearch.includes(searchInput3) ||
                        idsearch.includes(searchInput3) ||
                        amountsearch.includes(searchInput3) ||
                        memosearch.includes(searchInput3) ||
                        createsearch.includes(searchInput3);

  // Combine all filters
  if (matchesSearch){ 
    if (area1 && orig1 && stat1 && dateFilter || area1 && dest1 && stat1 && dateFilter) {
      
      rowssearch[i].style.display = ''; // Show row
    }
  } else {
      rowssearch[i].style.display = 'none'; // Hide row
  }
}
}



function searchTablebranch() {
var searchInputbranch = document.getElementById("searchftbranch").value.toLowerCase();
var tablesearchbranch = document.getElementById("branchtable");
var rowssearchbranch = tablesearchbranch.getElementsByTagName("tr");

// Filter dropdown values
const branchftarea= document.getElementById('ft-Area-drop').value.toLowerCase();
const branchftbranch = document.getElementById('ft-branch-drop').value.toLowerCase();
const branchftstatus = document.getElementById('ft-status-drop').value.toLowerCase();

// Date range filters
const branchstartDate = document.getElementById('datefromFTlist').value;
const branchendDate = document.getElementById('datetoFTlist').value;

// Convert input dates to Date objects for comparison
const branchstart = new Date(branchstartDate);
const branchend = new Date(branchendDate);

// Loop through all rows (except the header row)
for (var i = 1; i < rowssearchbranch.length; i++) {
  var cellssearchbranch = rowssearchbranch[i].getElementsByTagName("td");

  // Extract relevant columns (adjust column indexes as needed)
  var namesearchbranch = cellssearchbranch[2].textContent.toLowerCase();
  var typesearchbranch = cellssearchbranch[3].innerText.toLowerCase();
  var idsearchbranch = cellssearchbranch[4].innerText.toLowerCase();
  var amountsearchbranch = cellssearchbranch[5].innerText.toLowerCase();
  var memosearchbranch = cellssearchbranch[8].innerText.toLowerCase();
  var createsearchbranch = cellssearchbranch[9].innerText.toLowerCase();
  
  // Columns for filtering (area, branch, status, etc.)
  const col51 = cellssearchbranch[11].innerText.toLowerCase(); // Area
  const col52 = cellssearchbranch[6].innerText.toLowerCase();  // Branch (orig)
  const col53 = cellssearchbranch[7].innerText.toLowerCase();  // Branch (dest)
  const col54 = cellssearchbranch[10].innerText.toLowerCase(); // Status

  // Get date from the row and convert to Date object
  const branchdate = cellssearchbranch[1].innerText; // Assumed to be in mm/dd/yyyy format
  const branchdateParts = branchdate.split('/');
  const branchrowDate= new Date(`${branchdateParts[2]}-${branchdateParts[0]}-${branchdateParts[1]}`);

  // Check if the row's date is within the selected range
  const branchdateFilter = (!branchstartDate|| branchrowDate >= branchstart) && (!branchendDate || branchrowDate <= branchend);

  // Area, branch, and status filters
  const area2 = branchftarea ? col51.includes(branchftarea) : true;
  const orig2 = branchftbranch ? col52.includes(branchftbranch) : true;
  const dest2 = branchftbranch ? col53.includes(branchftbranch) : true;
  const stat2 = branchftstatus ? col54.includes(branchftstatus) : true;

  // Search term match for relevant fields
  const branchmatchesSearch = namesearchbranch.includes(searchInputbranch ) ||
                        typesearchbranch.includes(searchInputbranch ) ||
                        idsearchbranch.includes(searchInputbranch ) ||
                        amountsearchbranch.includes(searchInputbranch ) ||
                        memosearchbranch.includes(searchInputbranch ) ||
                        createsearchbranch.includes(searchInputbranch );

  // Combine all filters
  if (branchmatchesSearch){ 
    if (area2 && orig2 && stat2 && branchdateFilter || area2 && dest2 && stat2 && branchdateFilter) {
      
      rowssearchbranch[i].style.display = ''; // Show row
    }
  } else {
      rowssearchbranch[i].style.display = 'none'; // Hide row
  }
}
}

function searchTablebank() {
var searchInputbank= document.getElementById("searchftbank").value.toLowerCase();
var tablesearchbank= document.getElementById("banktable");
var rowssearchbank = tablesearchbank.getElementsByTagName("tr");

// Filter dropdown values
const bankftarea= document.getElementById('ft-Area-drop').value.toLowerCase();
const bankftbranch = document.getElementById('ft-branch-drop').value.toLowerCase();
const bankftstatus = document.getElementById('ft-status-drop').value.toLowerCase();

// Date range filters
const bankstartDate = document.getElementById('datefromFTlist').value;
const bankendDate = document.getElementById('datetoFTlist').value;

// Convert input dates to Date objects for comparison
const bankstart = new Date(bankstartDate);
const bankend = new Date(bankendDate);

// Loop through all rows (except the header row)
for (var i = 1; i < rowssearchbank.length; i++) {
  var cellssearchbank = rowssearchbank[i].getElementsByTagName("td");

  // Extract relevant columns (adjust column indexes as needed)
  var namesearchbank = cellssearchbank[2].textContent.toLowerCase();
  var typesearchbank = cellssearchbank[3].innerText.toLowerCase();
  var idsearchbank = cellssearchbank[4].innerText.toLowerCase();
  var amountsearchbank = cellssearchbank[5].innerText.toLowerCase();
  var memosearchbank = cellssearchbank[8].innerText.toLowerCase();
  var createsearchbank = cellssearchbank[9].innerText.toLowerCase();
  
  // Columns for filtering (area, branch, status, etc.)
  const col61 = cellssearchbank[11].innerText.toLowerCase(); // Area
  const col62 = cellssearchbank[6].innerText.toLowerCase();  // Branch (orig)
  const col63 = cellssearchbank[7].innerText.toLowerCase();  // Branch (dest)
  const col64 = cellssearchbank[10].innerText.toLowerCase(); // Status

  // Get date from the row and convert to Date object
  const bankdate = cellssearchbank[1].innerText; // Assumed to be in mm/dd/yyyy format
  const bankdateParts = bankdate.split('/');
  const bankrowDate= new Date(`${bankdateParts[2]}-${bankdateParts[0]}-${bankdateParts[1]}`);

  // Check if the row's date is within the selected range
  const bankdateFilter = (!bankstartDate|| bankrowDate >= bankstart) && (!bankendDate || bankrowDate <= bankend);

  // Area, branch, and status filters
  const area3 = bankftarea ? col61.includes(bankftarea) : true;
  const orig3 = bankftbranch ? col62.includes(bankftbranch) : true;
  const dest3 = bankftbranch ? col63.includes(bankftbranch) : true;
  const stat3 = bankftstatus ? col64.includes(bankftstatus) : true;

  // Search term match for relevant fields
  const bankmatchesSearch = namesearchbank.includes(searchInputbank ) ||
                        typesearchbank.includes(searchInputbank ) ||
                        idsearchbank.includes(searchInputbank ) ||
                        amountsearchbank.includes(searchInputbank ) ||
                        memosearchbank.includes(searchInputbank) ||
                        createsearchbank.includes(searchInputbank);

  // Combine all filters
  if (bankmatchesSearch){ 
    if (area3 && orig3 && stat3 && bankdateFilter || area3 && dest3 && stat3 && bankdateFilter) {
      
      rowssearchbank[i].style.display = ''; // Show row
    }
  } else {
      rowssearchbank[i].style.display = 'none'; // Hide row
  }
}
}

