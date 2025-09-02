const searchInput5 = document.getElementById("neworigin");
const dropdownList5 = document.getElementById("dropdownList-neworig");

function toggleDropdownneworig() {
dropdownList5.style.display = dropdownList5.style.display === "block" ? "none" : "block";
dropdownList6.style.display = "none";
dropdownList7.style.display = "none";
dropdownList8.style.display = "none";

}

function filterDropdownneworig() {
const filter5 = searchInput5.value.toUpperCase();
const items5 = dropdownList5.getElementsByTagName("div");
dropdownList5.style.display = filter5 ? "block" : "none";

for (let i = 0; i < items5.length; i++) {
    const item5 = items5[i];
    const txtValue5 = item5.textContent || item5.innerText;

    if (txtValue5.toUpperCase().indexOf(filter5) > -1) {
        item5.style.display = "";
    } else {
        item5.style.display = "none";
    }

}
if (searchInput5.value==='') {
  nobf.style.border = "1px solid red";
   nob.value = ''
  savenew.style.backgroundColor = "gray"
  savenew.disabled = true;
  savenew.style.cursor = "not-allowed";
}
}

// Handle item selection


dropdownList5.addEventListener("click", function(event) {
if (event.target.tagName === "DIV") {
    searchInput5.value = event.target.textContent;
    dropdownList5.style.display = "none"; // Hide the dropdown after selection
}

const trnxid =  document.getElementById('newfttnxid')
const ftids = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let ftid = "";
for (let i = 0; i < 14; i++) {
  ftid += ftids.charAt(Math.floor(Math.random() * ftids.length));
}

if (tnstype.value === 'Send' || tnstype.value === 'Deposit'){
  if (neworigin.value !==''){
    trnxid.value = neworigin.value + "-13-" + ftid ;
  }else{
    trnxid.value = '';
  }

}else if ( tnstype.value === 'Withdraw'){
  if (newdest.value !==''){
    trnxid.value = newdest.value + "-13-" + ftid ;
  }else{
    trnxid.value = '';
  }
  
}
if (newftmemo.value!==''){
  if(tnstype.value!=='Send'){
    if (newftother.value!==''){
      newftmemo.value = nwbnk.value + " / " + newftother.value
    }else{
      newftmemo.value = nwbnk.value 
    }
  
  }else{
    if (newftother.value!==''){
    newftmemo.value =  newfttnxid.value + " / " + newftcourier.value + " / " + newftother.value
  }else{
    newftmemo.value =  newfttnxid.value + " / " + newftcourier.value 
  }
  }

}




if (searchInput5.value) {

  nobf.style.border = "1px solid #ccc"; 

  if(ttypef.style.border === '1px solid red' ||  ndbf.style.border === '1px solid red' || namtf.style.border === '1px solid red'
    ||  nobf.style.border === '1px solid red' ||     nwbnk.style.border === "1px solid red"   ||    ncorf.style.border === "1px solid red"){

        savenew.style.backgroundColor = "gray"
        savenew.disabled = true;
        savenew.style.cursor = "not-allowed";
   
    }else {
      savenew.style.backgroundColor =  "#3f61b8";
      savenew.disabled = false;
      savenew.style.cursor = "pointer";
    }
}

});

// Close dropdown if clicked outside
window.addEventListener("click", function(event) {

if (!event.target.closest('.dropdown')) {
    dropdownList5.style.display = "none";
}
});

const selectElement5 = document.getElementById('neworigin');
selectElement5.addEventListener('change', function () {
// Check if the placeholder option is selected (value is empty string)
if (selectElement5.value === '') {
  selectElement5.value = '';  // This will ensure the value is set to blank
}
});


//-------------------------------------------



const searchInput6 = document.getElementById("newdest");
const dropdownList6 = document.getElementById("dropdownList-newdest");

function toggleDropdownnewdest() {
dropdownList6.style.display = dropdownList6.style.display === "block" ? "none" : "block";
dropdownList5.style.display = "none";
dropdownList7.style.display = "none";
dropdownList8.style.display = "none";
}

