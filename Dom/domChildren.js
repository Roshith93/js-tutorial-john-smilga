const getChildren = document.querySelector('.orderedList');
const withChildNodes = getChildren.childNodes;
const withChildren = getChildren.children;
console.log(withChildNodes)
console.log(withChildren)

// first child
// last child
console.log(getChildren.firstChild) //text node
console.log(getChildren.firstElementChild) //<li>a</li>