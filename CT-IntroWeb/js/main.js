console.log('main.js loaded')

// 1. we just collected the users name

function getName () {
  var nameResult = prompt('What is your name?')
  return nameResult
}

// we just asked for the user name from the console

var someName = getName()

// this is a function that uses a name to welcome someone
// you need to give it a name

function welcomeMessage (name) {
  alert("welcome " + name + "!")
}

// this call that function to action

welcomeMessage(someName)
