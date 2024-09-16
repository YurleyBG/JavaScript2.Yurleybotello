//creacion de un elemento personalizable
class CrearBoton extends HTMLElement{
    constructor(){
        super();
        this.textContent ='¡haz click aqui';
        this.addEventListener('click',()=>alert("Hiciste click!!!"));

    }
}
customElements.define('mi-boton',CrearBoton);

//-------------------------------------------------------

class CrearBotonShadow extends HTMLElement{
    constructor(){
        super();
        let miShadow =this.attachShadow({mode:'open'});
        miShadow.innerHTML=`
            <button> soy un boton Lindo! </button>
        `
        
    }
}
customElements.define('boton-shadow',CrearBotonShadow);


