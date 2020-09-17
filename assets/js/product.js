let url = new URLSearchParams(window.location.search);

function showProduct(id) {
    getProducts()
        .then(function (products) {
            id = url.get("id")
        let index = products.findIndex(function(product){
            return product.id == id;
        })
        if (index < 0) {
            let h1 = document.createElement("h1");
            h1.innerHTML = "404: Siden findes ikke"
            document.querySelector(".productView").appendChild(h1);
            return;
        }
        let product = products[index];
        // console.log(product)
        let productImg = document.querySelector(".productImg");
        let breadcrumb_name = document.querySelector(".current_product")
        let name = document.querySelector(".product_name");
        let price = document.querySelector(".price");
        let oldPrice = document.querySelector(".old_price");
        let description = document.querySelector(".description");

        productImg.src = product.image;
        name.innerText = product.name;
        breadcrumb_name.innerText = product.name;
        price.innerText = product.price;
        oldPrice.innerText = product.oldPrice;
        description.innerText = product.description;

        // ADDITIONAL INFORMATION
        let manufactor = document.querySelector(".manufactor_name");
        let manufactorLink = document.querySelector(".manufactor_link_name");
        let warranty = document.querySelector(".warranty_name");
        let delivery_charge = document.querySelector(".delivery_charge_name");
        let delivery_charge_name = document.querySelector(".delivery_time_name");
        let card_surcharges = document.querySelector(".card_surcharges_name");
        
        manufactor.innerText = product.addInfo[0].manufactor;
        manufactorLink.innerText = product.addInfo[0].manufactorLinkName;
        warranty.innerText = product.addInfo[0].warranty;
        delivery_charge.innerText = product.addInfo[0].delivery;
        delivery_charge_name.innerText = product.addInfo[0].deliveryTime;
        card_surcharges.innerText = product.addInfo[0].cardSurcharges;
    });
}
showProduct();

function getProducts(){
    return fetch("./data.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        return data.product;
    });
}