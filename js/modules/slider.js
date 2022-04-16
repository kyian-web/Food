function slider({slide, container, prevArrow, nextArrow, totalCounter, currentCounter, wrapper, field}) {
    // Slider 2 ==========================================

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          sliderWrapper = document.querySelector(wrapper),
          sliderField = document.querySelector(field),
          width = window.getComputedStyle(sliderWrapper).width;

    let slideIndex = 1,
        offset = 0;

    sliderField.style.display = 'flex';
    sliderField.style.width = 100 * slides.length + '%';
    sliderField.style.transition = '.5s all';
    slides.forEach(slide => {
        slide.style.width = width;
    });
    sliderWrapper.style.overflow = 'hidden';
    slider.style.position = 'relative';

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    function getZeroSlides(arr, str, count) {
        if (arr < 10) {
            str.textContent = `0${count}`;
        } else {
            str.textContent = count;
        }
    }

    getZeroSlides(slides.length, total, slides.length);
    getZeroSlides(slides.length, current, slideIndex);

    const dots = [];
    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        getZeroSlides(slides.length, current, slideIndex);

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;

        sliderField.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        getZeroSlides(slides.length, current, slideIndex);

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;

        sliderField.style.transform = `translateX(-${offset}px)`;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;

            offset = deleteNotDigits(width) * (slideTo - 1);

            getZeroSlides(slides.length, current, slideIndex);
    
            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
    
            sliderField.style.transform = `translateX(-${offset}px)`;
        });
    });
    // Slider 1 ===================================

    // const slides = document.querySelectorAll('.offer__slide'),
    //       prev = document.querySelector('.offer__slider-prev'),
    //       next = document.querySelector('.offer__slider-next'),
    //       total = document.querySelector('#total'),
    //       current = document.querySelector('#current');

    // let slideIndex = 1;

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    //     current.textContent = `0${slideIndex}`;
    // } else {
    //     total.textContent = slides.length;
    //     current.textContent = slideIndex;
    // }

    // showSlides(slideIndex);

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.classList.add('hide'));
    //     slides[slideIndex - 1].classList.add('show');
    //     slides[slideIndex - 1].classList.remove('hide');

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlide(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => plusSlide(-1));
    // next.addEventListener('click', () => plusSlide(1));
   
}

export default slider;