function filterDropdownnewdest() {
const filter6 = searchInput6.value.toUpperCase();
const items6 = dropdownList6.getElementsByTagName("div");
dropdownList6.style.display = filter6 ? "block" : "none";

for (let i = 0; i < items6.length; i++) {
    const item6 = items6[i];
    const txtValue6 = item6.textContent || item6.innerText;

    if (txtValue6.toUpperCase().indexOf(filter6) > -1) {
        item6.style.display = "";
    } else {
        item6.style.display = "none";
    }
}

if (searchInput6.value==='') {
  ndbf.style.border = "1px solid red";
   ndb.value = ''
  //ndb.style.color = "red";
  savenew.style.backgroundColor = "gray"
  savenew.disabled = true;
  savenew.style.cursor = "not-allowed";
}
}

// Handle item selection

dropdownList6.addEventListener("click", function(event) {

if (event.target.tagName === "DIV") {
    searchInput6.value = event.target.textContent;
    dropdownList6.style.display = "none"; // Hide the dropdown after selection
}

const trnxid =  document.getElementById('newfttnxid')
const ftids = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let ftid = "";
for (let i = 0; i < 14; i++) {
  ftid += ftids.charAt(Math.floor(Math.random() * ftids.length));
}

if ( tnstype.value === 'Withdraw'){
  if (newdest.value !==''){
    trnxid.value = newdest.value + "-13-" + ftid ;
  }else{
    trnxid.value = '';
  }
  
}


if (newftmemo.value!==''){
  if(tnstype.value!=='Send'){
    if (newftother.value!==''){
      newftmemo.value = nwbnk.value + " / " + newftother.value
    }else{
      newftmemo.value = nwbnk.value 
    }  

  }

}



if (searchInput6.value) {
  //ndb.style.color = "gray"; // Change color if an option is selected
  ndbf.style.border = "1px solid #ccc";
    ndb.value = "Destination Branch"

  if(ttypef.style.border === '1px solid red' ||  ndbf.style.border === '1px solid red' || namtf.style.border === '1px solid red'
    ||  nobf.style.border === '1px solid red' ||     nwbnk.style.border === "1px solid red"   ||    ncorf.style.border === "1px solid red"){
        savenew.style.backgroundColor = "gray"
        savenew.disabled = true;
        savenew.style.cursor = "not-allowed";
   
    }else {
      savenew.style.backgroundColor =  "#3f61b8";
      savenew.disabled = false;
      savenew.style.cursor = "pointer";
    }
}
});

// Close dropdown if clicked outside
window.addEventListener("click", function(event) {

if (!event.target.closest('.dropdown')) {
    dropdownList6.style.display = "none";
}
});

const selectElement6 = document.getElementById("newdest");
selectElement6.addEventListener('change', function () {
if (selectElement6.value==='') {

  selectElement6.value = '';  // This will ensure the value is set to blank

}

});

//-------------------------------------------
const searchInput7 = document.getElementById("nwbnk");
const dropdownList7 = document.getElementById("dropdownList-newbank");

function toggleDropdownnewbank() {
dropdownList7.style.display = dropdownList7.style.display === "block" ? "none" : "block";
dropdownList6.style.display = "none";
dropdownList5.style.display = "none";
dropdownList8.style.display = "none";
}

function filterDropdownnewbank() {
const filter7 = searchInput7.value.toUpperCase();
const items7 = dropdownList7.getElementsByTagName("div");
dropdownList7.style.display = filter7 ? "block" : "none";

for (let i = 0; i < items7.length; i++) {
    const item7 = items7[i];
    const txtValue7 = item7.textContent || item7.innerText;

    if (txtValue7.toUpperCase().indexOf(filter7) > -1) {
        item7.style.display = "";
    } else {
        item7.style.display = "none";
    }
}

if (searchInput7.value==='') {
 // nbank.style.color = "red";
  nwbnk.style.border === "1px solid red" 
  savenew.style.backgroundColor = "gray"
  savenew.disabled = true;
  savenew.style.cursor = "not-allowed";
}
}

