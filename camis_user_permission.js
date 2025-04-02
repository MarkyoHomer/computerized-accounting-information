function checkUserLogin() {
  const userRole = localStorage.getItem('userRole');  // Check for the user role or session token

  // If no userRole is found, redirect to the login page
  if (!userRole) {
    window.location.href = 'index.html' ;  // Change this to your login page URL
  }
}

checkUserLogin();

//--------------------------------------------------------------------------------------------------------------

const toggleButton = document.getElementById('toggleButton');
const formContent = document.getElementById('formContent');
const modalwidth = document.getElementById('modalwidth');
const viewftoverlay = document.getElementById('overlay2');
const fieldsetcontainer = document.getElementById('fieldset-container');
const CamisFTtable = document.getElementById('ft-data-table')

const dropdown = document.getElementById('ft-Area-drop');
const droptype = document.getElementById('ft-trns-drop');
const dropstat =  document.getElementById('ft-status-drop');
const userRole = localStorage.getItem("userRole");
const zaa = document.querySelectorAll('.ZAA');
const zab = document.querySelectorAll('.ZAB');
const zabbank = document.querySelectorAll('.ZAB-bank');
const zaabank = document.querySelectorAll('.ZAA-bank');
const zabbr = document.querySelectorAll('.ZAB-branch');
const zaabr = document.querySelectorAll('.ZAA-branch');
const noncmd = document.querySelectorAll('.noncmd');
const btncopy = document.querySelectorAll('.custom-button-copy');
const cby = document.getElementById('cby');
const cdate = document.getElementById('cdate');
const ttype = document.getElementById('ttype');
const ttypef = document.getElementById('ttypef');
const nob = document.getElementById('nob');
const nobf = document.getElementById('nobf');
const ndb = document.getElementById('ndb');
const ndbf = document.getElementById('ndbf');
const nbank = document.getElementById('nbank');
const ncor = document.getElementById('ncor');
const ncorf = document.getElementById('ncorf');
const nother = document.getElementById('other');
const notherf = document.getElementById('notherf');
const namt = document.getElementById('namt');
const namtf = document.getElementById('namtf');
const savenew =  document.getElementById('FT-btn-save-overlay1');
const areadefault  = document.getElementById("ft-Area-drop");
const tnstype = document.getElementById('tnstype');
const newftamt = document.getElementById('newftamt');
const neworigin = document.getElementById('neworigin');
const newdest = document.getElementById('newdest');
const nwbnk = document.getElementById('nwbnk');
const newftcourier = document.getElementById('newftcourier');
const newftother = document.getElementById('newftother');
const newftmemo = document.getElementById('newftmemo');
const newfttnxid = document.getElementById('newfttnxid');
const xMessage = document.getElementById('xmessage');


document.getElementById('dropdownList-trans').addEventListener('click', function(event) {
  if (event.target && event.target.matches('div')) {
      const selectedValue = event.target.innerText.trim().toLowerCase();
      const cmdElements = document.querySelectorAll("#dropdownList-stat .cmd");
      const cmdElements2 = document.querySelectorAll("#dropdownList-stat .noncmd");

      if (selectedValue === "send") {
          cmdElements.forEach(function (cmdElement) {
              cmdElement.style.display = "none"; 
          });

          cmdElements2.forEach(function (cmdElement) {
            cmdElement.style.display = ''; 
        });
           if (dropstat.value ==='Acknowledged' ||  dropstat.value ==='Denied'){
            dropstat.value = ""
            dropstat.placeholder = "All Status"

           }
           
        
      } else {
        cmdElements.forEach(function (cmdElement) {
          cmdElement.style.display = ''; 
      });

          cmdElements2.forEach(function (cmdElement) {
            cmdElement.style.display = "none"; 
        });

        if (dropstat.value ==='Received'){
          dropstat.value = ""
          dropstat.placeholder = "All Status"

         }
      }
  }
});





