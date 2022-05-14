const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    compania: /^[a-zA-ZÀ-ÿ0-9.\s]{1,60}$/,
    mensaje: /^[a-zA-ZÀ-ÿ0-9.\s]{1,100}$/,
}

const formulario = document.querySelector('form');
//console.log(formulario);
const inputs = document.querySelectorAll('input');
//console.log(inputs);

const nombreError = document.querySelector('#errorNombre');
const correoError = document.querySelector('#errorCorreo');
const companiaError = document.querySelector('#errorCompania');
const mensajeError = document.querySelector('#errorMensaje');


const informacionStatus ={
    nombre: false,
    correo: false,
    compania: false,
    mensaje: false,
}

inputs.forEach((inp)=>{
	//console.log(inp);
	inp.addEventListener("keyup",(e)=>{
		//console.log(e.target.name);

		switch (e.target.name){
			case "nombre":
				//console.log(e.target.value);
				//utilizar espresiones regulares en javaScript
				if(expresiones.nombre.test(e.target.value)){
					informacionStatus.nombre = true
					nombreError.textContent = ""
				}
				else{
					informacionStatus.nombre = false
					nombreError.textContent = "Nombre no valido"
				}
				break

			case "correo":
				if(expresiones.correo.test(e.target.value)){
					informacionStatus.correo = true
					correoError.textContent = ""
				}
				else{
					informacionStatus.correo = false
					correoError.textContent = "Correo no valido"
				}
				break
			case "compania":
				if(expresiones.compania.test(e.target.value)){
					informacionStatus.compania = true
					companiaError.textContent = ""
				}
				else{
					informacionStatus.compania = false
					companiaError.textContent = "Empresa incorrecta"
				}
				break
			case "mensaje":
				if(expresiones.mensaje.test(e.target.value)){
					informacionStatus.mensaje = true
					mensajeError.textContent = ""
				}
				else{
					informacionStatus.mensaje = false
					mensajeError.textContent = "Mensaje incorrecto"
				}
				break
			
		}
			
	})
})

//para identificar que elemento es es que esta escribiendo
formulario.addEventListener("submit", (e) =>{
	e.preventDefault();

    const check = document.getElementById("terminos").checked

    if(!Object.values(informacionStatus).includes(false) && check == true){
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos)
		formulario.reset()

	}
	else{
	}
})