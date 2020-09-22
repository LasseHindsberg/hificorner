let a799 = document.querySelector(".a0-799");

function sortProducts() {
    getProducts()
        .then(function (products) {

            products.forEach(function (product) {

                if (product.price <= 799) {
                    let s799 = document.querySelector(".s0-799");
                    let s799Array = [product.price];
                    

                    s799.innerText = s799Array.length;
                    console.log(s799Array)
                } else {
                    return
                }
            })

        })
}
sortProducts();

function getProducts() {
    return fetch("./data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.product;
        });
}