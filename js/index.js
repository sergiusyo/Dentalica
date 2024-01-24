// // Функция ymaps.ready() будет вызвана, когда
// // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [45.055499, 38.969618],
        zoom: 14
    });

    var myPlacemark = new ymaps.Placemark([45.055499, 38.969618], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/1920/26_placemark.svg',
        iconImageSize: [60, 68],
        iconImageOffset: [-10, 42],
    });

    // Размещение геообъекта на карте.

    myMap.geoObjects.add(myPlacemark);
}

/*кнопка Наверх*/
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        // удалим у кнопки класс btn-up_hide
        this.el.classList.remove('btn-up__hide');
    },
    hide() {
        // добавим к кнопке класс btn-up_hide
        this.el.classList.add('btn-up__hide');
    },
    addEventListener() {
        // при прокрутке содержимого страницы
        window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 800px, то делаем кнопку видимой, иначе скрываем
            scrollY > 800 ? this.show() : this.hide();
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
            // переместим в начало страницы
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();

/*плавный скролл по якорям*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

/*слайдер*/
$(document).ready(function () {
    $('.sliders').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    })
});
