const cartBox = document.querySelector('#cart');
const cartList = document.querySelector('#cart-list');
const clearInput = document.querySelector('#clear');

const productsList = document.querySelector('#products-list');
let cartProducts = [];

const cartOptions = document.querySelector('#cart-options');

eventListener();
function eventListener() {
    productsList.addEventListener('click', addProduct);
    
    cartBox.addEventListener('click', deleteProduct);
    
    clearInput.addEventListener('click', () => {
        cartProducts = [];
        createHTML();
        moreAmount();
    })

    moreAmount();
}

function addProduct(e) {

    if (e.target.classList.contains('product__card-cta')) {
        e.preventDefault();
        const productSelect = e.target.parentElement.parentElement;
        readProductSelect(productSelect);
    }

}

function readProductSelect(product) {
    const newProduct = {
        img: product.querySelector('img').src,
        title: product.querySelector('.product__card-title').textContent,
        price: product.querySelector('.product__card-price').textContent,
        amount: 1,
        id: product.querySelector('a').getAttribute('data-id')
    }


    const exist = cartProducts.some((product) => {
        return product.id === newProduct.id;
    })

    if (exist) {

        cartProducts = cartProducts.map((product)=>{
            if (product.id === newProduct.id) {
                product.amount++;
                return product;
            }else{
                return product;
            }
        })

    } else {
        cartProducts = [...cartProducts, newProduct];
        moreAmount();
        console.log(cartProducts.length);
    }

    createHTML();

}

function deleteProduct(e) {
    if (e.target.classList.contains('delete')) {
        e.preventDefault();
        const idProduct = e.target.getAttribute('data-id')

        cartProducts = cartProducts.filter((product) => {
            return product.id !== idProduct;
        })

        createHTML();
        moreAmount();
    }
}

function createHTML() {

    clearHTML();

    cartProducts.forEach((product) => {
        const { img, title, price, amount, id } = product;

        const tr = document.createElement('div');
        tr.classList.add('new-product');

        tr.innerHTML = `

            <div>
                <img src=${img} width="70" class="img-list"/>
            </div>

            <div>
                <p>${title}</p>
            </div>

            <div>
                <p>${price}</p>
            </div>

            <div>
                <p>${amount}</p>
            </div>

            <a data-id="${id}" class="delete">x</a>

        `;

        cartList.appendChild(tr);
    })
}

function moreAmount(){
    const p = document.createElement('p');
    p.innerHTML = `
        <p class="amount">${cartProducts.length}</p>
    `
    cartOptions.appendChild(p);
}

function clearHTML() {
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }
}


