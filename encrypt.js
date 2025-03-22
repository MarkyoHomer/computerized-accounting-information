// Function to encode data of a selected row to Base64

function encryptRow(tableId, enrow, event, coldte, coltype ,colo, coldes) {
    event.preventDefault(); 
    let table = document.getElementById(tableId);
    let row = table.rows[enrow]; // Targeting only Row 1 (ignoring the header row)
    
    let rowData = "";
    const xdate = row.cells[coldte].innerText; // Get the specific cell (0-based index)
    const xtype = row.cells[coltype].innerText; // Get the specific cell (0-based index)
    const xorig = row.cells[colo].innerText; // Get the specific cell (0-based index)
    const xdes = row.cells[coldes].innerText; // Get the specific cell (0-based index)  

    // Loop through each cell in the row
    for (let i = 1; i < row.cells.length; i++) { // Exclude the last cell with the button
        rowData += row.cells[i].innerText + "|"; // Concatenate cell data with space
    }
  
    // Base64 encode the concatenated row data
    let encodedData = btoa(rowData); // btoa() encodes the string to Base64

    // Display the encoded Base64 data in a textarea
   // document.getElementById("base64Output").value = encodedData;
    
     let encodedText = "Reference code: " +  xtype + " | " + xorig + "-" + xdes + " | " + xdate ;
    
     let modifiedText = encodedText.replace( xdate, xdate + "\n\n" +  encodedData );

    // Check if there's any Base64 data to copy
    if (modifiedText.trim() === "") {
        alert("No data to copy!");
        return;
    }
    
    // Use the Clipboard API to copy text to clipboard
    navigator.clipboard.writeText(modifiedText).then(() => {
        alert("Reference Code is copied to clipboard!");
    }).catch(err => {
        console.error("Error copying text: ", err);
    }); 
   
}

function decodeBase64(data) {
    return atob(data); // `atob` decodes the Base64 string
}

// const decryptButton = document.getElementById('paste-ft');

const encryptedField = document.getElementById('offline-update');
const bbranch = document.getElementById('Bcasbranch');
const errMessage = document.getElementById('alertmessage');
const saveupdateft = document.getElementById('FT-btn-update-overlay0');
   saveupdateft.disabled =  true;
function camisftpaste(){
    // Use the Clipboard API to read text from the clipboard
    navigator.clipboard.readText().then(function(text) {
        // Paste the text into the encrypted input field
        encryptedField.value = text;

        // Check if the clipboard data is empty
        if (!text) {
            errMessage.textContent = "Clipboard is empty. Please copy some encrypted data.";
            return;
        }

        try {
            // Decrypt the Base64 encoded data
            const decryptedData = decodeBase64(text);
            // Split the decrypted data into multiple fields based on the separator (e.g., ":")
            const fields = decryptedData.split("|");
            // Check if the number of split parts is sufficient for the fields
           
            if (fields.length < 12  ) {
                alert("Copied data is not in the standard format.");
            }
  
            pastedate.value = fields[1];
            pasteid.value = fields[3];
            pastetype.value = fields[2];
            pasteamt.value = fields[6];  
            reason.value =  fields[9] + " " + fields[2] +" Branch Fund Transfer"             
            pastebranch.value = bbranch.value;

            
            const tableid = document.getElementById("ft-data-table");
            const rowssearchid = tableid.getElementsByTagName("tr"); 
            
            for (var i = 1; i < rowssearchid.length; i++) {
                var cellssearchid = rowssearchid[i].getElementsByTagName("td");

                   if (cellssearchid[4].innerText === fields[3]){
                   
                    statusfrom.value = cellssearchid[10].innerText              

                        if (fields[2] === "Send" ){
                            pastebank.value = ""
                            if (fields[9] === "Pending" &&  fields[10] === "Not Updated" 
                                && cellssearchid[10].innerText === "Pending"){

                            updateto.value = "In-Transit"
                            saveupdateft.disabled = false;

                            }else if ( fields[9] === "Voided" && fields[10] === "Not Updated" 
                                && (cellssearchid[10].innerText === "Pending" || cellssearchid[10].innerText === "In-Transit")) {

                            updateto.value = "Pending | Voided from " + fields[5]
                            saveupdateft.disabled = false;

                            }else  {

                            updateto.value = "This record is already updated"                    
                            saveupdateft.disabled = true;
                            updateto.style.color = "red"
                            }
                        }else if ( fields[2] === "Receive") {
                            pastebank.value = ""
                            if (fields[9] === "Pending" &&  fields[10] === "Not Updated" 
                                && cellssearchid[10].innerText === "In-Transit"){

                                updateto.value = "Received"
                                saveupdateft.disabled = false;
                         

                            }else if ( fields[9] === "Voided" && fields[10] === "Not Updated" 
                                && (cellssearchid[10].innerText === "Received" || cellssearchid[10].innerText === "In-Transit")) {

                                updateto.value = "In-Transit | Voided from " + fields[5]
                                saveupdateft.disabled = false;

                            }else  {

                                updateto.value = "This record is already updated"
                                updateto.style.color = "red"                    
                                saveupdateft.disabled = true;
                            }
                        }else if ( fields[2] === "Deposit" || fields[2] === "Withdraw") {

                            pastebank.value = fields[8]

                            if (fields[9] === "Pending" &&  fields[10] === "Not Updated" 
                                && cellssearchid[10].innerText === "Pending"){

                            updateto.value = "In-Transit"
                            saveupdateft.disabled = false;

                            }else if ( fields[9] === "Voided" && fields[10] === "Not Updated" 
                                && (cellssearchid[10].innerText === "Pending" || cellssearchid[10].innerText === "In-Transit")) {

                            updateto.value = "Pending | Voided from " + fields[5]
                            saveupdateft.disabled = false;

                            }else  {

                            updateto.value = "This record is already updated"   
                            updateto.style.color = "red"                      
                            saveupdateft.disabled = true;

                            }
                        
                        }                       

                    }

           }     
                      
        } catch (error) {
            console.error("Error while decrypting:", error);
            alert("Invalid data format "  );
        }
     

    }).catch(function(err) {
        console.error("Failed to read clipboard contents: "  , err);
        alert("Failed to read clipboard contents."  );
    });


}



