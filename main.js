window.onload = function () {

    setTimeout(function () {
        document.body.classList.add('loaded');

    }, 2500)

    setTimeout(function () {
        document.querySelector('.arrow').classList.add('one');
    }, 5000)
}

document.addEventListener('DOMContentLoaded', () => {

    const mainEl = document.querySelector('.main');
    const arrowEl = document.querySelector('.arrow');
    const promoTextEls = document.querySelectorAll('.promo_text');
    const callAnimation = document.querySelector('.call_buttom');
    const wrapperEl = document.querySelector('.wrapper');
    const PravoEls = document.querySelectorAll('.pravo');


    /**функция исчезновения элемента если экран появляется на 1/3
     * 
     * @param {экран (блок) определнного контента} monitorDiv 
     * @param {елемент который скрываем} el 
     */
    const removeElement = (monitorDiv, el) => {
        let scrollTop = window.scrollY;
        let mainCentr = monitorDiv.offsetHeight / 3;

        if (scrollTop >= mainCentr) {
            el.classList.add('hid');
        } else {
            el.classList.remove('hid');
        };
    };



    //Функция делает анимацию одинаковую для всей коллекции элементов
    /**
     * 
     * @param {Коллекция элементов DOM} el 
     */
    const scrollAnimation = (el) => {
        let windowCentr = window.innerHeight / 1.5 + window.scrollY;

        el.forEach(el => {
            let scrollOffset = el.offsetTop / 1.4 + (el.offsetHeight);
            if (windowCentr >= scrollOffset) {
                el.classList.add('animation_class');
            }

        });

    };



    const animationCallBtn = () => {
        let scrollTop = window.scrollY;
        let mainCentr = mainEl.offsetHeight;

        if (scrollTop >= mainCentr) {
            callAnimation.classList.add('call_animation')
        } else {
            callAnimation.classList.remove('call_animation')
        }
    };


    //событие на прокрутку по сайту 
    //добавляем анимацию при скроле
    window.addEventListener('scroll', () => {
        removeElement(mainEl, arrowEl);
        scrollAnimation(promoTextEls);
        scrollAnimation(PravoEls);
        animationCallBtn();

        if ((wrapperEl.offsetHeight - window.scrollY) < 1100) {
            callAnimation.classList.remove('call_animation')
        }
    });

});