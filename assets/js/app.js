const $contenedorNosotros = document.getElementById("contenedor-Portafolio");

const $linksNosotros = document.querySelectorAll(".portafolio");

const $nosotros = document.querySelectorAll(".nosotros");

const $contanedorLista = document.getElementById("contenedor-lista-nosotros");

console.log($contanedorLista);

const ptf_1 = `
<div class="row contenedor-js-app-1" id="contenedor-js-1">
    
  <div   div class="col-12 ">
    <h2>¿Que hacemos en SoonThemes?</h2>
      
  </div>

  <div class="col-12 col-sm-6 text-center mt-4">
    <img class="img-fluid" width="800px" src="assets/img/undraw_innovative_re_rr5i.svg" alt="">
  </div>

  <div class="col-12 col-sm-6">
    <p class="textoNosotros">Es SoonThemes creamos diseños funcionales para que inicies tu pagina web, en la tienda podrás encontrar una variedad de diseños y estilos, y comprarlos fácilmente, asi mismo podrás ponerte en contacto para un diseño exclusivo para tu negocio  </p>  
  </div>
</div>
`
const ptf_2 = `
<h3 id="contenedor-js-2">Equipo de desarrollo</h3>
<div class="row contenedor-js-app-2">
<div class="col">
  <div class="carta">
    <div class="content">
        <span></span>
        <div class="img">
            <img src="assets/img/fotoAle.jpg" alt="">
        </div>
        <h4>Alejandro Andrade</h4>
        <h6>Full Stack Developer</h6>
        <p> 
          Estudiante de la carrera de ingeniería en sistemas computacionales,
          apasionado por la tecnología y programación 
        </p>
    </div>
    <div class="links">
        <a href="https://www.linkedin.com/in/alejandro-andrade-rangel"><i class="fa-brands fa-linkedin-in"></i></a>
        
        <a href="https://github.com/AleRangel"><i class="fa-brands fa-github"></i></a>
        <a href="mailto: ale.andrade.rangel@gmail.com"><i class="fa-solid fa-envelope"></i></a>
    </div>

  </div>
</div>
<div class="col">
  <div class="carta">
    <div class="content">
        <span></span>
        <div class="img">
            <img src="assets/img/fotoJB.jpeg" alt="">
        </div>
        <h4>Juan Badillo</h4>
        <h6>Full Stack Developer</h6>
        <p>Soy administrador Industrial egresado de UPIICSA, ademas de ser Desarrollador Java Full Stack y prentendo iniciar una carrera laboral y personal dentro del ramo tecnológico.
        </p>
    </div>
    <div class="links">
        <a href="https://www.linkedin.com/in/juan-badillo-vazquez-vw/"><i class="fa-brands fa-linkedin-in"></i></a>
        
        <a href="https://github.com/Remoxjb"><i class="fa-brands fa-github"></i></a>
        <a href="mailto: juan.badillo.v@gmail.com"><i class="fa-solid fa-envelope"></i></a>
    </div>

  </div>
</div>
<div class="col">
  <div class="carta">
    <div class="content">
        <span></span>
        <div class="img">
            <img src="assets/img/fotoMarco.jpg" alt="">
        </div>
        <h4>Marco Aurelio</h4>
        <h6>Full Stack Developer</h6>
        <p>Soy estudiante de Ingeniería Eléctrica, el diseño es un factor fundamental en cualquier sector, si quieres que tu producto sea tendencia necesitas un buen diseño.</p>
    </div>
    <div class="links">
        <a href="#"><i class="www.linkedin.com/in/marco-aurelio-campos-alvarez"></i></a>
        
        <a href="#"><i class="https://github.com/MarquiCam"></i></a>
        <a href="#"><i class="aurelie.marquie@outlook.com"></i></a>
    </div>

  </div>
</div>
<div class="col">
  <div class="carta">
    <div class="content">
        <span></span>
        <div class="img">
            <img src="assets/img/yoEdduF.jpg" alt="">
        </div>
        <h4>Eduardo Farfán</h4>
        <h6>Full Stack Developer</h6>
        <p>Estudiante en la carrera de Física, enfocado en la formación técnica dentro del campo de la tecnología y el desarrollo web profesional</p>
    </div>
    <div class="links">
        <a href="https://www.linkedin.com/in/eduardo-farfan-coronado22"><i class="fa-brands fa-linkedin-in"></i></a>
        
        <a href="https://github.com/MrEddyFar65"><i class="fa-brands fa-github"></i></a>
        <a href="mailto: farfan58.edu@gmail.com"><i class="fa-solid fa-envelope"></i></a>
    </div>

  </div>
</div>
<div class="col">
  <div class="carta">
    <div class="content">
        <span></span>
        <div class="img">
            <img src="assets/img/FotoDan.png" alt="">
        </div>
        <h4>Daniel Perez</h4>
        <h6>Full Stack Developer</h6>
        <p>Soy Ing. En Comunicaciones y Electrónica y programador como Java Full Stack. Me considero una persona emprendedora, motivada y proactiva.</p>
    </div>
    <div class="links">
        <a href="https://www.linkedin.com/in/danielprzgmz/"><i class="fa-brands fa-linkedin-in"></i></a>
        
        <a href="https://github.com/DansPrz"><i class="fa-brands fa-github"></i></a>
        <a href="mailto: danielprz.098@gmail.com"><i class="fa-solid fa-envelope"></i></a>
    </div>

  </div>
</div>
<div class="col">
  <div class="carta">
    <div class="content">
        <span></span>
        <div class="img">
            <img src="assets/img/rightslefie.jpg" alt="">
        </div>
        <h4>Alex Tovar</h4>
        <h6>Full Stack Developer</h6>
        <p>Soy muy enfocado a mi trabajo, soy muy adaptable, siempre estoy dispuesto a ayudar y siempre estoy aprendiendo algo nuevo.</p>
    </div>
    <div class="links">
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        
        <a href="#"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-solid fa-envelope"></i></a>
    </div>

  </div>
</div>
</div>
`
const ptf_3 = `
<div class="row contenedor-js-app-3" id="contenedor-js-3">
          <div class="col-12">
            <h2>Nuestra Tienda</h2>
          </div>
          <div class="col-12 col-md-6">
            <img class="img-fluid" width="600px" src="assets/img/tienda.png" alt="" srcset="">
            <a href="tienda.html"><div class="container-fluid">
        
            <a type="button" href="tienda.html" class="btn-portada text-center">
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
              <span id="span4"></span>
              Entrar
            </a>
          </div></a> 
          </div>
          <div class="col">
            <div class="row">
              <div class="col-12"><p class="texto-tienda">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus libero, asperiores, id facere iure consequuntur dicta, animi quaerat earum eaque omnis perspiciatis cum ea sed officiis aliquam soluta consectetur.</p></div>
              <div class="col"><img width="350px" class="img-fluid"  src="assets/img/undraw_add_information_j2wg.svg" alt="" srcset=""></div>
            </div>
            
          </div>
          
        </div>

`
const ptf_4 = `
        <div class="row contenedor-js-app-4" id="contenedor-js-4">

            <div div class="col-12 ">
                <h2>¿Que hacemos en SoonThemes?</h2>

            </div>

            <div class="col-12 col-sm-6 text-center mt-4">
                <img class="img-fluid" width="800px" src="assets/img/login.png" alt="">
                <a type="button" href="login.html" class="btn-portada text-center">
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                    <span id="span4"></span> Inicia sesión
                </a>
            </div>

            <div class="col-12 col-sm-6">
                <p class="textoNosotros">Podras Iniciar sessión o regístrarte en es SoonThemes, para tener acceso a las utilidades importantes de la tienda, compra y vende tus diseños en SoonThemes a hora.
            </div>
        </div>


`



