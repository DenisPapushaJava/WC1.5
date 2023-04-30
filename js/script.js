// Button hidden//////////////////////////////////////////////////
const btnHidden = document.querySelector('.services__btn-hidden');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const arrowHidden = document.querySelector('.services__btn-hidden');

btnHidden.addEventListener('click', () =>
{
    swiperWrapper.classList.toggle('active');
    arrowHidden.classList.toggle('active');
    btnHidden.textContent = swiperWrapper.classList.contains('active')?'Скрыть':'Показать все';
});

//Swiper/////////////////////////////////////////////////////////
const slider = document.querySelector('.swiper');
let swiper;

function mobileSlider() {
    if (window.innerWidth < 768 && slider.dataset.mobile === 'false') {
        swiper = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
            }
        });
        slider.dataset.mobile = 'true';
    }
    if (window.innerWidth >= 768) {
        slider.dataset.mobile = 'false';
        swiper.destroy();
    }
}

window.addEventListener('load', () => {
    mobileSlider();
});
window.addEventListener('resize', () => {
    mobileSlider();
});
