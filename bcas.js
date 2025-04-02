



document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.bcastab');
    const submenuLinks = document.querySelectorAll('.bcassubmenu a');
    const subLinks = document.querySelectorAll('.bcassubmenus a');
    const contents = document.querySelectorAll('.subRcontent');
  
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // Months are 0-based, so we add 1
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const standarddate = `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`;

    submenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = e.target.getAttribute('data-tab');
  
            // Remove active class from all tabs and content
            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
  
            // Add active class to the corresponding tab and content
            document.getElementById(targetTab).classList.add('active');
            document.getElementById('subcon' +  targetTab.slice(3)).classList.add('active');
            
     
            // set current date in ft tranx
            document.getElementById("ft-sub-tab100-tab6-con1-1").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-2").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-3").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-4").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-5").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-6").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-7").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-8").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-9").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-10").innerText = standarddate
        });
    });

    subLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = e.target.getAttribute('data-tab');
  
            // Remove active class from all tabs and content
            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
  
            // Add active class to the corresponding tab and content
            document.getElementById(targetTab).classList.add('active');
            document.getElementById('subcon' +  targetTab.slice(3)).classList.add('active');
            
     
            // set current date in ft tranx
            document.getElementById("ft-sub-tab100-tab6-con1-1").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-2").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-3").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-4").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-5").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-6").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-7").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-8").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-9").innerText = standarddate
            document.getElementById("ft-sub-tab100-tab6-con1-10").innerText = standarddate
        });
    });
 

  });   


  function recordft(subtabId) {
    const tabs = document.querySelectorAll('.bcastab');
    tabs.forEach(tab => tab.classList.remove('active'));
  

    // Add active class to the corresponding tab and content
    document.getElementById(subtabId).classList.add('active');
    document.getElementById('subcon-tab100-tab12').classList.add('active');
    document.getElementById('subcon-tab100-tab6').classList.remove('active');
   

  }

  function updatecasft(subtabId) {
    const tabs = document.querySelectorAll('.bcastab');
    tabs.forEach(tab => tab.classList.remove('active'));
  

    // Add active class to the corresponding tab and content
    document.getElementById(subtabId).classList.add('active');
    document.getElementById('subcon-tab100-tab13').classList.add('active');
    document.getElementById('subcon-tab100-tab6').classList.remove('active');  

  }



  function backft(subtabId) {
    const tabs = document.querySelectorAll('.bcastab');
    tabs.forEach(tab => tab.classList.remove('active'));
  

    // Add active class to the corresponding tab and content
    document.getElementById(subtabId).classList.add('active');
    document.getElementById('subcon-tab100-tab6').classList.add('active');
    document.getElementById('subcon-tab100-tab12').classList.remove('active');
    document.getElementById('subcon-tab100-tab13').classList.remove('active');

  }


  function viewentries(brow, event, tableid, data) {
    const tabs = document.querySelectorAll('.bcastab');
    tabs.forEach(tab => tab.classList.remove('active'));  

    // Add active class to the corresponding tab and content
    document.getElementById('sub-tab100-tab14').classList.add('active');
    document.getElementById('subcon-tab100-tab14').classList.add('active');
    document.getElementById('subcon-tab100-tab1').classList.remove('active');  
    document.getElementById('sub-tab100-tab14-1').classList.add('active');
    document.getElementById('subcon-tab100-tab14-1').classList.add('active');
    document.getElementById('sub-tab100-tab14-2').classList.remove('active');
    document.getElementById('subcon-tab100-tab14-2').classList.remove('active');

    const tableBody = document.getElementById("bcasentries").getElementsByTagName('tbody')[0];
    const tagsBody = document.getElementById("bcastags").getElementsByTagName('tbody')[0];

     let Tnstable = document.getElementById(tableid);
     let row = Tnstable.rows[brow]; 
    
     const tdate =   formatDate(trnxDate.value);
     const tnsnum = row.cells[1].innerText 
     
     const paddedNumber = padNumber(tnsnum, 6);
     const AcctName = row.cells[3].innerText  
     const AcctCode = AcctName.replace(/[^A-Z-]/g, '');
     const Debit = row.cells[4].innerText  
     const Credit = row.cells[5].innerText  
     const memo = row.cells[7].innerText  
     const desc = "To record " + AcctName 
     const trId = row.cells[9].innerText  
    

     viewbcasdate.value = tdate
     viewbcastn.value = tnsnum
     viewbcasacode.value = AcctCode
     viewbcastemp.value = AcctName

if(AcctName=== 'PEPP Remittance'){
    viewbcasamount.value = '0.00';
    const acctable = [
        { name: "Cash on hand", norm: "Debit", Amount: Debit },
        { name: "PPS-PEPP Suki card discount", category: "Debit", Amount: '934.40'},
        { name: "Due to Customer - PEPP  REmittance", category: "Credit", Amount: '1,030,000.00'},
        { name: "Commission", category: "Credit", Amount: '10,000.00'},
        { name: "Service charge", category: "Credit", Amount: '1,000.00'},
       
      ];


      tableBody.innerHTML = '';

      acctable.forEach(accounts => {
        const urow = document.createElement('tr');    
    
        Object.values(accounts).forEach(value => {
          const cell = document.createElement('td');
          cell.textContent = value;
          urow.appendChild(cell);
        });    
   
        tableBody.appendChild(urow);
      });

      tnsdebit.value = '1,041,000.00'
      tnscredit.value = '1,041,000.00'

}else if(AcctName === 'PEPP Release'){
    viewbcasamount.value = '0.00';
    const acctable = [
   
        { name: "Due to Customer - PEPP  REmittance", category: "Debit", Amount: Credit}, 
        { name: "PPS-PEPP Suki rebate", category: "Debit", Amount: '934.40'},   
        { name: "Cash on hand", norm: "Credit", Amount: '1,000,934.40' },    
       
      ];


      tableBody.innerHTML = '';

      acctable.forEach(accounts => {
        const urow = document.createElement('tr');    
    
        Object.values(accounts).forEach(value => {
          const cell = document.createElement('td');
          cell.textContent = value;
          urow.appendChild(cell);
        });    
   
        tableBody.appendChild(urow);
      });
      tnsdebit.value =  '1,000,934.40' 
      tnscredit.value =  '1,000,934.40' 

}else{
    if(Debit!== "0.00"){
        viewbcasamount.value = Debit;

        const acctable = [
            { name: "Cash on hand", norm: "Debit", Amount: Debit },
            { name: "Fund Transfer from", category: "Credit", Amount: Debit},
           
          ];


          tableBody.innerHTML = '';

          acctable.forEach(accounts => {
            const urow = document.createElement('tr');    
        
            Object.values(accounts).forEach(value => {
              const cell = document.createElement('td');
              cell.textContent = value;
              urow.appendChild(cell);
            });    
       
            tableBody.appendChild(urow);
          });

          tnsdebit.value =Debit
          tnscredit.value =Debit

    }else if (Credit!==  "0.00"){
            viewbcasamount.value = Credit
          
            const acctable = [
                { name: "Fund Transfer to", category: "Debit", Amount: Credit},
                { name: "Cash on hand", norm: "Credit", Amount: Credit },             
               
              ];


              tableBody.innerHTML = '';

              acctable.forEach(accounts => {
                const urow = document.createElement('tr');    
            
                Object.values(accounts).forEach(value => {
                  const cell = document.createElement('td');
                  cell.textContent = value;
                  urow.appendChild(cell);
                });    
           
                tableBody.appendChild(urow);
              });

            tnsdebit.value = Credit
             tnscredit.value = Credit
    }



}    

      

       
   
     
     viewbcasdesc.value = desc
     viewbcasremarks.value = memo
     viewbcasref.value = "AAA"+paddedNumber+trnxDate.value
     
   

     const tagstable = [
        { name: "Transaction ID", Id: trId },
              
      ];

      tagsBody.innerHTML = '';

      // Loop through the array and create a table row for each item
      tagstable.forEach(tag => {
        const tagrow = document.createElement('tr');

        // Create a cell for each property and append it to the row
        Object.values(tag).forEach(value => {
          const tagcell = document.createElement('td');
          tagcell.textContent = value;
          tagrow.appendChild(tagcell);
        });

        // Append the row to the table body
        tagsBody.appendChild(tagrow);
      });

   
  }




  function backtransactions() {
    const tabs = document.querySelectorAll('.bcastab');
    tabs.forEach(tab => tab.classList.remove('active')); 

    document.getElementById('sub-tab100-tab1').classList.add('active');
    document.getElementById('subcon-tab100-tab1').classList.add('active');
    document.getElementById('subcon-tab100-tab14').classList.remove('active');
    document.getElementById('sub-tab100-tab14-2').classList.remove('active');
    document.getElementById('subcon-tab100-tab14-2').classList.remove('active');

  }

