const textCtnt = document.getElementById("root")

const getInnerHTML = textCtnt.innerHTML; //show all descendants as HTML elements
const getInnerText = textCtnt.innerText; //will skip css and script html elements
const getTextContext = textCtnt.textContent; // show text contents

console.log(getTextContext);