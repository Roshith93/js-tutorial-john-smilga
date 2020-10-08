const getChildren = document.querySelector('.orderedList');
const withChildNodes = getChildren.childNodes;
const withChildren = getChildren.children;
console.log(withChildNodes)
console.log(withChildren)

// first element child
// last child
console.log(getChildren.firstChild) //text node
console.log(getChildren.firstElementChild) //<li>1</li>

// last element child
// last child
console.log(getChildren.lastChild) //text node
console.log(getChildren.lastElementChild) //<li>4</li>