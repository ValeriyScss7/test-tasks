
let carouselItem = document.querySelectorAll('.carousel__wrap__content__item');
let carouselLine = document.querySelector('.carousel__wrap__content');
let nextButton = document.querySelector('.btnRight');
let prevButton = document.querySelector('.btnLeft');
let position = 0;

function nextSlide() {

    
    if (position < carouselItem[0].offsetWidth * (carouselItem.length - 1) ) {
        position += carouselItem[0].offsetWidth;
    } else {
        position = 0;
    }
    carouselLine.style.left = -position + 'px';
}

function previewSlide() {
    if (position > 0) {
        position -= carouselItem[0].offsetWidth;
    } else {
        position = carouselItem[0].offsetWidth * (carouselItem.length - 1) ;
    }
    carouselLine.style.left = -position + 'px';
}


nextButton.addEventListener('click' , nextSlide);

prevButton.addEventListener('click' , previewSlide);


//timer

let deadline = Date.parse(new Date());

let timeRemaining = deadline + (30000 * 60); //получил оставшееся время 30 минут,прибавив к значению настоящей даты в миллисекундах 30 минут в миллисекундах(data + (30000 * 60))

    function getTime(endTime) {
        let t = endTime - Date.parse(new Date()); 
        let minutes = Math.floor((t / 1000 / 60) % 60) ;
        let seconds = Math.floor((t / 1000) % 60) ;
        
        return {
            'total': t,
            'minutes': minutes,
            'seconds' : seconds
        }
    }

    function addZero(num){      //добавил недостающие нули к цифрам
        if(num >=0 && num < 10) {
            return `0${num}`;
        } else {
            return `${num}`;
        }
    }

    function setTimer (selector,endTime) {
        let timer = document.querySelector(selector);
        let minutes = timer.querySelector('#minutes');
        let seconds = timer.querySelector('#seconds');
        let interval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock(){
            let t = getTime(endTime);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

            if(t.total <= 0){
                clearInterval(interval);
            }
        }
    }
   
    setTimer('.timer',timeRemaining);

    //scroll button

    let buttons = document.querySelectorAll('button');
    let form = document.querySelector('form');

    buttons.forEach(item =>{
        item.addEventListener('click',() => {
            form.scrollIntoView({
                block:"nearest",
                behavior:'smooth',
            })
        })
    })

    

    

    








