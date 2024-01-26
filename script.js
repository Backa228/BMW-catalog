// Показ або приховання кнопки "Повернутися вгору" при прокручуванні
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
};

// Функція для плавного прокручування сторінки нагору
function scrollToTop() {
    const currentY = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentY > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentY - currentY / 8);
    }
}

function showWindow(anchor, elem, background) {

    elem.style.display = "block";

    let anchorCoords = anchor.getBoundingClientRect();
    console.log(anchorCoords);

    elem.style.left = anchorCoords.left + (anchorCoords.width/2) - (elem.offsetWidth/2) + "px";
    elem.style.top = anchorCoords.top + (anchorCoords.height/2) - (elem.offsetHeight/2) + "px";
    
    console.log(elem);  

    background.style.display = "block"; 
    document.documentElement.style.overflow = "hidden";
}

const model = document.querySelector('.carmodel a img');
console.log(model);
//showWindow(model);

document.addEventListener("DOMContentLoaded", function(){
    const cars = document.querySelectorAll('.carmodel');
    //список всіх моделей машин
    console.log(cars);
    cars.forEach((car) => {
        const image = car.querySelector('img');
        //зображення конкретної машини
console.log(image);
        const detailes = car.querySelector('.details');

    const overlay = car.querySelector('.overlay')
        //вікно інформації конкретної машини
        if (image && detailes && overlay) {

        image.addEventListener("click", function() {
           
            event.preventDefault();
             showWindow(image, detailes, overlay);
           /* detailes.style.display = "block";

            detailes.classList.add('animate__animated', 'animate__pulse', 'animate__faster');
            //detailes.style.setProperty('--animate-duration', '5s');
            //показує вікно detailes
            overlay.style.display = "block"
            document.documentElement.style.overflow = "hidden";
            //значення hidden для overflow означає, що контет обрізається, без надання прокрутки
            console.log(detailes);*/
        });

        detailes.addEventListener('animationend', (event) => {
            detailes.classList.remove('animate__animated', 'animate__pulse');
        });
        


        const closeBtn = detailes.querySelector('.close');
        //коли натискаєш на closeBtn вікно detailes повинно приховатись

        closeBtn.addEventListener("click", (event) => {
            overlay.style.display = "none"
            event.preventDefault();
            detailes.style.display = "none";
            //показує вікно detailes
            document.documentElement.style.overflow = "";//повернулось значення за замовчуванням для overflow
        });
        }
    });

    
});

let circleAnimation = document.querySelector(".circle");

circleAnimation.addEventListener('click', (event) => {
    circleAnimation.classList.add('circle-animation')
});

circleAnimation.addEventListener('animationend', (event) => {
    circleAnimation.classList.remove('circle-animation')
});

let element = document.querySelector('.my-element');


element.addEventListener('click', () => {
  element.classList.add('animate__animated', 'animate__bounceOutLeft');
});

