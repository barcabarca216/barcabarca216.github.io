// JavaScript Document


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('t').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;

}
function myFunction() {
    alert("Thank you for subscribing.");
}

function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("E-mail must be filled out.");
		
        return false;
    }
}

