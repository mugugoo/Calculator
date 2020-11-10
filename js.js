let previousResult=0;
let currentNumber=0;

let divDisplay=document.getElementById('display')
console.log(divDisplay.value);
let buttonCalcul=document.querySelectorAll('button.input-calc');
//console.log(buttonCalcul)
buttonCalcul.forEach( el => {

el.addEventListener('click', () => displayNum(divDisplay, event));
});


function displayNum(divD, event) {
console.log(divD.value);
if (divD.value==="0") divD.value="5"
else divD.textContent+=5;
return;
}