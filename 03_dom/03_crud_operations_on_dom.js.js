const div = document.createElement('div');
div.id = 'main-container'
div.className = 'container';
div.style.backgroundColor = 'orange';
div.style.padding = '10px';
// div.innerText = 'I am a div created through script.' // complex
const text = document.createTextNode('I am a div created through script.');
div.appendChild(text);
// apend div to body
document.body.appendChild(div);
// create an ordered list and all list items -
function addLanguage(lang) {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item');
    li.innerHTML = lang;
    console.log(li);
    return li;
}
const ulThroughScript = document.createElement('ol');
ulThroughScript.setAttribute('class', 'ordered-list');
ulThroughScript.appendChild(addLanguage('Java'));
ulThroughScript.appendChild(addLanguage('C'));
ulThroughScript.appendChild(addLanguage('C++'));
document.body.appendChild(ulThroughScript);

// edit an element
const languageList = document.querySelector('.ordered-list');
const secondLang = languageList.querySelector('li:nth-child(2)');
const updatedLi = document.createElement('li');
updatedLi.textContent = 'Updated Lang';
secondLang.replaceWith(updatedLi);

// remove an element
languageList.querySelector('li:last-child').remove();
