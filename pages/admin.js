var admin = false;
//Maybe add an onclick here?
var logInButton = document.getElementById("login");
var debugButton = document.getElementById("debug");
logInButton.addEventListener("click", password, false);
debugButton.addEventListener("click", showVars, false);
function password(){
    var pass = prompt("Enter the admin password.");
    if (pass === "adminpass"){
        admin = true;
        var user = prompt("Please enter your username.");
        alert("Welcome, "+ user);
        window.localStorage.add("admin", admin);
    }
}
function showVars(){
    alert("The value of logInButton is " + logInButton);
}