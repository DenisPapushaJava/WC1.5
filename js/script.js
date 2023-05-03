// Button hidden//////////////////////////////////////////////////
const btnHidden = document.querySelector('.services__btn-hidden');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const arrowHidden = document.querySelector('.services__btn-hidden');

btnHidden.addEventListener('click', () => {
    swiperWrapper.classList.toggle('active');
    arrowHidden.classList.toggle('active');
    btnHidden.textContent = swiperWrapper.classList.contains('active') ? 'Скрыть' : 'Показать все';
});

//Swiper/////////////////////////////////////////////////////////
const slider = document.querySelector('.swiper');
const mediaQuery = '(max-width: 768px)';
const matchQuery = window.matchMedia(mediaQuery);
let  swiper;

window.addEventListener('load', function () {
    if (matchQuery.matches) {
        swiper = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
            }
        });
    } else {
       swiper.destroy();
    }
});

matchQuery.addEventListener('change', function () {
    if (matchQuery.matches) {
        swiper = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
            }
        });
    } else {
       swiper.destroy();
    }
});