// Handle item selection

dropdownList7.addEventListener("click", function(event) {

if (event.target.tagName === "DIV") {
    searchInput7.value = event.target.textContent;
    dropdownList7.style.display = "none"; // Hide the dropdown after selection
}


if (searchInput7.value) {
  nbank.style.color = "black"; // Change color if an option is selected
  nwbnk.style.border = "1px solid #ccc" 
  newftmemo.value = nwbnk.value



  if(ttypef.style.border === '1px solid red' ||  ndbf.style.border === '1px solid red' || namtf.style.border === '1px solid red'
    ||  nobf.style.border === '1px solid red' ||     nwbnk.style.border === "1px solid red"   ||    ncorf.style.border === "1px solid red"){
        savenew.style.backgroundColor = "gray"
        savenew.disabled = true;
        savenew.style.cursor = "not-allowed";
   
    }else {
      savenew.style.backgroundColor =  "#3f61b8";
      savenew.disabled = false;
      savenew.style.cursor = "pointer";
    }
}
});

// Close dropdown if clicked outside
window.addEventListener("click", function(event) {

if (!event.target.closest('.dropdown')) {
    dropdownList7.style.display = "none";
}
});

const selectElement7 = document.getElementById("nwbnk");
selectElement7.addEventListener('change', function () {
if (selectElement7.value==='') {

  selectElement7.value = '';  // This will ensure the value is set to blank

}

});


//-------------------------------------------
const searchInput8 = document.getElementById("tnstype");
const dropdownList8 = document.getElementById("dropdownList-newtype");

function toggleDropdownnewtype() {
dropdownList8.style.display = dropdownList8.style.display === "block" ? "none" : "block";
dropdownList6.style.display = "none";
dropdownList5.style.display = "none";
dropdownList7.style.display = "none";
}

function filterDropdownnewtype() {
const filter8 = searchInput8.value.toUpperCase();
const items8 = dropdownList8.getElementsByTagName("div");
dropdownList8.style.display = filter8 ? "block" : "none";

for (let i = 0; i < items8.length; i++) {
    const item8 = items8[i];
    const txtValue8 = item8.textContent || item8.innerText;

    if (txtValue8.toUpperCase().indexOf(filter8) > -1) {
        item8.style.display = "";
    } else {
        item8.style.display = "none";
    }
}

}

// Handle item selection

