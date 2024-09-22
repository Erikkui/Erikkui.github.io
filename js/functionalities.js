
initializeCode();

function initializeCode() {

    // TODO add table data to Arrays for easier manipulation?

    const addEntryButton = document.getElementById("submit-data")
    addEntryButton.addEventListener("click", entryButtonClick )
        
    const emptyTableButton = document.getElementById("empty-table")
    emptyTableButton.addEventListener("click", emptyListClick )
}


function entryButtonClick() {

    const userTable = document.getElementById( "users-table" )
    const newUsername = document.getElementById("input-username" );
    const newEmail = document.getElementById( "input-email" );
    const newIsAdmin = document.getElementById("input-admin" );

    // Check if username exists
    userExists = checkExistingUsername( newUsername.value, userTable )

    // Edit existing name
    if (userExists[0]) {
        row = userExists[1];
        data = userTable.rows[ row ]
        data.cells[1].innerText = newEmail.value
        if (newIsAdmin.checked == true ) {
            data.cells[2].innerText = "X" 
        } else{
            data.cells[2].innerText = "-" 
        }

    } else {

        // Create new row
        var newText = document.createTextNode( newUsername.value )
        var newRow = userTable.insertRow(userTable.rows.length);

        var newCell = newRow.insertCell(0);
        newCell.appendChild( newText );

        // Append email
        var newCell = newRow.insertCell(1);
        var newText = document.createTextNode( newEmail.value )
        newCell.appendChild( newText );

        // Append admin check
        var newCell = newRow.insertCell(2);
        var newText = document.createTextNode( "-" )
        if (newIsAdmin.checked == true ) {
            var newText = document.createTextNode( "X" )
        }
        newCell.appendChild( newText );
    }

    // Reset entries to placeholder stuses
    newUsername.value = newUsername.ariaPlaceholder
    newEmail.value = newEmail.ariaPlaceholder
    newIsAdmin.checked = false

}

function emptyListClick() {
    const userTable = document.getElementById( "users-table" )
    const rows = document.querySelectorAll( "tr" ).length;
    
    for (let ii = 1; ii < rows; ii++ ) {
        userTable.deleteRow(-1)
    }
}

function checkExistingUsername( name, table ) {
    N = table.rows.length

    if ( name === "Username" ) {
        return [false, 0]
    } else {
        for ( ii = 1; ii < N; ii++ ) {
            oldname = table.rows[ii].cells[0].innerText
            // console.log(oldname)
            // console.log(oldname)
            // console.log(name == oldname)
            if (name === oldname) {
                return [true, ii]
            }
        }
    }

    return [false, 0]
}

