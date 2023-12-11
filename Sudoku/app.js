import * as datas from './Boards.js';

const gameArea = document.createElement('div');
const container = document.createElement('div');
const matrix = document.createElement('div');

gameArea.classList.add('game-area');
container.classList.add('container');
matrix.classList.add('matrix');



// #region menu
const menu = document.createElement('div');
const text = document.createElement('p');
const startButton = document.createElement('button');
menu.classList.add('menu');
startButton.classList.add('button');
startButton.innerHTML = 'Start';
menu.appendChild(startButton);

text.classList.add('text');
menu.appendChild(text);
gameArea.appendChild(menu);

startButton.addEventListener('click', game);
// #endregion
function createMatrix(wrong) {
    const random = Math.floor(Math.random() * (datas.boards.length - 1));
    text.innerHTML = 'Number of mistakes: ' + wrong;
    let board = datas.boards[random];

    matrix.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // #region Create elements
            let input = document.createElement('input');
            let cell = document.createElement('div');

            cell.classList.add('cell');
            input.classList.add('input');
            input.id = i + '-' + j;
            input.setAttribute('type', 'number');
            input.setAttribute('min', '1');
            input.setAttribute('max', '9');
            input.setAttribute('step', '1');
            // #endregion
            if ((Math.random() * (1 - 0) + 0) < 0.96) {

                input.setAttribute('value', board[i][j]);
                input.classList.add('disabled');
            }
            if (i < 3 && j < 3 || i < 3 && j > 5 || i > 5 && j < 3 || i > 5 && j > 5 || i > 2 && i < 6 && j > 2 && j < 6) {
                input.classList.add('paint');
            }

            cell.appendChild(input);
            matrix.appendChild(cell);
        }
    }
    container.appendChild(matrix);
    gameArea.appendChild(container);

    container.onchange = function Click(event) {
        let id = event.target.id;
        let change = parseInt(event.target.value);
        if (change == board[id[0]][id[2]]) {
            event.target.style.color = 'green';
            event.target.style.pointerEvents = 'none';

        } else {
            event.target.style.color = 'red';
            wrong = finish(wrong);
            text.innerHTML = 'Number of mistakes: ' + wrong;
        }
        if (checkWin()) {
            alert('You won. Congratulations...');
        }
    }
}

document.body.appendChild(gameArea);

function finish(wrong) {
    wrong++;

    if (wrong == 5) {
        alert('You lose. Try again')
        matrix.classList.add('disabled');
        console.log(wrong);
        wrong = 0;
    } else if (wrong > 5) {
        wrong = 0;
    }
    return wrong;
}

function game() {
    let wrong = 0;
    createMatrix(wrong);

}

function checkWin() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            console.log("->" + document.getElementById(i + '-' + j).value)
            if (document.getElementById(i + '-' + j).value == "") {
                console.log("break")
                return false;
            }
            if (document.getElementById(i + '-' + j).value == undefined) {
                console.log("break")
                return false;
            }
        }
    }
    return true;
}