dropdownList8.addEventListener("click", function(event) {

if (event.target.tagName === "DIV") {
    searchInput8.value = event.target.textContent;
    dropdownList8.style.display = "none"; // Hide the dropdown after selection
}


const trnxid =  document.getElementById('newfttnxid')
const ftids = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let ftid = "";
for (let i = 0; i < 14; i++) {
  ftid += ftids.charAt(Math.floor(Math.random() * ftids.length));
}

if (tnstype.value === 'Send' || tnstype.value === 'Deposit'){
  if (neworigin.value !==''){
    trnxid.value = neworigin.value + "-13-" + ftid ;
  }else{
    trnxid.value = '';
  }

}else if ( tnstype.value === 'Withdraw'){
  if (newdest.value !==''){
    trnxid.value = newdest.value + "-13-" + ftid ;
  }else{
    trnxid.value = '';
  }
  
}


if (tnstype.value === 'Send') {

    ttypef.style.border = "1px solid #ccc"  
    nwbnk.style.border = "1px solid #ccc"  
    notherf.style.border = "1px solid black"  
    newftother.disabled  = false;
    newftcourier.disabled  = false;
    newftamt.disabled  = false;
    neworigin.disabled  = false;
    newdest.disabled  = false;
  
    nwbnk.disabled  = true; 
 
    nwbnk.value=""

    if (neworigin.value  !== ''){       

      nobf.style.border = "1px solid #ccc";
    }else{
    
      nobf.style.border = "1px solid red";
    } 

    if (newdest.value  !== ''){    
      ndbf.style.border = "1px solid #ccc";   
      //ndb.style.color = "gray";
    }else{
     // ndb.style.color = "red";
     ndbf.style.border = "1px solid red";  
    } 

    if (newftcourier.value  !== ''){          
     // ncor.style.color = "gray";
      ncorf.style.border = "1px solid #ccc";  
    }else{
    //  ncor.style.color = "red";
      ncorf.style.border = "1px solid red";  
    } 

    if (newftamt.value  !== ''){        
    //  namt.style.color = "gray";
              namtf.style.border = "1px solid #ccc"
      
    }else{
     // namt.style.color = "red";
              namtf.style.border = "1px solid red"
    } 

} else if (tnstype.value === 'Deposit' || tnstype.value === 'Withdraw'  ) {

     ttypef.style.border = "1px solid #ccc"
   nwbnk.style.border = "1px solid red"  
   notherf.style.border = "1px solid black"  
   newftother.disabled  = false;
  newftcourier.disabled  = false;
  newftamt.disabled  = false;
  nwbnk.disabled  = false;

 
   if (tnstype.value === 'Deposit'){
    neworigin.disabled  = false;
    newdest.disabled  = true;    
  //  ndb.style.color = "gray";  
    ndbf.style.border = "1px solid #ccc"  
    newdest.value=""


    if (neworigin.value !==''){       
      //nob.style.color = "gray";
         nobf.style.border = "1px solid #ccc"
    }else{
     // nob.style.color = "red";
         nobf.style.border = "1px solid red"
      
    } 
    if (nwbnk.value !==''){       
     // nbank.style.color = "gray";
      nwbnk.style.border = "1px solid #ccc"  
    }else{
     // nbank.style.color = "red";
      nwbnk.style.border = "1px solid red"  
    } 


    if (newftcourier.value  !== ''){         
    //  ncor.style.color = "gray";
      ncorf.style.border = "1px solid #ccc";  
    }else{
     // ncor.style.color = "red";
      ncorf.style.border = "1px solid red";  
    } 

    if (newftamt.value  !== ''){       
      //namt.style.color = "gray";
      namtf.style.border = "1px solid #ccc"
    }else{
    //  namt.style.color = "red";
    namtf.style.border = "1px solid red"
    } 

       
   }else{
    neworigin.disabled  = true;
    newdest.disabled  = false;
   // nob.style.color = "gray";
  nobf.style.border = "1px solid #ccc"
    neworigin.value ="";

    if (newdest.value !==''){       
     // ndb.style.color = "gray";
       ndbf.style.border = "1px solid #ccc"
    }else{
      // ndb.style.color = "red";
      ndbf.style.border = "1px solid red"
    } 
    if (nwbnk.value !==''){       
     // nbank.style.color = "gray";
      nwbnk.style.border = "1px solid #ccc"  
    }else{
     // nbank.style.color = "red";
      nwbnk.style.border = "1px solid red"  
    } 
    
    if (newftcourier.value  !== ''){          
   //   ncor.style.color = "gray";
      ncorf.style.border = "1px solid #ccc";  
    }else{
    //  ncor.style.color = "red";
      ncorf.style.border = "1px solid red";  
    } 

    if (newftamt.value  !== ''){ 
              namtf.style.border = "1px solid #ccc"
     // namt.style.color = "gray";
    }else{
        namtf.style.border = "1px solid red"
      //namt.style.color = "red";
    } 

   }   

} else {
    // If no valid selection, reset the color
    //ttype.style.color = "red";
    ttypef.style.border === "1px solid red";
}

if(ttypef.style.border === '1px solid red' ||  ndbf.style.border === '1px solid red' || namtf.style.border === '1px solid red'
  ||  nobf.style.border === '1px solid red' ||     nwbnk.style.border === "1px solid red"   ||    ncorf.style.border === "1px solid red"){

//if(ttype.style.color === 'red' ||  ndb.style.color ==='red' || namt.style.color === 'red'
 // ||  nob.style.color === 'red' || nbank.style.color === 'red' || ncor.style.color ==='red' ){

     savenew.style.backgroundColor = "gray"
    savenew.disabled = true;
    savenew.style.cursor = "not-allowed";

}else {
  savenew.style.backgroundColor =  "#3f61b8";
  savenew.disabled = false;
  savenew.style.cursor = "pointer";
}

});

