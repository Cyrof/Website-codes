// create date obj
var date = new Date();

// var for total num of row and rol 
var row = 6;
var col = 7;

// get month index and year
var monthIndex = date.getMonth();
var year = date.getFullYear();

// get todays date
var today = date.getDate();

// months array
var months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

// function to delete tbody 
function deleteTbody(table) {
    console.log(table);
    // get the tbody tag from table
    var body = table.getElementsByTagName('tbody')[0];
    console.log(body);

    // delete table body 
    deleteTable.removeChild(body);
}

//function to generate second calendar
function secondCalendar(symbol) {
    // create new date obj
    var secondDate = new Date();
    secondDate.setDate(1);

    // get month for second calendar
    var currentMonth_2 = secondDate.getMonth();

    // get table from html 
    var table_2 = document.querySelector(".month-two");

    // if statement to check if symbol is next or prev 
    if (symbol === "next") {
        console.log(currentMonth_2);
        secondDate.setMonth(currentMonth_2 + 1);
        deleteTbody(table_2);
    }
    else if (symbol === "prev") {
        secondDate.setMonth(currentMonth_2 - 1);
        deleteTbody(table_2);
    }
    else {
        secondDate.setMonth(monthIndex + 1);
    }

    // get location to put month 
    var monthName_2 = document.querySelector("#month-two");

    // get first day of month index
    // also used for number of prev months dates to add into calendar 
    var firstDayIndex_2 = secondDate.getDay();

    // get last day of prev month 
    var lastDayOfPrev_2 = new Date(year, currentMonth_2, 0).getDate();

    // get last day of current month 
    // also number of days in the current month 
    var lastDayOfCurrent_2 = new Date(year, currentMonth_2 + 1, 0).getDate();

    // call create calendar function to create calendar 
    createCalendar(lastDayOfCurrent_2, firstDayIndex_2, table_2, lastDayOfPrev_2, currentMonth_2, monthName_2)

}

// function to generate first calendar
function firstCalendar(symbol) {
    // create new date obj
    var firstDate = new Date();
    firstDate.setDate(1);

    // get month for first calendar 
    var currentMonth = firstDate.getMonth();

    // get table from html
    var table_1 = document.querySelector(".month-one");

    // if statement to check if symbol is next or prev 
    if(symbol === "next"){
        firstDate.setMonth(currentMonth + 1);
    }
    else if(symbol === "prev"){
        firstDate.setMonth(currentMonth - 1);
    }
    else{
        firstDate.setMonth(monthIndex)
    }

    // get location to put month 
    var monthName = document.querySelector("#month-one");
    // get first day of month index 
    // also used for number of prev months date to add into calendar
    var firstDayIndex = firstDate.getDay();

    // get last day of prev month
    var lastDayOfPrev = new Date(year, currentMonth, 0).getDate();

    // get last day of current month 
    // also number of days in the current month 
    var lastDayOfCurrent = new Date(year, currentMonth + 1, 0).getDate();

    // call create Calendar function to create calendar
    createCalendar(lastDayOfCurrent, firstDayIndex, table_1, lastDayOfPrev, currentMonth, monthName);
}


// function create prev month days
function createPrevDate(tr, firstDay, lastDay) {
    if (firstDay === 0) {
        var first = 6;
    }
    else {
        var first = firstDay - 1;
    }
    //for loop to loop through num of prev dates 
    for (i = first; i > 0; i--) {
        // create th element and give it class and id
        var th = document.createElement('th');
        th.setAttribute("class", "over");

        var prevMonthDate = lastDay - i + 1;
        var text = document.createTextNode(prevMonthDate.toString());
        th.appendChild(text);
        tr.appendChild(th);
    }
}



// function to dynamically create calendar
var createCalendar = (lastDayCurrent, firstDay, table, lastDayPrev, month, monthName) => {
    var counter = 1;
    var nextDates = 1;

    // set month on calendar 
    monthName.innerHTML = months[month];

    // create tbody and append to table
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    // nested for loop to dynamically generate calendar 
    // outer for loop to loop through num of row
    for (i = 0; i < row; i++) {
        tr = document.createElement('tr');
        // inner for loop to loop through num of col
        for (j = 0; j < col; j++) {
            // create th element
            var th = document.createElement('th');

            if (i === 0 && j === 0 && firstDay !== 1) {
                // call createPrevDate
                createPrevDate(tr, firstDay, lastDayPrev);
                if (firstDay === 0) {
                    var first = 6;
                }
                else {
                    var first = firstDay - 1;
                }
                // set to num of prev month day to input  
                j = first - 1;
            }
            else if (counter <= lastDayCurrent) {
                // if statement to find past date
                if (counter < today && month === date.getMonth()) {
                    th.setAttribute("class", "over");
                }
                // else if to find today
                else if (counter == today && month === date.getMonth()) {
                    th.setAttribute("class", "today");
                }
                else {
                    th.setAttribute("class", "days");
                }

                // create text element 
                var text = document.createTextNode(counter.toString());

                // append text to th and append th to tr
                th.appendChild(text);
                tr.appendChild(th);
                counter++;
            }
            else {
                //set th attribute
                th.setAttribute("class", "nextDates");

                //create text element 
                var text = document.createTextNode(nextDates.toString());

                //append text to th and append th to tr 
                th.appendChild(text);
                tr.appendChild(th);
                nextDates++;
            }
        }
        // append tr to tbody
        tbody.appendChild(tr);
    }
    // append tbody to table
    table.appendChild(tbody);
}

// function to determine direction of arrow 
// event.target.classname
// take class name n determine whether month should +1 or -1



// function to determine direction
function direction(dir) {
    // if statement to check for direction
    if (dir === "next") {
        firstCalendar("next");
        secondCalendar("next");
    }
    else if (dir === "prev") {
        firstCalendar("prev");
        secondCalendar("prev");
    }
}

// call function to create both calendar
firstCalendar("none");
secondCalendar("none");

var deleteTable = document.querySelector(".month-two");


