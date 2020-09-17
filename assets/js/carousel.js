const carousel = document.querySelector(".carousel")
const container = document.querySelector(".container");
const carouselImgs = document.querySelectorAll(".container img");

let index = 0;

const next = document.querySelector("#next");
const back = document.querySelector("#back");

next.addEventListener('click', function(){
    index++;

    if(index > carouselImgs.length - 1){
        index = 0;
    }
    container.style.transform = `translateX(${-index * carousel.clientWidth}px)`;
});

back.addEventListener('click', function(){
    index--;

    if(index < 0){
        index = carouselImgs.length - 1;
    }
    container.style.transform = `translateX(${-index * carousel.clientWidth}px)`;    
});