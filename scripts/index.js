const btn = document.getElementById('changeColorBtnRandom')
const showColorInput = document.querySelector('input')
const btn2 = document.getElementById('changeColorBtn')

function randomElement() {
  const randomElements = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E']
  
  const randomIndex = Math.floor(15 * (Math.random()))
  return randomElements[randomIndex]
}

const randomHexCode = () => {
  const randomCode = `#${randomElement()}${randomElement()}${randomElement()}${randomElement()}${randomElement()}${randomElement()}`

  return randomCode
}


btn.addEventListener('click', function(){
  const color = randomHexCode()
  
  document.body.style.backgroundColor = color
  showColorInput.placeholder = color
}
)

btn2.addEventListener('click', function() {
  const desiredColor = document.getElementById('myColor').value

  document.body.style.backgroundColor = desiredColor
  showColorInput.placeholder = desiredColor
}
)
