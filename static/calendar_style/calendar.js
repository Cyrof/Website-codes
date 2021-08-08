//function to display book room page
function showBookIn(){
    var click = document.getElementsByClassName("book-room-container");
    click[0].style.display = "block";
}

//function to close book room page
function hideBookIn(){
    var click = document.getElementsByClassName("book-room-container");
    click[0].style.display = "none";
}

// set global count
var check = "none";

//function to show/hide calendar
function showCalendar(num){
    var click = document.getElementsByClassName("calendar");
    if (num === 0){
        click[0].style.display = "none";
        check = "none";
    }
    else{
        click[0].style.display = "block";
        check = "block";
    }
}

function displayCalendar(){
    var calendar = document.getElementsByClassName("calendar");
    if (check === "none"){
        calendar[0].style.display = "block";
        check = "block";
    }
    else{
        calendar[0].style.display = "none";
        check = "none";
    }
}

// event listener function to listen for click event
document.addEventListener("mouseup", function(event) {
    // get month container 
    var obj = document.querySelector(".month-container");

    // const array of month-container children classnames
    const check_name = ["days", "today", "prev", "nextDates", "next", "month-one", "month-two"];

    // get clicked target classname 
    var e = event.target.className;

    // get clicked target parent classname 
    var e_parent = event.target.parentNode.className;

    console.log(e);


    // if statement to check if check in is clicked 
    if (e === "check-in" || e_parent === "check-in"){
        displayCalendar();
    }
    // else if statement to check if check out is clicked 
    else if(e === "check-out" || e_parent === "check-out"){
        displayCalendar();
    }

    // check if click event is outside month-container 
    else if(!obj.className.includes(e) && check === "block" && !check_name.includes(e)){
        displayCalendar();
    }
});

