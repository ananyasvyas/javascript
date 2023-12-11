// addEventListener
document.getElementById('A').addEventListener('click', (e) => {
    // event object 'e'
    /*
        type
        timestamp
        defaultPrevented
        target
        toElement
        srcElement
        currentTarget
        clientX
        clientY
        screenX
        screenY
        altKey
        ctrlKey
        shiftKey
        keyCode
    */
})
// event porpogation or bubbling - the event fire of the inner element before the outer element.
const tabContainer = document.querySelector('.tab-container');
const tabA = document.querySelector('#A');
tabContainer.addEventListener('click', (e) => {
    console.log('Clicked tab container!');
}, false);
tabA.addEventListener('click', (e) => {
    console.log('Clicked Tab A!');
    e.stopPropagation();
}, false);
// to reverse bubblin, from top to bottom, set the third param (default false), as true
// to stop propagation, add e.stopPropagation(); to the inner element