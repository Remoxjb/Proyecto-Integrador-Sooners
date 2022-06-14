const $formulario = document.getElementById("formularioArchivo");
const $btn_submitFormDB = document.getElementById("btn-formulario-submit");



url_imagenes = [];

const
    dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input");


let file;
button.onclick = () => {
    input.click();
}

input.addEventListener("change", (e) => {

    file = input.files[0];
    dropArea.classList.add("active");

    uploadFile(file);


    showFile();

});



dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Suelta para cargar archivo";
});


dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastrar y suelta para cargar archivo";
});


dropArea.addEventListener("drop", (e) => {
    e.preventDefault();

    file = e.dataTransfer.files[0];


    showFile();

});

function showFile() {
    let fileType = file.type;
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;

            let imgTag = `<img src="${fileURL}" alt="image">`;
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
        uploadFile(file);

    } else {
        alert("Tipo de archivo no valido");
        dropArea.classList.remove("active");
        dragText.textContent = "Suelta para cargar otra imagen";
    }
}


async function uploadFile(file) {

    const formdata = new FormData()
        /* console.log(formdata);
        console.log(file); */
    formdata.append("image", file)
    try {

        fetch("https://api.imgur.com/3/image/", {
            method: "post",
            headers: {
                Authorization: "Client-ID eae2e5e4b1fbe70"
            },
            body: formdata
        }).then(data => data.json()).then(data => {
            /*  console.log(data); */
            link = data.data.link
            url_imagenes.push(link)
            console.log(link);
            console.log(url_imagenes)


        })

    } catch (error) {
        console.error(error);
    }


}





console.log($formulario);

$formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let date = new Date();
    let fecha = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getDate()).padStart(2, '0');


    const datosArchivo = Object.fromEntries(
        new FormData($formulario)
    )

    console.log(datosArchivo);


    fetch("http://localhost:8080/api/producto", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: datosArchivo.nombreDisenio,
                categoria: datosArchivo.orientacion,
                costo: datosArchivo.precio,
                fechaDeCreacion: fecha,
                formularios: datosArchivo.formularios,
                secciones: datosArchivo.secciones,
                stock: true,
                tienda: false,
                galeria: false,
                descripcion: datosArchivo.descripcion,
                cuenta: datosArchivo.cuenta,
                url_imagen: url_imagenes[0],
                id_usuarioCreador: 3
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })


    .catch((error) => {
        //esto es para que muestre un error dentro de la consola y te diga en especifico
        console.error(error);
    })
});















const expresiones = {
    nombreD: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    orientacion: /^[a-zA-ZÀ-ÿ\s-]{1,15}$/,
    secciones: /[0-9]{2}$/,
    formularios: /^[a-zA-ZÀ-ÿ\s,.]{1,50}$/,
    cuenta: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const formulario = document.querySelector('form');
//console.log(formulario);
const inputs = document.querySelectorAll('input');
//console.log(inputs);

const nombreDisenioError = document.querySelector('#errorNombreDisenio');
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

inputs.forEach((inp) => {
    // console.log(inp);


    inp.addEventListener("keyup", (e) => {
        // console.log(e.target.name);
        switch (e.target.name) {
            case "nombreDisenio":
                //console.log(e.target.value);
                //utilizar expresiones regulares en javascript
                if (expresiones.nombreD.test(e.target.value)) {
                    estatusInf.nombreD = true
                    nombreDisenioError.textContent = ""
                } else {
                    estatusInf.nombreD = false
                    nombreDisenioError.textContent = "Nombre no valido"
                }
                break

            case "orientacion":
                if (expresiones.orientacion.test(e.target.value)) {
                    estatusInf.orientacion = true
                    orientacionError.textContent = ""
                } else {
                    estatusInf.orientacion = false
                    orientacionError.textContent = "Tipo Categoría no valido"
                }
                break
            case "secciones":
                if (expresiones.secciones.test(e.target.value)) {
                    estatusInf.secciones = true
                    seccionesError.textContent = ""
                } else {
                    estatusInf.secciones = false
                    seccionesError.textContent = "Número de secciones no validas"
                }
                break
            case "formularios":
                if (expresiones.formularios.test(e.target.value)) {
                    estatusInf.formularios = true
                    formularioError.textContent = ""
                } else {
                    estatusInf.formularios = false
                    formularioError.textContent = "Tipo de formulario no valido"
                }
                break
            case "cuenta":
                if (expresiones.cuenta.test(e.target.value)) {
                    estatusInf.cuenta = true
                    cuentaError.textContent = ""
                } else {
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

    if (!Object.values(estatusInf).includes(false)) {
        //console.log("Enviado");
        const datos = Object.fromEntries(
            new FormData(e.target)
        )
        console.log(datos);

        formulario.reset()
    }
})