function MySliderBox1_init() {
    const swiper = new Swiper('.my-slider-box-1 .swiper-container', {
        pagination: {
            el: '.my-slider-box-1 .swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                let img = "";
                if(index == 0) {
                    img = '<img src="https://picsum.photos/id/101/100/100">';
                } else if ( index == 1 ) {
                  img = '<img src="https://picsum.photos/id/102/100/100">';
                } else if ( index == 2 ) {
                  img = '<img src="https://picsum.photos/id/103/100/100">';
                } else if ( index == 3 ) {
                  img = '<img src="https://picsum.photos/id/104/100/100">';
                } else if ( index == 4 ) {
                  img = '<img src="https://picsum.photos/id/110/100/100">';
                } else if ( index == 5 ) {
                  img = '<img src="https://picsum.photos/id/106/100/100">';
                } else if ( index == 6 ) {
                  img = '<img src="https://picsum.photos/id/107/100/100">';
                } else if ( index == 7 ) {
                  img = '<img src="https://picsum.photos/id/108/100/100">';
                }
                const bullet = '<span class="' + className + '">' + img + '</span>';
                return bullet;
            },
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        loop: false,
        navigation: {
            nextEl: '.my-slider-box-1 .my-slider-box-1__btn-right',
            prevEl: '.my-slider-box-1 .my-slider-box-1__btn-left',
        },
    });
}

MySliderBox1_init();
