//creiamo 76 numeri

    for(i=1 ; i<=76; i++){
        let ul =document.querySelector('ul')
        let li =document.createElement('li')
        li.innerText = i
        ul.appendChild(li)
        }



   function creonumerocasulae(){
        let button = document.querySelector('#estrazione button')
        button.addEventListener('click', () => {
        let numerocasuale = Math.random()*76;
        let numerocasulearrotondato = Math.round(numerocasuale);
        let p = document.createElement('p')
        let h4 = document.querySelector('h4')
        p.innerText = numerocasulearrotondato
        console.log(p.textContent)
       
        h4.appendChild(p);
        let numeritotli = document.querySelectorAll('li')
        let numeriestratti = document.querySelectorAll('p')
        console.log(numeritotli, numeriestratti[0].textContent)
        for(i=0; i<numeritotli.length; i++){ 
            for(y=0; y<numeriestratti.length ; y ++){
            if (numeriestratti[y].textContent === numeritotli[i].textContent){numeritotli[i].classList.add("testorosso")}}}
    
    }
        )}

        creonumerocasulae();

        

    
