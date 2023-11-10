/* let text = document.querySelector('input');
 let puls = document.querySelector("button");
let index = document.querySelector("ul")
let string = document.querySelector("li")


function rictest(){
    let li = document.createElement("li")
    let canc = document.createElement("button")
    canc.innerText = "cancella"
    li.innerText = text.value
    console.log(li)
    
    index.appendChild(li)
    index.appendChild(canc)}

    
     
      

puls.onclick = rictest

 */

let btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
 let input = document.querySelector("form input");
let task = input.value.trim();

if(task.length > 2){ 
    console.log(task)
let li = document.createElement('li');
//li.innerText = task;
let span = document.createElement("span");
span.innetext = task
span.addEventListener('click', function(e){

    e.target.className  = e.target.className ==='completato' ? '' : 'completato'
})
li.appe
//console.log(li)
let ul = document.querySelector('ul')
ul.appendChild(li)
input.value = "";
taskcompl ();
});

function taskcompl (){
    let li = document.querySelectorAll('ul li');
   for (let i = 0; i <li.lenght ; i++) {
    li[i].addEventListener('click', function(e) {

      /* this.classlist.('completato');    */
      
      e.target.classname  = e.target.classname ==='completato' ? '' : 'completato'
    
    
    })
    
   }


}
