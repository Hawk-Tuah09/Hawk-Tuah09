// Get the popups by their IDs
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");

// Function to open the first popup
function openPopup() {
    num1.classList.add("open-num1");
}

// Function to open the second popup (hat) when OK is clicked
function openHat() {
    num1.classList.remove("open-num1"); // Close the first popup
    num2.classList.add("open-num2");       // Open the second popup
}

// Function to close the second popup (hat)
function openHat1() {
    num2.classList.remove("open-num2");   
    num4.classList.add("open-num4");    // Close the second popup
}

function openHat2() {
    num2.classList.remove("open-num2");
    num3.classList.add("open-num3");   
}

function openHat3() {
    num3.classList.remove("open-num3");  
}

function openHat4() {
    num4.classList.remove("open-num4");
}
