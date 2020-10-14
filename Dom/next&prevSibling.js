// next sibling
const nextSib = document.querySelector('.unorderedList1')
const nextRes = nextSib.nextSibling.nextSibling;
console.log(nextRes)
nextRes.style.color = "blue"

// next element sibling
const nextEleSib = document.querySelector('.unorderedList1')
const nextEleRes = nextEleSib.nextElementSibling;
console.log(nextEleRes)
nextEleRes.style.color = "blue"

// previous sibling
const previousSib = document.querySelector('.orderedList')
const previousRes = previousSib.previousSibling.previousSibling;
console.log(previousRes)
previousRes.style.color = "red"

// previous element sibling
const previousEleSib = document.querySelector('.orderedList')
const previousEleRes = previousEleSib.previousElementSibling;
console.log(previousEleRes)
previousEleRes.style.color = "violet"