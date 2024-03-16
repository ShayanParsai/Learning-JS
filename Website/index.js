
let timesresetted = 0;
let username;
let age;
let daystravelingcount = 7;
let isValidAge = false;
const MinimumAge = 18;

document.getElementById("loginbutton").onclick = function() {
    username=document.getElementById("usernametext").value;
    console.log(username);
    document.getElementById("usernamelabel").innerHTML ="Welcome "+username;
    while (!isValidAge) { // If user is under 18, they cant enter the website
        let input = window.prompt("PLEASE VERIFY YOUR AGE");  
        if (input === null) { 
            console.log("User cancelled the prompt.");
            return; 
        }
        age = Number(input);
        if (isNaN(age)) { // Validates if its a number
            window.alert("Only use numbers.");
        } else {
            isValidAge = true;
        }
    }
    console.log(age);
    if (age < MinimumAge) { // Validates users age
        document.body.innerHTML = "<h1>You need to be 18+ to enter<br><br>This website includes spicy content. "+ 
        "<br> If you wish to travel to thailand, please consult with your parents. <br><br><br> Or just get some age kid</h1>";
    }
}

document.getElementById("increasebutton").onclick = function() {
    document.getElementById("daystraveling").innerHTML = daystravelingcount +=1;
    if (daystravelingcount == 15) {
        window.alert("Yeye, Cash Finns min broder");
    }
}
document.getElementById("decreasebutton").onclick = function() {
    document.getElementById("daystraveling").innerHTML = daystravelingcount -=1;
    if (daystravelingcount == 3) {
        window.alert("De är para knas eller?");
    }
}
document.getElementById("resetbutton").onclick = function() {
    document.getElementById("daystraveling").innerHTML = daystravelingcount = 7;
    timesresetted +=1;
    if (timesresetted == 5) {
        window.alert("Lak Bestämm dig, antigen res eller res inte.");
    }
}

