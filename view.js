updateView()
function updateView(){
//Dette er viewet til siden.
document.getElementById("app").innerHTML = /*HTML*/ `

<input type="text" onchange="pushNum(this.value)">
<button onclick="myFunction()">Summer</button>
<ul>${printArray()}</ul>




`;

}
// Denne funksjonen printer ut tallet jeg skriver inn. 

function printArray(){
    let html = "";
    for(let num of number){
        html += /*HTML*/`
        <li>${num}</li>
        
        `;
    }
        
        return html;   
    
}


