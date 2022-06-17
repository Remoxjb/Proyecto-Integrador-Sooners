const $productos = document.getElementById("productos-tienda");

const img = [];

fetch('http://localhost:8080/api/producto/all', {
    headers: {
        'Content-Type': 'application/json',
    }
}).then(resp => resp.json()).then(datos => {
    console.log(datos[0].url_imagen);



    fetch(`https://api.imgur.com/3/image/${"1rYpnTJ"}`, {

            method: 'GET',

            headers: {
                "Content-Type": 'application/json',
                "Authorization": "Client-ID eae2e5e4b1fbe70"
            },

            redirect: 'follow'

        })
        .then(resp2 => resp2.json())
        .then(datos2 => {
            console.log(datos2.data.link);
            img.push(datos2.data.link);
            console.log(img);




            let productos = datos[0];
            console.log(productos.url_imagen);
            console.log(datos);

            templateProducto = `
            <div class="col">
            <div class="card ">
            <div>
            <a href="mostrararticulo.html">
            <img src="${img[0]}" class="card-img-top" alt="..." onclick="location.href='./mostrararticulo.html'">
            </a>
            </div>
            <div class="card-body">
            <Button class="btn-card">${productos.costo}</Button>
            <button class="btn-carrito"><q class="fa-solid fa-cart-shopping" data-id="${productos.id}"></q></button>
            </div>
            </div>
            </div>
            `
            $productos.innerHTML = templateProducto;
        });

})