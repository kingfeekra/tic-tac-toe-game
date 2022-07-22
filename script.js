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
            getSquares[i].setAttribute("data-square-number", i)
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