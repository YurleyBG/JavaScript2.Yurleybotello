fetch("https://www.datos.gov.co/resource/i7cb-raxc.json")
.then(rea=>rea.json())
.then(data=>{
    console.log(data)
    data.forEach(element => {
      
        document.getElementById("mostrar").innerHTML+=`
            ${element.titular}<br>
        `
   
    
    });

})