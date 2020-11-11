var display_data = data;

// writes a message to the console
console.log(display_data);

// clear previous return

const newButton = document.createElement("button");
const panelBody = document.getElementsByClassName("panel-body")[0];
newButton.id = "clear-btn";
newButton.className = "btn btn-default";
newButton.appendChild(document.createTextNode("Clear"));
panelBody.appendChild(newButton);

console.log(newButton);


// select the tbody in html code
var tbody = d3.select("tbody");
// select the buttons from html code
var filter_button = d3.select("#filter-btn");
var clear_button = d3.select("#clear-btn");
// Select the input element
var filter_bar_0 = d3.select("#datetime");


// data display function

table(display_data);

function table() {
    data.forEach((i) => {
        var tr = tbody.append("tr");
        for (key in i) {
            tr.append("td").text(i[key]);
        }
    });
};


// Create html events, js reactions

filter_button.on("click", select_data);
clear_button.on("click", clear_all);

function select_data() {

    // Get the value of the input element
    var input0 = filter_bar_0.property("value");
    console.log(input0)

    var filtered = display_data;

    // Define conditions for filtered

    if (input0) {
        filtered = filtered.filter(data => data.datetime === input0);
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

    // Clear the input element
    document.getElementById("datetime").value = "";

    // clear the table
    tbody.html("");

    // display all table elements
    table(display_data);
}