const parent = document.querySelector('.parent');
const children = parent.children; // HTMLCollection

// loop through children
for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red'    
}

// access first element
const firstElement = parent.firstElementChild; // returns first element
parent.lastElementChild; // returns last element

// access parent from child
firstElement.parentElement; // returns parent element

// access sibling i.e. element with same parent
firstElement.nextElementSibling;

// nodes inside an element
parent.childNodes; // lists all elements, line breaks, comments inside an element
