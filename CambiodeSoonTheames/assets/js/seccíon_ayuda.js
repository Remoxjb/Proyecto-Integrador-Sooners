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
                    <div class="col"> <p class="texto-js text-dark" id="texto-js">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fuga in fugiat recusandae ipsa quos ullam repudiandae fugit eius odaoeaoeit.</p> 
                    </div>`

                    $divJs.innerHTML = template

                    break;

                case "fa-cart-shopping":
                    const iconoInsert1 = `<i class=" icon-activo fa-solid fa-cart-shopping"></i>`
                    const template1 = `
                        <div class="col-2 mb-4 text-center">${iconoInsert1}</div>
                        <div class="col"> <p class="texto-js text-dark" id="texto-js">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fuga in fugiat recusandae ipsa quos ullam repudiandae fugit eius odaoeaoeit.</p> 
                        </div>`

                    $divJs.innerHTML = template1;
                    break;
                case "fa-handshake-angle":
                    const iconoInsert2 = `<i class=" icon-activo fa-solid fa-handshake-angle"></i>`
                    const template2 = `
                            <div class="col-2 mb-4 text-center">${iconoInsert2}</div>
                            <div class="col"> <p class="texto-js text-dark" id="texto-js">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fuga in fugiat recusandae ipsa quos ullam repudiandae fugit eius odaoeaoeit.</p> 
                            </div>`

                    $divJs.innerHTML = template2;
                    break;
                case "fa-envelope-open-text":
                    const iconoInsert3 = `<i class=" icon-activo fa-solid fa-envelope-open-text"></i>`
                    const template3 = `
                                <div class="col-2 mb-4 text-center">${iconoInsert3}</div>
                                <div class="col"> <p class="texto-js text-dark" id="texto-js">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fuga in fugiat recusandae ipsa quos ullam repudiandae fugit eius odaoeaoeit.</p> 
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