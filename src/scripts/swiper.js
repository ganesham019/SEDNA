window.onload = (event) => {
    console.log("page is fully loaded");
    //  Initialize Swiper
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        speed: 1000,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

};
