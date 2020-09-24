let searchUrl = new URLSearchParams(window.location.search);

if (searchUrl.get("keyword")) {
    fetch(`./data.json`)
    .then(data => data.json())
    .then(function(data) {
        
        console.log(data.product);
        let resultArray = data.product;

        //resultArray.name.forEach(function(product){
            /*if (searchUrl.get("keyword") == product.name) {
                resultArray.push(product);
            }*/
            resultArray.forEach(myFunction);

      
            function myFunction(item) {
                let name = item.name.toLowerCase();
                let description = item.description.toLowerCase();
                let keyword = searchUrl.get("keyword").toLowerCase();
                if (name.includes(keyword) ||  description.includes(keyword)) {
                    document.getElementById("products").innerHTML += item.name + "<br>";
                    //console.log(item.name);
                }
            }

       // });
    });

};