function openSubOverlay(suboverlayId, openbtn) {  

    document.getElementById(suboverlayId).classList.add('show');
    const NStatusoverlay2 = document.getElementById('NStatus-overlay2').innerText;
    const notif =  document.getElementById('row-suboverlay2').innerText 
    const NewRw = localStorage.getItem("Newrow");  
    const table = document.getElementById('ft-data-table');
    const targetRow = table.rows[NewRw]; 
    const priorstat = targetRow.cells[17].innerText;
    if (openbtn === 'ack') {
      document.getElementById('row-suboverlay2').value = "Acknowledge Transaction";
      var Nstatus = "Acknowledged"
      var Ostatus = NStatusoverlay2
     } else if (openbtn === 'cancel-ack') {
     document.getElementById('row-suboverlay2').value = "Cancel Acknowledged Transaction";
      var Nstatus = "In-Transit"
      var Ostatus = NStatusoverlay2

    } else if (openbtn === 'flag') {
      document.getElementById('row-suboverlay2').value = "Flag as Under Review";
      var Nstatus = "Under Review"
      var Ostatus = NStatusoverlay2

    } else if (openbtn === 'cancel-deny') {
        document.getElementById('row-suboverlay2').value = "Recall of Denied Transaction";
        var Nstatus = "In-Transit"
        var Ostatus = NStatusoverlay2
   
    } else if (openbtn === 'deny') {
         document.getElementById('row-suboverlay2').value = "Deny Transaction";
         var Nstatus = "Denied"
         var Ostatus = NStatusoverlay2

    } else if (openbtn === 'cancel-flag') {
        document.getElementById('row-suboverlay2').value = "Conclude Flagged Transaction";
        var Nstatus = priorstat
        var Ostatus  = "Under Review"
    } else if (openbtn === 'cancel-new') {
      document.getElementById('row-suboverlay2').value = "Void Transaction";
      var Nstatus = "Voided"
      var Ostatus = NStatusoverlay2
    }

    localStorage.setItem("NewStatus", Nstatus);
    localStorage.setItem("OldStatus", Ostatus);
    //generate captcha
    const chars =  "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-code-" + suboverlayId).innerText = captcha;

  }
  


  function validateCaptcha(tableId, row, col, xtableId, xrow, xcol , suboverlayId, overlayId) {
    const userRole = localStorage.getItem('userRole');
    const NewStatus = localStorage.getItem("NewStatus"); 
    const OldStatus = localStorage.getItem("OldStatus");
    const NewRw = localStorage.getItem("Newrow");     
    const remakssuboverlay2 =  document.getElementById('remaks-suboverlay2').value.toUpperCase();
    const input = document.getElementById("captcha-input-" + suboverlayId).value;
    const captchaCode = document.getElementById("captcha-code-" + suboverlayId).innerText;
    const messageElement = document.getElementById("message-" + suboverlayId);
    const table = document.getElementById(tableId);
    const targetRow = table.rows[NewRw]; 
    const closedby =  targetRow.cells[14];
    const ztype =  targetRow.cells[2];
    const closeddate = targetRow.cells[15];
    const statremarks = targetRow.cells[16];
    const priorstat = targetRow.cells[17];
    const targetCell = targetRow.cells[10]; 
    const xcurstat = targetRow.cells[10];
    const cdate =   formattedDateTime  ;

    let Remarks = document.getElementById("remaks-" + suboverlayId).value.trim();

    if (input === captchaCode) {
              if (Remarks === ''){
                messageElement.textContent = "Remarks is Required.";
                messageElement.style.color = "red";
              
              
              } else { 

                        priorstat.innerText = OldStatus
                        targetCell.textContent = NewStatus;     
                        document.getElementById(suboverlayId).classList.remove('show');
                        modalwidth.style.width = '470px';
                        fieldsetcontainer.style.gap = '20px';
                        toggleButton.innerHTML = '<i class="fas fa-circle-arrow-right"></i>';
                        document.getElementById(overlayId).classList.remove('show');
                        document.getElementById("message-" + suboverlayId).innerText = ""
                        showNotification();
                        xnotify.innerHTML = '<i class="fa-solid fa-circle-info" style="margin-right:10px; font-size:20px; color:white"></i>' + 
                         "The status of transaction is successfully updated to " + NewStatus
                        
                     //to acknowledged
                      if(xcurstat.innerText === 'Acknowledged' && (ztype.innerText === 'Deposit' ||ztype.innerText === 'Withdraw' )  
                        && priorstat.innerText !== 'Under Review'){
                        closedby.textContent = userRole  + "1234"
                        closeddate.textContent = cdate
                        statremarks.innerText =  statremarks.innerText  + " " + userRole + "1234"  + " " +
                        cdate + " " + remakssuboverlay2 + "; "

                     
                     //to denied
                      }else if((xcurstat.innerText === 'Denied') && (ztype.innerText === 'Deposit' ||ztype.innerText === 'Withdraw') 
                         && priorstat.innerText !== 'Under Review'){                     
                        statremarks.innerText =  statremarks.innerText  + " Denied by: " + userRole + "1234" + " "  + 
                        cdate + " " + remakssuboverlay2 + "; "
                        closedby.textContent = "--"
                        closeddate.textContent = "--"


                     //cancel acknowledge or recall denie
                      }else if((xcurstat.innerText === 'In-Transit') && (ztype.innerText === 'Deposit' ||ztype.innerText === 'Withdraw') 
                         && priorstat.innerText !== 'Under Review'){                     
                        statremarks.innerText =  statremarks.innerText  + " Modified by: "  + userRole + "1234" + " "  + 
                        cdate + " " + remakssuboverlay2 + "; "
                       
                        closedby.textContent = "--"
                        closeddate.textContent = "--"

                     // void receive
                    }else if((xcurstat.innerText === 'In-Transit') && ztype.innerText === 'Send' && priorstat.innerText !== 'Under Review'){                     
                        statremarks.innerText =  statremarks.innerText  + " Voided Receive; Approved by "  + userRole + "1234" + " "  + 
                        cdate + " " + remakssuboverlay2 + "; "
                   
                        closedby.textContent = "--"
                        closeddate.textContent = "--"  
                        
                     //void pending or void open transaction of branch (send, deposit, withdraw)    
                      }else if(xcurstat.innerText === 'Voided'  &&  priorstat.innerText !== 'Under Review'){                         
                        statremarks.innerText =  statremarks.innerText  + " Voided by: " + userRole + "1234" + " " + 
                        cdate + " " + remakssuboverlay2 + "; "
               

                      // to flag as under review  
                      }else if(xcurstat.innerText === 'Under Review'){
                        statremarks.innerText =  statremarks.innerText  + " Under Reviewed by: "  + userRole + "1234"+ " "  + 
                        cdate + " " + remakssuboverlay2 + "; "
                     

                      // to conclude under review                                              
                        
                      } else  {
                        statremarks.innerText =  statremarks.innerText  + " Concluded by: "  + userRole + "1234"+ " "  + 
                        cdate + " " + remakssuboverlay2 + "; "
                        
                      }  
                }
             
                
       } else {
        messageElement.textContent = "Incorrect CAPTCHA. Please try again.";
        messageElement.style.color = "red";
      }
   
    }


function regenerateCaptcha(suboverlayId) {
    document.getElementById("message-" + suboverlayId).innerText = ""
    const chars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-code-" + suboverlayId).innerText = captcha;

}

function closeSubOverlay(suboverlayId) {
    document.getElementById(suboverlayId).classList.remove('show');
    document.getElementById("message-" + suboverlayId).innerText = "" 

  } 
