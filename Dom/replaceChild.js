
const rootDiv = document.querySelector('#root')
const oldTitle = document.querySelector('#title');
const newTitle = document.createElement('h3')
const titleText = document.createTextNode('New tilte')
newTitle.classList.add('red')
newTitle.appendChild(titleText)
rootDiv.replaceChild(newTitle, oldTitle)