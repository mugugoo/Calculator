let nodeButton=document.querySelectorAll('button');
nodeButton.forEach( elem => {
if (elem.textContent*1===NaN)
elem.classList.add('other');
else elem.classList.add('number');
}
)
nodeButton.forEach( (button)=> {
});