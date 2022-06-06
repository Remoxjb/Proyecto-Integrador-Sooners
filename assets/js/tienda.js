let allContainerCart = document.querySelector('.row-tienda');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total');
let amountProduct = document.querySelector('.count-product');

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

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
    debugger
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard = totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);

        countProduct--;
    }
    loadHtml();
}


function readTheContent(product) {

    const infoProduct = {
        image: product.querySelector('div img').src,
        price: product.querySelector('div i').textContent,
        id: product.querySelector('q').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }

    loadHtml();
    console.log(infoProduct);

}




function loadHtml() {
    debugger
    clearHtml();
    buyThings.forEach(product => {
        const { image, price, amount, id } = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5 class="cart-price">${price}$</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);
        priceTotal.innerHTML = totalCard;
        amountProduct.innerHTML = countProduct;

    });
}

function clearHtml() {

    containerBuyCart.innerHTML = '';
    priceTotal.innerHTML = 0;
    amountProduct.innerHTML = countProduct;

}