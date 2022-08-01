// JavaScript source code

//Hamburger menu function

function hamburger() {
    var navMenu = document.getElementById("menu-links");
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
}