// Close dropdown if clicked outside
window.addEventListener("click", function(event) {
if (!event.target.closest('.dropdown')) {
    dropdownList8.style.display = "none";
}
});

const selectElement8 = document.getElementById("tnstype");
selectElement8.addEventListener('change', function () {
if (selectElement8.value==='') {

  selectElement8.value = '';  // This will ensure the value is set to blank

}
});

document.getElementById('neworigin').addEventListener('keydown', function(event) {
    handleEnterKey(event, 'neworigin');
  });
  
  document.getElementById('newdest').addEventListener('keydown', function(event) {
    handleEnterKey(event, 'newdest');
  });

  function AutoMemo(event) {

    if (event.key === 'Enter') {
      event.preventDefault(); 
      if (newftcourier.value!==''){
        if(tnstype.value!=='Send'){
          if (newftother.value!==''){
            newftmemo.value = nwbnk.value + " / " + newftother.value
          }else{
            newftmemo.value = nwbnk.value 
          }
        
        }else{
          if (newftother.value!==''){
          newftmemo.value =  newfttnxid.value + " / " + newftcourier.value + " / " + newftother.value
        }else{
          newftmemo.value =  newfttnxid.value + " / " + newftcourier.value 
        }
        }
  
      }
      }
  }


  function AutoMemoleavefocus() {
    
    if (newftcourier.value!==''){
      if(tnstype.value!=='Send'){
        if (newftother.value!==''){
          newftmemo.value = nwbnk.value + " / " + newftother.value
        }else{
          newftmemo.value = nwbnk.value 
        }
      
      }else{
        if (newftother.value!==''){
        newftmemo.value =  newfttnxid.value + " / " + newftcourier.value + " / " + newftother.value
      }else{
        newftmemo.value =  newfttnxid.value + " / " + newftcourier.value 
      }
      }

    }
  }

  function saveftnew(){ 
    document.getElementById('ftconfirmation').classList.add('show');
    xMessage.textContent = "Are you sure you want to save this " + tnstype.value + " transaction amounting to " + newftamt.value + "?" 
  }
    
  function closeftnew() {
    document.getElementById('ftconfirmation').classList.remove('show');
  }
  
  function checkEnter(event) {
    if (newftamt.value!==''){  
        if (event.key === 'Enter') {        
          formatNumber(event);
          event.preventDefault(); 
        }
    }else{
      if (event.key === 'Enter') {        
  
        event.preventDefault(); 
      }
  
    }
  }
  
  function confirmed (conf, ova){ 
    const CamisFTtablebody = document.getElementById('ft-data-table').getElementsByTagName('tbody')[0];
    const newRow = CamisFTtablebody.insertRow(0);
    const actionCell = newRow.insertCell(0);
    const dateCell = newRow.insertCell(1);
    const typeCell = newRow.insertCell(2);
    const tnsIdCell = newRow.insertCell(3);
    const amountCell = newRow.insertCell(4);
    const originCell = newRow.insertCell(5);
    const destCell = newRow.insertCell(6);
    const courierCell = newRow.insertCell(7);
    const memoCell = newRow.insertCell(8);
    const cbyCell = newRow.insertCell(9);
    const statusCell = newRow.insertCell(10);
    const areacell = newRow.insertCell(11);
    const recCell = newRow.insertCell(12);
    const recdCell = newRow.insertCell(13);
    const clCell = newRow.insertCell(14);
    const cldCell = newRow.insertCell(15);
    const remarksCell = newRow.insertCell(16);
    const priorCell = newRow.insertCell(17);
    const tnstype = document.getElementById('tnstype');
    const newftamt = document.getElementById('newftamt');
    const neworigin = document.getElementById('neworigin');
    const newdest = document.getElementById('newdest');  
    const newftcourier = document.getElementById('newftcourier');
    const newftmemo = document.getElementById('newftmemo');
    const newfttnxid = document.getElementById('newfttnxid');
    const cby = document.getElementById('cby');
    const areadefault = document.getElementById('ft-Area-drop').value;
    const inputString = document.getElementById('newftmemo').value;
    const regex = /((AREA|HO)\s+(LBP|PNB|MBTC|UB))/;    
    const match = inputString.match(regex);
    const result = match ? match[0] : "Pattern not found.";
    dateCell.textContent = formatDate(new Date());
    typeCell.textContent = tnstype.value;
    tnsIdCell.textContent = newfttnxid.value;
    amountCell.textContent = newftamt.value;

    if(neworigin.value === ''){
      originCell.textContent = result
    }else{
      originCell.textContent = neworigin.value;
    }
  
    if(newdest.value === ''){
     destCell.textContent = result
    }else{
      destCell.textContent = newdest.value;
    }
  
  
    
    courierCell.textContent = newftcourier.value;
    memoCell.textContent = newftmemo.value;
    cbyCell.textContent = cby.value;
    statusCell.textContent = 'Pending';
    areacell.textContent = areadefault;
    areacell.style.display='none'
    recCell.textContent = '--';
    recCell.style.display='none';
    recdCell.textContent = '--';
    recdCell.style.display='none'
    clCell.textContent = '--';
    clCell.style.display='none'
    cldCell.textContent = '--';
    cldCell.style.display='none'  
    remarksCell.textContent = ''
    remarksCell.style.display='none'
    priorCell.textContent = ''
    priorCell.style.display='none'


 const viewBtn = document.createElement('button');  
    viewBtn.type = "button";
    viewBtn.style.border = 'none';
    viewBtn.style.marginRight = '10px';
    viewBtn.style.backgroundcolor = 'white';
    // viewBtn.hover.Color = 'blue';
    viewBtn.style.cursor = 'pointer';
    viewBtn.innerHTML = '<i  class= "fas fa-eye" style="background-color: white; border:none;"></i>';
  viewBtn.onclick = function (event) { 
      event.preventDefault(); 
      const overlayheader = document.getElementById('headr');  
      const NStatusoverlay2 = document.getElementById('NStatus-overlay2');
      const table = document.getElementById('ft-data-table');    
     
          const buttonrow = event.target.closest('tr'); 
          var newrowIndex = Array.from(table.rows).indexOf(buttonrow);
          const row = buttonrow
          fieldsetcontainer.style.gap = '20px';
          const cell = row.cells[10];
          const cellValue = cell.innerText; 
          const hcell = row.cells[2].innerText;
                 
           overlayheader.value = hcell + " Transaction" 
          NStatusoverlay2.value = cellValue 
          localStorage.setItem("Newrow",newrowIndex);
          viewtrnxtype.value =  row.cells[2].innerText
          viewamount.value = row.cells[4].innerText
          vieworigin.value =  row.cells[5].innerText
          viewdest.value =  row.cells[6].innerText
          viewcftcourier.value = row.cells[7].innerText
          viewcftmemo.value =  row.cells[8].innerText
          viewtrnxid.value =  row.cells[3].innerText       
          viewcftcby.value=  row.cells[9].innerText        
          viewcftcdate.value= formattedDateTime ;
          viewcftrby.value=  row.cells[12].innerText
          viewcftrdate.value=  row.cells[13].innerText
          viewcftclby.value=  row.cells[14].innerText
          viewcftcldate.value=  row.cells[15].innerText
          viewcftremarks.value=  row.cells[16].innerText
  
              if( row.cells[2].innerText === 'Withdraw' ||  row.cells[2].innerText === 'Deposit'){
                viewcftbank.value =  row.cells[8].innerText
                
              }else{
                viewcftbank.value = ''
              }    
      
      
      
        const buttons = {
          flag: document.getElementById('FT-btn-flag-overlay2'),
          ack: document.getElementById('FT-btn-ack-overlay2'),
          deny: document.getElementById('FT-btn-deny-overlay2'),
          canceld: document.getElementById('FT-btn-cancel-denied-overlay2'),
          canceln: document.getElementById('FT-btn-cancel-new-overlay2'),
          cancela: document.getElementById('FT-btn-cancel-ack-overlay2'),
          save: document.getElementById('FT-btn-save-overlay2'),
          cancelf: document.getElementById('FT-btn-cancel-flag-overlay2'),
        };
       document.getElementById('overlay2').classList.add('show');
      
        // Default settings to hide all buttons
        for (let btn in buttons) {
          buttons[btn].style.display = 'none';
        }
      
        // Role-based logic
        switch (userRole) {
          case 'zaa-aas':
          case 'zab-aas':
            handleAasRole('overlay2', cellValue, buttons);
            break;
          case 'cru':
            handleCruRole('overlay2', cellValue, buttons);
            break;
          case 'zaa-aaa':
          case 'zab-aaa':
            handleAaaRole('overlay2', cellValue, buttons);
            break;
          case 'cmd':
            handleCmdRole('overlay2', cellValue, buttons);
            break;
          default:
            handleDefaultRole(buttons);
            break;
        }    
      
          document.getElementById('NStatus-overlay2').textContent = cellValue;
  
    };
  
    const copyencryp = document.createElement('button');
    copyencryp.type = "button";
    copyencryp.style.border = 'none';
    copyencryp.style.backgroundColor = 'white';  
    copyencryp.style.cursor = 'pointer';
    copyencryp.innerHTML = '<i class= "fas fa-copy" style="background-color: white; border:none;"></i>' ;
    copyencryp.onclick = function encryptnew(event) {   
  
      event.preventDefault(); 
      
     
      const buttonrow = event.target.closest('tr');     
      const row = buttonrow




      let rowData = "";
      const xdate = row.cells[1].innerText; // Get the specific cell (0-based index)
      const xtype = row.cells[2].innerText; // Get the specific cell (0-based index)
      const xorig = row.cells[5].innerText; // Get the specific cell (0-based index)
      const xdes = row.cells[6].innerText; // Get the specific cell (0-based index)  
  
      // Loop through each cell in the row
      for (let i = 1; i < row.cells.length; i++) { // Exclude the last cell with the button
          rowData += row.cells[i].innerText + "|"; // Concatenate cell data with space
      }
    
      // Base64 encode the concatenated row data
      let encodedData = btoa(rowData); // btoa() encodes the string to Base64
      
       let encodedText = "Reference code: " +  xtype + " | " + xorig + "-" + xdes + " | " + xdate ;
      
       let modifiedText = encodedText.replace( xdate, xdate + "\n\n" +  encodedData );
  
      if (modifiedText.trim() === "") {
          alert("No data to copy!");
          return;
      }
      
  
      navigator.clipboard.writeText(modifiedText).then(() => {
         
         const xnotify = document.getElementById('xnotify');
          showNotification();
            xnotify.innerHTML = '<i class="fa-solid fa-circle-info" style="margin-right:10px; font-size:20px; color:white"></i>' + 
            "Reference code is copied to the clipboard!"
  
          xnotification.style.width = '350px'
          xnotification.style.bottom = '5px';
          xnotification.style.right = '5px';   
        
  
      }).catch(err => {
          console.error("Error copying text: ", err);
      }); 
  
  
    };
  
    actionCell.appendChild(viewBtn);
    actionCell.appendChild(copyencryp);
  
    
  
  
    document.getElementById(conf).classList.remove('show');
    document.getElementById(ova).classList.remove('show');
    showNotification();
    xnotify.innerHTML = '<i class="fa-solid fa-circle-info" style="margin-right:10px; font-size:20px; color:white"></i>' + 
    "The transaction has been saved.";
    filterftallTable();
    filterTableRows();
  }


