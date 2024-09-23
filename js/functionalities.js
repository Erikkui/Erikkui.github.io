


async function generateTable() {

    const municipality_url = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff"
    const dataTable = document.getElementById("data-table")

    // Fetching JSON
    const municipalityPromise = await fetch( municipality_url )
    const municipalityJSON = await municipalityPromise.json()

    // Extracting populations and municipalities from JSON
    const municipalitiesArray = Object.values( municipalityJSON.dataset.dimension.Alue.category.label )
    const populations = municipalityJSON.dataset.value

    console.log(populations[2]);

    // Adding rows to the table
    // for (let ii = 0; ii < populations.length; ii++ ) {
    //     const row = document.createElement( "tr" )
    //     const townCell = document.createElement( "td" )
    //     const populationCell = document.createElement( "td" )

    addTableRows( dataTable, municipalitiesArray, populations )

}

function addTableRows( table, data1, data2 ) {

    for (let ii = 0; ii < data1.length; ii++ ) {
        let row = table.insertRow()
        let municCell = row.insertCell()
        let populCell = row.insertCell()

        municCell.appendChild( document.createTextNode( data1[ii] ) )
        populCell.appendChild( document.createTextNode( data2[ii] ) )
        
    }
}

window.addEventListener('load', generateTable );