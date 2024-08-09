let sqNum;
let pixel;
const pad = document.querySelector(".container");
const reset = document.querySelector("#reset");
const setSize = document.querySelector("#setSize");
const blk = document.querySelector("#blk");
const blu = document.querySelector("#blu");
const rd = document.querySelector("#red");

function getSqNum () {
    sqNum = parseInt(prompt("Set size! (Input a number from 2 to 100)"));
    console.log("Number of squares:", sqNum);
}

function makeSq () {
    pixel = document.createElement("div");
    pixel.classList.add("pixel");
    let pixelSize = 100/sqNum;
    pixel.style.flex = `1 0 ${pixelSize}%`;
    pixel.style.height = `${pixelSize}%`;
    pad.appendChild(pixel);
    console.log("Size of pixel:", pixelSize);
}

function populate () {
    getSqNum();
    pad.innerHTML="";
    for (let i=0; i < (sqNum**2); i++) {
        makeSq();
    };
}

function rst () {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach(function(pixel) {
            clearColorClasses(pixel);
            pixel.classList.add("activeWht");
    });
}


function clearColorClasses(pixel) {
    pixel.classList.remove("activeBlk", "activeBlu", "activeRed", "activeWht");
}

function applyColor (colorClass) {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach(function(pixel) {
        pixel.addEventListener("mouseover", function () {
            clearColorClasses(pixel);
            pixel.classList.add(colorClass);
    });
    });
}

function black () {
    applyColor("activeBlk");
}

function blue () {
    applyColor("activeBlu");
}

function red () {
    applyColor("activeRed");
}


setSize.addEventListener("click", populate);
reset.addEventListener("click", rst);
blk.addEventListener("click", black);
blu.addEventListener("click", blue);
rd.addEventListener("click", red);
