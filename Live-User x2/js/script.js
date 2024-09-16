class mihtml extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
            <div id="container">
                <div id="barraAzul">
                    <p id="title">LIVE USER FILTER</p>
                    <p id="title1">Search by name and/or location</p>
                    <input type="search" id="buscar" placeholder="Search">
                </div>
                <div id="mostrar"></div>
        
            </div>
        `
    }
}
customElements.define('mi-html', mihtml);
fetch("https://66e45ba7d2405277ed140a12.mockapi.io/info")
.then (res=>res.json())
.then(data=>{
    let esto=data
    esto.forEach(infop => {
        
        document.getElementById("mostrar").innerHTML+=`
            <div class="cuadrito" id="cuadrito">
                <div id="name">${infop.name_full}</div>
                <div id="descripcion">${infop.description}</div>
                <img id="imagen" src="${infop.avatar}" alt="">
            </div>
        `
    })
})
document.getElementById("buscar").addEventListener("input",event1)
function event1(){
    
    document.addEventListener("keyup", (e) => {
        if (e.target.matches("#buscar")) {
            document.querySelectorAll("#cuadrito").forEach(nombres=>{
                nombres.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?nombres.classList.remove("filtro")
                :nombres.classList.add("filtro");
            })
        }
    })
}
       
event1()