function closeOverlay(overlayId) {
  document.getElementById(overlayId).classList.remove('show');
  modalwidth.style.width = '470px';
  fieldsetcontainer.style.gap = '20px';
  toggleButton.innerHTML = '<i class="fas fa-circle-arrow-right"></i>';
  document.getElementById('toggleButton').innerHTML = '<i class="fas fa-circle-arrow-right"></i>';  
}




function toUpperCaseOnly(event) {
  // Convert input to uppercase as the user types
  event.target.value = event.target.value.toUpperCase();
}

function formatNumber(event) {  
  if (newftamt.value!==''){
  let value = event.target.value;
  value = value.replace(/[^0-9.]/g, '');    // Remove non-numeric characters except for the dot
  let number = parseFloat(value).toFixed(2);    // Convert the value to a number and ensure two decimal places
  number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");   // Add commas for thousands
  event.target.value = number;
  }
}

newftamt.addEventListener('input', function validateInput(event) {
  const inputField = event.target;
  inputField.value = inputField.value.replace(/[^0-9.,]/g, '');
  if (newftamt.value.trim() !== '') {   
    
    namtf.style.border = '1px solid #ccc'
  } else {   

    namtf.style.border = '1px solid red'
  }


  if(ttypef.style.border === '1px solid red' ||  ndbf.style.border === '1px solid red' || namtf.style.border === '1px solid red'
    ||  nobf.style.border === '1px solid red' ||     nwbnk.style.border === "1px solid red"   ||    ncorf.style.border === "1px solid red"){

      savenew.style.backgroundColor =  "gray";
      savenew.disabled = true;
      savenew.style.cursor = "not-allowed";
 
  }else {
    savenew.style.backgroundColor =  "#3f61b8";
    savenew.disabled = false;
    savenew.style.cursor = "pointer";
  }


});

newftcourier.addEventListener('input', function() {
  if (newftcourier.value.trim() !== '') {
    ncorf.style.border = '1px solid #ccc'
  } else {
    ncorf.style.border = '1px solid red'
  }

  if(ttypef.style.border === '1px solid red' ||  ndbf.style.border === '1px solid red' || namtf.style.border === '1px solid red'
    ||  nobf.style.border === '1px solid red' ||     nwbnk.style.border === "1px solid red"   ||    ncorf.style.border === "1px solid red"){

      savenew.style.backgroundColor =  "gray";
      savenew.disabled = true;
      savenew.style.cursor = "not-allowed";
 
  }else {
    savenew.style.backgroundColor =  "#3f61b8";
    savenew.disabled = false;
    savenew.style.cursor = "pointer";
  }

});

function toggleDropdownneworig() {
  var dropdownList = document.getElementById('dropdownList-neworig');
  dropdownList.style.display = dropdownList.style.display === 'none' ? 'block' : 'none';
}

function toggleDropdownnewdest() {
  var dropdownList = document.getElementById('dropdownList-newdest');
  dropdownList.style.display = dropdownList.style.display === 'none' ? 'block' : 'none';
}

function getCurrentDateTime() {
  const now = new Date();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);  // getMonth() is zero-based
  const day = ('0' + now.getDate()).slice(-2);
  const year = now.getFullYear();
  const hours = ('0' + now.getHours()).slice(-2);
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const seconds = ('0' + now.getSeconds()).slice(-2);

  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

