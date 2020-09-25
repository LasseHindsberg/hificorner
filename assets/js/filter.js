// PRICE FILTERING    PRICE FILTERING    PRICE FILTERING //
// PRICE FILTERING    PRICE FILTERING    PRICE FILTERING //
// let a799 = document.querySelector(".a0-799");
// let a800 = document.querySelector(".a800-999");
// let a1000 = document.querySelector(".a1000-1499");
// let a1500 = document.querySelector(".a1500-1999");
// let a2000 = document.querySelector(".a2000-2999");
// let a3000 = document.querySelector(".a3000-3499");
// let a3500 = document.querySelector(".a3500-4999");
// let a5000 = document.querySelector(".a5000-7999");
// let a8000 = document.querySelector(".a8000-11999");
// let a12000 = document.querySelector(".a12000");


/* function sortProducts() {
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
                    a799.addEventListener('click', function(){
                        removeProducts();
                        let pris = 0;
                        let topPris = 799;
                        addProducts(pris, topPris);
                    });
                }
                if (product.price >= 800 && product.price <= 999) {
                    let s800 = document.querySelector(".s800-999");
                    count1++;
                    s800.innerText = count1;
                    a800.addEventListener('click', function(){
                        removeProducts();
                        let pris = 800;
                        let topPris = 999;
                        addProducts(pris, topPris);
                    });
                }
                if (product.price >= 1000 && product.price <= 1499) {
                    
                    let s1000 = document.querySelector(".s1000-1499");
                    count2++;
                    s1000.innerText = count2;
                    a1000.addEventListener('click', function(){
                        removeProducts();
                        let pris = 1000;
                        let topPris = 1499;
                        addProducts(pris, topPris);
                    });
                }
                if (product.price >= 1500 && product.price <= 1999) {
                    
                    let s1500 = document.querySelector(".s1500-1999");
                    count3++;
                    s1500.innerText = count3;
                    a1500.addEventListener('click', function(){
                        removeProducts();
                        let pris = 1500;
                        let topPris = 1999;
                        addProducts(pris, topPris);
                    });
                }
                if (product.price >= 2000 && product.price <= 2999) {
                    
                    let s2000 = document.querySelector(".s2000-2999");
                    count4++;
                    s2000.innerText = count4;
                    a2000.addEventListener('click', function(){
                        removeProducts();
                        let pris = 2000;
                        let topPris = 2999;
                        addProducts(pris, topPris);
                    });
                }
                if (product.price >= 3000 && product.price <= 3499) {
                    
                    let s3000 = document.querySelector(".s3000-3499");
                    count5++;
                    s3000.innerText = count5;
                    a3000.addEventListener('click', function(){
                        removeProducts();
                        let pris = 3000;
                        let topPris = 3499;
                        addProducts(pris, topPris);
                    });
                }
                if (product.price >= 3500 && product.price <= 4999) {
                    
                    let s3500 = document.querySelector(".s3500-4999");
                    count6++;
                    s3500.innerText = count6;
                    a3500.addEventListener('click', function(){
                        removeProducts();
                        let pris = 3500;
                        let topPris = 4999;
                        addProducts(pris, topPris);
                    });
                }
                if (product.price >= 5000 && product.price <= 7999) {
                    let s5000 = document.querySelector(".s5000-7999");
                    count7++;
                    s5000.innerText = count7;
                    a5000.addEventListener('click', function(){
                        removeProducts();
                        let pris = 5000;
                        let topPris = 7999;
                        addProducts(pris, topPris);
                    });
                }
                if (product.price >= 8000 && product.price <= 11999) {
                    
                    let s8000 = document.querySelector(".s8000-11999");
                    count8++;
                    s8000.innerText = count8;
                    a8000.addEventListener('click', function(){
                        removeProducts();
                        let pris = 8000;
                        let topPris = 11999;
                        addProducts(pris, topPris);
                    });
                }
                if (product.price >= 12000 && product.price <= 1000000000000) {
                    
                    let s12000 = document.querySelector(".s12000");
                    count9++;
                    s12000.innerText = count9;
                    a12000.addEventListener('click', function(){
                        removeProducts();
                        let pris = 12000;
                        let topPris = 1000000000000;
                        addProducts(pris, topPris);
                    });
                }
            });
            function addProducts(pris, topPris){
                let allProducts = document.querySelector(".products");
                let items = document.querySelector(".itemsNumber");
                let itemCount = 0;
                products.forEach(function (product) {
                    
                    if (product.price >= pris && product.price <= topPris) {
                        const productContainer = document.createElement('div');
                        productContainer.classList.add('product');
                        productContainer.innerHTML = `
                        <img src="${product.image}" alt="${product.alt}">
                        <p class="products__productName">${product.name}</p>
                        <p class="price"><span class="oldPrice">${product.oldPrice.toLocaleString('en-US')}</span>£<span class="productPrice">${product.price.toLocaleString('en-US')}</span></p>                        <a href="" class="productLink">ADD TO CART</a>`
                        productContainer.querySelector(".productLink").href = `./product.html?id=${product.id}`;
                        allProducts.appendChild(productContainer);
                        itemCount++;
                        items.innerText = itemCount;
                    }
                });
            }
        })
}
sortProducts(); */





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
//myArray.slice().sort((a,b)=>a-b)



