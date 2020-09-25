let url = new URLSearchParams(window.location.search);

function showProduct(id) {
    getProducts()
        .then(function (products) {
            id = url.get("id")
            let index = products.findIndex(function (product) {
                return product.id == id;
            })
            if (index < 0) {
                let main = document.querySelector(".main_product_view");
                main.querySelectorAll('*').forEach(n => n.remove());
                let h1 = document.createElement("h1");
                h1.innerHTML = "404: Siden findes ikke.";
                h1.style.margin = "8em 0";
                h1.style.textAlign = "center";
                main.appendChild(h1);
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
            manufactorLink.href = product.addInfo[0].manufactorLink;
            warranty.innerText = product.addInfo[0].warranty;
            delivery_charge.innerText = product.addInfo[0].delivery;
            delivery_charge_name.innerText = product.addInfo[0].deliveryTime;
            card_surcharges.innerText = product.addInfo[0].cardSurcharges;

            // DESCRIPTION 
            let PowerOutput = document.querySelector(".power_output_name");
            let frequency = document.querySelector(".frequency_name");
            let distortion = document.querySelector(".total_harmonic_name");
            let dampingFactor = document.querySelector(".damping_factor_name");
            let sensitivityMM = document.querySelector(".input_sensitivity_mm_name");
            let sensitivityMC = document.querySelector(".input_sensitivity_mc_name");
            let noiseMMMC = document.querySelector(".signal_noise_name");
            let sensitivityHigh = document.querySelector(".input_sensitivity_high_name");
            let sensitivityBalanced = document.querySelector(".input_sensitivity_bal_name");
            let noiceHigh = document.querySelector(".signal_noise_high_name");
            let sensitivityPower = document.querySelector(".input_sensitivity_amp_name");
            let noisePower = document.querySelector(".signal_noise_amp_name");

            PowerOutput.innerText = product.info[0].PowerOutput;
            frequency.innerText = product.info[0].frequency;
            distortion.innerText = product.info[0].distortion;
            dampingFactor.innerText = product.info[0].dampingFactor;
            sensitivityMM.innerText = product.info[0].sensitivityMM;
            sensitivityMC.innerText = product.info[0].sensitivityMC;
            noiseMMMC.innerText = product.info[0].noiseMMMC;
            sensitivityHigh.innerText = product.info[0].sensitivityHigh;
            sensitivityBalanced.innerText = product.info[0].sensitivityBalanced;
            noiceHigh.innerText = product.info[0].noiceHigh;
            sensitivityPower.innerText = product.info[0].sensitivityPower;
            noisePower.innerText = product.info[0].noisePower;
        });
}
showProduct();

function getProducts() {
    return fetch("./data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.product;
        });
}