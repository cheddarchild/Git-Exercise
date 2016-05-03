var colorHistory = []
var startButt = document.querySelectorAll('button')
var quadDomEls = document.querySelectorAll('.quad')

function getRandomColor () {
  var colors = ['red', 'yellow', 'blue', 'green']
  var randomIndex = Math.floor(Math.random() * colors.length)
  var randomColor = colors[randomIndex]
  return randomColor
}

function seedForTests (seedCount) {
  while (seedCount > 0) {
    colorHistory.push(getRandomColor())
    seedCount--
  }
}

function animate (colorSet) {
  // activates each quad per color in the array use turnOn to select a quad
}

function turnOn (color) {
  //light selected quad
}

function startGame (){
  //turns all off
  //resets score
  //clears history
  //add eventlistener to all quads
  //newTurn Function
}
function newTurn (){
  //getRandomColor
  //push randomColor to colorHistory
  //play colorHistory
}
function gameOver () {
  // remove eventlistener from quads

}

for (var i = 0; i < quadDomEls.length; i++) {
  var quad = quadDomEls[i]
  quad.onclick = function (ev) {
    turnAllOff()
    var domEl = ev.target
    domEl.classList.toggle('active')
  }
}

function turnAllOff () {
  for (var i = 0; i < quadDomEls.length; i++) {
    var quad = quadDomEls[i]
    quad.classList.remove('active')
  }
}
