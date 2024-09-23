


async function generateTable() {

    const municipality_url = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff"
    const employment_url = "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065 "
    const dataTable = document.getElementById("data-table")

    // Fetching JSONs
    const municipalityPromise = await fetch( municipality_url )
    const employmentPromise = await fetch( employment_url )
    const municipalityJSON = await municipalityPromise.json()
    const employmentJSON = await employmentPromise.json()

    // Extracting populations and municipalities from JSON
    const municipalitiesArray = Object.values( municipalityJSON.dataset.dimension.Alue.category.label )
    const populations = municipalityJSON.dataset.value

    // Extracting employment data
    const employmentArray = employmentJSON.dataset.value

    console.log(employmentJSON);

    // Add rows to table
    addTableRows( dataTable, municipalitiesArray, populations, employmentArray )

    

}

function addTableRows( table, data1, data2, data3 ) {

    for (let ii = 0; ii < data1.length; ii++ ) {
        let row = table.getElementsByTagName("tbody")[0].insertRow()
        let municCell = row.insertCell()
        let populCell = row.insertCell()
        let employmentCell = row.insertCell()

        municCell.appendChild( document.createTextNode( data1[ii] ) )
        populCell.appendChild( document.createTextNode( data2[ii] ) )
        employmentCell.appendChild( document.createTextNode( data3[ii] ) )
        
    }
}

window.addEventListener('load', generateTable );