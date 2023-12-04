const largura = window.innerWidth;
const swiper = new Swiper('.swiper', {
    cssMode: true,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const swiperLogos = new Swiper('.containers', {
    cssMode: true,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

});