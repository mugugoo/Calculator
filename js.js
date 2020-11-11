

//Creating a calculator object, to avoid using global variables
//don't know how to use contructors yet
function createCalculatorNode(
  Node=document.querySelector('div.container.calculator')) {
let calcNode=getElementById('calculator-display-1')
let calcDisplayWin=document.createElement("textarea ")
let calcResultWin=document.createElement("textarea #result")
Node.append(calcDisplayWin,calcResultWin)
}

createCalculatorNode();
calculator.display="0", memory="0";
//creating the calculator methods
calculator.reset = () => {
    displayNode.textcontent="0";
}
calculator.add = n => {
    this.memory+=n;
    display= this.memory;
}

let div=document.querySelector('div.container.calculator-display')
div.prepend(calculator);
let 
calculator.display4RL = function() {}

let woo
let buttonCalcul=document.querySelectorAll('button.input-calc');
//console.log(buttonCalcul)
buttonCalcul.forEach( el => {

el.addEventListener('click', ()=> {
  calculator.add(this.textContent)
  
});

})

function displayNum(event) {
console.log(calculator.display);
/* if (divD.value==="0") divD.value="5"
else divD.textContent+=5; */
return;
}