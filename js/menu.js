'use strict'

var menu = document.querySelector("ul");
var actionClose = document.querySelector(".close");
var actionOpen = document.querySelector(".open");

var close = document.querySelector(".close");

close.addEventListener("click", function(){
    menu.classList.add("menu-out");
    actionClose.classList.add("actionClose");
    actionOpen.classList.add("actionOpen");
});

actionOpen.addEventListener("click", function(){
    menu.classList.remove("menu-out");
    actionClose.classList.remove("actionClose");
    actionOpen.classList.remove("actionOpen");
    actionClose.classList.add("actionClose2");
    actionOpen.classList.add("actionOpen2");
});






