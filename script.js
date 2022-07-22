const player = (name) => {
    return{name};
};

const player1 = player("Player 1");
const player2 = player("Player 2");

const gameBoard = (() => {
    const squareStatus = ["x","o","x","o","x","o","x","o","x"];
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
    const displayPlayer = function() {
        const playerTurn = document.querySelector(".playerTurn");
        playerTurn.textContent = `${player1.name}'s Turn`;
    }
    return {
        displayPlayer: displayPlayer
    }
})()

gameBoard.createBoard();
game.displayPlayer();