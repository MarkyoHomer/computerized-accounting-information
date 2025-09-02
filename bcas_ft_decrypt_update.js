const decryptButton = document.getElementById('paste-ft');
const ftselectedtype = document.getElementById('selectedtype');
const encryptedInput = document.getElementById('encryptedInput');
const errorMessage = document.getElementById('alertmessage');
const upateftbcas = document.getElementById('upbcasft');


function updatebcasft(BCASoverlayId){   
    navigator.clipboard.readText().then(function(text) {  
        encryptedInput.value = text;
        var xtable = document.getElementById("BCASfttable");
        var updaterow = xtable.getElementsByTagName("tr");
 
        if (!text) {
            errorMessage.textContent = "Clipboard is empty. Please copy some encrypted data.";
            return;
        }

        try {        
            const decryptedData2 = decodeBase64(text);     // Decrypt the Base64 encoded data       
            const fields = decryptedData2.split("|");      // Split the decrypted data into multiple fields based on the separator (e.g., ":")       
           
            const ftid = fields[14]
            localStorage.setItem("ftidup", ftid );

            // Check if the number of split parts is sufficient for the fields 
            if (fields.length < 8) { 
            alert("Copied data is not in the standard format."); 
            }   
      
             for (var i = 1; i < updaterow.length; i++) {
                   var cellupdte = updaterow[i].getElementsByTagName("td");

                if (cellupdte[4].innerText === fields[2]  ){ 

                    ft8.value = cellupdte[2].innerText
                    ft9.value = cellupdte[3].innerText
                    ft10.value = cellupdte[7].innerText
                    ft11.value = cellupdte[8].innerText
                    
                    ft13.value = cellupdte[9].innerText
                    ft14.value = cellupdte[4].innerText
                    ft15.value = cellupdte[6].innerText
                    ft16.value = cellupdte[10].innerText             


                    if ( cellupdte[3].innerText === 'Receive'  && fields[1] === 'Send'){
                       
                        if (fields[9] ==='Received' && cellupdte[10].innerText === 'Pending' )
                            {
                            
                            ft17.value = "Active"

                        } else  if (fields[9] ==='Received' && cellupdte[10].innerText === 'Active' )
                            {       
                      
                            ft17.value =  "Not Allowed" 
                               document.getElementById(BCASoverlayId).classList.add('show');
                            errorMessage.textContent =  "This record is Already Updated to " + fields[9] + " | " + cellupdte[10].innerText   
                            upateftbcas.disabled = true;                                                          

                        } else  if (fields[9] ==='Pending' && cellupdte[10].innerText === 'Pending' 
                            && cellupdte[11].innerText === 'Not Updated'){ 
                            
                            ft17.value =  "Not Allowed" 
                               document.getElementById(BCASoverlayId).classList.add('show');
                            errorMessage.textContent =  "This record is still having " + fields[9] + 
                            " Status in the server, the Sending branch must update first the transaction"
                            upateftbcas.disabled = true;   

                        } else  if (fields[9] ==='Voided-' + cellupdte[3].innerText ){    //to avoid update using selfcode
                            
                            ft17.value =  "Not Allowed" 
                               document.getElementById(BCASoverlayId).classList.add('show');
                            errorMessage.textContent =  "This record is still having " + fields[9] + 
                            " Status in the server, Area officer must approved the voiding of transaction"
                            upateftbcas.disabled = true;   

                        } else  if (fields[9] ==='Received' && cellupdte[10].innerText === 'Voided'){ 
                         
                            ft17.value = "Not Allowed" 
                            document.getElementById(BCASoverlayId).classList.add('show');
                            errorMessage.textContent =  "This record is not yet updated to Voided Status in the server, Updating is not allowed"
                            upateftbcas.disabled = true; 
                            
                            

                        }else if (fields[9] === 'Voided' && cellupdte[10].innerText !== 'Voided'){                 
                                             
                            ft17.value = "Voided"
                            
                        } else if (fields[9] === 'Voided' && cellupdte[10].innerText === 'Voided' ){
                         
                            ft17.value = "Not Allowed"
                           
                            upateftbcas.disabled = true;   

                            document.getElementById(BCASoverlayId).classList.add('show');
                            errorMessage.textContent =  "Record is having " + fields[9] + " Status, you are not allowed to update this record" 

                        }  else {

                          //document.getElementById(BCASoverlayId).classList.add('active');
                           // errorMessage.textContent =  "Record is having " + fields[9] + " Status, you are not allowed to update this record" 

                        } //end of if 1/2/1                            
                    
                    } else if ( cellupdte[3].innerText === 'Send'  && fields[1] === 'Send'){
                   
                        if (fields[9] ==='In-Transit' && cellupdte[10].innerText === 'Pending' 
                            && cellupdte[11].innerText === 'Not Updated' ){

                            ft17.value = "Active"

                        } else  if (fields[9] ==='In-Transit' && cellupdte[10].innerText === 'Active' 
                            && cellupdte[11].innerText === 'Updated' ){ 
                     
                           ft17.value = "Not Allowed"

                             document.getElementById(BCASoverlayId).classList.add('show');
                            errorMessage.textContent =  "The record you've enter is Already Updated to " + fields[9] + " | " + cellupdte[10].innerText

                           upateftbcas.disabled = true;   
                                                          
                        } else if (fields[9] === 'Voided' && cellupdte[10].innerText  !== 'Voided' ){
                                                            
                            ft17.value = "Voided"

                         } else if (fields[9] === 'Voided' && cellupdte[10].innerText === 'Voided' 
                            && cellupdte[11].innerText === 'Updated' ){                               
                      
                            ft17.value = "Not Allowed"

                            document.getElementById(BCASoverlayId).classList.add('show');
                            errorMessage.textContent =  "This record is Already Updated to " + fields[9] + " | " + cellupdte[10].innerText
                            upateftbcas.disabled = true; 
                            
                        } else  if (fields[9] ==='Voided-' + cellupdte[3].innerText ){    //to avoid update using selfcode
                            
                            ft17.value =  "Not Allowed" 
                               document.getElementById(BCASoverlayId).classList.add('show');
                            errorMessage.textContent =  "This record is still having " + fields[9] + 
                            " Status in the server, Area officer must approved the voiding of transaction"
                            upateftbcas.disabled = true;  

                         }  else {                        

                            ft17.value = "Not Allowed"

                            document.getElementById(BCASoverlayId).classList.add('show');
                            errorMessage.textContent = "This record is having " + fields[9] + " Status."
                            upateftbcas.disabled = true;   
                         }  //end of if 1/2/2 

                      } else if (cellupdte[3].innerText === fields[1] && ( fields[1] === 'Deposit' ||fields[1] === 'Withdraw')){               
               

                            if (fields[9] ==='In-Transit' && cellupdte[10].innerText === 'Pending' 
                                && cellupdte[11].innerText === 'Not Updated' ){                           
                                            
                                ft12.value = cellupdte[9].innerText                       
                                ft17.value = "Active"

                            } else  if (fields[9] ==='In-Transit' && cellupdte[10].innerText === 'Active' 
                                    && cellupdte[11].innerText === 'Updated' ){ 
                            
                                ft17.value = "Not Allowed"

                               document.getElementById(BCASoverlayId).classList.add('show');
                               errorMessage.textContent ="This record is Already Updated to " + fields[9] + " | " + cellupdte[10].innerText
                                upateftbcas.disabled = true;   
                                                                
                            }else if (fields[9] === 'Voided' && cellupdte[10].innerText !== 'Voided'){
                                                                    
                                    ft17.value = "Voided"
                            } else if (fields[9] === 'Voided' && cellupdte[10].innerText === 'Voided' ){                     
                            
                                    ft17.value = "Not Allowed"

                                document.getElementById(BCASoverlayId).classList.add('show');
                                errorMessage.textContent = "This record is Already Updated to " + fields[9] + " | " + cellupdte[10].innerText 
                                    upateftbcas.disabled = true;  

                            } else  if (fields[9] ==='Voided-' + cellupdte[3].innerText ){    //to avoid update using selfcode
                            
                                    ft17.value =  "Not Allowed" 
                                       document.getElementById(BCASoverlayId).classList.add('show');
                                    errorMessage.textContent =  "This record is still having " + fields[9] + 
                                    " Status in the server, Area officer must approved the voiding of transaction"
                                    upateftbcas.disabled = true;  
        
                            } else {
                                document.getElementById(BCASoverlayId).classList.add('show');
                                errorMessage.textContent =   "This record is having " + fields[9] + " Status."
                                    upateftbcas.disabled = true;  
                                    
                            } //end of if 1/2/3                            
                    
                        }   //end of if 1/2
                  } else {
                    //alert(cellupdte[4].innerText + " "  + fields[3] );
                  }       // end of if 1
                }  //end of for

        } catch (error) {   //catch try
            console.error("Error while decrypting:", error);
            alert("Invalid data format");
        }   //try
     

    }).catch(function(err) {  // catch navigator
        console.error("Failed to read clipboard contents: ", err);
        alert("Failed to read clipboard contents.");
    }); // navigator


} // end of function




