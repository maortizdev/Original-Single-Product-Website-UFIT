const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__links li a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}

// ---------- NAVBAR SCROLL COLOR ----------

var myNav = document.getElementById('header');
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        myNav.style.padding = "5px 10%"
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        myNav.style.padding = "15px 10%"
    }
};

// ---------- TOGGLE DARK MODE ----------

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


// ---------- LOGIN / SIGNUP -----------

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('login-container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
})
signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
})