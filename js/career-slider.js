(function () {
    let activeSlideIndx = 0;
    const allSlides = document.querySelectorAll('.slide');
    const btnNext = document.querySelector('.next__slide');
    const btnPrev = document.querySelector('.previous__slide');

    allSlides[activeSlideIndx].classList.add('active-slide'); 

  function nextSlide () {
    allSlides[activeSlideIndx].classList.remove('active-slide');
    activeSlideIndx++;
    if (activeSlideIndx >= allSlides.length) activeSlideIndx = 0;
    allSlides[activeSlideIndx].classList.add('active-slide')
  }

  function prevSlide () {
    allSlides[activeSlideIndx].classList.remove('active-slide');
    activeSlideIndx--;
    if (activeSlideIndx < 0) activeSlideIndx = allSlides.length - 1;
    allSlides[activeSlideIndx].classList.add('active-slide')
  }

  btnNext.addEventListener('click', nextSlide());
  btnPrev.addEventListener('click', prevSlide());
})();