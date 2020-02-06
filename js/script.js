let doc = document;

$(doc).ready(function () {
    topSliderInit();
    openNav();
    transparentHeader();
    anchorLinks();
    activeLinks();
    toTop();
});

let header = document.getElementById('header');
let button = document.getElementById('.go-top');

function topSliderInit() {
    if (!doc.querySelector('.top-slider')) return null;
    let swiper = new Swiper('.top-slider', {
        pagination: {
            el: '.top-slider__pagination',
            clickable: true,
        },
    });
}

function openNav() {
    let burger = doc.querySelector('.header-burger');
    let nav = doc.querySelector('.header-menu');
    let fader = doc.querySelector('.fader');

    if (burger) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('header-burger_open');
            nav.classList.toggle('header-menu_open');
            fader.classList.toggle('fader_visible');
        });
    }
}

function transparentHeader() {
    window.addEventListener('scroll', function () {
        if (-doc.body.getBoundingClientRect().top < header.clientHeight) {
            header.classList.remove('header_scroll');
        } else {
            header.classList.add('header_scroll');
        }
    });
}

function anchorLinks() {
    $("a.anchor").click(function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, 500);
    });
}

function activeLinks() {
    let last_id;
    let $top_menu = $('.header-list');
    let menu_height = $top_menu.outerHeight(true);
    let $menu_items = $top_menu.find('a');
    let $scroll_items = $menu_items.map(function () {
        let item = $($(this).attr('href'));
        if (item.length) {
            return item;
        }
    });

    $menu_items.click(function (e) {
        let href = $(this).attr('href'),
            offset_top = href === '#' ? 0 : $(href).offset().top;
        $('html, body').stop().animate({
            scrollTop: offset_top
        }, 300);
        e.preventDefault();
    });


    $(window).scroll(function () {
        let from_top = $(this).scrollTop() + menu_height;
        let cur = $scroll_items.map(function () {
            if ($(this).offset().top < from_top) {
                return this;
            }
        });
        cur = cur[cur.length - 1];
        let id = cur && cur.length ? cur[0].id : '';
        if (last_id !== id) {
            last_id = id;
            $menu_items.parent()
                .removeClass('active')
                .end()
                .filter("[href='#" + id + "']")
                .parent()
                .addClass('active');
        }
    });
}

function toTop() {
    let button = $('.go-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            button.addClass('show');
        } else {
            button.removeClass('show');
        }
    });

    button.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '500');
    });
}


