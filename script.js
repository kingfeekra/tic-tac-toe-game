const gameBoard = (() => {
    const createBoard = function() {
        const boardRows = document.querySelectorAll(".boardRow");
        const squares = [];
        for(let i = 0; i < 3; i++) {
            for(let i = 0; i < 3; i++){
            squares[i] = document.createElement("div");
            squares[i].classList.add("square");
            boardRows[i].appendChild(squares[i]);
            }
            
        }

    } 
    return {
        createBoard: function() {
            createBoard();
        }
    }
    
})()

gameBoard.createBoard();

const player = (name) => {
    return{name};
};

const player1 = player("player1");
const player2 = player("player2");