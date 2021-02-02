const getDiv = document.querySelector('#main')
const position  = getDiv.querySelector('.root')
const position2  = getDiv.querySelector('.root2')
console.log(position2)

const hoverEffect = () => {
 const newDoc = document.createElement('h1')
 newDoc.innerHTML ="Hello there I am a new Para"
 newDoc.classList.add('blueEffect')
 position.appendChild(newDoc)
}
const newTest = () => alert("hello")

// event handler
position.onclick =  () => alert("first")
position.onclick =  () => alert("second")
position.onmouseover = () =>alert("third")
position.onmouseover = () =>alert("4th")

// event listener
position2.addEventListener("mouseover", (e) => alert("hello"))