//bcas encrypt------------------------------------------------------------------------------------


  function bcasencryptRow(tableId, erow, Bcasbranch, colid, coltype ,coldte,  event,) {
    event.preventDefault(); 
    let table = document.getElementById(tableId);
    let row = table.rows[erow]; 
    
    let rowData = "";
    const qdate = row.cells[coldte].innerText; // Get the specific cell (0-based index)
    const qtype = row.cells[coltype].innerText; // Get the specific cell (0-based index)
    const qid = row.cells[colid].innerText; // Get the specific cell (0-based index)
    const qbranch = document.getElementById(Bcasbranch).value; // Get the specific cell (0-based index)

    var space = document.querySelectorAll('p');

    // Loop through each cell in the row
    for (let i = 1; i < row.cells.length; i++) { // Exclude the last cell with the button
        rowData += row.cells[i].innerText + "|"; // Concatenate cell data with space
    }

  
    // Base64 encode the concatenated row data
    let encodedData = btoa(rowData); // btoa() encodes the string to Base64

    // Display the encoded Base64 data in a textarea
   // document.getElementById("base64Output").value = encodedData;
    
     let encodedText = "Offline update code for: " + qbranch + " | " +  qtype + " | " + qid + " | " + qdate ;  
     let modifiedText = encodedText.replace( qdate, qdate + "\n\n" +  encodedData );

    // Check if there's any Base64 data to copy
    if (modifiedText.trim() === "") {
        alert("No data to copy!");
        return;
    }
    
    // Use the Clipboard API to copy text to clipboard
    navigator.clipboard.writeText(modifiedText).then(() => {
          showNotification();
          xnotification.style.bottom = '75px';
          xnotification.style.right = '75px';
          xnotification.style.width =  '300px';
          xnotify.innerText = "Offline update code is copied to the clipboard!."
              
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
    
    
}


function closebcasova(BCASoverlayId){
    document.getElementById(BCASoverlayId).classList.remove('active');
}

function decodeBase64(data) {
    return atob(data); // `atob` decodes the Base64 string
}

// Get the button and input fields
const Bcasbranch = document.getElementById('Bcasbranch');
const decryptButton = document.getElementById('paste-ft');
const ftselectedtype = document.getElementById('selectedtype');
const saveft = document.getElementById('saveft');
const encryptedInputField = document.getElementById('encryptedInput');
const errorMessage = document.getElementById('alertmessage');

// Add an event listener to the "Paste & Decrypt" button



function pasteft(BCASoverlayId){
    // Use the Clipboard API to read text from the clipboard
    navigator.clipboard.readText().then(function(text) {
        // Paste the text into the encrypted input field
        encryptedInputField.value = text;

        // Check if the clipboard data is empty
        if (!text) {
            errorMessage.textContent = "Clipboard is empty. Please copy some encrypted data.";
            return;
        }

        try {
            // Decrypt the Base64 encoded data
            const decryptedData = decodeBase64(text);
            // Split the decrypted data into multiple fields based on the separator (e.g., ":")
            const fields = decryptedData.split("|");
            // Check if the number of split parts is sufficient for the fields
           
            if (fields.length < 8) {alert("Copied data is not in the standard format."); }
            
            

            if (ftselectedtype.value ===  fields[1] ){
              
                if ( fields[1] === "Send"|| fields[1] === "Withdraw" || fields[1] === "Deposit"){
                   if(Bcasbranch.value !== fields[4]){
                    document.getElementById(BCASoverlayId).classList.add('active');
                    errorMessage.value="The record is " + fields[1] + " Transaction for " +  fields[4]; 

                   } else if (fields[9] !=='Pending' ){    
                    document.getElementById(BCASoverlayId).classList.add('active');
                    errorMessage.value="The record is already having " + fields[9] + " status"; 

                  
                   } else {

                    ft1.value = ftselectedtype.value;
                    ft2.value = fields[3];
                    ft3.value = fields[7];

                        if (ft1.value === 'Send'){
                            ft4.value = "";
        
                        } else {
                        ft4.value = fields[6];
                        }
                    
                    ft5.value = fields[6];
                    ft6.value = fields[2];
                    ft7.value = fields[5];                 

                   }

                }                     
                
            } else if(ftselectedtype.value ===  'Receive' ){
                if ( fields[1] === "Send") {
                    if(Bcasbranch.value !== fields[5]){
                        document.getElementById(BCASoverlayId).classList.add('active');
                        errorMessage.value="The record is " + fields[1] + " Transaction for " +  fields[5]; 

                    } else if (fields[9] !== 'In-Transit' ){ 
                         if (fields[9] !=='Pending'){    
                        document.getElementById(BCASoverlayId).classList.add('active');
                        errorMessage.value="The record is already having " + fields[9] + " status"; 

                         } else{
                            ft1.value = ftselectedtype.value;
                            ft2.value = fields[3];
                            ft3.value = fields[7];
                            if (ft1.value === 'Receive' ){
                                ft4.value = "";
              
                            } else {
                              ft4.value = fields[6];
                            }
                            
                            ft5.value = fields[6];
                            ft6.value = fields[2];
                            ft7.value = fields[5];    
                            saveft.disabled = false;
    
                        }
                    } else{
                        ft1.value = ftselectedtype.value;
                        ft2.value = fields[3];
                        ft3.value = fields[7];
                        if (ft1.value === 'Receive' ){
                            ft4.value = "";
          
                        } else {
                          ft4.value = fields[6];
                        }
                        
                        ft5.value = fields[6];
                        ft6.value = fields[2];
                        ft7.value = fields[5];    
                        saveft.disabled = false;

                    }
                }    

            } else if (ftselectedtype.value !==  fields[2] ){
                /*alert("You Selected Invalid Transaction type. The Transaction type you copied is " + fields[2] ); */
                document.getElementById(BCASoverlayId).classList.add('active');
                errorMessage.value ="You have selected invalid Transaction Type. The transaction type of the record is " + fields[1]
            }             
                    


        } catch (error) {
            console.error("Error while decrypting:", error);
            alert("Invalid data format");
        }
     

    }).catch(function(err) {
        console.error("Failed to read clipboard contents: ", err);
        alert("Failed to read clipboard contents.");
    });
}



function updatebcasft(BCASoverlayId){
    const upateftbcas = document.getElementById("upbcasft");
    // Use the Clipboard API to read text from the clipboard
    navigator.clipboard.readText().then(function(text) {
        // Paste the text into the encrypted input field
        encryptedInputField.value = text;
        var xtable = document.getElementById("BCASfttable");
        var updaterow = xtable.getElementsByTagName("tr");
        // Check if the clipboard data is empty
        if (!text) {
            errorMessage.textContent = "Clipboard is empty. Please copy some encrypted data.";
            return;
        }

        try {
            // Decrypt the Base64 encoded data
            const decryptedData = decodeBase64(text);
            // Split the decrypted data into multiple fields based on the separator (e.g., ":")
            const fields = decryptedData.split("|");
            // Check if the number of split parts is sufficient for the fields
           
            if (fields.length < 8) {alert("Copied data is not in the standard format.");
             }           
     
             for (var i = 1; i < updaterow.length; i++) {
                   var cellupdte = updaterow[i].getElementsByTagName("td");

                   if (cellupdte[4].innerText === fields[3]  ){ 

                    ft8.value = cellupdte[2].innerText
                    ft9.value = cellupdte[3].innerText
                    ft10.value = cellupdte[7].innerText
                    ft11.value = cellupdte[8].innerText
                    
                    ft13.value = cellupdte[9].innerText
                    ft14.value = cellupdte[4].innerText
                    ft15.value = cellupdte[6].innerText
                    ft16.value = cellupdte[10].innerText +  " | " + cellupdte[11].innerText               


                    if ( cellupdte[3].innerText === 'Receive'  && fields[2] === 'Send'){
                       
                        if (fields[9] ==='Received' && cellupdte[10].innerText === 'Pending' 
                            && cellupdte[11].innerText === 'Not Updated' ){
                            
                            ft17.value = "Active | Updated"

                        } else  if (fields[9] ==='Received' && cellupdte[10].innerText === 'Active' 
                            && cellupdte[11].innerText === 'Updated' ){ 
                            
                            ft17.value =   "This record is Already Updated to " + fields[9] + " | " + cellupdte[10].innerText     
                            upateftbcas.disabled = true;                                                          

                        } else  if (fields[9] ==='Pending' && cellupdte[10].innerText === 'Pending' 
                            && cellupdte[11].innerText === 'Not Updated'){ 
                            
                            ft17.value =  "This record is still having " + fields[9] + 
                            " Status in the server"
                            upateftbcas.disabled = true;   
                        } else  if (fields[9] ==='Received' && cellupdte[10].innerText === 'Voided' 
                            && cellupdte[11].innerText === 'Not Updated' ){ 
                         
                            ft17.value =   "This record is not yet updated to Voided Status in the server"
                            upateftbcas.disabled = true;      
                        }else if (fields[9] === 'Voided' && cellupdte[10].innerText === 'Voided' 
                            && cellupdte[11].innerText === 'Not Updated' ){                 
                                             
                            ft17.value = "Voided | Updated"
                            
                        } else if (fields[9] === 'Voided' && cellupdte[10].innerText === 'Voided' 
                            && cellupdte[11].innerText === 'Updated' ){
                         
                            ft17.value = "This Record is Already Updated to " + fields[9] + " | " + cellupdte[10].innerText
                            upateftbcas.disabled = true;   
                        }  else {

                            /* document.getElementById(BCASoverlayId).classList.add('active');
                            errorMessage.value =  "Record is having " + fields[9] + " Status, you are not allowed to update this record" */

                        }                            
                    
                    } else if ( cellupdte[3].innerText === 'Send'  && fields[2] === 'Send'){
                   
                        if (fields[9] ==='In-Transit' && cellupdte[10].innerText === 'Pending' 
                            && cellupdte[11].innerText === 'Not Updated' ){

                            ft17.value = "Active | Updated"

                        } else  if (fields[9] ==='In-Transit' && cellupdte[10].innerText === 'Active' 
                            && cellupdte[11].innerText === 'Updated' ){ 
                     
                           ft17.value ="The record you've enter is Already Updated to " + fields[9] + " | " + cellupdte[10].innerText
                           upateftbcas.disabled = true;   
                                                          
                        }else if (fields[9] === 'Voided' && cellupdte[10].innerText === 'Voided' 
                            && cellupdte[11].innerText === 'Not Updated' ){
                                                            
                            ft17.value = "Voided | Updated"
                         } else if (fields[9] === 'Voided' && cellupdte[10].innerText === 'Voided' 
                            && cellupdte[11].innerText === 'Updated' ){                                
                      
                            ft17.value = "This record is Already Updated to " + fields[9] + " | " + cellupdte[10].innerText
                            upateftbcas.disabled = true;  

                         }  else {

                            document.getElementById(BCASoverlayId).classList.add('active');                           
                            ft17.value =   "This record is having " + fields[9] + " Status."
                            upateftbcas.disabled = true;   
                        } 

                    } 

                       
                    } else if (cellupdte[3].innerText === fields[2] && ( fields[2] === 'Deposit' ||fields[2] === 'Withdraw')){ 

                        if (fields[9] ==='In-Transit' && cellupdte[10].innerText === 'Pending' 
                            && cellupdte[11].innerText === 'Not Updated' ){                           
                                         
                             ft12.value = cellupdte[9].innerText                       
                             ft17.value = "Active | Updated"

                        } else  if (fields[9] ==='In-Transit' && cellupdte[10].innerText === 'Active' 
                                && cellupdte[11].innerText === 'Updated' ){ 
                         
                               ft17.value ="This record is Already Updated to " + fields[9] + " | " + cellupdte[10].innerText
                               upateftbcas.disabled = true;   
                                                              
                        }else if (fields[9] === 'Voided' && cellupdte[10].innerText === 'Voided' 
                                && cellupdte[11].innerText === 'Not Updated' ){
                                                                
                                ft17.value = "Voided | Updated"
                        } else if (fields[9] === 'Voided' && cellupdte[10].innerText === 'Voided' 
                                && cellupdte[11].innerText === 'Updated' ){                                
                          
                                ft17.value = "This record is Already Updated to " + fields[9] + " | " + cellupdte[10].innerText
                                upateftbcas.disabled = true;  
    
                        } else {
    
                                document.getElementById(BCASoverlayId).classList.add('active');                               
                                ft17.value =   "This record is having " + fields[9] + " Status."
                                upateftbcas.disabled = true;   
                        } 

                             
                  
                }    
            } 

        } catch (error) {
            console.error("Error while decrypting:", error);
            alert("Invalid data format");
        }
     

    }).catch(function(err) {
        console.error("Failed to read clipboard contents: ", err);
        alert("Failed to read clipboard contents.");
    });


}

function openbcasTab(event, tabName) {
    // Hide all tab content
    var tabButtons = document.getElementsByClassName("BCASentrycontent");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    
    // Remove "active" class from all tab buttons
    var tabButtons = document.getElementsByClassName("subRtab");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
  
    // Show the clicked tab's content and add "active" class to the clicked button
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");


  }


