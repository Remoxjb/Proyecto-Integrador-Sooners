const $contenedorParaJs = document.getElementById('contenedor-para-Js')
console.log($contenedorParaJs);
/* Tienda datos */
const $cartasTienda = document.querySelectorAll(".row-tienda .col .card");
/* window.open("http://www.desarrolloweb.com", "ventana1", "width=800,height=500,scrollbars=NO"); */



const $btn_carritos = document.getElementsByClassName("btn-carrito");
console.log($btn_carritos);


const datosTarjeta = []

for (let i = 0; i < $btn_carritos.length; i++) {
    const btnCarrito = $btn_carritos[i];
    btnCarrito.addEventListener("click", (e) => {
        e.preventDefault





        const $datosCartas = {
            id: btnCarrito.parentElement.parentElement.id,
            titulo: btnCarrito.parentElement.children[0].textContent,
            img: btnCarrito.parentElement.parentElement.children[0].children[0].src,
            precio: btnCarrito.parentElement.parentElement.children[1].children[1].textContent
        }

        /* Carrito datos */


        console.log($datosCartas);



    })

}