const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/,
    telefono: /^\d{7,14}$/,
    direccion: /^[a-zA-ZÀ-ÿ0-9.\s]{1,60}$/,
    ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
}

const formulario = document.querySelector('form');
//console.log(formulario);

const inputs = document.querySelectorAll('input')
//console.log(inputs);

const correoError = document.getElementById('#errorCorreo');
const passwordError = document.getElementById('#errorPassword');

// valida tenga informacion
const estatusInf = {
	correo: false,
	password: false,
}

inputs.forEach((inp)=>{
    //console.log(inp);

    
    inp.addEventListener("keyup", (e)=>{
         //console.log(e.target.name);

        switch(e.target.name){
            case "correo":
                console.log(e.target.value);
                //utilizar expresiones regulares en javascript
                if(expresiones.correo.test(e.target.value)){
                    estatusInf.correo = true
                    correoError.textContent = ""
                }
                else{
                    estatusInf.correo = false
                    correoError.textContent = "Correo no valido"
                }
                break

            case "password":
                if(expresiones.password.test(e.target.value)){
                    estatusInf.password = true
                    passwordError.textContent = ""
                }
                else{
                    estatusInf.password = false
                    passwordError.textContent = "Correo no valido"
                }
                break

        }
    })
}) 
//paso 1 identificar que elemento esta escribiendo

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log(formulario);

   if(!Object.values(estatusInf).includes(false)){
       //console.log("Enviado");
        const datos = Object.fromEntries(
            new FormData(e.target)
        )
        formulario.reset()
    }
})
