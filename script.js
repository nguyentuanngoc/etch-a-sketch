const squareSize = "540px";

let html = document.querySelector("html");
let body = document.querySelector("body");
let container = document.createElement("div");
body.appendChild(container);

let reset = document.createElement("button");
body.appendChild(reset);

html.style.height = "100%";
html.style.margin = "0";

body.style.backgroundColor = "rgb(24, 128, 131)";
body.style.height = "100%";
body.style.margin = "0";

container.style.display = "grid";
container.style.backgroundColor = "rgb(255, 255, 255)";
container.style.width = squareSize;
container.style.height = squareSize;
container.style.position = "absolute";
container.style.top = "25%";
container.style.left = "30%";
container.style.right = "30%";
container.style.margin = "auto";

reset.style.width = "80px";
reset.style.height = "30px";
reset.innerText = "Reset";
reset.style.position = "absolute";
reset.style.top = "15%";
reset.style.margin = "auto";
reset.style.left = "30%";
reset.style.right = "30%";

createSquares(20);

reset.addEventListener("click", () => {
    let promptNumberOfSquares = prompt("Enter number of each size you want!", )
    let numberOfSquares = parseInt(promptNumberOfSquares, 10);
    let resetColor = document.querySelectorAll(".square");
    resetColor.forEach(function(eachSquare){
        eachSquare.style.backgroundColor = "white";
    });
    createSquares(numberOfSquares);
});



function createSquares (numberOfSquares) {
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        let square = document.createElement("div");
        container.appendChild(square);
        square.classList.add("square");
        square.addEventListener ("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    }

    let gridSize = "repeat(" + numberOfSquares + ", 1fr) / repeat(" +  numberOfSquares + ", 1fr)";
    container.style.grid = gridSize;
}