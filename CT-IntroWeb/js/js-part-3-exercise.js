

//temperature converter
function convertTemp (tempType, degrees){
  var convertedTemp

  if (tempType === 'C' || tempType === 'c') {
    convertedTemp = ((degrees * 1.8)+ 32)
  }
  else if (tempType === 'F' || tempType === 'f'){
    convertedTemp = ((degrees - 32) / 1.8)
  }

  return convertedTemp
}

var temp = convertTemp('f', 32)
console.log(temp)

//mirror
function mirror (word) {
  var mirroredWord
  if (word) {
    mirroredWord = word + '|'

    var lastCharPoss = word.length -1
    while (lastCharPoss >= 0) {
      mirroredWord += word[lastCharPoss]
      lastCharPoss --
    }
  }

  return mirroredWord
}

var mirroredWord = mirror('hello')
console.log(mirroredWord)
