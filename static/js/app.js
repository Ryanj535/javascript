// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');

tableData.forEach(function(ufoData) {
  let row = tbody.append('tr');
  Object.entries(ufoData).forEach(function([key, value]) {
    let cell = row.append('td');
    cell.text(value);
  });
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {
  d3.event.preventDefault();
  tbody.html("");
  var inputDate = d3.select("#datetime");
  var inputValue = inputDate.property("value");
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  filteredData.forEach(function(newData) {
    let row = tbody.append('tr');
    Object.entries(newData).forEach(function([key, value]) {
      let cell = row.append('td');
      cell.text(value);
    });
  });
});
