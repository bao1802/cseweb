const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() { 
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}


