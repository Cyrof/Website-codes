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
    const check_name = ["days", "today", "prev", "nextDates", "next", "month-one", "month-two", "days today", "over", "over prevDates"];

    // get clicked target classname 
    var e = event.target.className;

    // get clicked target parent classname 
    var e_parent = event.target.parentNode.className;

    // get clicked target id 
    var e_id = event.target.id;

    // call select 
    select(e_id);

    // call direction for arrow 
    direction(e);

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

// initialise first clicked date id
var firstId = "";

// initialise second clicked date id 
var secondId = "";

// function to select dates
function select(e){
    if(e.includes("days") || e.includes("nextDates") || e.includes("prevDates")){
        // if else to check if first clicked date and second clicked date is not none 
        if(firstId === ""){
            firstId = e;
        }
        else if(secondId === ""){
            secondId = e;
        }
        // get element from id and give it click class
        var clicked = document.getElementById(e);
        clicked.classList.add('click');
    }
    // if to check if firstid and secid not none 
    if(firstId !== "" && secondId !== ""){
        // get first num and second num from element textcontent
        var firstNum = parseInt(document.getElementById(firstId).textContent);
        var secNum = parseInt(document.getElementById(secondId).textContent);

        // for loop to loop through number to show selected
        for(i = firstNum + 1; i < secNum; i++){
            var temp_id = "days_" + i.toString();
            document.getElementById(temp_id).classList.add('selected');
        }   

        // set check in check out day
        document.querySelector(".day_1").innerHTML = firstNum;
        document.querySelector(".day_2").innerHTML = secNum;
    }
    
}