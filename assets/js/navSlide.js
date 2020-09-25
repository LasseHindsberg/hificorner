const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__bottomUl');
    const navLinks = document.querySelectorAll('.nav__bottomUl li');

    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('header__nav--active')

        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            };

        });
        // burger animation
        burger.classList.toggle('toggle');


    });
}

navSlide();