function confirmupdatebcasft(event){

    document.getElementById('bcasftupdateconfirmation').classList.add('show');
    document.getElementById('bcasupatemessage').textContent =   "Are you sure you want to save the status change in this Transaction?"
}

function bcascloseftupdate() {

    document.getElementById('bcasftupdateconfirmation').classList.remove('show');

}

function bcasconfirmedupdate (){
    
    const bcasftid = localStorage.getItem("ftidup"); 
    const tableBody = document.getElementById('BCAStransactions').getElementsByTagName('tbody')[0];
    
    const tableid = document.getElementById('BCASfttable')
    const row = tableid.getElementsByTagName("tr");

    const xrow = tableBody.rows[tableBody.rows.length - 1] 
    const newRow = tableBody.insertRow();    
    const viewCell = newRow.insertCell(0);
    const NoCell = newRow.insertCell(1);
    const statusCell = newRow.insertCell(2);
    const templateCell = newRow.insertCell(3);
    const debitCell = newRow.insertCell(4);   
    const creditCell = newRow.insertCell(5);
    const balanceCell = newRow.insertCell(6);
    const remarksCell = newRow.insertCell(7);
    const uploadstatCell = newRow.insertCell(8);
    const tridCell = newRow.insertCell(9);
    const ftidCell = newRow.insertCell(10);
    const dateCell = newRow.insertCell(11);


if (ft16.value !== 'Pending' && ft17.value !== 'Voided' )  {
    xrow.cells[6].style.textAlign = 'right';   


    for (var i = 1; i < row.length; i++) {
        var cellssearchid = row[i].getElementsByTagName("td");
        const fttrtype = cellssearchid[3].textContent
        console.log(cellssearchid[3].textContent)
    if (ft14.value === cellssearchid[4].textContent ){
        cellssearchid[10].textContent = 'Voided'
        cellssearchid[11].textContent = 'Updated'
        cellssearchid[11].textContent = formattedDateTime
        NoCell.textContent = tableBody.rows.length
        statusCell.textContent  = 'Active'

    if (fttrtype === 'Send'){
        if (cellssearchid[10].textContent === 'Active' ){
        templateCell.textContent = 'Fund Transfer-Send'
        debitCell.textContent ='0.00'
        creditCell.textContent = cellssearchid[7].textContent
        const Amount = parseFloat(creditCell.textContent.replace(/,/g, ''));          
        const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
        const totalBalance = prevtbalance - Amount; 
        const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
        const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        balanceCell.textContent = formattedBalance;

        } else if (cellssearchid[10].textContent === 'Voided') {

        templateCell.textContent = 'Fund Transfer-Send-Voided' 
        debitCell.textContent = cellssearchid[7].textContent
        creditCell.textContent = '0.00'
        const Amount = parseFloat(debitCell.textContent.replace(/,/g, ''));          
        const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
        const totalBalance = prevtbalance + Amount; 
        const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
        const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        balanceCell.textContent = formattedBalance;
        }
        
    } else if (fttrtype === 'Receive'){
        if (cellssearchid[10].textContent === 'Active' ){
        templateCell.textContent = 'Fund Transfer-Receive' 
        debitCell.textContent = cellssearchid[7].textContent
        creditCell.textContent = '0.00'
        const Amount = parseFloat(debitCell.textContent.replace(/,/g, ''));          
        const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
        const totalBalance = prevtbalance + Amount; 
        const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
        const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        balanceCell.textContent = formattedBalance;

        } else  if (cellssearchid[10].textContent === 'Voided') {
            templateCell.textContent = 'Fund Transfer-Receive-Voided'
            debitCell.textContent ='0.00'
            creditCell.textContent = cellssearchid[7].textContent
            const Amount = parseFloat(creditCell.textContent.replace(/,/g, ''));          
            const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
            const totalBalance = prevtbalance - Amount; 
            const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
            const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            balanceCell.textContent = formattedBalance;
            

        }

    } else if (fttrtype === 'Deposit'){

        if (cellssearchid[10].textContent === 'Active'){

        templateCell.textContent = 'Fund Transfer-Deposit' 
        debitCell.textContent = '0.00'
        creditCell.textContent = cellssearchid[7].textContent
        const Amount = parseFloat(creditCell.textContent.replace(/,/g, ''));          
        const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
        const totalBalance = prevtbalance - Amount; 
        const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
        const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        balanceCell.textContent = formattedBalance;
        
        } else  if (cellssearchid[10].textContent === 'Voided') {

        templateCell.textContent = 'Fund Transfer-Deposit-Voided'
        debitCell.textContent = cellssearchid[7].textContent
        creditCell.textContent = '0.00'
        const Amount = parseFloat(debitCell.textContent.replace(/,/g, ''));          
        const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
        const totalBalance = prevtbalance + Amount; 
        const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
        const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        balanceCell.textContent = formattedBalance;

        }


    }else if (fttrtype === 'Withdraw') {
        
        if (cellssearchid[10].textContent === 'Active'){

        templateCell.textContent = 'Fund Transfer-Withdraw'
        debitCell.textContent = cellssearchid[7].textContent
        creditCell.textContent = '0.00'
        const Amount = parseFloat(debitCell.textContent.replace(/,/g, ''));          
        const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
        const totalBalance = prevtbalance + Amount; 
        const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
        const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        balanceCell.textContent = formattedBalance;

        } else  if (cellssearchid[10].textContent === 'Voided') {

        templateCell.textContent = 'Fund Transfer-Withdraw-Voided'
        debitCell.textContent = '0.00'
        creditCell.textContent = cellssearchid[7].textContent
        const Amount = parseFloat(creditCell.textContent.replace(/,/g, ''));          
        const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
        const totalBalance = prevtbalance - Amount; 
        const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
        const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        balanceCell.textContent = formattedBalance;

        }
 
    }   
    
    
   
    remarksCell.textContent = cellssearchid[9].textContent
    uploadstatCell.textContent = 'Not Uploaded'
    dateCell.textContent  = cellssearchid[15].textContent
    dateCell.style.display = 'none' 

    const today =   new Date(dateCell.textContent); 
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const refformattedDate = `${month}${day}${year}`;
    const fttrnum = cellssearchid[15].textContent     
    cellssearchid[14].innerText = "FT-" + Bcasbranch.value + refformattedDate + "-" + fttrnum + "-Active"

    tridCell.textContent =  cellssearchid[4].textContent
    tridCell.style.display = 'none'
    ftidCell.textContent = cellssearchid[14].textContent
    ftidCell.style.display = 'none'  



  const viewbtn = document.createElement('button');  
    viewbtn.type = "button";
    viewbtn.className = "custom-button-bcaseye";
    viewbtn.innerHTML = '<i  class= "fas fa-eye">';     
    viewbtn.style.cursor = 'pointer';
    viewbtninnerHTML = '<i  class= "fas fa-rotate-right">';
    viewbtn.onclick = function(event) { 
        event.preventDefault(); 
        const viewbtnrow = event.target.closest('tr');
        const row = viewbtnrow;
    
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
        
        
        
         const tdate =   formatDate(trnxDate.value);
         const tnsnum = row.cells[1].innerText          
         const paddedNumber = padNumber(tnsnum, 6);
         const AcctName = row.cells[3].innerText  
         const AcctCode = AcctName.replace(/[^A-Z-]/g, '');
         const Debit = row.cells[4].innerText  
         const Credit = row.cells[5].innerText  
         const memo = row.cells[7].innerText  
         const desc = "To record " + AcctName 
         const trId =  row.cells[9].textContent
         const refid = ftidCell.innerText
    
         viewbcasdate.value = tdate
         viewbcastn.value = tnsnum
         viewbcasacode.value = AcctCode
         viewbcastemp.value = AcctName
         viewbcasdesc.value = desc
         viewbcasremarks.value = memo
         viewbcasref.value = "AAA"+paddedNumber+trnxDate.value
    
    
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
    

    
         const tagstable = [
            { name: "Transaction ID", Id: trId },
            { name: "FT Reference ID", Id: refid },    
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

    viewCell.appendChild(viewbtn);





    bcascloseftupdate() 

    document.getElementById('subcon-tab100-tab13').classList.remove('active');  
    document.getElementById('sub-tab100-tab13').classList.remove('active');

    document.getElementById('subcon-tab100-tab6').classList.add('active');  
    document.getElementById('sub-tab100-tab6').classList.add('active');

            


            showNotification(); 

            // Adjust notification styles
            xnotification.style.bottom = '75px';
            xnotification.style.right = '75px';
            xnotification.style.width = '400px';  
            xnotification.style.backgroundColor = 'green';

            // Set notification text
            xnotify.innerHTML = '<i class="fa-solid fa-circle-info" style="margin-right:10px; font-size:20px; color:white"></i>' + 
            "Transaction has been updated and entries has been recorded to the Transaction Journal";
  
  }
       
  }


}    //first if

}