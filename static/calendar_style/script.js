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

// function to generate first calendar
function firstCalendar() {
    //create new date obj
    var firstDate = new Date();

    // create second date obj
    var date_2 = new Date();
    date_2.setDate(1);

    //get table from html
    var table_1 = document.querySelector(".month-one");

    // get month for first calendar 
    var currentMonth = firstDate.getMonth();

    // get first day of month index 
    // also used for number of prev months date to add into calendar
    var firstDayIndex = date_2.getDay();

    // get last day of prev month
    var lastDayOfPrev = new Date(year, monthIndex, 0).getDate();

    // get last day of current month 
    // also number of days in the current month 
    var lastDayOfCurrent = new Date(year, monthIndex + 1, 0).getDate();

    // call create Calendar function to create calendar
    createCalendar(lastDayOfCurrent, firstDayIndex, table_1, lastDayOfPrev, currentMonth);
}


// function create prev month days
function createPrevDate(tr, firstDay, lastDay) {
    if (firstDay === 0){
        var first = 6;
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
var createCalendar = (lastDayCurrent, firstDay, table, lastDayPrev, month) => {
    var counter = 1;
    var nextDates = 1;

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
                if (firstDay === 0){
                    var first = 6;
                }
                // set to num of prev month day to input  
                j = first - 1;
            }
            else if (counter <= lastDayCurrent) {
                // if statement to find past date
                if (counter < today && month === date.getMonth()){
                    th.setAttribute("class", "over");
                }
                // else if to find today
                else if(counter == today && month === date.getMonth()){
                    th.setAttribute("class", "today");
                }
                else{
                    th.setAttribute("class", "days");
                }

                // create text element 
                var text = document.createTextNode(counter.toString());

                // append text to th and append th to tr
                th.appendChild(text);
                tr.appendChild(th);
                counter++;
            }
            else{
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

firstCalendar();