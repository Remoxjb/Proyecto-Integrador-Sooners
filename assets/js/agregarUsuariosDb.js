const $formulario = document.getElementById('fomr2');
//console.log($formulario);

$formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = Object.fromEntries(
        new FormData(e.target)
    )
    console.log(datos);
    $formulario.reset();

    fetch('http://localhost:8080/api/usuario', {

            method: 'POST',
            body: JSON.stringify({
                nombre: datos.nombre,
                apellido: datos.apellido,
                email: datos.email,
                contrasenia: datos.contrasenia,
                nombreUsuario: datos.usuario
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(resp => {
            const token = resp.headers.get('Authorization');

            if (token && token.includes('Bearer') && resp.ok) {
                localStorage.setItem('token', token);
                console.log(token);
                url = window.location;
                const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
                location.href = path + 'tienda.html';
            } else {
                localStorage.removeItem('token');
            }
        })
        .catch((error) => {
            console.error(error);
        })


});