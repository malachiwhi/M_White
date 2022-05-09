/*
Author: Malachi White 
File Name: scripts.js
Date: 04/03/2022
*/

//Hamburger menu function
function hamburger() {
	var answer = document.getElementByID("nav-links");
	var heading = document.getElementByID("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none" ){
		menu.style.display = "none" ;
		logo.style.display = "block";
	} else{
		menu.style.display ="block";
		logo.style.display = "none"; 
	}
}

function content() {
    var text = document.getElementById("new");
    text.textContent ="Thanks for looking! Fill out the form below"
    text.style.color = "#fff"
    text.style.fontSize = "2em"
}