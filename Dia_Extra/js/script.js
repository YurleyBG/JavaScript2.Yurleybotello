let buscado=document.getElementById("inputProducto")
buscado.addEventListener("input",event1)
function event1(){
    var selector=document.getElementById("vias-A")
    selector.addEventListener('change',opc)
    function opc(opti){
        var selectedOption = this.options[selector.selectedIndex];   
        opti=selectedOption.text
        console.log(opti)
        fetch("https://www.datos.gov.co/resource/i7cb-raxc.json")
        .then(res=>res.json())
        .then(datas=>{
            datas.forEach(via=> {
                let infov=via.viaadministracion
                if(opti===infov){
                    document.getElementById("ver").innerHTML+=`
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Laboratorio</th>
                        <th scope="col">Registro sanitario</th>
                        <th scope="col">Estado registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">${via.producto}</th>
                        <td>${via.titular}</td>
                        <td>${via.registrosanitario}</td>
                        <td>${via.estadoregistro}</td>
                       
                        </tr>
                    </tbody>
                     <thead>
                        <tr>
                        <th scope="col">via administracion</th>
                        <th scope="col">principio activo</th>
                        <th scope="col">cantidad</th>
                        <th scope="col">forma farmaceutica</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>${via.viaadministracion}</td>
                        <td> ${via.principioactivo}</td>
                        <td>${via.cantidad}</td>
                        <td> ${via.formafarmaceutica}</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                        <th scope="col">Descripcion Comercial</th>
                        <th scope="col">Expediente</th>
                        <th scope="col">Fecha Activo</th>
                        <th scope="col">Fecha Inactivo</th>
                        </tr>
                    </thead>
                      <tbody>
                        <tr>
                        <td>${via.descripcioncomercial}</td>
                        <td>${via.expediente}</td>
                        <td>${via.fechaactivo}</td>
                        <td>${via.fechainactivo}</td>
                        
                        </tr>
                    </tbody>
                    </table>
                   <br>
                
                `
                }
            })
        })
       
    }
    fetch("https://www.datos.gov.co/resource/i7cb-raxc.json")
    .then(res=>res.json())
    .then(data=>{
        let buscarIn=buscado.value
        console.log(buscarIn);
        data.forEach(element=> {
            let datos=element.producto
            if(datos===buscarIn){
                document.getElementById("ver").innerHTML+=`
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Laboratorio</th>
                        <th scope="col">Registro sanitario</th>
                        <th scope="col">Estado registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">${element.producto}</th>
                        <td>${element.titular}</td>
                        <td>${element.registrosanitario}</td>
                        <td>${element.estadoregistro}</td>
                       
                        </tr>
                    </tbody>
                     <thead>
                        <tr>
                        <th scope="col">via administracion</th>
                        <th scope="col">principio activo</th>
                        <th scope="col">cantidad</th>
                        <th scope="col">forma farmaceutica</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>${element.viaadministracion}</td>
                        <td> ${element.principioactivo}</td>
                        <td>${element.cantidad}</td>
                        <td> ${element.formafarmaceutica}</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                        <th scope="col">Descripcion Comercial</th>
                        <th scope="col">Expediente</th>
                        <th scope="col">Fecha Activo</th>
                        <th scope="col">Fecha Inactivo</th>
                        </tr>
                    </thead>
                      <tbody>
                        <tr>
                        <td>${element.descripcioncomercial}</td>
                        <td>${element.expediente}</td>
                        <td>${element.fechaactivo}</td>
                        <td>${element.fechainactivo}</td>
                        
                        </tr>
                    </tbody>
                    </table>
                   <br>
                
                `
             
            }
            
            
        });

    })
}