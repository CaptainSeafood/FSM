var pass = prompt("Enter the password to gain access.");
if (pass === "FSM!"){
    alert("Commencing redirect...")
    
    //And now the redirect...
    //cool - Riley
    setTimeout(2, window.location = "fsm.html");
}
else{
    alert("Sorry, wrong password. Initiating lockout...")
}