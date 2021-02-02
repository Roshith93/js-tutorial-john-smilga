const getDiv = document.querySelector('#main')
const position  = getDiv.querySelector('.root')
console.log("position")

const hoverEffect = () => {
 const newDoc = document.createElement('h1')
 newDoc.innerHTML ="Hello there I am a new Para"
 newDoc.classList.add('blueEffect')
 position.appendChild(newDoc)
}
const newTest = () => alert("hello")