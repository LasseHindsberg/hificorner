function counter() {
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
                
                if (product.price >= 0 && product.price <= 799) {
                    let s799 = document.querySelector(".s0-799");
                    count++;
                    s799.innerText = count;
                }
                if (product.price >= 800 && product.price <= 999) {
                    let s800 = document.querySelector(".s800-999");
                    count1++;
                    s800.innerText = count1;
                }
                if (product.price >= 1000 && product.price <= 1499) {
                    
                    let s1000 = document.querySelector(".s1000-1499");
                    count2++;
                    s1000.innerText = count2;
                }
                if (product.price >= 1500 && product.price <= 1999) {
                    
                    let s1500 = document.querySelector(".s1500-1999");
                    count3++;
                    s1500.innerText = count3;
                }
                if (product.price >= 2000 && product.price <= 2999) {
                    
                    let s2000 = document.querySelector(".s2000-2999");
                    count4++;
                    s2000.innerText = count4;
                }
                if (product.price >= 3000 && product.price <= 3499) {
                    
                    let s3000 = document.querySelector(".s3000-3499");
                    count5++;
                    s3000.innerText = count5;
                }
                if (product.price >= 3500 && product.price <= 4999) {
                    
                    let s3500 = document.querySelector(".s3500-4999");
                    count6++;
                    s3500.innerText = count6;
                }
                if (product.price >= 5000 && product.price <= 7999) {
                    let s5000 = document.querySelector(".s5000-7999");
                    count7++;
                    s5000.innerText = count7;
                }
                if (product.price >= 8000 && product.price <= 11999) {
                    
                    let s8000 = document.querySelector(".s8000-11999");
                    count8++;
                    s8000.innerText = count8;
                }
                if (product.price >= 12000 && product.price <= 1000000000000) {
                    
                    let s12000 = document.querySelector(".s12000");
                    count9++;
                    s12000.innerText = count9;
                }
            });
        })
}
counter();





var url = new URLSearchParams(window.location.search);
var minprice = url.get("minprice");
var maxprice = url.get("maxprice");
var category = url.get("category");
var manufactor = url.get("manufactor");

if (minprice || maxprice) {
    getProducts()
        .then(function (products) {
            let result = products.filter(function (product) {
                return (product.price >= minprice && product.price <= maxprice)
            });
            let count = 0;
            let itemsNumber = document.querySelector(".itemsNumber");
            let allProducts = document.querySelector(".products");
            document.querySelectorAll(".product").forEach(n => n.remove());
            result.forEach(function (product) {
                count++;
                const productContainer = document.createElement('div');
                productContainer.classList.add('product');
                productContainer.innerHTML = `
            <img src="${product.image}" alt="${product.alt}">
            <p class="products__productName">${product.name}</p>
            <p class="price"><span class="oldPrice">${product.oldPrice.toLocaleString('en-US')}</span>£${product.price.toLocaleString('en-US')}</p>
            <a href="" class="productLink">ADD TO CART</a>`
                productContainer.querySelector(".productLink").href = `./product.html?id=${product.id}`;
                allProducts.appendChild(productContainer);
                itemsNumber.innerHTML = count;
            });
        })
}
if (category) {
    getProducts()
        .then(function (products) {
            let result = products.filter(function (product) {
                return (category == product.category);
            });
            let count = 0;
            let itemsNumber = document.querySelector(".itemsNumber");
            let allProducts = document.querySelector(".products");
            document.querySelectorAll(".product").forEach(n => n.remove());
            result.forEach(function (product) {
                count++;
                const productContainer = document.createElement('div');
                productContainer.classList.add('product');
                productContainer.innerHTML = `
            <img src="${product.image}" alt="${product.alt}">
            <p class="products__productName">${product.name}</p>
            <p class="price"><span class="oldPrice">${product.oldPrice.toLocaleString('en-US')}</span>£${product.price.toLocaleString('en-US')}</p>
            <a href="" class="productLink">ADD TO CART</a>`
                productContainer.querySelector(".productLink").href = `./product.html?id=${product.id}`;
                allProducts.appendChild(productContainer);
                itemsNumber.innerHTML = count;
            });
        })
}
if (manufactor) {
    getProducts()
        .then(function (products) {
            let result = products.filter(function (product) {
                return (manufactor == product.addInfo[0].manufactor);
            });
            document.querySelectorAll(".product").forEach(n => n.remove());
            let count = 0;
            let itemsNumber = document.querySelector(".itemsNumber");
            let allProducts = document.querySelector(".products");
            result.forEach(function (product) {
                count++;
                const productContainer = document.createElement('div');
                productContainer.classList.add('product');
                productContainer.innerHTML = `
            <img src="${product.image}" alt="${product.alt}">
            <p class="products__productName">${product.name}</p>
            <p class="price"><span class="oldPrice">${product.oldPrice.toLocaleString('en-US')}</span>£${product.price.toLocaleString('en-US')}</p>
            <a href="" class="productLink">ADD TO CART</a>`
                productContainer.querySelector(".productLink").href = `./product.html?id=${product.id}`;
                allProducts.appendChild(productContainer);
                itemsNumber.innerHTML = count;
            });
        })
}



function getProducts() {
    return fetch("./data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.product;
        });
}


