// create date obj
var date = new Date();

// var for total num of row and rol 
var row = 6;
var col = 7;

// get table from html
var table_1 = document.querySelector(".month-one");

//create table body element
var tbody = document.createElement('tbody');

// get month index and year
var monthIndex = date.getMonth();
var year = date.getFullYear();

// get first day of month index 
// also used for number of prev months date to add into calendar
var firstDayOfMonthIndex = date.getDay();

// get last day of prev month
var lastDayOfPrevMonth = new Date(year, monthIndex, 0).getDate();

// get last day of current month 
// also number of days in the current month
var lastDayofCurrentMonth = new Date(year, monthIndex + 1, 0).getDate();


// months array
var months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];


// function create prev month days
function createPrevDate(tr) {
    //for loop to loop through num of prev dates 
    for (i = firstDayOfMonthIndex; i > 0; i--) {
        var th = document.createElement('th');
        var prevMonthDate = lastDayOfPrevMonth - i + 1;
        var text = document.createTextNode(prevMonthDate.toString());
        th.appendChild(text);
        tr.appendChild(th);
    }
}

var counter = 1;

// function to dynamically create calendar
var createCalendar = () => {
    // nested for loop to dynamically generate calendar 
    // outer for loop to loop through num of row
    for (i = 0; i < row; i++) {
        tr = document.createElement('tr');
        // inner for loop to loop through num of col
        for (j = 0; j < col; j++) {
            if (i === 0 && j === 0 && firstDayOfMonthIndex > 0) {
                createPrevDate(tr);
                j = 5;
            }
            else if(counter <= lastDayofCurrentMonth){
                var th = document.createElement('th');
                th.className = "days";
                var text = document.createTextNode(counter.toString());
                th.appendChild(text);
                tr.appendChild(th);
                counter++;
            }
        }
        tbody.appendChild(tr);
    }
    table_1.appendChild(tbody);
}

createCalendar();