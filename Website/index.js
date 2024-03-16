
let username;
let age;
let daystravelingcount = 7;
let isValidAge = false;
const MinimumAge = 18;

document.getElementById("loginbutton").onclick = function() {

    username = document.getElementById("usernametext").value;
    username = username.replaceAll("r","l");
    document.getElementById("usernamelabel").innerHTML = "Salam " + username.slice(0,username.indexOf(" "));

    while (!isValidAge) { // If user is under 18, they cant enter the website
        let input = window.prompt("PLEASE VERIFY YOUR AGE");  
        if (input === null) { 
            console.log("User cancelled the prompt.");
            document.body.innerHTML = "<h1>You need to be 18+ to enter<br><br>This website includes spicy content. "+ 
            "<br> If you wish to travel to thailand, please consult with your parents. <br><br><br> Or just get some age kid</h1>";
            return; 
        }
        age = Number(input);
        if (isNaN(age)) { // Validates if its a number
            window.alert("Only use numbers.");
        } else {
            isValidAge = true;
        }
    }
    if (age < MinimumAge) { // Validates users age
        document.body.innerHTML = "<h1>You need to be 18+ to enter<br><br>This website includes spicy content. "+ 
        "<br> If you wish to travel to thailand, please consult with your parents. <br><br><br> Or just get some age kid</h1>";
    }
    document.getElementById("usernametext").value = ""; // Clear the input box after submittion
}

document.getElementById("increasebutton").onclick = function() { // Increase button
    document.getElementById("daystraveling").innerHTML = daystravelingcount +=1;
}
document.getElementById("decreasebutton").onclick = function() { // Decrease button
    if (daystravelingcount == 1) {
        window.alert("You cant travel for less than one day");
    } else {
        document.getElementById("daystraveling").innerHTML = daystravelingcount -=1;
    }
}
document.getElementById("resetbutton").onclick = function() { // Reset button
    document.getElementById("daystraveling").innerHTML = daystravelingcount = 7;
}