function mostrarPantalla(t) {



    template = t

    $contenedorNosotros.innerHTML = template;



}

function scrollClick() {
    $contanedorLista.scrollIntoView(true)
}


for (let i = 0; i < $linksNosotros.length; i++) {

    const link = $linksNosotros[i];




    link.addEventListener("click", (e) => {
        e.preventDefault();
        scrollClick();
        $contenedorNosotros.style.opacity = 1;
        switch (link.id) {
            case "ptf_1":

                mostrarPantalla(ptf_1);
                const $contenedorJs1 = document.querySelector(".contenedor-js-app-1");
                setTimeout(function() {
                    $contenedorJs1.style.opacity = "1";

                }, 500);

                break;
            case "ptf_2":
                mostrarPantalla(ptf_2);
                const $contenedorJs2 = document.querySelector(".contenedor-js-app-2");
                setTimeout(function() {
                    $contenedorJs2.style.opacity = "1";

                }, 500);


                break;
            case "ptf_3":

                mostrarPantalla(ptf_3)
                const $contenedorJs3 = document.querySelector(".contenedor-js-app-3");
                setTimeout(function() {
                    $contenedorJs3.style.opacity = "1";

                }, 500);

                break;

            case "ptf_4":

                mostrarPantalla(ptf_4)
                const $contenedorJs4 = document.querySelector(".contenedor-js-app-4");
                setTimeout(function() {
                    $contenedorJs4.style.opacity = "1";
                }, 500);

                break;


        }

    })




}


const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{10,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const formulario = document.querySelector('form');
//console.log(formulario);

const inputs = document.querySelectorAll('input');


const nombreError = document.querySelector('#errorNombre');
const correoError = document.querySelector('#errorCorreo');

const estatusInf = {
	nombre: false,
	correo: false,    
}

inputs.forEach((inp)=>{
  //console.log(inp);

  
  inp.addEventListener("keyup", (e)=>{
       //console.log(e.target.name);

      switch(e.target.name){
          
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
        case "correo":
              if(expresiones.correo.test(e.target.value)){
                  estatusInf.correo = true
                  correoError.textContent = ""
              }
              else{
                  estatusInf.correo = false
                  correoError.textContent = "Email no valido"
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