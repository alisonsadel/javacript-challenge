// from data.js
var tableData = data;

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page,
// and then adds new rows of data for each UFO sighting.

var tbody = d3.select("tbody");
//console.log(tbody);


// Required: Columns for `date/time`, `city`, `state`, `country`, `shape`, and `comment`
function buildTable(data) {
    // Ensure any existing input is cleared before a new query (date) is put into the filter
    tbody.html("");
    // Create Loop to iterate over the values
    data.forEach((datarow) => {
        // Assign to the tbody
        var row = tbody.append("tr");
        // Iterate over the values and append to td
        Object.values(datarow).forEach((value) => {
            var cell =  row.append("td").text(value);
        });
    });

    }

    function handleClick() {
        console.log("A button was clicked");
        var date = d3.select("#datetime").property("value");
        var filterData = tableData;
        
        if (date) {
            filterData = filterData.filter(row => row.datetime === date);
        }

        // Rebuild the table
        buildTable(filterData);
    }

    d3.selectAll("#filter-btn").on("click", handleClick); 

// Call the function to load the html
buildTable(data); 

