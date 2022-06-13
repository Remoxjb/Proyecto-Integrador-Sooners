const $btn_submitForm = document.getElementById("btn-formulario-submit");

console.log($btn_submitForm);

const $datosFormularios = []
$btn_submitForm.addEventListener("click", (e) => {


    e.preventDefault();

    const $formulario = document.querySelectorAll("#formularioArchivo");
    const $iputs = $formulario[0];


    const datosDelFormulario = {
        nombreDiseño: $iputs[0].value,
        orientation: $iputs[1].value,
        secciones: $iputs[2].value,
        formularios: $iputs[3].value,
        cuenta: $iputs[4].value,
        precio: $iputs[5].value,
        tienda: $iputs[6].value,
        galeria: $iputs[7].value,
        descripcion: $iputs[8].value,
    }

    console.log(datosDelFormulario);

    $datosFormularios.push(datosDelFormulario)

    localStorage.setItem("Datos de diseño", JSON.stringify($datosFormularios));

    const datosDelFormularioGuardados = localStorage.getItem("Datos de diseño");
    console.log("FormularioObjeto", JSON.parse(datosDelFormularioGuardados));


})