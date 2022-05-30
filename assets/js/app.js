const $contenedorNosotros = document.getElementById("contenedor-Portafolio");

const $linksNosotros = document.querySelectorAll(".portafolio");

const $nosotros = document.querySelectorAll(".nosotros");





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
            <img src="https://www.biografiasyvidas.com/biografia/z/fotos/zuckerberg.jpg" alt="">
        </div>
        <h4>Alejandro Andrade</h4>
        <h6>Full Stack Developer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae accusamus deserunt ducimus repellendus odio similique asperiores,</p>
    </div>
    <div class="links">
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        
        <a href="#"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-solid fa-envelope"></i></a>
    </div>

  </div>
</div>
<div class="col">
  <div class="carta">
    <div class="content">
        <span></span>
        <div class="img">
            <img src="https://www.biografiasyvidas.com/biografia/z/fotos/zuckerberg.jpg" alt="">
        </div>
        <h4>Juan Badillo</h4>
        <h6>Full Stack Developer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae accusamus deserunt ducimus repellendus odio similique asperiores,</p>
    </div>
    <div class="links">
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        
        <a href="#"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-solid fa-envelope"></i></a>
    </div>

  </div>
</div>
<div class="col">
  <div class="carta">
    <div class="content">
        <span></span>
        <div class="img">
            <img src="https://www.biografiasyvidas.com/biografia/z/fotos/zuckerberg.jpg" alt="">
        </div>
        <h4>Marco Aurelio</h4>
        <h6>Full Stack Developer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae accusamus deserunt ducimus repellendus odio similique asperiores,</p>
    </div>
    <div class="links">
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        
        <a href="#"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-solid fa-envelope"></i></a>
    </div>

  </div>
</div>
<div class="col">
  <div class="carta">
    <div class="content">
        <span></span>
        <div class="img">
            <img src="https://www.biografiasyvidas.com/biografia/z/fotos/zuckerberg.jpg" alt="">
        </div>
        <h4>Eduardo Farfan</h4>
        <h6>Full Stack Developer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae accusamus deserunt ducimus repellendus odio similique asperiores,</p>
    </div>
    <div class="links">
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        
        <a href="#"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-solid fa-envelope"></i></a>
    </div>

  </div>
</div>
<div class="col">
  <div class="carta">
    <div class="content">
        <span></span>
        <div class="img">
            <img src="https://www.biografiasyvidas.com/biografia/z/fotos/zuckerberg.jpg" alt="">
        </div>
        <h4>Daniel Perez</h4>
        <h6>Full Stack Developer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae accusamus deserunt ducimus repellendus odio similique asperiores,</p>
    </div>
    <div class="links">
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        
        <a href="#"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-solid fa-envelope"></i></a>
    </div>

  </div>
</div>
<div class="col">
  <div class="carta">
    <div class="content">
        <span></span>
        <div class="img">
            <img src="https://www.biografiasyvidas.com/biografia/z/fotos/zuckerberg.jpg" alt="">
        </div>
        <h4>Alex Tovar</h4>
        <h6>Full Stack Developer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae accusamus deserunt ducimus repellendus odio similique asperiores,</p>
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




function mostrarPantalla(t) {

  

  template = t
  
  $contenedorNosotros.innerHTML = template;
  
  

}

function scrollClick(){
  window.scroll(0, 1600)
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
        setTimeout(function () {
          $contenedorJs1.style.opacity = "1";
          
        }, 500); 

        break;
      case "ptf_2":
        mostrarPantalla(ptf_2);
        const $contenedorJs2 = document.querySelector(".contenedor-js-app-2");
        setTimeout(function () {
          $contenedorJs2.style.opacity = "1";
          
        }, 500);   


        break;
      case "ptf_3":

      mostrarPantalla(ptf_3)
        const $contenedorJs3 = document.querySelector(".contenedor-js-app-3");
        setTimeout(function () {
          $contenedorJs3.style.opacity = "1";
          
        }, 500);   

        break;
    
      
    }
    
  })

  
  
  
}




