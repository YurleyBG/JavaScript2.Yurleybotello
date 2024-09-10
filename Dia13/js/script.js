fetch("https://deckofcardsapi.com/api/deck/new/draw/")
.then(ren=>ren.json())
.then(data=>{
    console.log(data)
    console.log(data.cards[0].images.png)
    document.getElementById(`mostracarta1`).innerHTML+=`
         <img id="cartita" src="${data.cards[0].images.png}" alt="">
    `
})