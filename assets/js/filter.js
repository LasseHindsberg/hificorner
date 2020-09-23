let a799 = document.querySelector(".a0-799");
let a800 = document.querySelector(".a800-999");
let a1000 = document.querySelector(".a1000-1499");
let a1500 = document.querySelector(".a1500-1999");
let a2000 = document.querySelector(".a2000-2999");
let a3000 = document.querySelector(".a3000-3499");
let a3500 = document.querySelector(".a3500-4999");
let a5000 = document.querySelector(".a5000-7999");
let a8000 = document.querySelector(".a8000-11999");
let a12000 = document.querySelector(".a12000");


function sortProducts() {
    getProducts()
        .then(function (products) {
            let count = 0;
            let count1 = 0;
            let count2 = 0;
            let count3 = 0;
            let count4 = 0;
            let count5 = 0;
            let count6 = 0;
            let count7 = 0;
            let count8 = 0;
            let count9 = 0;
            
            products.forEach(function (product) {
                
                if (product.price <= 799) {
                    
                    
                    //console.log(product)
                    
                    let s799 = document.querySelector(".s0-799");
                    count++;
                    
                   
                    s799.innerText = count;

                    
            
        
                    
                    a799.addEventListener('click', function(){
                        removeProducts();
                        let allProducts = document.querySelector(".products");
                        products.forEach(function (product) {
                            if (product.price <= 799) {
                            const productContainer = document.createElement('div');
                            productContainer.classList.add('product');
                            
                            productContainer.innerHTML = `
                                <img src="${product.image}" alt="${product.alt}">
                                <p class="products__productName">${product.name}</p>
                                <p class="price"><span class="oldPrice">${product.oldPrice}</span>${product.price}</p>
                                <a href="" class="productLink">ADD TO CART</a>
                            `
                            productContainer.querySelector(".productLink").href = `./product.html?id=${product.id}`;
                            allProducts.appendChild(productContainer);
                            }
                        });
                    });
                
                    
                }
                if (product.price >= 800 && product.price <= 999) {
                    let s800 = document.querySelector(".s800-999");
                    count1++;
                    
                    a800.addEventListener('click', filter);
                    s800.innerText = count1;
                }
                if (product.price >= 1000 && product.price <= 1499) {
                    
                    let s1000 = document.querySelector(".s1000-1499");
                    count2++;
                    
                    a1000.addEventListener('click', filter);
                    s1000.innerText = count2;
                }
                if (product.price >= 1500 && product.price <= 1999) {
                    
                    let s1500 = document.querySelector(".s1500-1999");
                    count3++;
                    
                    a1500.addEventListener('click', filter);
                    s1500.innerText = count3;
                }else{
                    a1500.style.cursor = "default";
                }
                if (product.price >= 2000 && product.price <= 2999) {
                    
                    let s2000 = document.querySelector(".s2000-2999");
                    count4++;
                    
                    a2000.addEventListener('click', filter);
                    s2000.innerText = count4;
                }
                if (product.price >= 3000 && product.price <= 3499) {
                    
                    let s3000 = document.querySelector(".s3000-3499");
                    count5++;
                    
                    a3000.addEventListener('click', filter);
                    s3000.innerText = count5;
                }
                if (product.price >= 3500 && product.price <= 4999) {
                    
                    let s3500 = document.querySelector(".s3500-4999");
                    count6++;
                    
                    a3500.addEventListener('click', filter);
                    s3500.innerText = count6;
                }
                if (product.price >= 5000 && product.price <= 7999) {
                    
                    let s5000 = document.querySelector(".s5000-7999");
                    count7++;
                    
                    a5000.addEventListener('click', filter);
                    s5000.innerText = count7;
                }
                if (product.price >= 8000 && product.price <= 11999) {
                    
                    let s8000 = document.querySelector(".s8000-11999");
                    count8++;
                    
                    a8000.addEventListener('click', filter);
                    s8000.innerText = count8;
                }
                if (product.price >= 12000) {
                    
                    let s12000 = document.querySelector(".s12000");
                    count9++;
                    
                    a12000.addEventListener('click', filter);
                    s12000.innerText = count9;
                }
            })
        })
}
sortProducts();

function filter(){
    removeProducts();
    //addProducts();
}

function removeProducts(){  
    document.querySelectorAll(".product").forEach(n => n.remove());
}
// function addProducts(){
//     getProducts()
//     .then(function (products) {
        
            
        
//     });
// }

function getProducts() {
    return fetch("./data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.product;
        });
}