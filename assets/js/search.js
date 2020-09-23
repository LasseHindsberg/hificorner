let searchUrl = new URLSearchParams(window.location.search);

if (searchUrl.get("keyword")) {
    fetch(`./data.json`)
    .then(data => data.json())
    .then(function(data) {
        
        console.log(data);
        let resultArray = [];

        data.product.forEach(function(product){
            if (searchUrl.get("keyword") == product.name) {
                resultArray.push(product);
            }

        });
    })

};