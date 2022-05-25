const btn = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'blue', 'green', 'purple','yellow' ]
body.style.backgroundColor = 'violet'

btn.addEventListener('click', changeB)

function changeB(){
     const colorIndex = parseInt(Math.random()*color.length)
     body.style.background = color[colorIndex]
 }