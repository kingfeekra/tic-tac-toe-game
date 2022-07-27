const player = (name) => {
    return{name};
};

const player1 = player("Player 1");
const player2 = player("Player 2");

const gameBoard = (() => {
    const squareStatus = ["","","","","","","","",""];
    const squares = [];
    const createBoard = function() {
        const boardRows = document.querySelectorAll(".boardRow");
        for(let i = 0; i < 3; i++) {
            for(let i = 0; i < 3; i++){
            squares[i] = document.createElement("div");
            squares[i].classList.add("square");
            boardRows[i].appendChild(squares[i]);
            }
            
        }
        for(let i = 0; i < squareStatus.length; i++) {
            const getSquares = document.querySelectorAll(".square");
            getSquares[i].setAttribute("data-square-number", i);
            getSquares[i].textContent = squareStatus[i];
        }

    } 
    return {
        createBoard: function() {
            createBoard();
        },
        squareStatus: squareStatus,
        squares: squares
    }
    
})()

const game = (() => {
    const whoseTurn = document.querySelector(".whoseTurn");

    const displayPlayer = function(player) {
        whoseTurn.textContent = `${player}'s Turn`;
        whoseTurn.style.cssText = "color:black;"
    }

    const winner = function() {
        const getSquareNumbers = document.querySelectorAll("[data-square-number]");
        if (getSquareNumbers[0].textContent == "X" && getSquareNumbers[1].textContent == "X" && getSquareNumbers[2].textContent == "X" ||
            getSquareNumbers[3].textContent == "X" && getSquareNumbers[4].textContent == "X" && getSquareNumbers[5].textContent == "X" ||
            getSquareNumbers[6].textContent == "X" && getSquareNumbers[7].textContent == "X" && getSquareNumbers[8].textContent == "X" ||
            getSquareNumbers[0].textContent == "X" && getSquareNumbers[3].textContent == "X" && getSquareNumbers[6].textContent == "X" ||
            getSquareNumbers[1].textContent == "X" && getSquareNumbers[4].textContent == "X" && getSquareNumbers[7].textContent == "X" ||
            getSquareNumbers[2].textContent == "X" && getSquareNumbers[5].textContent == "X" && getSquareNumbers[8].textContent == "X" ||
            getSquareNumbers[0].textContent == "X" && getSquareNumbers[4].textContent == "X" && getSquareNumbers[8].textContent == "X" ||
            getSquareNumbers[2].textContent == "X" && getSquareNumbers[4].textContent == "X" && getSquareNumbers[6].textContent == "X") {
                whoseTurn.textContent = "Player 1 Wins!!!";
                whoseTurn.style.cssText = "color:red;";
        }
        else if(getSquareNumbers[0].textContent == "O" && getSquareNumbers[1].textContent == "O" && getSquareNumbers[2].textContent == "O" ||
                getSquareNumbers[3].textContent == "O" && getSquareNumbers[4].textContent == "O" && getSquareNumbers[5].textContent == "O" ||
                getSquareNumbers[6].textContent == "O" && getSquareNumbers[7].textContent == "O" && getSquareNumbers[8].textContent == "O" ||
                getSquareNumbers[0].textContent == "O" && getSquareNumbers[3].textContent == "O" && getSquareNumbers[6].textContent == "O" ||
                getSquareNumbers[1].textContent == "O" && getSquareNumbers[4].textContent == "O" && getSquareNumbers[7].textContent == "O" ||
                getSquareNumbers[2].textContent == "O" && getSquareNumbers[5].textContent == "O" && getSquareNumbers[8].textContent == "O" ||
                getSquareNumbers[0].textContent == "O" && getSquareNumbers[4].textContent == "O" && getSquareNumbers[8].textContent == "O" ||
                getSquareNumbers[2].textContent == "O" && getSquareNumbers[4].textContent == "O" && getSquareNumbers[6].textContent == "O") {
                    whoseTurn.textContent = "Player 2 Wins!!!";
                    whoseTurn.style.cssText = "color:red;";
        }
        else if(getSquareNumbers[0].textContent !== "" && getSquareNumbers[1].textContent !== "" && getSquareNumbers[2].textContent !== "" &&
                getSquareNumbers[3].textContent !== "" && getSquareNumbers[4].textContent !== "" && getSquareNumbers[5].textContent !== "" &&
                getSquareNumbers[6].textContent !== "" && getSquareNumbers[7].textContent !== "" && getSquareNumbers[8].textContent !== "") {
                    whoseTurn.textContent = "Draw!!!";
                    whoseTurn.style.cssText = "color:red;";
                }
    }
    
    const playerTurn = function() {
        const getSquares = document.querySelectorAll(".square");
        for(let i = 0; i < getSquares.length; i++) {
                getSquares[i].addEventListener("click", () => {
                if(getSquares[i].textContent !== "") {
                    return;
                }
                
                if(whoseTurn.textContent == `${player1.name}'s Turn`) {
                    getSquares[i].textContent = "X";
                    whoseTurn.textContent = `${player2.name}'s Turn`;
                }
                else if(whoseTurn.textContent == `${player2.name}'s Turn`) {
                    getSquares[i].textContent = "O";
                    whoseTurn.textContent = `${player1.name}'s Turn`;
                }
                winner();
            })
        }
    }

    return {
        displayPlayer: displayPlayer,
        playerTurn: playerTurn
    }
})()

gameBoard.createBoard();
game.displayPlayer(player1.name);
game.playerTurn();

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", () => {
    const resetBoard = document.querySelectorAll(".boardRow");
    for(let i = 0; i < resetBoard.length; i++)
    resetBoard[i].textContent = "";
    gameBoard.createBoard();
    game.displayPlayer(player1.name);
    game.playerTurn();
})



