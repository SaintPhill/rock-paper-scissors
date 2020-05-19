let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_img = document.getElementById('r');
const paper_img = document.getElementById('p');
const scissors_img = document.getElementById('s');
const smallUserWord = 'user'.fontsize(3).sup()
const smallCompWord = 'comp'.fontsize(3).sup()

function convertToWord(letter) {
    switch (letter) {
        case 'r': return 'Rock'
        case 's': return 'Scissors'
        case 'p': return 'Paper'
    }
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)]
}

function win(userChoice, computerChoice) {
    const userChoice_img = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerText = `${userScore}`;
    result_div.innerHTML =
        `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} YOU WIN!`;
    userChoice_img.classList.add('choices__image_green-border');
    setTimeout(() => userChoice_img.classList.remove('choices__image_green-border'), 500)
}

function lose(userChoice, computerChoice) {
    const userChoice_img = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerText = `${computerScore}`
    result_div.innerHTML =
        `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord} YOU LOSE!`;

    userChoice_img.classList.add('choices__image_red-border');
    setTimeout(() => userChoice_img.classList.remove('choices__image_red-border'), 500)
}

function draw(userChoice, computerChoice) {
    const userChoice_img = document.getElementById(userChoice);
    result_div.innerHTML =
        `${convertToWord(computerChoice)}${smallUserWord} equals ${convertToWord(userChoice)}${smallCompWord}`;

    userChoice_img.classList.add('choices__image_gray-border');
    setTimeout(() => userChoice_img.classList.remove('choices__image_gray-border'), 500)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, computerChoice);
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose(userChoice, computerChoice)
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            draw(userChoice, computerChoice)
    }
}

function main() {
    rock_img.addEventListener('click', () =>
        game('r')
    );
    paper_img.addEventListener('click', () =>
        game('p')
    );
    scissors_img.addEventListener('click', () =>
        game('s')
    );
}

main();


