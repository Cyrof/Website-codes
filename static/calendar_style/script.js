// create base date obj 
var date = new Date();

// create date for calendar and set date to 1
var calendarDate = new Date();
calendarDate.setDate(1);

// get today day index
var todayIndex = new Date().getDay();

// var for total num of row and rol 
var row = 6;
var col = 7;

// get month index and year
var monthIndex = date.getMonth();
var year = date.getFullYear();

// get todays date
var today = date.getDate();

// get last day 
var lastDay = new Date(year, monthIndex, 0).getDate();

// months array
var months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

// short form months array
var shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// weekdays array
var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// function to delete tbody 
function deleteTbody() {

    // get tables
    var firstTable = document.querySelector(".month-one");
    var secondTable = document.querySelector(".month-two");

    // get the tbody tag from table
    var firstBody = firstTable.getElementsByTagName('tbody')[0];
    var secondBody = secondTable.getElementsByTagName('tbody')[0];

    // delete table body 
    firstTable.removeChild(firstBody);
    secondTable.removeChild(secondBody);
}

//function to generate second calendar
function secondCalendar() {

    // get table from html 
    var table_2 = document.querySelector(".month-two");

    // if statement to check if month index will be 12
    if ((calendarDate.getMonth() + 1) === 12) {
        // create new obj for next year 
        var newDate = new Date((calendarDate.getFullYear() + 1), 0, 1);
        var newYear = newDate.getFullYear();

        // get current month index
        var currentMonth_2 = newDate.getMonth();

        // get location to put month 
        var monthName_2 = document.querySelector("#month-two");

        // get first day of month index
        // also used for number of prev months dates to add into calendar 
        var firstDayIndex_2 = newDate.getDay();

        // get last day of prev month 
        var lastDayOfPrev_2 = new Date(year, newYear, 0).getDate();

        // get last day of current month 
        // also number of days in the current month 
        var lastDayOfCurrent_2 = new Date(year, newYear + 1, 0).getDate();

        // call create calendar function to create calendar 
        createCalendar(lastDayOfCurrent_2, firstDayIndex_2, table_2, lastDayOfPrev_2, currentMonth_2, monthName_2, newDate)
    }
    else {

        // get current month index
        var currentMonth_2 = calendarDate.getMonth() + 1;

        // get location to put month 
        var monthName_2 = document.querySelector("#month-two");

        // get first day of month index
        // also used for number of prev months dates to add into calendar 
        var firstDayIndex_2 = calendarDate.getDay();

        // get last day of prev month 
        var lastDayOfPrev_2 = new Date(year, currentMonth_2, 0).getDate();

        // get last day of current month 
        // also number of days in the current month 
        var lastDayOfCurrent_2 = new Date(year, currentMonth_2 + 1, 0).getDate();

        // call create calendar function to create calendar 
        createCalendar(lastDayOfCurrent_2, firstDayIndex_2, table_2, lastDayOfPrev_2, currentMonth_2, monthName_2, calendarDate)
    }
}

// function to generate first calendar
function firstCalendar() {

    // get table from html 
    var table_1 = document.querySelector(".month-one");

    // get month for first calendar 
    var currentMonth = calendarDate.getMonth();

    // get location to put month 
    var monthName = document.querySelector("#month-one");
    // get first day of month index 
    // also used for number of prev months date to add into calendar
    var firstDayIndex = calendarDate.getDay();

    // get last day of prev month
    var lastDayOfPrev = new Date(year, currentMonth, 0).getDate();

    // get last day of current month 
    // also number of days in the current month 
    var lastDayOfCurrent = new Date(year, currentMonth + 1, 0).getDate();

    // call create Calendar function to create calendar
    createCalendar(lastDayOfCurrent, firstDayIndex, table_1, lastDayOfPrev, currentMonth, monthName, calendarDate);
}


// function create prev month days
function createPrevDate(tr, firstDay, lastDay, month) {
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
        if(month === monthIndex){
            th.setAttribute("class", "over");
        }
        else{
            th.setAttribute("class", "prevDates");
        }

        var prevMonthDate = lastDay - i + 1;
        var text = document.createTextNode(prevMonthDate.toString());
        th.appendChild(text);
        tr.appendChild(th);
    }
}



// function to dynamically create calendar
var createCalendar = (lastDayCurrent, firstDay, table, lastDayPrev, month, monthName, dateObj) => {
    var counter = 1;
    var nextDates = 1;

    // set month on calendar 
    monthName.innerHTML = months[month] + " " + dateObj.getFullYear();

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
                createPrevDate(tr, firstDay, lastDayPrev, month);
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
                    th.setAttribute("class", "days today");
                    th.setAttribute("id", "days_" + counter);
                }
                else {
                    th.setAttribute("class", "days");
                    th.setAttribute("id", "days_" + counter);
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
                th.setAttribute("id", "next_" + nextDates);

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


// function to determine direction
function direction(dir) {

    // if statement to check for direction
    if (dir === "next") {
        calendarDate.setMonth(calendarDate.getMonth() + 1);
        deleteTbody();
        firstCalendar();
        secondCalendar();
    }
    else if (dir === "prev") {
        calendarDate.setMonth(calendarDate.getMonth() - 1);
        deleteTbody();
        firstCalendar();
        secondCalendar();
    }
}

// function to set text 
function text(){
    // call check in day-week text 
    var weekday_1 = document.querySelector(".day-week_1");
    weekday_1.innerHTML = weekdays[todayIndex];

    // call check out day-week text
    var weekday_2 = document.querySelector(".day-week_2");

    // if else to check if day index +1 is 7 then set it to 0
    if((todayIndex + 1) === 7){
        weekday_2.innerHTML = weekdays[0];
    }
    else{
        weekday_2.innerHTML = weekdays[todayIndex + 1];
    }

    // call check in day
    var day_1 = document.querySelector(".day_1");
    day_1.innerHTML = today;

    // call check out day 
    var day_2 = document.querySelector(".day_2");

    // if else to check if today date + 1 is not over last day of the month 
    if((today + 1) > lastDay){
        day_2.innerHTML = lastDay;
    }
    else{
        day_2.innerHTML = today + 1;
    }

    // call check in month 
    var month_1 = document.querySelector(".month_1");
    month_1.innerHTML = shortMonths[monthIndex];

    // call check out month 
    var month_2 = document.querySelector(".month_2");
    month_2.innerHTML = shortMonths[monthIndex];

    // call check in year
    var year_1 = document.querySelector(".year_1");
    year_1.innerHTML = year;

    // call check out year 
    var year_2 = document.querySelector(".year_2");
    year_2.innerHTML = year;

}

// call text
text();

// call function to create both calendar
firstCalendar("none");
secondCalendar("none");