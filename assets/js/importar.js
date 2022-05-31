const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector("h2");
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("#input-file");
let files;

button.addEventListener("click", (e) => {
    input.click();
});

input.addEventListener("change", (e) => {
    files = this.files;
    dropArea.classList.add("active");
    showFiles(files);
    dropArea.classList.remove("active");
});

dropArea.addEventListener("dragover", (e) =>{
    e.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Suelta para subir los archivos";
});


dropArea.addEventListener("dragleave", (e) =>{
    e.preventDefault();
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta imágenes";
});


dropArea.addEventListener("drop", (e) =>{
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files);
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta imágenes";
});

function showFiles(files) {
    if(files.length === undefined){
        processFile(files);
    }else{
        for(const file of files){
            processFile(file);
        }
    }
}

function processFile(file) {
    const docType = file.type;
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if(validExtensions.includes(docType)){
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;
        
        fileReader.addEventListener('load', (e) => {
            const fileUrl = fileReader.result;
            const image = `
            <div id = "${id}" class="file-container">
            <img src = "${fileUrl}" alt = "${file.name}" width="50px">
            <div class = "status">
            <span>${file.name}</span>
            <span class = "status-text">
                Loading...
                </span>
                </div>
                </div>
                `;
        document.querySelector('#preview').innerHTML =image;
        });
    fileReader.readAsDataURL(file);
    //uploadFile(file);
    }else{
        alert("No es un archivo válido")
    }
}

/* function uploadFile(file){
        const formData = newFormData();
        formData.append("file", file);

        try{
            const response = await fetch('http://localhost:3000/upload',{
                method: "POST",
                body: formData,
            });
            const responseText = await response.text();
            console.log(responseText);
            
            document.querySelector(`#${id} .status-text`).innerHTML = `<span class = "success">Archivo Subido correctamente...</span>`;
        } catch (error) {
            document.querySelector(`#${id} .status-text`).innerHTML = `<span class = "failure">El archivo no se subió correctamente...</span>`;
        } 
}  */

const expresiones = {
    nombreD: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    orientacion: /^[a-zA-ZÀ-ÿ\s-]{1,15}$/,
    secciones: /[0-9]{2}$/,
    formularios: /^[a-zA-ZÀ-ÿ\s,.]{1,50}$/,
    cuenta: /[0-9,.]{1,8}$/,
}

const formulario = document.querySelector('form');
//console.log(formulario);
const inputs = document.querySelectorAll('input');
//console.log(inputs);

const nombreDisenioError= document.querySelector('#errorNombreDisenio');
const orientacionError = document.querySelector('#errorOrientacion');
const seccionesError = document.querySelector('#errorSecciones');
const formularioError = document.querySelector('#errorFormularios');
const cuentaError = document.querySelector('#errorCuenta');


const estatusInf = {
	nombreD: false,
	orientacion: false,
    secciones: false,
    formularios: false,
    cuenta: false,
}

inputs.forEach((inp)=>{
   // console.log(inp);

    
    inp.addEventListener("keyup", (e)=>{
       // console.log(e.target.name);
        switch(e.target.name){
            case "nombreDisenio":
                //console.log(e.target.value);
                //utilizar expresiones regulares en javascript
                if(expresiones.nombreD.test(e.target.value)){
                    estatusInf.nombreD = true
                    nombreDisenioError.textContent = ""
                }
                else{
                    estatusInf.nombreD = false
                    nombreDisenioError.textContent = "Nombre no valido"
                }
                break

            case "orientacion":
                if(expresiones.orientacion.test(e.target.value)){
                    estatusInf.orientacion = true
                    orientacionError.textContent = ""
                }
                else{
                    estatusInf.orientacion = false
                    orientacionError.textContent = "Tipo orientacion no valido"
                }
                break
            case "secciones":
                if(expresiones.secciones.test(e.target.value)){
                    estatusInf.secciones = true
                    seccionesError.textContent = ""
                }
                else{
                    estatusInf.secciones = false
                    seccionesError.textContent = "Número de secciones no validas"
                }
                break
            case "formularios":
                if(expresiones.formularios.test(e.target.value)){
                    estatusInf.formularios = true
                    formularioError.textContent = ""
                }
                else{
                    estatusInf.formularios = false
                    formularioError.textContent = "Tipo de formulario no valido"
                }
                break
            case "cuenta":
                if(expresiones.cuenta.test(e.target.value)){
                    estatusInf.cuenta = true
                    cuentaError.textContent = ""
                }
                else{
                    estatusInf.cuenta = false
                    cuentaError.textContent = "Cuenta no valida"
                }
                break
        }
    })
}) 

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log(formulario);

   if(!Object.values(estatusInf).includes(false)){
       //console.log("Enviado");
        const datos = Object.fromEntries(
            new FormData(e.target)
        )
        console.log(datos);
        formulario.reset()
    }
})