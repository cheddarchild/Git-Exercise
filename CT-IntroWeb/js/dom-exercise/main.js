console.log('script loaded')



function getNewStyle () {
  var mainHeader = document.getElementById('main-header')

  mainHeader.style.fontSize = '54px'
  mainHeader.style.color = '#00ffff'
  mainHeader.style.borderBottom = '5px dashed black'
  mainHeader.style.borderBottomColor = 'hotpink'

  var box = document.querySelector('.box')

  box.style.height = '200px'
  box.style.width = '500px'
  box.style.top = '500px'
  box.style.left = '900px'
  box.classList.toggle('alt-color')

  mainHeader.textContent = "YO YO!"
  box.innerHTML = '<h2>This is a box</h2>'
  box.style.textAlign = 'center'
}
document.getElementById('style').addEventListener('click', getNewStyle)