function opennewOverlay(overlayId, event, tableId, rowIndex, colIndex) {
  event.preventDefault();  
const table = document.getElementById(tableId);
const NStatusoverlay2 = document.getElementById('NStatus-overlay2');
const row = table.rows[rowIndex]    
const cell = row.cells[colIndex];
const cellValue = cell.innerText; 
fieldsetcontainer.style.gap = '20px';
NStatusoverlay2.value = cellValue 
localStorage.setItem("Newrow", row);

  const buttons = {
  
    save: document.getElementById('FT-btn-save-' + overlayId),

  };
 document.getElementById(overlayId).classList.add('show');





  if (overlayId === 'overlay1'){
    cby.value = userRole + "1234";
   // cdate.value = getCurrentDateTime();
    ttypef.style.border = "1px solid red";
    namtf.style.border = "1px solid #ccc";
    ncorf.style.border = "1px solid #ccc";
    ndbf.style.border = "1px solid #ccc";
    nobf.style.border = "1px solid #ccc";
    notherf.style.border = "1px solid #ccc";
    nbank.style.color = "#ccc";
    nwbnk.style.border = "1px solid #ccc";
    buttons.save.style.backgroundColor =  "gray";
    buttons.save.disabled = true;
    buttons.save.style.cursor = "not-allowed";

    newftamt.disabled  = true;
    neworigin.disabled  = true;
    newdest.disabled  = true;
    nwbnk.disabled  = true;
    newftcourier.disabled  = true;
    newftother.disabled  = true;
 
    tnstype.value = "";
    newftamt.value = "";
    neworigin.value = "";
    newdest.value = "";
    nwbnk.value = "";
    newftcourier.value ="" ;  
    newfttnxid.value = "";
    newftcourier.value = "";
    newftother.value = "";

  }else{

    document.getElementById('NStatus-overlay2').textContent = cellValue;
  }


}


function openOverlay(overlayId, event, tableId, rowIndex, colIndex, button) {
  event.preventDefault();   
const NStatusoverlay2 = document.getElementById('NStatus-overlay2');
const overlayheader = document.getElementById('headr');
const table = document.getElementById(tableId);
fieldsetcontainer.style.gap = '20px';

    const buttonrow = button.closest('tr'); 
    var newrowIndex = Array.from(table.rows).indexOf(buttonrow);
    const row = buttonrow
    const cell = row.cells[colIndex];
    const cellValue = cell.innerText; 
    const hcell = row.cells[2].innerText;

    overlayheader.value = hcell + " Transaction"
    NStatusoverlay2.value = cellValue 
    localStorage.setItem("Newrow", newrowIndex);
    viewtrnxtype.value =  row.cells[2].innerText
    viewamount.value = row.cells[4].innerText
    vieworigin.value =  row.cells[5].innerText
    viewdest.value =  row.cells[6].innerText
    viewcftcourier.value = row.cells[7].innerText
    viewcftmemo.value =  row.cells[8].innerText
    viewtrnxid.value =  row.cells[3].innerText
    viewcftremarks.value=  row.cells[16].innerText
    viewcftcby.value=  row.cells[9].innerText
    viewcftcdate.value=  row.cells[1].innerText  + " 08:" + padNumber(rowIndex, 2) + ":00";
    viewcftrby.value=  row.cells[12].innerText
    viewcftrdate.value=  row.cells[13].innerText
    viewcftclby.value=  row.cells[14].innerText
    viewcftcldate.value=  row.cells[15].innerText

        if( row.cells[2].innerText === 'Withdraw' ||  row.cells[2].innerText === 'Deposit'){
          viewcftbank.value =  row.cells[8].innerText
          
        }else{
          viewcftbank.value = ''
        }    



  const buttons = {
    flag: document.getElementById('FT-btn-flag-' + overlayId),
    ack: document.getElementById('FT-btn-ack-' + overlayId),
    deny: document.getElementById('FT-btn-deny-' + overlayId),
    canceld: document.getElementById('FT-btn-cancel-denied-' + overlayId),
    canceln: document.getElementById('FT-btn-cancel-new-' + overlayId),
    cancela: document.getElementById('FT-btn-cancel-ack-' + overlayId),
    save: document.getElementById('FT-btn-save-' + overlayId),
    cancelf: document.getElementById('FT-btn-cancel-flag-' + overlayId),
  };
 document.getElementById(overlayId).classList.add('show');

  // Default settings to hide all buttons
  for (let btn in buttons) {
    buttons[btn].style.display = 'none';
  }

  // Role-based logic
  switch (userRole) {
    case 'zaa-aas':
    case 'zab-aas':
      handleAasRole(overlayId, cellValue, buttons);
      break;
    case 'cru':
      handleCruRole(overlayId, cellValue, buttons);
      break;
    case 'zaa-aaa':
    case 'zab-aaa':
      handleAaaRole(overlayId, cellValue, buttons);
      break;
    case 'cmd':
      handleCmdRole(overlayId, cellValue, buttons);
      break;
    default:
      handleDefaultRole(buttons);
      break;
  }


    document.getElementById('NStatus-' + overlayId).textContent = cellValue;
  }





