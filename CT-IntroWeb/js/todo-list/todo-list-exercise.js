console.log('File Loaded')


/*
we need a list of items
we need to prompt the user
ask if they want to view, add, or quit
if they view and the list is empty, prompt them to add or quit
if they add to the list, then "push" that item to the array
if they quit, alert them that there data has been saved
*/

var toDoList = []
// asks the user what they want to do
/*var promptAnswer = prompt('Please indicate what you would like to do. view, add, or quit')

if (promptAnswer === 'view') {
  displayList(toDoList)
} else if (promptAnswer === 'add') {
    var toDoListItem = prompt('Please add your list item')
    toDoList.push(toDoListItem)
    displayList(toDoList)
} else {
  var quitMessage = prompt('Thank you! Your data has been saved')
}

function displayList(list) {
  for (var i = 0, j = list.length; i < j; i++) {
    console.log(i + ': ' + list[i]);
}
}*/

while (promptAnswer !== 'quit') {
  var promptAnswer = prompt('Please indicate what you would like to do. view, add, or quit')

  if (promptAnswer === 'view') {
    displayList(toDoList)
  } else if (promptAnswer === 'add') {
      var toDoListItem = prompt('Please add your list item')
      toDoList.push(toDoListItem)
      displayList(toDoList)
  } else if (promptAnswer === 'quit'){
    var quitMessage = alert('Thank you! Your data has been saved')
  }

  function displayList(list) {
    for (var i = 0, j = list.length; i < j; i++) {
      console.log(i + ': ' + list[i]);
  }
  }
}
