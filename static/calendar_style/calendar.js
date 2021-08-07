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
    }
    else{
        click[0].style.display = "block";
        check = "block";
    }
}

// event listener function to listen for click outside calendar
document.addEventListener("mouseup", function(event) {
    var obj = document.getElementsByClassName("calendar");
    var calendar = document.getElementsByClassName("calendar");
    if(!obj[0].className.includes(event.target.className) && check === "block"){
        calendar[0].style.display = "none";
        check = "none";
    } 
});

