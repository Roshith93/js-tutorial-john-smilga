const getDiv = document.querySelector('#root');
const newHeading = document.createElement('h1')
newHeading.createTextNode = "Hello world"
getDiv.appendChild(newHeading) 
// createelement , create text node, apppendchild

const addChild = () => {
 const mainEle = document.querySelector('.main')
 const head = document.createElement('h2')
 // head.textContent = "Hello"
 const textVal  = head.createTextNode('Heading 2222')
 head.appendChild(textVal)
 mainEle.appendChild(head)
}