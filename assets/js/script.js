var url = new URLSearchParams(window.location.search);
function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}

gridView = document.querySelector(".grid-view");
gridView.addEventListener("click", showProductsGrid);

function showProductsGrid(){
    removeProducts()
    showProducts()
    
}

function showProducts(){
    removeProductsList()
    getProducts()
    .then(function(products){
        let allProducts = document.querySelector(".products");
        let items = document.querySelector(".itemsNumber");
        let itemCount = 0;
        products.forEach(function(product) {
            itemCount++;
            items.innerText = itemCount; //Show how many items on the page
            const productContainer = document.createElement('div');
            productContainer.classList.add('product');
            
            productContainer.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p class="products__productName">${product.name}</p>
                <p class="price"><span class="oldPrice">${product.oldPrice.toLocaleString('en-US')}</span>£${product.price.toLocaleString('en-US')}</p>
                <a href="" class="productLink">ADD TO CART</a>
            `
            productContainer.querySelector(".productLink").href = `./product.html?id=${product.id}`;
            allProducts.appendChild(productContainer);
        });
    });
}
showProducts();




listView = document.querySelector(".line-view");
listView.addEventListener("click", showProductsList);

function showProductsList(){
    removeProducts()
    getProducts()
    .then(function(products){
        let allProducts = document.querySelector(".productsList");
        let items = document.querySelector(".itemsNumber");
        let itemCount = 0;
        products.forEach(function(product) {
            itemCount++;
            items.innerText = itemCount; //Show how many items on the page
            const productContainer = document.createElement('div');
            productContainer.classList.add('product-list');
            
            productContainer.innerHTML = `
                <p class="products__productName">${product.name}</p>
                <p class="price"><span class="oldPrice">${product.oldPrice.toLocaleString('en-US')}</span>£${product.price.toLocaleString('en-US')}</p>
                <a href="" class="productLink">ADD TO CART</a>
            `
            productContainer.querySelector(".productLink").href = `./product.html?id=${product.id}`;
            allProducts.appendChild(productContainer);
        });
    });
}

function removeProductsList(){
    document.querySelectorAll(".product-list").forEach(n => n.remove());
}

function removeProducts(){  
    document.querySelectorAll(".product").forEach(n => n.remove());
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