let arcamAmount = document.querySelector(".arcamAmount");
let astellAmount = document.querySelector(".astellAmount");
let atcAmount = document.querySelector(".atcAmount");
let audiolabAmount = document.querySelector(".audiolabAmount");
let avidAmount = document.querySelector(".avidAmount");
let chrodAmount = document.querySelector(".chrodAmount");
let classeAmount = document.querySelector(".classeAmount");
let denonAmount = document.querySelector(".denonAmount");
let devialetAmount = document.querySelector(".devialetAmount");
let eatAmount = document.querySelector(".eatAmount");
let grahamAmount = document.querySelector(".grahamAmount");
let linnAmount = document.querySelector(".linnAmount");
let marantzAmount = document.querySelector(".marantzAmount");
let meridianAmount = document.querySelector(".meridianAmount");
let naimAmount = document.querySelector(".naimAmount");
let primalunaAmount = document.querySelector(".primalunaAmount");
let primareAmount = document.querySelector(".primareAmount");
let quadAmount = document.querySelector(".quadAmount");
let rotelAmount = document.querySelector(".rotelAmount");
let sennheiserAmount = document.querySelector(".sennheiserAmount");
let sugdenAmount = document.querySelector(".sugdenAmount");
let technicsAmount = document.querySelector(".technicsAmount");
let trinnovAmount = document.querySelector(".trinnovAmount");
let yamahaAmount = document.querySelector(".yamahaAmount");
function manuCount(){
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
        let count10 = 0;
        let count11 = 0;
        let count12 = 0;
        let count13 = 0;
        let count14 = 0;
        let count15 = 0;
        let count16 = 0;
        let count17 = 0;
        let count18 = 0;
        let count19 = 0;
        let count20 = 0;
        let count21 = 0;
        let count22 = 0;
        let count23 = 0;
        products.forEach(function (product) {
            let manufactor = product.addInfo[0].manufactor;
            if(manufactor == "Arcam"){
                count++;
                arcamAmount.innerText = count;
            }
            if(manufactor == "Astell"){
                count1++;
                astellAmount.innerText = count1;
            }
            if(manufactor == "ATC"){
                count2++;
                atcAmount.innerText = count2;
            }
            if(manufactor == "Audiolab"){
                count3++;
                audiolabAmount.innerText = count3;
            }
            if(manufactor == "Avid"){
                count4++;
                avidAmount.innerText = count4;
            }
            if(manufactor == "Chord"){
                count5++;
                chrodAmount.innerText = count5;
            }
            if(manufactor == "Classé"){
                count6++;
                classeAmount.innerText = count6;
            }
            if(manufactor == "Denon"){
                count7++;
                denonAmount.innerText = count7;
            }
            if(manufactor == "Devialet"){
                count8++;
                devialetAmount.innerText = count8;
            }
            if(manufactor == "Eat"){
                count9++;
                eatAmount.innerText = count9;
            }
            if(manufactor == "Graham"){
                count10++;
                grahamAmount.innerText = count10;
            }
            if(manufactor == "Linn"){
                count11++;
                linnAmount.innerText = count11;
            }
            if(manufactor == "Marantz"){
                count12++;
                marantzAmount.innerText = count12;
            }
            if(manufactor == "Meridian"){
                count13++;
                meridianAmount.innerText = count13;
            }
            if(manufactor == "Naim"){
                count14++;
                naimAmount.innerText = count14;
            }
            if(manufactor == "Primaluna"){
                count15++;
                primalunaAmount.innerText = count15;
            }
            if(manufactor == "Primare"){
                count16++;
                primareAmount.innerText = count16;
            }
            if(manufactor == "Quad"){
                count17++;
                quadAmount.innerText = count17;
            }
            if(manufactor == "Rotel"){
                count18++;
                rotelAmount.innerText = count18;
            }
            if(manufactor == "Sennheiser"){
                count19++;
                sennheiserAmount.innerText = count19;
            }
            if(manufactor == "Sugden"){
                count20++;
                sugdenAmount.innerText = count20;
            }
            if(manufactor == "Technics"){
                count21++;
                technicsAmount.innerText = count21;
            }
            if(manufactor == "Trinnov"){
                count22++;
                trinnovAmount.innerText = count22;
            }
            if(manufactor == "Yamaha"){
                count23++;
                yamahaAmount.innerText = count23;
            }
        })
    });
}
manuCount();

let integrated = document.querySelector(".integrated");
let power = document.querySelector(".power");
let preamp = document.querySelector(".preamp");

function categoryFilter() {
    getProducts()
    .then(function (products) {
        products.forEach(function (product){
            let category = product.category;
            if(category == "integrated amplifiers"){
                integrated.addEventListener('click', function(){
                    removeProducts();
                    let cate = "integrated amplifiers"
                    addCategory(cate);
                });
            }
            if(category == "power amplifiers"){
                power.addEventListener('click', function(){
                    removeProducts();
                    let cate = "power amplifiers"
                    addCategory(cate);
                });
            }
            if(category == "preamplifiers"){
                preamp.addEventListener('click', function(){
                    removeProducts();
                    let cate = "preamplifiers"
                    addCategory(cate);
                });
            }
        })
        function addCategory(cate){
            let allProducts = document.querySelector(".products");
            let items = document.querySelector(".itemsNumber");
            let itemCount = 0;
            products.forEach(function (product) {
                let category = product.category;
                if(category == cate){
                    const productContainer = document.createElement('div');
                    productContainer.classList.add('product');
                    productContainer.innerHTML = `
                    <img src="${product.image}" alt="${product.alt}">
                    <p class="products__productName">${product.name}</p>
                    <p class="price"><span class="oldPrice">${product.oldPrice.toLocaleString('en-US')}</span>£<span class="productPrice">${product.price.toLocaleString('en-US')}</span></p>                    <a href="" class="productLink">ADD TO CART</a>`
                    productContainer.querySelector(".productLink").href = `./product.html?id=${product.id}`;
                    allProducts.appendChild(productContainer);
                    itemCount++;
                    items.innerText = itemCount;
                }
            });
        }
    });
}
categoryFilter()
