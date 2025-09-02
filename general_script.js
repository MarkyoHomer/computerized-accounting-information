document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const submenuLinks = document.querySelectorAll('.submenu a');
    const contents = document.querySelectorAll('.content');
    const bcastabs = document.querySelectorAll('.bcastab');
    submenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = e.target.getAttribute('data-tab');
  
            // Remove active class from all tabs and content
            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));            
            bcastabs.forEach(tab => tab.classList.remove('active'));

        
            document.getElementById(targetTab).classList.add('active');
            document.getElementById('content-' + targetTab).classList.add('active');
  
            // first tab of the content as a default tab
            document.getElementById('sub-' + targetTab +'-tab1').classList.add('active');
            document.getElementById('subcon-' + targetTab +'-tab1').classList.add('active');

            if (document.getElementById('sub-tab4-tab1')) {
            document.getElementById('sub-tab4-tab2').classList.remove('active');
            document.getElementById('subcon-tab4-tab2').classList.remove('active');
             }

            document.getElementById('sub-' + targetTab +'-tab14-1').classList.add('active');
            document.getElementById('subcon-' + targetTab +'-tab14-1').classList.add('active');

        
            document.getElementById('sub-' + targetTab +'-tab6').classList.remove('active');
            document.getElementById('subcon-' + targetTab +'-tab6').classList.remove('active');
            document.getElementById('sub-' + targetTab +'-tab14-2').classList.remove('active');
            document.getElementById('subcon-' + targetTab +'-tab14-2').classList.remove('active');

            if (document.getElementById('sub-tab100-tab1')) {
              filtertransactionbydate()
            }

            if (document.getElementById('sub-tab100-tab6')) {
              filterftbydate()
            }
          
           
            

            
        });

    });

  });
  

  function formatDate(date) {
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1; // getMonth() returns 0-11, so add 1
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    // Format to mm/dd/yyyy
    return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
  }

  function padNumber(num, length) {
    return num.toString().padStart(length, '0');
  }

// ---------Function to open a specific suboverlay     ------------------------------------------------

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

   document.querySelectorAll('.BCAStoggle-btn').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Prevents the default action of anchor links

      const submenu = this.nextElementSibling; // Get the next <ul> (submenu) after the clicked item

      // Toggle the submenu
      if (submenu.style.maxHeight) {
        // If submenu is open, close it
        submenu.style.maxHeight = null;
        submenu.style.opacity = 0;
      } else {
        // If submenu is closed, open it
        submenu.style.maxHeight = submenu.scrollHeight + 'px'; // Set the max-height to the scrollHeight of the submenu
        submenu.style.opacity = 1;
      }
    });
  });


    document.querySelectorAll('.toggle-btn').forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default action of anchor links

        const submenu = this.nextElementSibling; // Get the next <ul> (submenu) after the clicked item

        // Toggle the submenu
        if (submenu.style.maxHeight) {
          // If submenu is open, close it
          submenu.style.maxHeight = null;
          submenu.style.opacity = 0;
        } else {
          // If submenu is closed, open it
          submenu.style.maxHeight = submenu.scrollHeight + 'px'; // Set the max-height to the scrollHeight of the submenu
          submenu.style.opacity = 1;
        }
      });
    });


    // Get today's date in the required format (YYYY-MM-DD)
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const seconds = today.getSeconds().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;  // yyyy-mm-dd
    const refformattedDate = `${day}${month}${year}`;  // ddmmyyyy
    const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`; //  mm/dd/yyyy hh:mm:ss

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
    document.getElementById('date-summaryrecon-from').value = formattedDate;
    document.getElementById('date-summaryrecon-to').value = formattedDate;

    
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





      