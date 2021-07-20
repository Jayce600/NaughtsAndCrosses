
const container = document.querySelector(".outline");
const restartButton = document.querySelector(".restart-button");
restartButton.addEventListener("click", restart);
let boxes = [];
let piece = "x";

initialise();

function initialise(){
    for (let i = 0; i < 9; i++){
        let box = document.createElement("div");
        box.classList.add("box");
        boxes.push(box);
        container.appendChild(box);
        box.addEventListener("click", playPiece);
    }
}

function playPiece(e){
    if (e.srcElement.textContent === "x" || e.srcElement.textContent === "o"){
        console.log("piece present"); // debugging
    } else if (piece === "x"){
        e.srcElement.textContent = "x";
        piece = "o";
    } else if (piece === "o"){
        e.srcElement.textContent = "o";
        piece = "x";
    } else {
        console.log("error - playPiece - if else block")
    }
    checkForWin();
    checkForTie();
}

// very repetitive code, this should be improved.
function checkForWin(){
    // top row
    if (boxes[0].textContent === "x" && boxes[1].textContent === "x" && boxes[2].textContent === "x" ||
        boxes[0].textContent === "o" && boxes[1].textContent === "o" && boxes[2].textContent === "o"){
        gameOver(boxes[0].textContent);
    }
    // middle row
    if (boxes[3].textContent === "x" && boxes[4].textContent === "x" && boxes[5].textContent === "x" ||
        boxes[3].textContent === "o" && boxes[4].textContent === "o" && boxes[5].textContent === "o"){
        gameOver(boxes[3].textContent);
    }
    // bottom row
    if (boxes[6].textContent === "x" && boxes[7].textContent === "x" && boxes[8].textContent === "x" ||
        boxes[6].textContent === "o" && boxes[7].textContent === "o" && boxes[8].textContent === "o"){
        gameOver(boxes[6].textContent);
    }
    // first column
    if (boxes[0].textContent === "x" && boxes[3].textContent === "x" && boxes[6].textContent === "x" ||
        boxes[0].textContent === "o" && boxes[3].textContent === "o" && boxes[6].textContent === "o"){
        gameOver(boxes[0].textContent);
    }
    // second column
    if (boxes[1].textContent === "x" && boxes[4].textContent === "x" && boxes[7].textContent === "x" ||
        boxes[1].textContent === "o" && boxes[4].textContent === "o" && boxes[7].textContent === "o"){
        gameOver(boxes[1].textContent);
    }
    // third column
    if (boxes[2].textContent === "x" && boxes[5].textContent === "x" && boxes[8].textContent === "x" ||
        boxes[2].textContent === "o" && boxes[5].textContent === "o" && boxes[8].textContent === "o"){
        gameOver(boxes[2].textContent);
    }
    // diagonal \
    if (boxes[0].textContent === "x" && boxes[4].textContent === "x" && boxes[8].textContent === "x" ||
        boxes[0].textContent === "o" && boxes[4].textContent === "o" && boxes[8].textContent === "o"){
        gameOver(boxes[0].textContent);
    }
    // diagonal /
    if (boxes[2].textContent === "x" && boxes[4].textContent === "x" && boxes[6].textContent === "x" ||
        boxes[2].textContent === "o" && boxes[4].textContent === "o" && boxes[6].textContent === "o"){
        gameOver(boxes[2].textContent);
    }
}

function checkForTie(){
    for (let i = 0; i < 9; i++){
        if (boxes[i].textContent === ""){
            return;
        }
    }
    gameOver("tie");
}

function restart(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    while (boxes[0] != null){
        boxes.pop();
    }
    piece = "x";
    document.querySelector(".victory-screen").textContent = "";
    initialise();
}

function gameOver(winner){
    if (winner === "x"){
        document.querySelector(".victory-screen").textContent = "Player X is the winner!"
    } else if (winner === "o"){
        document.querySelector(".victory-screen").textContent = "Player O is the winner!"
    } else if (winner === "tie") {
        document.querySelector(".victory-screen").textContent = "Tie!"
    } else {
        console.log("error in gameOver if else function");
    }
    stopGame();
}

function stopGame(){
    for (let i = 0; i < 9; i++){
        boxes[i].removeEventListener("click", playPiece);
    }
}