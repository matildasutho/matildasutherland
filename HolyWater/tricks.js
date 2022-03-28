//VIDEO audio playstate:
var vid = document.getElementById("Portal");

function enableMute() { 
  vid.muted = true;
} 

function disableMute() { 
  vid.muted = false;
} 

function checkMute() { 
  alert(vid.muted);
} 

//SHELL animation functions:
function shell1Hover() {
    document.getElementById("shell1").style.backgroundImage = "url(img/shell1.jpeg)";
}
function shell1HoverExit() {
    document.getElementById("shell1").style.backgroundImage = "none";
}

function shell2Hover() {
    document.getElementById("shell2").style.backgroundImage = "url(img/shell2.jpeg)";
}
function shell2HoverExit() {
    document.getElementById("shell2").style.backgroundImage = "none";
}


function shell3Hover() {
    document.getElementById("shell3").style.backgroundImage = "url(img/shell3.jpeg)";
}
function shell3HoverExit() {
    document.getElementById("shell3").style.backgroundImage = "none";
}

function shell4Hover() {
    document.getElementById("shell4").style.backgroundImage = "url(img/shell4.jpeg)";
}
function shell4HoverExit() {
    document.getElementById("shell4").style.backgroundImage = "none";
}

function shell5Hover() {
    document.getElementById("shell5").style.backgroundImage = "url(img/shell5.jpeg)";
}
function shell5HoverExit() {
    document.getElementById("shell5").style.backgroundImage = "none";
}

function shell6Hover() {
    document.getElementById("shell6").style.backgroundImage = "url(img/shell6.jpeg)";
}
function shell6HoverExit() {
    document.getElementById("shell6").style.backgroundImage = "none";
}

function shell7Hover() {
    document.getElementById("shell7").style.backgroundImage = "url(img/shell7.jpeg)";
}
function shell7HoverExit() {
    document.getElementById("shell7").style.backgroundImage = "none";
}