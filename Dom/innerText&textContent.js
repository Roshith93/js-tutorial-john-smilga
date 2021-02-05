const textCtnt = document.getElementById("root")

const getInnerHTML = textCtnt.innerHTML; //show all descendants as HTML elements
const getInnerText = textCtnt.innerText; //will skip css and script html elements
const getTextContext = textCtnt.textContent; // show text contents

console.log(getInnerHTML);
var htmlContent;
var finalhtmlContent;
textCtnt.innerHTML = finalhtmlContent
htmlContent = `<ul class="unorderedList1">
<li class="alphabet">a</li>
<li class="alphabet">b</li>
<li class="alphabet">c</li>
<li class="alphabet">d</li>
<li class="alphabet">en</li>
</ul>`

finalhtmlContent += htmlContent