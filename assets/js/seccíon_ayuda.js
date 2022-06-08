const $iconoAyuda = document.querySelectorAll(".iconoAyuda");

console.log($iconoAyuda);
const $divJs = document.getElementById("divjs")

console.log($divJs);
let mostrar = 0;
$iconoAyuda.forEach(icono => {
    console.log(icono);
    icono.addEventListener("click", (e) => {
        let dato = icono.classList[2];
        console.log(dato);
        if (mostrar === 0) {

            switch (dato) {

                case "fa-person-circle-question":
                    const iconoInsert = `<i class=" icon-activo fa-solid fa-person-circle-question"></i>`
                    const template = `
                    <div class="col-2 mb-4 text-center">${iconoInsert}</div>
                    <div class="col"> <p class="texto-js text-dark" id="texto-js">Al dar click en el apartado de equipo te desplegará una breve descripción de nuestros desarrolladores y sus medios de contacto. Si deseas atención personalizada para tu proyecto puedes contactarnos y con gusto haremos realidad tus proyectos.</p> 
                    </div>`

                    $divJs.innerHTML = template

                    break;

                case "fa-cart-shopping":
                    const iconoInsert1 = `<i class=" icon-activo fa-solid fa-cart-shopping"></i>`
                    const template1 = `
                        <div class="col-2 mb-4 text-center">${iconoInsert1}</div>
                        <div class="col"> <p class="texto-js text-dark" id="texto-js">¿Tus productos no se agregaron de manera correcta? o ¿El monto a pagar es diferente al mencionado dentro de la tienda? Solo tienes que hacer llegar a alguno de nuestros colaboradores el motivo por el cual no se realizó el pago para dar solución a la brevedad.</p> 
                        </div>`

                    $divJs.innerHTML = template1;
                    break;
                case "fa-handshake-angle":
                    const iconoInsert2 = `<i class=" icon-activo fa-solid fa-handshake-angle"></i>`
                    const template2 = `
                            <div class="col-2 mb-4 text-center">${iconoInsert2}</div>
                            <div class="col"> <p class="texto-js text-dark" id="texto-js">Esta sección estará disponible próximamente.</p> 
                            </div>`

                    $divJs.innerHTML = template2;
                    break;
                case "fa-envelope-open-text":
                    const iconoInsert3 = `<i class=" icon-activo fa-solid fa-envelope-open-text"></i>`
                    const template3 = `
                                <div class="col-2 mb-4 text-center">${iconoInsert3}</div>
                                <div class="col"> <p class="texto-js text-dark" id="texto-js">Lo que tienes que hacer es llenar el apartado de contacto el cual te llevará a tu correo donde nos podrás hacer llegar tu problema y darte solución lo antes posible.</p> 
                                </div>`

                    $divJs.innerHTML = template3;

                    break;





            }
            mostrar = 1;
        } else {
            $divJs.innerHTML = "";
            mostrar = 0;
        }


    });


}

);