// MANU AND PRICE FILTERING  MANU AND PRICE FILTERING  MANU AND PRICE FILTERING //
/*
function removeProducts(){  
    document.querySelectorAll(".product").forEach(n => n.remove());
}
// MANU AND PRICE FILTERING  MANU AND PRICE FILTERING  MANU AND PRICE FILTERING //
// MANUFACTOR FILTERING    MANUFACTOR FILTERING    MANUFACTOR FILTERING //
// MANUFACTOR FILTERING    MANUFACTOR FILTERING    MANUFACTOR FILTERING //
let arcam = document.querySelector(".arcam");
let astell = document.querySelector(".astell");
let atc = document.querySelector(".atc");
let audiolab = document.querySelector(".audiolab");
let avid = document.querySelector(".avid");
let chord = document.querySelector(".chord");
let classe = document.querySelector(".classe");
let denon = document.querySelector(".denon");
let devialet = document.querySelector(".devialet");
let eat = document.querySelector(".eat");
let graham = document.querySelector(".graham");
let linn = document.querySelector(".linn");
let marantz = document.querySelector(".marantz");
let meridian = document.querySelector(".meridian");
let naim = document.querySelector(".naim");
let primaluna = document.querySelector(".primaluna");
let primare = document.querySelector(".primare");
let quad = document.querySelector(".quad");
let rotel = document.querySelector(".rotel");
let sennheiser = document.querySelector(".sennheiser");
let sugden = document.querySelector(".sugden");
let technics = document.querySelector(".technics");
let trinnov = document.querySelector(".trinnov");
let yamaha = document.querySelector(".yamaha");
//AMOUNT START
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
function manuFilter(){
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
                arcam.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Arcam"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Astell"){
                count1++;
                astellAmount.innerText = count1;
                astell.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Astell"
                    addManufactor(manu);
                });
            }
            if(manufactor == "ATC"){
                count2++;
                atcAmount.innerText = count2;
                atc.addEventListener('click', function(){
                    removeProducts();
                    let manu = "ATC"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Audiolab"){
                count3++;
                audiolabAmount.innerText = count3;
                audiolab.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Audiolab"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Avid"){
                count4++;
                avidAmount.innerText = count4;
                avid.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Avid"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Chord"){
                count5++;
                chrodAmount.innerText = count5;
                chord.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Chord"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Classé"){
                count6++;
                classeAmount.innerText = count6;
                classe.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Classé"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Denon"){
                count7++;
                denonAmount.innerText = count7;
                denon.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Denon"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Devialet"){
                count8++;
                devialetAmount.innerText = count8;
                devialet.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Devialet"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Eat"){
                count9++;
                eatAmount.innerText = count9;
                eat.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Eat"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Graham"){
                count10++;
                grahamAmount.innerText = count10;
                graham.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Graham"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Linn"){
                count11++;
                linnAmount.innerText = count11;
                linn.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Linn"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Marantz"){
                count12++;
                marantzAmount.innerText = count12;
                marantz.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Marantz"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Meridian"){
                count13++;
                meridianAmount.innerText = count13;
                meridian.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Meridian"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Naim"){
                count14++;
                naimAmount.innerText = count14;
                naim.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Naim"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Primaluna"){
                count15++;
                primalunaAmount.innerText = count15;
                primaluna.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Primaluna"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Primare"){
                count16++;
                primareAmount.innerText = count16;
                primare.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Primare"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Quad"){
                count17++;
                quadAmount.innerText = count17;
                quad.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Quad"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Rotel"){
                count18++;
                rotelAmount.innerText = count18;
                rotel.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Rotel"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Sennheiser"){
                count19++;
                sennheiserAmount.innerText = count19;
                sennheiser.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Sennheiser"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Sugden"){
                count20++;
                sugdenAmount.innerText = count20;
                sugden.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Sugden"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Technics"){
                count21++;
                technicsAmount.innerText = count21;
                technics.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Technics"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Trinnov"){
                count22++;
                trinnovAmount.innerText = count22;
                trinnov.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Trinnov"
                    addManufactor(manu);
                });
            }
            if(manufactor == "Yamaha"){
                count23++;
                yamahaAmount.innerText = count23;
                yamaha.addEventListener('click', function(){
                    removeProducts();
                    let manu = "Yamaha"
                    addManufactor(manu);
                });
            }
            
        })
        function addManufactor(manu){
            let allProducts = document.querySelector(".products");
            let items = document.querySelector(".itemsNumber");
            let itemCount = 0;
            products.forEach(function (product) {
                let manufactor = product.addInfo[0].manufactor;
                if(manufactor == manu){
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
manuFilter();
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
*/