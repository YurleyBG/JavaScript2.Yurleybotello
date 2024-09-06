document.addEventListener("DOMContentLoaded", ()=>{
    const datoscontenedor= document.querySelector(`opciones`);
    const tastInput= document.getElementById(`tastInput`);
    const addtaskButtom=document.getElementById(`addTaskButtom`);
    async function fetchdata() {
        const res = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList`)
        data = await res.json();
        return data;
        
    }
    function displayCapsula(capsula){
        datoscontenedor.innerHTML="";
        capsula.forEach(cap => {
            const capDiv =document.createElement("div");
            if(cap.status==="ready"){
                capDiv.classlist.add("capsulanegativa");
                capDiv.innerHTML=`
                    <div class="capsulanegativa">
                        <div class="infotextnegaticvo">
                            <p>${cap.task}</p>

                        </div>
                        <div class="botonesnegativo">
                            <div class="terminadonegativo">
                                <img src="storage/img/pngwing.com (2).png" data-id="${cap.id}" class="completado">
                            </div>
                            <div class="eliminadonegativo">
                                <img src="storage/img/pngwing.com (4).png" data-id="${cap.id}" class="eliminado">
                            </div>
                        </div>

                    </div>
                `
            }
            if(cap.status==="On hold"){
                capDiv.classlist.add("capsula");
                capDiv.innerHTML=`
                    <div class="capsula">
                        <div class="infotext">
                            <p>${cap.task}</p>

                        </div>
                        <div class="botones">
                            <div class="terminado">
                                <img src="storage/img/pngwing.com (2).png" data-id="${cap.id}" class="completado">
                            </div>
                            <div class="eliminado">
                                <img src="storage/img/pngwing.com (4).png" data-id="${cap.id}" class="eliminado">
                            </div>
                        </div>

                    </div>
                `

            }
            datoscontenedorcotenedor.appendChild(capDiv)
        });
    }

    fetchdata().then(data=>{
        console.log(data)
        displayCapsula(data);
    })

})