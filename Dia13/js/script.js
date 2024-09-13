var listap=[]
var listap2=[]
var lista0=[]
var lista01=[]
fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=4")
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
    var valor4=data.cards[2].value
    if(valor4=="QUEEN"){
        valor4=10
    }
    if(valor4=="KING"){
        valor4=10
    }
    if(valor4=="JACK"){
        valor4=10
    }
    if(valor4=="ACE"){
        valor4=1
    }
    var valor5=data.cards[3].value
    if(valor5=="QUEEN"){
        valor5=10
    }
    if(valor5=="KING"){
        valor5=10
    }
    if(valor5=="JACK"){
        valor5=10
    }
    else if(valor5=="ACE"){
        valor5=1
    }
    lista0.push(parseInt(valor0),parseInt(valor1))
    lista01.push(parseInt(valor4),parseInt(valor5))
    console.log("hola",lista01)
    document.getElementById(`mostracarta1`).innerHTML+=`
         <img id="cartita" src="${data.cards[0].images.png}" alt="">
         <img id="cartita" src="${data.cards[1].images.png}" alt="">
    `
    document.getElementById(`mostracarta2`).innerHTML+=`
        <img id="cartita" src="${data.cards[2].images.png}" alt="">
        <img id="cartita" src="${data.cards[3].images.png}" alt="">
     
    `
    var suma1=lista0.reduce((a,b) => a + b,0);
    listap.push(suma1)
    var sumas=lista01.reduce((a,b) => a + b,0);
    listap2.push(sumas)
 
})
document.getElementById("pila").addEventListener("click",event1)
var lista1=[]
function event1(){
    let url="https://deckofcardsapi.com/api/deck/new/draw/"
    fetch(url)
    .then(e=>e.json())
    .then(datos=>{
        let cartitaaleat=datos.cards
        carrandom=cartitaaleat[Math.floor(Math.random()*cartitaaleat.length)];
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
        total() 
    })
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
        document.getElementById(`mostracarta2`).innerHTML+=`
            <img id="cartita1" src="${carrandom1.images.png}" alt="">
        `
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
        var suma4=lista2.reduce((a,b) => a + b,0);
        listap2.push(suma4)
        total2()
    })
}
function total() {
    var sumatotal=listap.reduce((a,b) => a + b,0);
    if(sumatotal>21){
        const guardar2=document.getElementById("div1");
        guardar2.style.display="block"
    }
    if(sumatotal==21){
        const guardar22=document.getElementById("div2");
        guardar22.style.display="block"
    }
}
function total2() {
    var sumatotal11=listap2.reduce((a,b) => a + b,0);
    if(sumatotal11>21){
       const guardar1=document.getElementById("div3");
       guardar1.style.display="block"
    }
    if(sumatotal11==21){
        const guardar11=document.getElementById("div4");
        guardar11.style.display="block"
        
    }
}
     
