
// Menu tab to open the main content tab-------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const submenuLinks = document.querySelectorAll('.submenu a');
    const contents = document.querySelectorAll('.content');
  
    submenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = e.target.getAttribute('data-tab');
  
            // Remove active class from all tabs and content
            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
  
            // Add active class to the corresponding tab and content
            document.getElementById(targetTab).classList.add('active');
            document.getElementById('content-' + targetTab).classList.add('active');
  
            // first tab of the content as a default tab
            document.getElementById('sub-' + targetTab +'-tab1').classList.add('active');
            document.getElementById('subcon-' + targetTab +'-tab1').classList.add('active');
        });

    });

  });
  
// ---------Function to open a specific overlay     ------------------------------------------------


// ---------Function to open a specific suboverlay     ------------------------------------------------
  function openSubOverlay(suboverlayId, openbtn) {
    document.getElementById(suboverlayId).classList.add('active');

    if (openbtn === 'ack') {
      document.getElementById("row-" + suboverlayId).value = "Acknowledge Transaction";
      var Nstatus = "Acknowledged"
     } else if (openbtn === 'cancel-ack') {
     document.getElementById("row-" + suboverlayId).innerText = "Cancel Acknowledged Transaction";
      var Nstatus = "In-Transit"

    } else if (openbtn === 'flag') {
      document.getElementById("row-" + suboverlayId).innerText = "Flag as Under Review";
      var Nstatus = "Under Review"

    } else if (openbtn === 'cancel-deny') {
        document.getElementById("row-" + suboverlayId).innerText = "Recall of Denied Transaction";
        var Nstatus = "In-Transit"
   
    } else if (openbtn === 'deny') {
         document.getElementById("row-" + suboverlayId).innerText = "Deny Transaction";
         var Nstatus = "Denied"

    } else if (openbtn === 'cancel-flag') {
        document.getElementById("row-" + suboverlayId).innerText = "Conclude Flagged Transaction";
        var Nstatus = "In-Transit"

    } else if (openbtn === 'cancel-new') {
      document.getElementById("row-" + suboverlayId).innerText = "Void Transaction";
      var Nstatus = "Voided"
    }

    localStorage.setItem("NewStatus", Nstatus);

    //generate captcha
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-code-" + suboverlayId).innerText = captcha;

  }
  

  function closeSubOverlay(suboverlayId) {
    document.getElementById(suboverlayId).classList.remove('active');
    document.getElementById("message-" + suboverlayId).innerText = "" 

  }

 

  function validateCaptcha(tableId, row, col, xtableId, xrow, xcol , suboverlayId, overlayId) {
    const NewStatus = localStorage.getItem("NewStatus"); 
    const input = document.getElementById("captcha-input-" + suboverlayId).value;
    const captchaCode = document.getElementById("captcha-code-" + suboverlayId).innerText;
    const messageElement = document.getElementById("message-" + suboverlayId);
    const table = document.getElementById(tableId); // Get table by ID
    const targetRow = table.rows[row]; // Get the specific row (0-based index)
    const targetCell = targetRow.cells[col]; // Get the specific cell (0-based index)
    const xtable = document.getElementById(xtableId); // Get table by ID
    const xRow = xtable.rows[xrow]; // Get the specific row (0-based index)
    const xCell = xRow.cells[xcol]; // Get the specific cell (0-based index)


    
    let Remarks = document.getElementById("remaks-" + suboverlayId).value.trim();

    if (input === captchaCode) {
      if (Remarks === ''){
        messageElement.textContent = "Remarks is Required.";
        messageElement.style.color = "red";
      
      
      } else {
  
        /* messageElement.style.display = "block"; */
        /*  messageElement.textContent = "CAPTCHA Verified! Status has been changed"; */
        /*  messageElement.style.color = "green"; */

        targetCell.textContent = NewStatus;
        xCell.textContent = NewStatus;
   

        document.getElementById(suboverlayId).classList.remove('active');
        document.getElementById(overlayId).classList.remove('active');
        document.getElementById("message-" + suboverlayId).innerText = ""
      }

    } else {
        messageElement.textContent = "Incorrect CAPTCHA. Please try again.";
        messageElement.style.color = "red";
    }
  }



  function regenerateCaptcha(suboverlayId) {
    document.getElementById("message-" + suboverlayId).innerText = ""
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-code-" + suboverlayId).innerText = captcha;

}
  // Get the overlay and form elements




function openTab(event, tabName) {
    // Hide all tab content
    var tabContents = document.getElementsByClassName("subRcontent");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
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


function subSubmenu(submenuId) {
  const submenu = document.getElementById(submenuId);

  const submenuBtn = submenu.previousElementSibling.querySelector('.submenu-btn');
  
  // Toggle submenu visibility
  if (submenu.style.display === "block") {
      submenu.style.display = "none";
      submenuBtn.classList.remove('open');
  } else {
      submenu.style.display = "block";
      submenuBtn.classList.add('open');
  }
}

    

function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);

    const submenuBtn = submenu.previousElementSibling.querySelector('.submenu-btn');
    
    // Toggle submenu visibility
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        submenuBtn.classList.remove('open');
    } else {
        submenu.style.display = "block";
        submenuBtn.classList.add('open');
    }
}

    // Get today's date in the required format (YYYY-MM-DD)
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    // Set the default date value for the input field
    document.getElementById('datefrom').value = formattedDate;
    document.getElementById('dateto').value = formattedDate;

    document.getElementById('datefromFTrecon').value = formattedDate;
    document.getElementById('datetoFTrecon').value = formattedDate;
    document.getElementById('datefromFTlist').value = formattedDate;
    document.getElementById('datetoFTlist').value = formattedDate;
    document.getElementById('trnxDate').value = formattedDate;
    document.getElementById('bcasftDate').value = formattedDate;
    document.getElementById('bcasftaddDate').value = formattedDate;

    
    // placeholder

    $('select').change(function() {
        if ($(this).children('option:first-child').is(':selected')) {
          $(this).addClass('placeholder');
        } else {
         $(this).removeClass('placeholder');
        }
       });

       function logout() {
        // Clear all items in localStorage
        localStorage.clear();
 
          window.location.href = 'index.html' ;  // Modify this URL to your login page or home page
      }


      