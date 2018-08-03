'use strict'

//create empty div with class "content"
const newElement = document.createElement('div'),
newContent = document.createTextNode("");
newElement.classList.add("content");
newElement.appendChild(newContent);

//add div to body
const htmlBody = document.getElementsByTagName('body')[0];
htmlBody.appendChild(newElement);

const scaling = 3;

//create canvas element with id "canvas"
const canvas = document.createElement('canvas');
canvas.id = "canvas";
canvas.width = 256 * scaling;
canvas.height = 240 * scaling;

//add canvas to div
newElement.appendChild(canvas);

// const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
c.scale(scaling,scaling);