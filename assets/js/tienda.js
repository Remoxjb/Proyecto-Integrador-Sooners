let allContainerCart = document.querySelector('.row-tienda');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total');
let amountProduct = document.querySelector('.count-product');

let buyThings = [];
let totalCard = 0;
let countProduct = 0;
const carritoProductos = [];
// functions

loadEventListeners();

function loadEventListeners() {
    allContainerCart.addEventListener('click', addProduct);
    containerBuyCart.addEventListener('click', deleteProduct);

}

function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-carrito')) {
        const selectProduct = e.target.parentElement.parentElement;
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    e.preventDefault();
    let producto, productoID;
    if (e.target.classList.contains('delete-product')) {
        e.target.parentElement.remove();
        producto = e.target.parentElement;
        productoID = producto.querySelector("span").getAttribute("data-id");

    }

    eliminarProductoLocalStorage(productoID);
}


function readTheContent(producto) {

    const infoProducto = {
        image: producto.querySelector('div img').src,
        price: producto.querySelector('div button').textContent,
        id: producto.querySelector('q').getAttribute('data-id'),
        amount: 1
    }

    let productosLS;
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(function(productoLS) {
        if (productoLS.id === infoProducto.id) {
            productosLS = productoLS.id;
        }
    })
    if (productosLS === infoProducto.id) {
        Swal.fire({
            type: "info",
            title: "opps..",
            text: "El producto ya esta agregado",
            showConfirmButton: false,
            timer: 1000

        })
    } else {
        loadHtml(infoProducto);
    }

}




function loadHtml(producto) {

    const row = document.createElement('div');
    row.classList.add('item');
    row.innerHTML = `
            <img src="${producto.image}" alt="">
            <div class="item-content">
                <h5 class="cart-price">${producto.price}$</h5>
                <h6>Amount: ${producto.amount}</h6>
            </div>
            <span class="delete-product" data-id="${producto.id}">X</span>
        `;

    containerBuyCart.appendChild(row);
    guardarProductosLocalStorage(producto)


};

function guardarProductosLocalStorage(producto) {
    let productos;
    productos = obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));

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
leerLocalStorage()

function leerLocalStorage() {
    let productosLS;
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(function(producto) {
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
        <img src="${producto.image}" alt="">
        <div class="item-content">
        <h5 class="cart-price">${producto.price}$</h5>
        <h6>Amount: ${producto.amount}</h6>
        </div>
        <span class="delete-product" data-id="${producto.id}">X</span>
        
        
        `;
        containerBuyCart.appendChild(row);
    });
}