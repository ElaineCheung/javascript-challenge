var display_data = data;

console.log(display_data);

// clear data

const newButton = document.createElement("button");
const panelBody = document.getElementsByClassName("panel-body")[0];
newButton.id = "clear-btn";
newButton.className = "btn btn-default";
newButton.appendChild(document.createTextNode("Clear"));
panelBody.appendChild(newButton);

console.log(newButton);



var tbody = d3.select("tbody");
var filter_button = d3.select("#filter-btn");
var clear_button = d3.select("#clear-btn");
var filter_bar = d3.select("#datetime");



table(display_data);

function table() {
    data.forEach((i) => {
        var tr = tbody.append("tr");
        for (key in i) {
            tr.append("td").text(i[key]);
        }
    });
};


// Create html events for filter and clear buttons

filter_button.on("click", select_data);
clear_button.on("click", clear_all);

function select_data() {

    // Get the value of the input element
    var input = filter_bar.property("value");
    console.log(input)

    var filtered = display_data;


    if (input) {
        filtered = filtered.filter(data => data.datetime === input);
    }

    if (filtered != display_data) {
        tbody.selectAll('tr').remove();
        tbody.selectAll('td').remove();

        filtered.forEach((search) => {
            var new_tr = tbody.append("tr");
            for (key in search) {
                new_tr.append("td").text(search[key]);
            }
        })
    } else {
        // display all table elements
        table(display_data);
    }
};


// clear_all button function 

function clear_all() {


    document.getElementById("datetime").value = "";

    // clear the table
    tbody.html("");

    // display all table elements
    table(display_data);
}