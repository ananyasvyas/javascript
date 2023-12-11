document.getElementById('title'); // <h2 id="title" class="Heading">I am a h2 Heading</h2>
document.getElementById('title').id; // 'title'
document.getElementById('title').className; // 'Heading'
document.getElementById('title').getAttribute('id'); // 'title'
document.getElementById('title').setAttribute('class', 'page-heading Heading'); // sets class as page-heading and Heading; overwrites the class
const title = document.getElementById('title');
title.style.backgroundColor = 'orange';
title.style.padding = '10px';
document.getElementById('inner-heading').style.display = 'none';
// displays only visible content
title.innerText; // I am a h2 Heading
// displays all content
title.textContent; // I am a h2 Heading of the page
// returns the html content of the element
title.innerHTML; // 'I am a h2 Heading <span id="inner-heading" style="display: none;">of the page</span>'
// querySelector returns the first identified element from the page; it returns only one value;
document.querySelector('h2'); // <h2 id="title" class="page-heading Heading" style="background-color: orange; padding: 10px;">I am a h2 Heading<span id="inner-heading" style="display: none;">of the page</span></h2>
document.querySelector('#title'); // <h2 id="title" class="page-heading Heading" style="background-color: orange; padding: 10px;">I am a h2 Heading<span id="inner-heading" style="display: none;">of the page</span></h2>
document.querySelector('.Heading'); // <h2 id="title" class="page-heading Heading" style="background-color: orange; padding: 10px;">I am a h2 Heading<span id="inner-heading" style="display: none;">of the page</span></h2>
// get first child from unordered-list
const ul = document.querySelector('ul'); // returns unordered list
ul.querySelector('li:first-child'); // returns first li element
// querySelectorAll returns all identified elements from the page; it returns NodeList;
const listItems = document.querySelectorAll('li');
/*
{
    "0": {...},
    "1": {...},
    "2": {...}
}
*/
// to change style of any item in node list, access it via index
listItems[0].style.color = 'red';
// for all elements
listItems.forEach((l) => l.style.backgroundColor = 'pink'); // changes background color of all li elements

// getElementByClassName
const listItemsByClassName = document.getElementsByClassName('list-item'); // returns HTMLCollection
// to iterate html collection, convert it in array first
const listItemsByClassNameArray = Array.from(listItemsByClassName); // converts HTMLCollection to array
listItemsByClassNameArray.forEach((li) => li.style.padding = '10px') // add padding of 4px to each element with 'list-item' class 