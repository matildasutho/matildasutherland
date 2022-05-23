//audio toggle
var webPageAudio = document.getElementById("webpage_audio");
const audioOn = document.getElementById("audio-on");
const audioOff = document.getElementById("audio-off");


function playAudio() { 
  webPageAudio.play();
  audioOn.style.textDecoration = "underline";
  audioOff.style.textDecoration = "none";
}; 

function pauseAudio() { 
  webPageAudio.pause();
  audioOn.style.textDecoration = "none";
  audioOff.style.textDecoration = "underline";
}; 



//this is the script for the header

var letters = [ // make variable, use global variable to call the string and replace indiviual timed-out functions for each letter
      "a",
      "b", 
      "c",  
      "d", 
      "e", 
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l", 
      "m",  
      "n", 
      "o", 
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v", 
      "w",  
      "q", 
      "y", 
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5", 
      "6",  
      "7", 
      "8", 
      "9",
      "!",
      "@",
      "#",
      "$"
    ];
    
function one() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("one").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 2.2e3); 
};
setTimeout(one, 100000);

function two() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("two").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.6e3); 
};
setTimeout(two, 6000);

function three() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("three").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 1.5e3); 
};
setTimeout(three, 20000);

function four() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("four").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 8e3); 
};
setTimeout(four, 45000);

function five() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("five").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 1.3e3); 
};
setTimeout(five, 33000);

function six() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("six").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 6.7e3); 
};
setTimeout(six, 70000);

function seven() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("seven").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 2.4e3); 
};
setTimeout(seven, 100000);

function eight() {
    const getRandomText = () => letters[Math.floor(Math.random() * letters.length)];
    const changeText = () => document.getElementById("eight").innerHTML = getRandomText();
  
    changeText();
    setInterval(changeText, 3.1e3); 
};
setTimeout(eight, 130000);


var objects = [ // make variable, use global variables to call the string and replace indiviual timed-out functions
"boots",
"catapult",
"nails",
"wheels",
"scaffold",
"block",
"chain mail",
"envelope",
"yarn",
"pelt",
"tape",
"gravel",
"slate",
"pile",
"car",
"tail",
"bumper",
"house",
"horse hair",
"boots",
"wax",
"whells",
"drive",
"remnant",
"basket",
"vessel",
"market",
"plastic",
"USB",
"helix"
    ];
    
function tailDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("tail").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(tailDecay, 17000);


function carDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("car").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7e3); 
};
setTimeout(carDecay, 11000);

function pileDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("pile").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 8e3); 
};
setTimeout(pileDecay, 15000);

function bumperDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("bumper").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 4e3); 
};
setTimeout(bumperDecay, 26000);

function houseDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("house").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(houseDecay, 33000);

function horsehairDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("horsehair").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(horsehairDecay, 48000);

function bootsDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("boots").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(bootsDecay, 61000);

function waxDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("wax").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(waxDecay, 79000);

function wheelsDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("wheels").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(wheelsDecay, 88000);

function driveDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("drive").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(driveDecay, 9200);

function hillsDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("hills").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(hillsDecay, 100000);

function dirtDecay() {
    const getRandomText = () => objects[Math.floor(Math.random() * objects.length)];
    const changeText = () => document.getElementById("dirt").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(dirtDecay, 122000);

// begin positon word list and functions
var positions = [
    "behind",
    "up",
    "sunken",
    "reverse",
    "beneath",
    "out of sight",
    "out of mind",
    "in",
    "left",
    "falling",
    "stuck",
    "glued"
];
function leftDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("left").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(leftDecay, 7000);

function behindDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("behind").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(behindDecay, 15000);

function upDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("up").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(upDecay, 28000);

function stuckDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("stuck").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(stuckDecay, 36000);

function behindtwoDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("behindtwo").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(behindtwoDecay, 49000);

function inDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("in").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(inDecay, 79000);

function farDecay() {
    const getRandomText = () => positions[Math.floor(Math.random() * positions.length)];
    const changeText = () => document.getElementById("far").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 5e3); 
};
setTimeout(farDecay, 111000);

var descriptions = [
    "fluid",
    "burnt",
    "dug out",
    "covered",
    "small steps",
    "far",
    "ten feet",
    "103 BCE",
    "raw",
    "record",
    "soft",
    "hard",
    "no"
];

function fartwoDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("fartwo").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(fartwoDecay, 13000);

function tenDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("ten").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(tenDecay, 29000);

function rawDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("raw").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(rawDecay, 41000);

function recordDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("record").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(recordDecay, 43000);

function softDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("soft").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(softDecay, 52000);

function hardDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("hard").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(hardDecay, 63000);

function coveredDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("covered").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(coveredDecay, 84000);

function behindthreeDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("behindthree").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(behindthreeDecay, 96000);

function noDecay() {
    const getRandomText = () => descriptions[Math.floor(Math.random() * descriptions.length)];
    const changeText = () => document.getElementById("no").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(noDecay, 103000);

var actions = [
    "swept",
    "roll",
    "fallen",
    "move",
    "drive",
    "be",
    "chase",
    "reach",
    "made",
    "drive",
    "SOS",
    "caving",
    "dug",
    "frozen",
    "call",
    "upgrade",
    "sewn"
];
function beDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("be").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(beDecay, 11000);

function chaseDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("chase").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(chaseDecay, 29000);

function reachDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("reach").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(reachDecay, 37000);

function madeDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("made").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(madeDecay, 49000);

function drivetwoDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("drivetwo").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(drivetwoDecay, 56000);

function sewnDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("sewn").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(sewnDecay, 64000);

function drivethreeDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("drivethree").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(drivethreeDecay, 71000);

function sosDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("sos").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(sosDecay, 78000);

function cavingDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("caving").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(cavingDecay, 87000);

function callDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("call").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(callDecay, 96000);

function upgradeDecay() {
    const getRandomText = () => actions[Math.floor(Math.random() * actions.length)];
    const changeText = () => document.getElementById("upgrade").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 7.1e3); 
};
setTimeout(upgradeDecay, 130000);

var persons = [
    "I",
    "You",
    "They",
    "We",
    "Us"
]
function ioneDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("ione").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(ioneDecay, 50505);

function itwoDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("itwo").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(itwoDecay, 60505);

function ithreeDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("ithree").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(ithreeDecay, 70505);


function ifourDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("ifour").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(ifourDecay, 80505);


function ifiveDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("ifive").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(ifiveDecay, 90505);


function isixDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("isix").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(isixDecay, 100505);

function itwoDecay() {
    const getRandomText = () => persons[Math.floor(Math.random() * persons.length)];
    const changeText = () => document.getElementById("itwo").innerHTML = getRandomText();
  
    changeText(); 
    setInterval(changeText, 10e3); 
};
setTimeout(itwoDecay, 110505);