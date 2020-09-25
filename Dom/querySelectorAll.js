const querySelAll = document.querySelectorAll('ul')
const sel = document.querySelectorAll('div.main > .orderedList') //we get the list of  orderedList elements whose immediate parent elemtn is a div with the class main
console.log(sel)
// console.log(querySelAll)
sel.forEach(el => {
  el.style.backgroundColor = "red"
})