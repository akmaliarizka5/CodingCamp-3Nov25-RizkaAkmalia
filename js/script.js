// Display welcome message
welcomeMessage();

// Function welcome message
function welcomeMessage() {
    let name = prompt("Please enter your name:");

    if (name != null && name.trim() != "") {
        document.getElementById("welcome-speech").innerText = "Hello " + name + ", Welcome to our website!";
    } else {
        alert("Please enter your name first!");
    }
}