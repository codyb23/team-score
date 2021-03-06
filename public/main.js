let teamOne = 0
let teamTwo = 0

function handleAddingPointToTeam1() {
  const valueCount = document.querySelector('.team1Score')

  if (teamOne >= 21) {
    teamOne = 21
    return
  }

  teamOne++
  valueCount.textContent = `${teamOne}`

  if (teamOne >= 21) {
    const header = document.querySelector('h1')
    header.textContent = 'The winner is Team One!'
  }
}

function handleSubtractingPointToTeam1() {
  const valueCount = document.querySelector('.team1Score')

  if (teamOne >= 21) {
    teamOne = 21
    return
  }

  teamOne--

  if (teamOne <= 0) {
    teamOne = 0
  }

  valueCount.textContent = `${teamOne}`
}

function handleAddingPointToTeam2() {
  const valueCount = document.querySelector('.team2Score')

  if (teamTwo >= 21) {
    teamTwo = 21
    return
  }

  teamTwo++
  valueCount.textContent = `${teamTwo}`

  if (teamTwo >= 21) {
    const header = document.querySelector('h1')
    header.textContent = 'The winner is Team Two!'
  }
}

function handleSubtractingPointToTeam2() {
  const valueCount = document.querySelector('.team2Score')

  if (teamTwo >= 21) {
    teamTwo = 21
    return
  }

  teamTwo--

  if (teamTwo < 0) {
    teamTwo = 0
  }

  valueCount.textContent = `${teamTwo}`
}

function updateTeamOne(event) {
  const team1Log = document.querySelector('.team1 h2')
  team1Log.textContent = event.target.value
}

function updateTeamTwo(event) {
  const team2Log = document.querySelector('.team2 h2')
  team2Log.textContent = event.target.value
}

function updateButton(event) {
  const valueCountTeam1 = document.querySelector('.team1Score')
  const valueCountTeam2 = document.querySelector('.team2Score')
  const header = document.querySelector('h1')
  header.textContent = 'My Score Board'
  teamOne = 0
  teamTwo = 0
  valueCountTeam1.textContent = `${teamOne}`
  valueCountTeam2.textContent = `${teamTwo}`
}

const main = () => {
  const team1AddPoint = document.querySelector('.team1 .add')
  const team1SubtractPoint = document.querySelector('.team1 .subtract')

  const team2AddPoint = document.querySelector('.team2 .add')
  const team2SubtractPoint = document.querySelector('.team2 .subtract')

  team1AddPoint.addEventListener('click', handleAddingPointToTeam1)
  team1SubtractPoint.addEventListener('click', handleSubtractingPointToTeam1)

  team2AddPoint.addEventListener('click', handleAddingPointToTeam2)
  team2SubtractPoint.addEventListener('click', handleSubtractingPointToTeam2)

  const inputForTeam1Name = document.querySelector('.team1 input')
  inputForTeam1Name.addEventListener('input', updateTeamOne)

  const inputForTeam2Name = document.querySelector('.team2 input')
  inputForTeam2Name.addEventListener('input', updateTeamTwo)

  const button = document.querySelector('.resetButton button')
  button.addEventListener('click', updateButton)
}

document.addEventListener('DOMContentLoaded', main)
