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
let swiper;

const createSwiper = function (match){
    if (match.matches) {
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
}

window.addEventListener('load', function () {
   createSwiper(matchQuery);
});

matchQuery.addEventListener('change', function () {
  createSwiper(matchQuery)
});




