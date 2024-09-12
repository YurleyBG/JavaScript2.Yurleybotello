var listap=[]
var lista0=[]
fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=6")
.then(ren=>ren.json())
.then(data=>{
    var valor0=data.cards[0].value
    if(valor0=="QUEEN"){
        valor0=10
    }
    if(valor0=="KING"){
        valor0=10
    }
    if(valor0=="JACK"){
        valor0=10
    }
    if(valor0=="ACE"){
        valor0=1
    }
    var valor1=data.cards[1].value
    if(valor1=="QUEEN"){
        valor1=10
    }
    if(valor1=="KING"){
        valor1=10
    }
    if(valor1=="JACK"){
        valor1=10
    }
    if(valor1=="ACE"){
        valor1=1
    }

    lista0.push(parseInt(valor0),parseInt(valor1))
    document.getElementById(`mostracarta1`).innerHTML+=`
         <img id="cartita" src="${data.cards[0].images.png}" alt="">
         <img id="cartita" src="${data.cards[1].images.png}" alt="">
    `
    document.getElementById(`mostracarta2`).innerHTML+=`
        <img id="cartita" src="${data.cards[2].images.png}" alt="">
        <img id="cartita" src="${data.cards[3].images.png}" alt="">
     
    `
    var suma1=lista0.reduce((a,b) => a + b,0);
    console.log(suma1)
    listap.push(suma1)
})

document.getElementById("pila").addEventListener("click",event1)
var lista1=[]
function event1(){
    let url="https://deckofcardsapi.com/api/deck/new/draw/?count=52"
    fetch(url)
    .then(e=>e.json())
    .then(datos=>{
        
        let cartitaaleat=datos.cards
        carrandom=cartitaaleat[Math.floor(Math.random()*cartitaaleat.length)];
        console.log(carrandom.images.png);
        
        document.getElementById(`mostracarta1`).innerHTML+=`
            <img id="cartita1" src="${carrandom.images.png}" alt="">
        `
        console.log(datos)
        valor2=carrandom.value
        if(valor2=="QUEEN"){
            valor2=10
        }
        if(valor2=="KING"){
            valor2=10
        }
        if(valor2=="JACK"){
            valor2=10
        }
        if(valor2=="ACE"){
            let noti= prompt("¿Que valor quieres para esta carta?\n 1. valor 1\n 2. valor 11")
            if(noti==1){
                valor2=1
            }
            if(noti==2){
                valor2=11
            }
          
        }
        lista1.push(parseInt(valor2))
        var suma2=lista1.reduce((a,b) => a + b,0);
        listap.push(suma2)
        console.log(suma2)
       
        
    })
    total()
   
}
document.getElementById("pila2").addEventListener("click",event2)
var lista2=[]
function event2(){
    let url="https://deckofcardsapi.com/api/deck/new/draw/?count=52"
    fetch(url)
    .then(e=>e.json())
    .then(datoss=>{
        
        let cartitaaleat1=datoss.cards
        carrandom1=cartitaaleat1[Math.floor(Math.random()*cartitaaleat1.length)];
        console.log(carrandom1.images.png);
        
        document.getElementById(`mostracarta2`).innerHTML+=`
            <img id="cartita1" src="${carrandom1.images.png}" alt="">
        `
        console.log(datoss)
        valor3=carrandom1.value
        if(valor3=="QUEEN"){
            valor3=10
        }
        if(valor3=="KING"){
            valor3=10
        }
        if(valor3=="JACK"){
            valor3=10
        }
        if(valor3=="ACE"){
            let noti= prompt("¿Que valor quieres para esta carta?\n 1. valor 1\n 2. valor 11")
            if(noti==1){
                valor3=1
            }
            if(noti==2){
                valor3=11
            }
          
        }
        lista2.push(parseInt(valor3))
        var suma4=lista1.reduce((a,b) => a + b,0);
        listap.push(suma4)
        console.log(suma4)
       
        
    })
    total()

    
}

function total() {
    var sumatotal=listap.reduce((a,b) => a + b,0);
    console.log( sumatotal)
    if(sumatotal>21){
        confirm(" GAME OVER ")
    }
    if(sumatotal==21){
        confirm(" WINNER ")
        
    }
    
}

