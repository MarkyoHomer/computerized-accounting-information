
const xtableBody = document.getElementById('BCASfttable')  
function retry(event) { 

    document.getElementById('bcasftretryconfirmation').classList.add('show');

    const retryrow = event.target.closest('tr');   
    const tableBody = retryrow.parentNode;
    const rowIndex = Array.from(tableBody.children).indexOf(retryrow) + 1;
  
    localStorage.setItem("retryrow", rowIndex); // to post in the localstorage the fttablerow where the retrybutton is located
    document.getElementById('bcasmessage').textContent =   "You are reuploding " + 
    xtableBody.rows[rowIndex].cells[3].innerText + " Transaction. Do you want to proceed?" 
}


function bcascloseretry(){
    document.getElementById('bcasftretryconfirmation').classList.remove('show');
}

function retryconfirmed(event) { 
    const xtableBody = document.getElementById('BCASfttable')
    const rwindex = localStorage.getItem("retryrow") // to get the fttablerow where the retrybutton is located    
    const row = xtableBody.rows[rwindex]  // to find the fttable  row in ft table where the retrybutton is located 

    const tableBody = document.getElementById('BCAStransactions').getElementsByTagName('tbody')[0];
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
    const fttrtype = row.cells[3].textContent
    //xrow.cells[6].style.textAlign = 'right';   


    NoCell.textContent = tableBody.rows.length
    statusCell.textContent  = 'Active'
    if (fttrtype === 'Send'){
        templateCell.textContent = 'Fund Transfer-Send'
        debitCell.textContent ='0.00'
        creditCell.textContent = row.cells[7].textContent
        const Amount = parseFloat(creditCell.textContent.replace(/,/g, ''));          
        const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
        const totalBalance = prevtbalance - Amount; 
        const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
        const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        balanceCell.textContent = formattedBalance;
        
    } else if (fttrtype === 'Receive'){
        templateCell.textContent = 'Fund Transfer-Receive' 
        debitCell.textContent = row.cells[7].textContent
        creditCell.textContent = '0.00'
        const Amount = parseFloat(debitCell.textContent.replace(/,/g, ''));          
        const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
        const totalBalance = prevtbalance + Amount; 
        const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
        const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        balanceCell.textContent = formattedBalance;

    } else if (fttrtype === 'Deposit'){
        templateCell.textContent = 'Fund Transfer-Deposit' 
        debitCell.textContent = '0.00'
        creditCell.textContent = row.cells[7].textContent
        const Amount = parseFloat(creditCell.textContent.replace(/,/g, ''));          
        const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
        const totalBalance = prevtbalance - Amount; 
        const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
        const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        balanceCell.textContent = formattedBalance;

    }else{
        templateCell.textContent = 'Fund Transfer-Withdraw'
        debitCell.textContent = row.cells[7].textContent
        creditCell.textContent = '0.00'
        const Amount = parseFloat(debitCell.textContent.replace(/,/g, ''));          
        const prevtbalance = parseFloat(xrow.cells[6].textContent.replace(/,/g, ''));       
        const totalBalance = prevtbalance + Amount; 
        const roundedBalance = Math.round(totalBalance * 100) / 100; // This rounds to 2 decimal places     
        const formattedBalance = roundedBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        balanceCell.textContent = formattedBalance;
 
    }   
    
    
   
    remarksCell.textContent = row.cells[9].textContent
    uploadstatCell.textContent = 'Not Uploaded'
    dateCell.textContent  = row.cells[2].textContent
    dateCell.style.display = 'none' 

    const today =   new Date(dateCell.textContent); 
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const ftrefformattedDate = `${month}${day}${year}`;
    const fttrnum = row.cells[15].textContent     
    row.cells[14].innerText = "FT-" + Bcasbranch.value + ftrefformattedDate + "-" + fttrnum + "-Active"
    row.cells[14].style.display = "none"

    tridCell.textContent =  row.cells[4].textContent
    console.log(row.cells[13].textContent)
    tridCell.style.display = 'none'
    ftidCell.textContent = row.cells[14].textContent
    ftidCell.style.display = 'none'  



  const viewbtn = document.createElement('button');  
    viewbtn.type = "button";
    viewbtn.className = "custom-button-bcaseye";
    viewbtn.innerHTML = '<i  class= "fas fa-eye">';  
    viewbtn.style.cursor = 'pointer';
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


    const utableBody = document.getElementById('frombcasfttable').getElementsByTagName('tbody')[0]; 
    const urow = utableBody.rows[utableBody.rows.length - 1] 
    const unewRow = utableBody.insertRow();    
    const udateCell = unewRow.insertCell(0);
    const utypeCell = unewRow.insertCell(1);
    const utridCell = unewRow.insertCell(2);
    const uorigCell = unewRow.insertCell(3);
    const udestCell = unewRow.insertCell(4);   
    const uamountCell = unewRow.insertCell(5);
    const ucourierCell = unewRow.insertCell(6);
    const uremarksCell = unewRow.insertCell(7);
    const uftidcodeCell = unewRow.insertCell(8);
    const areaCell = unewRow.insertCell(9);  
    const TransactionDate = unewRow.insertCell(10);
    const trNo = unewRow.insertCell(11);
    const trStatus = unewRow.insertCell(12);
    const trAccountName = unewRow.insertCell(13);
    const trDebit = unewRow.insertCell(14);
    const trCredit = unewRow.insertCell(15);
    const trRemarks = unewRow.insertCell(16);
    const trUploadTime = unewRow.insertCell(17);
    urow.cells[5].style.textAlign = 'right';

    udateCell.textContent  = row.cells[2].textContent    
    utypeCell.textContent = row.cells[3].textContent  
    utridCell.textContent = row.cells[4].textContent 
    uorigCell.textContent  = row.cells[5].textContent    
    udestCell.textContent = row.cells[6].textContent  
    uamountCell.textContent = row.cells[7].textContent 
    ucourierCell.textContent = row.cells[8].textContent 
    uremarksCell.textContent = row.cells[9].textContent   
    uftidcodeCell.textContent = row.cells[14].textContent
    areaCell.textContent = row.cells[16].textContent

    const waiting = document.getElementById('bcasftuploadwaiting');
    const xwaiting = document.getElementById('xwaiting'); 
    document.getElementById('bcasftretryconfirmation').classList.remove('show');
    waiting.classList.add('show');
    xwaiting.innerHTML = '<i class="fa-solid fa-circle-info" style="margin-right:10px; font-size:30px; color:white"></i>' +
            " Reuploading Fund Transfer Transaction in  10"
   
    const timerInterval = setInterval(() => {
        if (countdownTime > 0) {
           
            xwaiting.innerHTML = '<i class="fa-solid fa-circle-info" style="margin-right:10px; font-size:30px; color:white"></i>' +
            " Reuploading Fund Transfer Transaction in " + countdownTime; 
            countdownTime--; 
        } else { 
            clearInterval(timerInterval); 
            waiting.classList.remove('show'); 
            
            
            row.cells[10].textContent = 'Active'
            row.cells[11].textContent = 'Updated'
            row.cells[12].textContent = formattedDateTime
            const button = row.cells[0].querySelector('button')
            button.disabled = true; // Disable the button if the 10th column is not 'Pending'
            button.style.backgroundColor = 'gray'
            button.style.cursor = 'not-allowed'
            showNotification(); 

            // Adjust notification styles
            xnotification.style.bottom = '75px';
            xnotification.style.right = '75px';
            xnotification.style.width = '400px';  
            xnotification.style.backgroundColor = 'green';

            // Set notification text
            xnotify.innerHTML = '<i class="fa-solid fa-circle-info" style="margin-right:10px; font-size:20px; color:white"></i>' + 
            "Transaction has been updated to the server and entries has been recorded to the Transaction Journal";
        }
    }, 1000); 

}

function bcascloseretry(){
    document.getElementById('bcasftretryconfirmation').classList.remove('show');
}



