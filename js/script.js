let doc = document;

$(doc).ready(function () {
    topSliderInit();
});

function topSliderInit() {
    if (!doc.querySelector('.top-slider')) return null;
    let swiper = new Swiper('.top-slider', {
        pagination: {
            el: '.top-slider__pagination',
            clickable: true,
        },
    });
}