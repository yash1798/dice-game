var scores, roundScore, activePlayer

scores = [0, 0]
roundScore = 0
activePlayer = 0

document.querySelector(".dice").style.display = "none"

document.getElementById("score-0").textContent = "0"
document.getElementById("score-1").textContent = "0"
document.getElementById("current-0").textContent = "0"
document.getElementById("current-1").textContent = "0"

document.querySelector(".btn-roll").addEventListener("click", function () {
  let dice = Math.floor(Math.random() * 6) + 1

  let diceDOM = document.querySelector(".dice")
  diceDOM.style.display = "block"
  diceDOM.src = "dice-" + dice + ".png"

  if (dice !== 1) {
    roundScore += dice
    document.querySelector("#current-" + activePlayer).textContent = roundScore
  } else {
    roundScore = 0
    if (activePlayer === 0) {
      activePlayer = 1
    } else {
      activePlayer = 0
    }
    document.querySelector("#current-0").textContent = "0"
    document.querySelector("#current-1").textContent = "0"

    document.querySelector(".player-0-panel").classList.toggle("active")
    document.querySelector(".player-1-panel").classList.toggle("active")
  }
})

document.querySelector(".btn-hold").addEventListener("click", function () {
  scores[activePlayer] += roundScore
  roundScore = 0

  if (scores[activePlayer] >= 20) {
    document.querySelector("#name-" + activePlayer).textContent = "WINNER!!!!"
    document.querySelector(".player-name").classList.add("winner")
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner")
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active")
  } else {
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer]
    if (activePlayer === 0) {
      activePlayer = 1
    } else {
      activePlayer = 0
    }
    document.querySelector("#current-0").textContent = "0"
    document.querySelector("#current-1").textContent = "0"

    document.querySelector(".player-0-panel").classList.toggle("active")
    document.querySelector(".player-1-panel").classList.toggle("active")
  }
})
