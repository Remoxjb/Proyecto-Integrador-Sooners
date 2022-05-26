function mostrarRegistro(){
document.getElementById('registrarse').style.display = 'block';
document.getElementById('inicio').style.display= 'none';
}

function mostrarSesion(){
document.getElementById('inicio').style.display = 'block';
document.getElementById('registrarse').style.display = 'none';
}


const mostrar = document.getElementById('iniciarSesion');
//console.log(mostrar);

mostrar.addEventListener("click", (e)=> {
    e.preventDefault();
    //console.log(mostrar);

})