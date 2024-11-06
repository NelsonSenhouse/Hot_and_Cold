let num = genNum()
let guess = 50
let guesses = []
let guess_rem = 5
let won = false
let lost = false
let guessEl = document.getElementById("guess")
let guessesEl = document.getElementById("guess_log")
let guess_remEl = document.getElementById("num_guesses")
let answerEl = document.getElementById("answer")
let winLoseEl = document.getElementById("winLose")
let recordEl = document.getElementById("record")
if (!localStorage.wins) {
    localStorage.setItem("wins", 0)
}
if (!localStorage.losses) {
    localStorage.setItem("losses", 0)
}
startGame()



function display() {
    if (lost) {
        winLoseEl.innerHTML = "YOU LOSE!"
        winLoseEl.setAttribute("style", "color: blue")
        guess_remEl.innerHTML = "Guesses Remaining: 0"
        answerEl.innerHTML = "Number: " + num
    }
    else if (won) {
        winLoseEl.innerHTML = "YOU WIN!"
        winLoseEl.setAttribute("style", "color: DarkRed")
        answerEl.innerHTML = "Number: " + num
    }
    else {
        guessEl.innerHTML = "Current Guess: " + guess
        guess_remEl.innerHTML = "Guesses Remaining: " + guess_rem
    }
}

function genNum() {
    let rand = Math.floor(Math.random() * 100 + 1)
    return rand
}

function commit() {
    if (guess == num) {
        won = true
    }
    if (!won && !lost) {
        if (guess <= num + 5 && guess >= num - 5) {
            guessesEl.innerHTML += guess + " (Very Hot!) - "
            guessesEl.setAttribute("style", "color: DarkRed")
            guess_rem ++
        }
        else if (guess <= num + 8 && guess >= num - 8) {
            guessesEl.innerHTML += guess + " (Hot!) - "
            guessesEl.setAttribute("style", "color: red")
        }
        else if (guess <= num + 15 && guess >= num - 15) {
            guessesEl.innerHTML += guess + " (Very Warm) - "
            guessesEl.setAttribute("style", "color: red")
        }
        else if (guess <= num + 20 && guess >= num - 20) {
            guessesEl.innerHTML += guess + " (Warm) - "
            guessesEl.setAttribute("style", "color: red")
        }
        else if (guess <= num + 30 && guess >= num - 30) {
            guessesEl.innerHTML += guess + " (Cool) - "
            guessesEl.setAttribute("style", "color: cyan")
        }
        else if (guess <= num + 40 && guess >= num - 40) {
            guessesEl.innerHTML += guess + " (Very Cool) - "
            guessesEl.setAttribute("style", "color: cyan")
        }
        else if (guess <= num + 55 && guess >= num - 55) {
            guessesEl.innerHTML += guess + " (Cold!) - "
            guessesEl.setAttribute("style", "color: cyan")
        }
        else {
            guessesEl.innerHTML += guess + " (Very Cold!) - "
            guessesEl.setAttribute("style", "color: blue")
        }
        guess_rem --
    }
    if (guess_rem == 0) {
        lost = true
    }
    display()
}

function addSub(num) {
    if (num > 0) {
        if (guess <= 100 - num) {
            guess += num
        }
    }
    else {
        if (guess >= 0 - num) {
            guess += num
        }
    }
    display()
}

function startGame() {
    num = genNum()
    guess = 50
    guesses = []
    guess_rem = 5
    if (won) {
        localStorage.wins ++
        won = false
    }
    if (lost) {
        localStorage.losses ++
        lost = false
    }
    recordEl.innerHTML = "Wins: " + localStorage.wins + " Losses: " + localStorage.losses
    guessEl.innerHTML = ""
    guessesEl.innerHTML = "Numbers Guessed: "
    guessesEl.setAttribute("style", "color: pink")
    guess_remEl.innerHTML = ""
    answerEl.innerHTML = ""
    winLoseEl.innerHTML = ""
    display()
}