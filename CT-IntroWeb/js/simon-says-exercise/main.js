var colorHistory = []
var isUserTurn = true
var isPlaying = false
var clickIndex = 0
var button = document.querySelector('button')
button.addEventListener('click',startGame)
var quads = document.querySelectorAll('.quad')
for (var i = 0, j = quads.length; i < j; i++) {
  quads[i].addEventListener('click', userClick)
}

function getRandomColor () {
  var colors = ['red', 'yellow', 'blue', 'green']
  var randomIndex = Math.floor(Math.random() * colors.length)
  var randomColor = colors[randomIndex]
  return randomColor
}


function animate (colorSet) {
  var i = 0
  var interval = setInterval(function () {
    turnOn(colorSet[i])
    i++

    if (i === colorSet.length){
      clearInterval(interval)
      isUserTurn = true
    }

  }, 600);
}

function turnOn (color) {
  var quad = document.querySelector('.' + color)
  quad.classList.add('active')
  setTimeout(function () {
    quad.classList.remove('active')
  }, 400)
}

function startGame (){
  turnAllOff()
  isPlaying = true
  //resets score
  //clear colorHistory
  colorHistory = []
  //add eventlistener to all quads
  //newTurn Function
  newTurn()
}
function newTurn (){
  isUserTurn = false
  clickIndex = 0
  //getRandomColor
  var nextColor = getRandomColor()
  colorHistory.push(nextColor)
  //play colorHistory
  animate(colorHistory)
}
function userClick (ev) {
  var color = ev.target.dataset.color
  if (isUserTurn && isPlaying) {
    turnOn(color)

    //got it right
    if (color === colorHistory[clickIndex]) {
      clickIndex++
      if (clickIndex === colorHistory.length) {
      setTimeout(newTurn,500)
      }
    } else if (color !== colorHistory) {
      gameOver()
    }
  } else if (!isPlaying) {
    turnOn(color)
  }
}


function gameOver () {
  isPlaying = false
  setTimeout(function() {}, 300)
}
function turnAllOff () {
  for (var i = 0; i < quads.length; i++) {
    var quad = quads[i]
    quad.classList.remove('active')
  }
}




function seedForTests (seedCount) {
  while (seedCount > 0) {
    colorHistory.push(getRandomColor())
    seedCount--
  }
}
