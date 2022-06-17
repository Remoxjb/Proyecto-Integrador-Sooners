const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');

cargarEventos();

function cargarEventos() {
    leerLocalStorageCompra();


    listaCompra.addEventListener('click', deleteProduct);
    calucularTotal();
    procesarCompraBtn.addEventListener("click", procesarCompra)
}


function leerLocalStorageCompra() {
    let productosLS;
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(function(producto) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.image}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.price}</td>
            <td>
                <input type="number" class="form-control cantidad" min="1" value=${producto.amount}>
            </td>
            <td id='subtotales'>${producto.price * producto.amount}</td>
            <td>
                <a href="#" 
                class="delete-producto fas fa-times-circle" 
                style="font-size:30px; text-decoration:none";
                data-toggle="tooltip" data-id="${producto.id}"></a>
            </td>
        `;
        listaCompra.appendChild(row);
    });
}


function deleteProduct(e) {

    e.preventDefault();

    let producto, productoID;
    if (e.target.classList.contains('delete-producto')) {

        e.target.parentElement.parentElement.remove();

        producto = e.target.parentElement;
        productoID = producto.querySelector("a").getAttribute("data-id");

    }

    eliminarProductoLocalStorage(productoID);
    location.reload();
}

function eliminarProductoLocalStorage(productoID) {
    let productosLS
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(function(productoLS, index) {

        if (productoLS.id === productoID) {
            productosLS.splice(index, 1);
        }
    });

    localStorage.setItem('productos', JSON.stringify(productosLS));
}

function obtenerProductosLocalStorage() {
    let productoLS;

    if (localStorage.getItem("productos") === null) {
        productoLS = []
    } else {
        productoLS = JSON.parse(localStorage.getItem("productos"));
    }
    return productoLS


}

function calucularTotal() {
    let productoLS;
    let total = 0,
        subtotal = 0,
        igv = 0;

    productoLS = obtenerProductosLocalStorage();
    for (let i = 0; i < productoLS.length; i++) {
        let element = Number(productoLS[i].price * productoLS[i].amount);
        total = total + element;
    }
    igv = parseFloat(total * 0.18).toFixed(2);
    subtotal = parseFloat(total - igv).toFixed(2);

    document.getElementById("subtotal").innerHTML = "$ " + subtotal;
    document.getElementById("igv").innerHTML = "$ " + igv;
    document.getElementById("total").innerHTML = "$ " + total;

}





function procesarCompra(e) {
    e.preventDefault();
    if (obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            showConfirmButton: false,
            timer: 2000
        }).then(function() {
            window.location = "tienda.html";
        })
    } else if (cliente.value === '' || correo.value === '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los campos requeridos',
            showConfirmButton: false,
            timer: 2000
        })
    } else {
        const cargandoGif = document.querySelector("#cargando");
        cargandoGif.style.display = 'block';
        cargandoGif.style.width = '10%';

        const enviado = document.querySelector("img");
        enviado.src = "assets/img/mail.png";
        enviado.style.display = "block";
        enviado.width = "100";

        setTimeout(() => {
            cargandoGif.style.display = 'none';
            document.querySelector("#loaders").appendChild(enviado);
            setTimeout(() => {
                enviado.remove();
                const $iframe = document.getElementById("tarjeta");
                $iframe.width = "80%";
                $iframe.height = "850";
                $iframe.src = "indexPago.html"
                    /* window.open("indexPago.html", "ventana1", "width=800,height=600,scrollbars=NO") */

                /* localStorage.removeItem("productos");
                location.href = "tienda.html"; */
            })
        }, 2000)

        //aqui se coloca el user id generado en el emailJS
        emailjs.init('user_CEozz2F39lJJOLF5mJiDA')

        /* AGREGAR DATOS DETALLE DEL PEDIDO A UN TEXT AREA */
        const textArea = document.createElement('textarea');
        textArea.id = "detalleCompra";
        textArea.name = "detalleCompra";
        textArea.cols = 60;
        textArea.rows = 10;
        textArea.hidden = true;
        productosLS = obtenerProductosLocalStorage();

        //Send email option 1
        productosLS.forEach(function(producto) {
            textArea.innerHTML += `
                 Producto : ${producto.titulo} <br>
                 Precio : ${producto.price} <br>
                  Cantidad: ${producto.amount} <br>
                 --------------------------------------------- <br>
                 `;
        });
        //End option 1

        //Send email option 2
        //textArea.innerHTML = generarTabla(productosLS).innerHTML;
        //End option 2

        listaCompra.appendChild(textArea);

        /* ------------------------- */

        document.getElementById('procesar-pago')
            .addEventListener('submit', function(event) {
                event.preventDefault();

                const cargandoGif = document.querySelector('#cargando');
                cargandoGif.style.display = 'block';

                const enviado = document.createElement('img');
                enviado.src = 'img/mail.gif';
                enviado.style.display = 'block';
                enviado.width = '150';

                const serviceID = 'default_service';
                const templateID = 'template_3SA9LsqQ';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        cargandoGif.style.display = 'none';
                        document.querySelector('#loaders').appendChild(enviado);

                        setTimeout(() => {
                            compra.vaciarLocalStorage();
                            enviado.remove();
                            window.location = "index.html";
                        }, 2000);
                    }, (err) => {
                        cargandoGif.style.display = 'none';
                        alert("Error al enviar el email\r\n Response:\n " + JSON.stringify(err));
                    });
            });
    }
}


function generarTabla(productosLS) {
    let div = document.createElement("div");

    let tabla = document.createElement("table");

    tabla.innerHTML += `<table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Sub total</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>`;

    const body = tabla.childNodes[3];

    // productosLS = compra.obtenerProductosLocalStorage();
    productosLS.forEach(producto => {
        const row = document.createElement("tr");
        row.innerHTML += `
                            <td>${producto.titulo}</td>
                            <td>${producto.price}</td>
                            <td>${producto.amount}</td>
                            <td>${producto.price * producto.amount}</td>
                        `;
        body.appendChild(row);
    });

    tabla.appendChild(body);
    div.appendChild(tabla);
    return div;
}