// Role-based button visibility handlers
function handleAasRole(overlayId, cellValue, buttons) {
  if (overlayId === 'overlay1' || overlayId === 'overlay0') {
    buttons.save.style.display = 'block';
  }
  
  if (cellValue === 'Pending') {
    buttons.canceln.style.display = 'block';
  }
}

function handleCruRole(overlayId, cellValue, buttons) {
  if (overlayId === 'overlay0') {
    buttons.save.style.display = 'none';
  }

  if (cellValue === 'Under Review') {
    buttons.cancelf.style.display = 'block';
  } else {
    buttons.flag.style.display = 'block';
  }
}

function handleAaaRole(overlayId, cellValue, buttons) {
  if (overlayId === 'overlay0') {
    buttons.save.style.display = 'none';
  }

  if (cellValue === 'Under Review') {
    buttons.save.style.display = 'none';
  }
}

function handleCmdRole(overlayId, cellValue, buttons) {
  if (overlayId === 'overlay0') {
    buttons.save.style.display = 'none';
  }

  switch (cellValue) {
    case 'In-Transit':
      buttons.ack.style.display = 'block';
      buttons.deny.style.display = 'block';
      break;
    case 'Acknowledged':
      buttons.cancela.style.display = 'block';
      break;
    case 'Denied':
      buttons.canceld.style.display = 'block';
      break;
    default:
      break;
  }
}

function handleDefaultRole(buttons) {
  // For any role that doesn't have specific logic
  buttons.flag.style.display = 'none';
  buttons.ack.style.display = 'none';
  buttons.deny.style.display = 'none';
  buttons.canceld.style.display = 'none';
  buttons.cancela.style.display = 'none';
  buttons.canceln.style.display = 'none';
  buttons.cancelf.style.display = 'none';
  buttons.save.style.display = 'none';
}

// If role exists, display it in the header

