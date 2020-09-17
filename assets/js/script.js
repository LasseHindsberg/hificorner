var url = new URLSearchParams(window.location.search);

if (!url.get("id")) {
    showProducts();
}


function showProducts(){
    getProducts()
    .then(function(products){
        let allProducts = document.querySelector(".products");

        products.forEach(function(product) { 
            const productContainer = document.createElement('div');
            productContainer.classList.add('product');
            
            productContainer.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p class="price"><span class="oldPrice">${product.oldPrice}</span>${product.price}</p>
                <a href="" class="productLink">ADD TO CART</a>
            `
            productContainer.querySelector(".productLink").href = `/product.html?id=${product.id}`;
            allProducts.appendChild(productContainer);
        });
    });
}

function getProducts(){
    return fetch("./data.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        return data.product;
    });
}