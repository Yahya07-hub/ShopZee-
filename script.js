// Script for navigation bar
function navbar() {
    const bar = document.getElementById('toggle');
    const nav = document.getElementById('navlink');
    const close = document.getElementById('close');
    if (toggle) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
    }


    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    }

}

navbar()

// function cursorEffect() {
//     let sneakerContainer = document.querySelector(".sneaker-container")
//     let cursor = document.querySelector(".cursor")

//     sneakerContainer.addEventListener("mousemove", (event) => {
//         gsap.to(cursor, {
//             x: event.clientX,
//             y: event.clientY,

//         })
//     })

//     sneakerContainer.addEventListener("mouseenter", () => {
//         gsap.to(cursor, {
//             scale: 1,
//             opacity: 1
//         })
//     })

//     sneakerContainer.addEventListener('mouseleave', () => {
//         gsap.to(cursor, {
//             scale: 0,
//             opacity: 0
//         })
//     })


// }

// cursorEffect()






// ADD TO CART


let cartIcon = document.querySelector(".cartIcon") 
let closeCart = document.querySelector(".close")
let body = document.querySelector("body")
let productListHTML = document.querySelector(".product-list")

let productList = []

// Cart menu toggle
cartIcon.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

// ADDING PRODUCTS TO HTML
let addDatatoHTML = () => {
    productListHTML.innerHTML = "";
    if (productList.length > 0) {
        productList.forEach(product => {
            let newProduct = document.createElement('div')
            newProduct.classList.add('pro')
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
            <img src="${product.image}" alt="">
                <div class="info">
                    <span>${product.brand}</span>
                    <p>${product.name}</p>
                    <h4><i class="fa fa-indian-rupee-sign"></i>${product.price}</h4>
                </div>
                <button class="cartbtn fa fa-shopping-cart"></button>`
            productListHTML.appendChild(newProductt)
        });
    }
}

// ADD TO CART FUNCTION
productListHTML.addEventListener('click', (e) => {
    let clickPosition = e.target;
    if (clickPosition.classList.contains('cartbtn')) {
        let productId = clickPosition.parentElement.dataset.id
        addToCart(productId)
    }
})

// FETCHING PRODUCTS FROM JSON FILE
const initApp = () => {

    let p = fetch('products.json')
    p.then(response => response.json())
    .then(data => {
        productList = data;
        addDatatoHTML()
    })

}

initApp()