if (userRole === 'zaa-aas') {
    document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter
    areadefault.value = "ZAA";
    areadefault.disabled = true;
 
    document.getElementById("tab100").style.display='none';
    document.getElementById("Integ-Arrow").style.display='none';
    document.getElementById("FT-Arrow").style.display='block';


    document.getElementById('tab5').classList.add('active');
    document.getElementById('content-tab5').classList.add('active');
    document.getElementById('sub-tab5-tab1').classList.add('active');
    document.getElementById('subcon-tab5-tab1').classList.add('active');
     document.getElementById("sub-tab5-tab1").style.display='none';
     document.getElementById("sub-tab5-tab2").style.display='none';
     document.getElementById("sub-tab5-tab3").style.display='none';  


     document.getElementById("FT-btn-add").style.display='block';
     document.getElementById("FT-btn-update").style.display='block';
     document.getElementById("BCAS").style.display='none';
      
      document.getElementById("Integ-Arrow").style.display='none';
      document.getElementById("IntegDtS").style.display='none';
      document.getElementById("IntegExP").style.display='none';
      document.getElementById("IntegSum").style.display='none';

      document.getElementById("FT-Arrow").style.display='block';
      document.getElementById("FT-RcR").style.display='none';
      document.getElementById("FT-TxL").style.display='none';
      
     document.getElementById("Trnx-Arrow").style.display='none';
     document.getElementById("Exp-Arrow").style.display='none';
     document.getElementById("Earn-Arrow").style.display='none';

     document.getElementById("Reprt-Arrow").style.display='none';
     document.getElementById("RprtASum").style.display='none';
     document.getElementById("RprtDtlr").style.display='none';
     document.getElementById("RprtFinR").style.display='none';
     document.getElementById("RprtAreaD").style.display='none';
     document.getElementById("RprtBookA").style.display='none';

     document.getElementById("Montr-Arrow").style.display='none';
     document.getElementById("Mntr-Upld").style.display='none';
     document.getElementById("Mntr-Aud").style.display='none';


     document.getElementById("Setup-Arrow").style.display='none';
     document.getElementById("IntSetup-Arrow").style.display='none';


     zab.forEach(row => {

   row.classList.add('hidden'); // Hide admin-only rows
      });

  
}else if (userRole === 'zab-aas') {
    document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter
    areadefault.value = "ZAB";
    areadefault.disabled = true;


    document.getElementById("FT-btn-add").style.display='block';
    document.getElementById("FT-btn-update").style.display='block';

    document.getElementById("sub-tab5-tab1").style.display='none';
    document.getElementById("sub-tab5-tab2").style.display='none';
    document.getElementById("sub-tab5-tab3").style.display='none';
     
      document.getElementById("BCAS").style.display='none';

      document.getElementById("Integ-Arrow").style.display='none';
      document.getElementById("IntegDtS").style.display='none';
      document.getElementById("IntegExP").style.display='none';
      document.getElementById("IntegSum").style.display='none';

      document.getElementById("FT-Arrow").style.display='block';
      document.getElementById("FT-RcR").style.display='none';
      document.getElementById("FT-TxL").style.display='none';
      
     document.getElementById("Trnx-Arrow").style.display='none';
     document.getElementById("Exp-Arrow").style.display='none';
     document.getElementById("Earn-Arrow").style.display='none';

     document.getElementById("Reprt-Arrow").style.display='none';
     document.getElementById("RprtASum").style.display='none';
     document.getElementById("RprtDtlr").style.display='none';
     document.getElementById("RprtFinR").style.display='none';
     document.getElementById("RprtAreaD").style.display='none';
     document.getElementById("RprtBookA").style.display='none';

     document.getElementById("Montr-Arrow").style.display='none';
     document.getElementById("Mntr-Upld").style.display='none';
     document.getElementById("Mntr-Aud").style.display='none';


     document.getElementById("Setup-Arrow").style.display='none';
     document.getElementById("IntSetup-Arrow").style.display='none';

 
     document.getElementById('content-tab5').classList.add('active');
     document.getElementById('sub-tab5-tab1').classList.add('active');
     document.getElementById('subcon-tab5-tab1').classList.add('active');

     zaa.forEach(row => {

        row.classList.add('hidden'); // Hide admin-only rows
      });

    } else if (userRole === 'zaa-aaa') {
      areadefault.value = "ZAA";
      btncopy.forEach(row => {
        row.classList.add('hidden'); // Hide admin-only rows
      });
    
      
      document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter
        document.getElementById("FT-btn-add").style.display='none';
        document.getElementById("FT-btn-update").style.display='block';
        document.getElementById("sub-tab5-tab1").style.display='none';
        document.getElementById("sub-tab5-tab2").style.display='none';
        document.getElementById("sub-tab5-tab3").style.display='none';    
        document.getElementById("BCAS").style.display='none';    
        document.getElementById("Integ-Arrow").style.display='block';
        document.getElementById("IntegDtS").style.display='block';
        document.getElementById("IntegExP").style.display='none';
        document.getElementById("IntegSum").style.display='none';
    
          document.getElementById("FT-Arrow").style.display='block';
          document.getElementById("FT-RcR").style.display='block';
          document.getElementById("FT-TxL").style.display='block';
          
         document.getElementById("Trnx-Arrow").style.display='none';
         document.getElementById("Exp-Arrow").style.display='none';
         document.getElementById("Earn-Arrow").style.display='none';
         
         document.getElementById("Reprt-Arrow").style.display='block';
         document.getElementById("RprtASum").style.display='none';
         document.getElementById("RprtDtlr").style.display='block';
         document.getElementById("RprtFinR").style.display='none';
         document.getElementById("RprtAreaD").style.display='none';
         document.getElementById("RprtBookA").style.display='none';
    
         document.getElementById("Montr-Arrow").style.display='block';
         document.getElementById("Mntr-Upld").style.display='none';
         document.getElementById("Mntr-Aud").style.display='block';
    
         document.getElementById("Setup-Arrow").style.display='none';
         document.getElementById("IntSetup-Arrow").style.display='none';
    
          document.getElementById('tab4').classList.add('active');
          document.getElementById('content-tab4').classList.add('active');
          document.getElementById('sub-tab4-tab1').classList.add('active');
          document.getElementById('subcon-tab4-tab1').classList.add('active');
          btncopy.forEach(row => {
            row.classList.add('hidden'); // Hide admin-only rows
          });
          zab.forEach(row => {

            row.classList.add('hidden'); // Hide admin-only rows
          });



} else if (userRole === 'zab-aaa') {
  areadefault.value = "ZAB";
          btncopy.forEach(row => {
            row.classList.add('hidden'); // Hide admin-only rows
          });
        
          
          document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter
            document.getElementById("FT-btn-add").style.display='none';
            document.getElementById("FT-btn-update").style.display='block';
            document.getElementById("sub-tab5-tab1").style.display='none';
            document.getElementById("sub-tab5-tab2").style.display='none';
            document.getElementById("sub-tab5-tab3").style.display='none';
        
              document.getElementById("BCAS").style.display='none';
        
              document.getElementById("Integ-Arrow").style.display='block';
              document.getElementById("IntegDtS").style.display='block';
              document.getElementById("IntegExP").style.display='none';
              document.getElementById("IntegSum").style.display='none';
        
              document.getElementById("FT-Arrow").style.display='block';
              document.getElementById("FT-RcR").style.display='block';
              document.getElementById("FT-TxL").style.display='block';
              
             document.getElementById("Trnx-Arrow").style.display='none';
             document.getElementById("Exp-Arrow").style.display='none';
             document.getElementById("Earn-Arrow").style.display='none';
             
             document.getElementById("Reprt-Arrow").style.display='block';
             document.getElementById("RprtASum").style.display='none';
             document.getElementById("RprtDtlr").style.display='block';
             document.getElementById("RprtFinR").style.display='none';
             document.getElementById("RprtAreaD").style.display='none';
             document.getElementById("RprtBookA").style.display='none';
        
             document.getElementById("Montr-Arrow").style.display='block';
             document.getElementById("Mntr-Upld").style.display='none';
             document.getElementById("Mntr-Aud").style.display='block';
        
             document.getElementById("Setup-Arrow").style.display='none';
             document.getElementById("IntSetup-Arrow").style.display='none';
        
              document.getElementById('tab4').classList.add('active');
              document.getElementById('content-tab4').classList.add('active');
              document.getElementById('sub-tab4-tab1').classList.add('active');
              document.getElementById('subcon-tab4-tab1').classList.add('active');
              btncopy.forEach(row => {
                row.classList.add('hidden'); // Hide admin-only rows
              });
              zaa.forEach(row => {
    
                row.classList.add('hidden'); // Hide admin-only rows
              });
    


} else if (userRole === 'cru') {
    
              btncopy.forEach(row => {
                row.classList.add('hidden'); // Hide admin-only rows
              });
            
              
              document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter
                document.getElementById("FT-btn-add").style.display='none';
                document.getElementById("FT-btn-update").style.display='none';
         
            
                  document.getElementById("BCAS").style.display='none';
            
                  document.getElementById("Integ-Arrow").style.display='block';
                  document.getElementById("IntegDtS").style.display='block';
                  document.getElementById("IntegExP").style.display='none';
                  document.getElementById("IntegSum").style.display='none';
            
                  document.getElementById("FT-Arrow").style.display='block';
                  document.getElementById("FT-RcR").style.display='block';
                  document.getElementById("FT-TxL").style.display='block';
                  
                 document.getElementById("Trnx-Arrow").style.display='none';
                 document.getElementById("Exp-Arrow").style.display='none';
                 document.getElementById("Earn-Arrow").style.display='none';
                 
                 document.getElementById("Reprt-Arrow").style.display='block';
                 document.getElementById("RprtASum").style.display='none';
                 document.getElementById("RprtDtlr").style.display='block';
                 document.getElementById("RprtFinR").style.display='none';
                 document.getElementById("RprtAreaD").style.display='none';
                 document.getElementById("RprtBookA").style.display='none';
            
                 document.getElementById("Montr-Arrow").style.display='block';
                 document.getElementById("Mntr-Upld").style.display='none';
                 document.getElementById("Mntr-Aud").style.display='block';
            
                 document.getElementById("Setup-Arrow").style.display='none';
                 document.getElementById("IntSetup-Arrow").style.display='none';
            
                 document.getElementById('tab5').classList.add('active');
                 document.getElementById('content-tab5').classList.add('active');
                 document.getElementById('sub-tab5-tab1').classList.add('active');
                 document.getElementById('subcon-tab5-tab1').classList.add('active');
                  document.getElementById("sub-tab5-tab1").style.display='none';
                  document.getElementById("sub-tab5-tab2").style.display='none';
                  document.getElementById("sub-tab5-tab3").style.display='none';  


                  btncopy.forEach(row => {
                    row.classList.add('hidden'); // Hide admin-only rows
                  });
            
            
            





} else if (userRole === 'cmd') {  

  btncopy.forEach(row => {
    row.classList.add('hidden'); // Hide admin-only rows
  });

  noncmd.forEach(function(element) {
    element.classList.add('hidden');
});
  document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter

    document.getElementById("FT-btn-add").style.display='none';
    document.getElementById("FT-btn-update").style.display='none';  
      document.getElementById("BCAS").style.display='none';
      document.getElementById("Integ-Arrow").style.display='block';
      document.getElementById("IntegDtS").style.display='block';
      document.getElementById("IntegExP").style.display='none';
      document.getElementById("IntegSum").style.display='none';
      document.getElementById("FT-Arrow").style.display='block';
      document.getElementById("FT-RcR").style.display='none';
      document.getElementById("FT-TxL").style.display='block';      
     document.getElementById("Trnx-Arrow").style.display='none';
     document.getElementById("Exp-Arrow").style.display='none';
     document.getElementById("Earn-Arrow").style.display='none';     
     document.getElementById("Reprt-Arrow").style.display='block';
     document.getElementById("RprtASum").style.display='none';
     document.getElementById("RprtDtlr").style.display='block';
     document.getElementById("RprtFinR").style.display='none';
     document.getElementById("RprtAreaD").style.display='none';
     document.getElementById("RprtBookA").style.display='none';
     document.getElementById("Montr-Arrow").style.display='none';
     document.getElementById("Mntr-Upld").style.display='none';
     document.getElementById("Mntr-Aud").style.display='none';
     document.getElementById("Setup-Arrow").style.display='none';
     document.getElementById("IntSetup-Arrow").style.display='none';

    document.getElementById('tab5').classList.add('active');
    document.getElementById('content-tab5').classList.add('active');
    document.getElementById('sub-tab5-tab1').classList.add('active');
    document.getElementById('subcon-tab5-tab1').classList.add('active');
     document.getElementById("sub-tab5-tab1").style.display='none';
     document.getElementById("sub-tab5-tab2").style.display='none';
     document.getElementById("sub-tab5-tab3").style.display='none';


      zaabr.forEach(row => {
    
        row.classList.add('hidden'); 
      });

      zabbr.forEach(row => {    
        row.classList.add('hidden');
      });

 

    } else if (userRole === 'admin') {
      document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter
      document.getElementById('tab1').classList.add('active');
      document.getElementById('content-tab1').classList.add('active');
      document.getElementById('sub-tab1-tab1').classList.add('active');
      document.getElementById('subcon-tab1-tab1').classList.add('active');
      document.getElementById("sub-tab5-tab1").style.display='none';
      document.getElementById("sub-tab5-tab2").style.display='none';
      document.getElementById("sub-tab5-tab3").style.display='none';
 

}

