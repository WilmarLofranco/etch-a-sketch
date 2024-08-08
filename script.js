let sqNum;
let sq;
let pad = document.querySelector(".container");
let reset = document.querySelector("#reset")

function getSqNum () {
    sqNum = prompt("Set size! (Input a number from 2 to 100)")
};

function makeSq () {
    sq = document.createElement("div");
    sq.classList.add("pixel");
    sq.style.height = "16px";
    sq.style.width = "16px";
    sq.style.border = "2px solid black";
    sq.style.display = "flex";
    sq.style.flex = "auto";
    sq.setAttribute("style", "flex: 1 1 50%; box-sizing: border-box; border: 2px solid black; display: flex; justify-content: center; align-items: center;")
    pad.appendChild(sq);
}


function populate () {
    getSqNum();
    for (let sq =0; sq < (sqNum**2); sq++) {
        makeSq();
    }
};


populate();