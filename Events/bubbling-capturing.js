const getRoot = document.querySelectorAll('*')
console.log(getRoot)

// for (let element of getRoot) {
//   element.addEventListener('click', function (e) {
//     alert(element.tagName)
//   })
// }
function toggleDone (event) {
 console.log(event.target)
 console.log(event.currentTarget)
} 
const characterList = document.querySelector('.buttons')
characterList.addEventListener('click', toggleDone)