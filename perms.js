function checkUserLogin() {
  const userRole = localStorage.getItem('userRole');  // Check for the user role or session token

  // If no userRole is found, redirect to the login page
  if (!userRole) {
    window.location.href = 'index.html' ;  // Change this to your login page URL
  }
}



checkUserLogin();




const dropdown = document.getElementById('ft-Area-drop');
const userRole = localStorage.getItem("userRole");
const zaa = document.querySelectorAll('.ZAA');
const zab = document.querySelectorAll('.ZAB');
const btncopy = document.querySelectorAll('.custom-button-copy');

function openOverlay(overlayId, event, tableId, rowIndex, colIndex) {
  event.preventDefault(); 
  const flag =  document.getElementById('FT-btn-flag-' + overlayId);
  const ack =   document.getElementById('FT-btn-ack-' + overlayId);
  const deny =  document.getElementById('FT-btn-deny-'  + overlayId);
  const canceld = document.getElementById('FT-btn-cancel-denied-'  + overlayId);
  const canceln = document.getElementById('FT-btn-cancel-new-'  + overlayId);
  const cancela = document.getElementById('FT-btn-cancel-ack-'  + overlayId);
  const save = document.getElementById('FT-btn-save-' + overlayId);
  const cancelf = document.getElementById('FT-btn-cancel-flag-' + overlayId);
  
  var table = document.getElementById(tableId);

  // Get the row and column based on the indices
  var row = table.rows[rowIndex];
  var cell = row.cells[colIndex];
  
  // Get the value from the specific cell
  var cellValue = cell.innerText; 

  console.log(flag); 
  console.log(ack); 
  console.log(deny); 
  console.log(canceld); 
  console.log(canceln); 
  console.log(cancela); 
  console.log(save); 
  console.log(cancelf); 

  document.getElementById(overlayId).classList.add('active');


  if (userRole === 'aas-zaa') {

       if (overlayId === 'overlay1' || overlayId === 'overlay0' ){
         save.style.display = 'block';
  
         } else {
         save.style.display = 'none';
    
         }
        
       if (cellValue === 'Pending'){
    
        flag.style.display = 'none';
        ack.style.display = 'none';
        deny.style.display = 'none';
        canceld.style.display = 'none';
        cancela.style.display = 'none';
        canceln.style.display = 'block';
        cancelf.style.display = 'none';
     
     
       } else {
        flag.style.display = 'none';
        ack.style.display = 'none';
         deny.style.display = 'none';
        canceld.style.display = 'none';
        cancela.style.display = 'none';
        canceln.style.display = 'none';
        cancelf.style.display = 'none';
    
       }
  
       document.getElementById('NStatus-' + overlayId).textContent = cellValue;


} else if (userRole === 'aas-zab' ) {

  if (overlayId === 'overlay1' || overlayId === 'overlay0' ){
    save.style.display = 'block';

    } else {
    save.style.display = 'none';

    }
     if (cellValue === 'Pending'){
    
      flag.style.display = 'none';
      ack.style.display = 'none';
      deny.style.display = 'none';
      canceld.style.display = 'none';
      cancela.style.display = 'none';
      canceln.style.display = 'block';
      cancelf.style.display = 'none';
   
   
    } else {
      flag.style.display = 'none';
      ack.style.display = 'none';
       deny.style.display = 'none';
      canceld.style.display = 'none';
      cancela.style.display = 'none';
      canceln.style.display = 'none';
      cancelf.style.display = 'none';
 
     }

     document.getElementById('NStatus-' + overlayId).textContent = cellValue;




} else if (userRole === 'cru' ) {
  if (overlayId === 'overlay0' ){
    save.style.display = 'none';

    }

  if (cellValue === 'Under Review'){
    flag.style.display = 'none';
    ack.style.display = 'none';
    deny.style.display = 'none';
    canceld.style.display = 'none';
    cancela.style.display = 'none';
    canceln.style.display = 'none';
    cancelf.style.display = 'block';
    save.style.display = 'none';
  
  } else {
    flag.style.display = 'block';
    ack.style.display = 'none';
    deny.style.display = 'none';
    canceld.style.display = 'none';
    cancela.style.display = 'none';
    canceln.style.display = 'none';
    cancelf.style.display = 'none';
    save.style.display = 'none';
  }
  document.getElementById('NStatus-' + overlayId).textContent = cellValue;



} else if (userRole === 'aaa' ) {
  if (overlayId === 'overlay0' ){
    save.style.display = 'none';

    }

  if (cellValue === 'Under Review'){
    flag.style.display = 'none';
    ack.style.display = 'none';
    deny.style.display = 'none';
    canceld.style.display = 'none';
    cancela.style.display = 'none';
    canceln.style.display = 'none';
    cancelf.style.display = 'none';
    save.style.display = 'none';
  
  } else {
    flag.style.display = 'none';
    ack.style.display = 'none';
    deny.style.display = 'none';
    canceld.style.display = 'none';
    cancela.style.display = 'none';
    canceln.style.display = 'none';
    cancelf.style.display = 'none';
    save.style.display = 'none';
  }
  document.getElementById('NStatus-' + overlayId).textContent = cellValue;





} else if (userRole === 'cmd') {
  if (overlayId === 'overlay0' ){
    save.style.display = 'none';

    }
 if (cellValue === 'In-Transit'){
    flag.style.display = 'none';
    ack.style.display = 'block';
     deny.style.display = 'block';
    canceld.style.display = 'none';
    cancela.style.display = 'none';
    canceln.style.display = 'none';
    cancelf.style.display = 'none';
    save.style.display = 'none';

   } else if (cellValue === 'Acknowledged'){
    flag.style.display = 'none';
    ack.style.display = 'none';
     deny.style.display = 'none';
    canceld.style.display = 'none';
    cancela.style.display = 'block';
    canceln.style.display = 'none';
    cancelf.style.display = 'none';
    save.style.display = 'none';

   } else if (cellValue === 'Denied'){
    flag.style.display = 'none';
    ack.style.display = 'none';
     deny.style.display = 'none';
    canceld.style.display = 'block';
    cancela.style.display = 'none';
    canceln.style.display = 'none';
    cancelf.style.display = 'none';
    save.style.display = 'none';

   } else {

    flag.style.display = 'none';
    ack.style.display = 'none';
     deny.style.display = 'none';
    canceld.style.display = 'none';
    cancela.style.display = 'none';
    canceln.style.display = 'none';
    cancelf.style.display = 'none';
    save.style.display = 'none';
   }
   document.getElementById('NStatus-' + overlayId).textContent = cellValue;



}else {
  if (overlayId === 'overlay0' ){
    save.style.display = 'none';

    }
  flag.style.display = 'none';
  ack.style.display = 'none';
   deny.style.display = 'none';
  canceld.style.display = 'none';
  cancela.style.display = 'none';
  canceln.style.display = 'none';
  cancelf.style.display = 'none';
  save.style.display = 'none';
 }
 document.getElementById('NStatus-' + overlayId).textContent = cellValue;
}

