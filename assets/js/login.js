const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    usuario: /^[a-zA-ZÀ-ÿ0-9.\s.^]{5,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contrasenia: /^.{4,12}$/,
    repetir: /^.{4,12}$/,
}
function mostrarRegistro(){
    document.getElementById('registrarse').style.display = 'block';
    document.getElementById('inicio').style.display= 'none';
    }
    
    function mostrarSesion(){
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('registrarse').style.display = 'none';
    }

const formulario = document.querySelector('form');
//console.log(formulario);

const inputs = document.querySelectorAll('input')
//console.log(inputs);

const correoError = document.querySelector('#errorCorreo');
const passwordError = document.querySelector('#errorPassword');
const nombreError = document.querySelector('#errorNombre');
const apellidoError = document.querySelector('#errorApellido');
const usuarioError = document.querySelector('#errorUsuario');
const emailError = document.querySelector('#errorEmail');
const contraseniaError = document.querySelector('#errorContrasenia');
const repetirError = document.querySelector('#errorRepetir')

// valida tenga informacion
const estatusInf = {
	correo: false,
	password: false,
    nombre: false,
	apellido: false,
    usuario: false,
	email: false,
    contrasenia: false,
	repetir: false,
}

inputs.forEach((inp)=>{
    //console.log(inp);

    
    inp.addEventListener("keyup", (e)=>{
         //console.log(e.target.name);

        switch(e.target.name){
            case "correo":
                //console.log(e.target.value);
                //utilizar expresiones regulares en javascript
                if(expresiones.correo.test(e.target.value)){
                    estatusInf.correo = true
                    correoError.textContent = ""
                }
                else{
                    estatusInf.correo = false
                    correoError.textContent = "Email no valido"
                }
                break

            case "password":
                if(expresiones.password.test(e.target.value)){
                    estatusInf.password = true
                    passwordError.textContent = ""
                }
                else{
                    estatusInf.password = false
                    passwordError.textContent = "Password no valido"
                }
                break

            case "nombre":
                if(expresiones.nombre.test(e.target.value)){
                    estatusInf.nombre = true
                    nombreError.textContent = ""
                }
                else{
                    estatusInf.nombre = false
                    nombreError.textContent = "Nombre no valido"
                }
                break
                case "apellido":
                    if(expresiones.apellido.test(e.target.value)){
                        estatusInf.apellido = true
                        apellidoError.textContent = ""
                    }
                    else{
                        estatusInf.apellido = false
                        apellidoError.textContent = "Apellido no valido"
                    }
                    break
                case "usuario":
                    if(expresiones.usuario.test(e.target.value)){
                        estatusInf.usuario = true
                        usuarioError.textContent = ""
                    }
                    else{
                        estatusInf.usuario = false
                        usuarioError.textContent = "Usuario no valido"
                    }
                    break
                case "email":
                    if(expresiones.email.test(e.target.value)){
                        estatusInf.email = true
                        emailError.textContent = ""
                    }
                    else{
                        estatusInf.email = false
                        emailError.textContent = "Email no valido"
                    }
                    break
                 case "contrasenia":
                     if(expresiones.contrasenia.test(e.target.value)){
                        estatusInf.contrasenia = true
                        contraseniaError.textContent = ""
                    }
                    else{
                        estatusInf.contrasenia = false
                         contraseniaError.textContent = "Contraseña no valida"
                        }
                        break
                 case "contrasenia":
                        if(expresiones.contrasenia.test(e.target.value)){
                          estatusInf.contrasenia = true
                          contraseniaError.textContent = ""
                        }
                        else{
                            estatusInf.contrasenia = false
                            contraseniaError.textContent = "Contraseña no valida"
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
