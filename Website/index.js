let username;
let firstName;
let age;
let daystravelingcount = 7;
let isValidAge = false;
const MinimumAge = 18;

document.getElementById("loginbutton").onclick = function() {

    username = document.getElementById("usernametext").value;
    firstName = username.slice(0, username.indexOf(" ")); // Assuming the first name is before a space
    document.getElementById("welcometitle").innerHTML = "Welcome to ThaiTravelPlanner " +  firstName.charAt(0).toUpperCase() + firstName.slice(1);

    do {
        let input = window.prompt("PLEASE VERIFY YOUR AGE");
    
        if (input === null) continue; 
        age = Number(input);
    
        if (!isNaN(age) && age >= MinimumAge) { // Check if the input is a number and at least the minimum age
            isValidAge = true; 
        } else if (!isNaN(age)) {
            document.body.innerHTML = "<h1>You need to be 18+ to enter<br><br>This website includes spicy content. " +
                "<br> If you wish to travel to Thailand, please consult with your parents. <br><br><br> Or just get some age, kid</h1>";
            return;
        } else window.alert("Only use numbers.");
    } while (!isValidAge);
    
    document.getElementById("threebuttonsdiv").style.display = "block"; // Show the buttons after successful age verification
    document.getElementById("usernamediv").style.display = "none"; // Hide the username field after successful age verification
}

document.getElementById("increasebutton").onclick = function() {
    document.getElementById("daystraveling").innerHTML = daystravelingcount +=1;
}
document.getElementById("decreasebutton").onclick = function() {
    if (daystravelingcount == 1) {
        window.alert("You cant travel for less than one day");
    } else document.getElementById("daystraveling").innerHTML = daystravelingcount -=1;
}
document.getElementById("resetbutton").onclick = function() {
    document.getElementById("daystraveling").innerHTML = daystravelingcount = 7;
}