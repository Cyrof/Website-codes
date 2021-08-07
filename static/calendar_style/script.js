// create date obj
var date = new Date();

// var for total num of row and rol 
var row = 6;
var col = 7;

// get table from html
var table_1 = document.querySelector(".month-one");
console.log(table_1);

var tbody = document.createElement('tbody');

// nested for loop to dynamically generate calendar 
for(i = 0; i < row; i++){
    tr = document.createElement('tr');
    for(j = 0; j < col; j++){
        th = document.createElement('th');
        th.className = "days";
        text = document.createTextNode('0');
        th.appendChild(text);
        tr.appendChild(th);
    }
    tbody.appendChild(tr);
}

table_1.appendChild(tbody);
