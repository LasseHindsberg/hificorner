// FINDING URL
let searchUrl = new URLSearchParams(window.location.search);

    function removeProducts(){  
        document.querySelectorAll(".product").forEach(n => n.remove());
    };

// FETCHING DATA
if (searchUrl.get("keyword")) {
    
    removeProducts(); 

    fetch(`./data.json`)
    .then(data => data.json())
    .then(function(data) {
        // LOG DATA
        //console.log(data.product);
        // 
        let resultArray = data.product;
        
        //resultArray.name.forEach(function(product){
            /*if (searchUrl.get("keyword") == product.name) {
                resultArray.push(product);
            }*/
            
            resultArray.forEach(myFunction);
      
            function myFunction(product) {

                let allProducts = document.querySelector(".products");
                let name = product.name.toLowerCase();
                let description = product.description.toLowerCase();
                let keyword = searchUrl.get("keyword").toLowerCase();

                if (name.includes(keyword) ||  description.includes(keyword)) {
                    //console.log("test");
                    
                    const productContainer = document.createElement('div');
                    productContainer.classList.add('product');
                    productContainer.innerHTML = `
                    <img src="${product.image}" alt="${product.alt}">
                    <p class="products__productName">${product.name}</p>
                    <p class="price"><span class="oldPrice">${product.oldPrice.toLocaleString('en-US')}</span>£${product.price.toLocaleString('en-US')}</p>
                    <a href="" class="productLink">ADD TO CART</a>`
                    productContainer.querySelector(".productLink").href = `./product.html?id=${product.id}`;
                    allProducts.appendChild(productContainer);
                }
            }   
        });

};