function closeOverlay(overlayId) {
  document.getElementById(overlayId).classList.remove('active');
}

// If role exists, display it in the header
if (userRole === 'aas-zaa') {
    document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter
    const areadefault  = document.getElementById("ft-Area-drop")
    areadefault.value = "ZAA";
    areadefault.disabled = true;
    document.getElementById('tab5').classList.add('active');
    document.getElementById('content-tab5').classList.add('active');
    document.getElementById('sub-tab5-tab1').classList.add('active');
    document.getElementById('subcon-tab5-tab1').classList.add('active');
    document.getElementById("tab100").style.display='none';
    document.getElementById("Integ-Arrow").style.display='none';
    document.getElementById("FT-Arrow").style.display='block';
     document.getElementById("sub-tab5-tab1").style.display='block';
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

  
}else if (userRole === 'aas-zab') {
    document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter
    const areadefault  = document.getElementById("ft-Area-drop")
    areadefault.value = "ZAB";
    areadefault.disabled = true;


    document.getElementById("FT-btn-add").style.display='block';
    document.getElementById("FT-btn-update").style.display='block';

    document.getElementById("sub-tab5-tab1").style.display='block';
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



    } else if (userRole === 'aaa-zaa') {
    
      btncopy.forEach(row => {
        row.classList.add('hidden'); // Hide admin-only rows
      });
    
      
      document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter
        document.getElementById("FT-btn-add").style.display='none';
        document.getElementById("FT-btn-update").style.display='block';
        document.getElementById("sub-tab5-tab1").style.display='block';
        document.getElementById("sub-tab5-tab2").style.display='block';
        document.getElementById("sub-tab5-tab3").style.display='block';
    
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



} else if (userRole === 'aaa-zab') {
    
          btncopy.forEach(row => {
            row.classList.add('hidden'); // Hide admin-only rows
          });
        
          
          document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter
            document.getElementById("FT-btn-add").style.display='none';
            document.getElementById("FT-btn-update").style.display='block';
            document.getElementById("sub-tab5-tab1").style.display='block';
            document.getElementById("sub-tab5-tab2").style.display='block';
            document.getElementById("sub-tab5-tab3").style.display='block';
        
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
                document.getElementById("sub-tab5-tab1").style.display='block';
                document.getElementById("sub-tab5-tab2").style.display='block';
                document.getElementById("sub-tab5-tab3").style.display='block';
            
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
            
            
            





} else if (userRole === 'cmd') {
    
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

      document.getElementById("sub-tab5-tab1").style.display='none';
      document.getElementById("sub-tab5-tab2").style.display='none';
      document.getElementById("sub-tab5-tab3").style.display='block';
      document.getElementById("subcon-tab5-tab1").style.display='none';
      document.getElementById("subcon-tab5-tab2").style.display='none';


      document.getElementById('tab5').classList.add('active');
      document.getElementById('content-tab5').classList.add('active');
      document.getElementById('sub-tab1-tab1').classList.add('active');
      document.getElementById('subcon-tab1-tab1').classList.add('active');


      document.getElementById('sub-tab5-tab3').classList.add('active');
      document.getElementById('subcon-tab5-tab3').classList.add('active');

    } else if (userRole === 'admin') {
      document.getElementById("userRole").innerText = userRole.charAt(0).toLowerCase() + userRole.slice(1); // Capitalize the first letter
      document.getElementById('tab1').classList.add('active');
      document.getElementById('content-tab1').classList.add('active');
      document.getElementById('sub-tab1-tab1').classList.add('active');
      document.getElementById('subcon-tab1-tab1').classList.add('active');



}

