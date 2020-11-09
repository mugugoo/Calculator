let mainDiv =document.getElementById('calc-head');
mainDiv.textContent="";
for (i=0;i<20;i++){
 let tempDiv=document.createElement('div')
 tempDiv.textContent="*";

 //tempDiv.style.display='none'
  mainDiv.appendChild(tempDiv)
}

let boubou=document.getElementById("calc-head");
let text=document.createTextNode("lalalal");
boubou.appendChild(text);