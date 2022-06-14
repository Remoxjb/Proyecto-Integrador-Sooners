const $formulario = document.getElementById('fomr2');
//console.log($formulario);

$formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = Object.fromEntries(
        new FormData(e.target)
    )
    console.log(datos);
    $formulario.reset();

    fetch('http://localhost:8080/api/usuariocreador', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: datos.nombre,
                apellido: datos.apellido,
                email: datos.email,
                contrasenia: datos.contrasenia,
                nombreUsuario: datos.usuario
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