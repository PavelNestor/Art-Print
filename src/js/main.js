"use strict";

const _$ = document.querySelector.bind(document);

$(document).ready(function(){

  $('select').niceSelect();

  const owl = $('#owl-carousel_1');

  owl.owlCarousel({
    loop:true,
    nav:false,
    items: 1,
    margin: 5
  });
  
  // Custom Button
  $('#next-slide').click(function(event) {
    event.preventDefault()
    owl.trigger('next.owl.carousel');
  });

  $('#prev-slide').click(function(event) {
    event.preventDefault()
    owl.trigger('prev.owl.carousel');
  });


  const owlMasonry = $('#owl-carousel_2');

  owlMasonry.owlCarousel({
    loop:false,
    nav:false, 
    autoWidth: true,
    items: 4,
    margin: 30,
    slideBy: 3,
    responsive: {
      0:{
        slideBy: 1,
      },
      640:{
        slideBy: 3,
      }
    }
  });
  
  // Custom Button
  $('#next-slide__masonry').click(function(event) {
    event.preventDefault()
    owlMasonry.trigger('next.owl.carousel');
  });

  $('#prev-slide__masonry').click(function(event) {
    event.preventDefault()
    owlMasonry.trigger('prev.owl.carousel');
  });


  const owlCarousel3 = $('#owl-carousel_3');

  owlCarousel3.owlCarousel({
    loop:true,
    items: 1,
    nav:false,
    animateOut: 'fadeOut',
    dots: true,
    dotData: true,
    dotsData: true,
    dotsContainer: '#carousel-custom-dots',
    margin: 1
  })

  $('#next-slide__3').click(function(event) {
    event.preventDefault()
    owlCarousel3.trigger('next.owl.carousel');
  });

  $('#prev-slide__3').click(function(event) {
    event.preventDefault()
    owlCarousel3.trigger('prev.owl.carousel');
  });

  $('#carousel-custom-dots').on('click', function() {

    setTimeout(function(){

        $('.slider-right').css('display', 'block');
        // owlCarousel3.trigger('refresh.owl.carousel');

      }, 1);

  });

  const owlCarousel4 = $('#owl-carousel_4');

  owlCarousel4.owlCarousel({
    loop:false,
    nav:false,
    items: 5,
    autoWidth: true,
    margin: 60
  })

  $('#next-slide__4').click(function(event) {
    event.preventDefault()
    owlCarousel4.trigger('next.owl.carousel');
  });

  $('#prev-slide__4').click(function(event) {
    event.preventDefault()
    owlCarousel4.trigger('prev.owl.carousel');
  });

  $('.button-close').on('click', function() {

    setTimeout(function(){

      $(this).parent($('.slider-right').css('display', 'none'));

    }, 1);
  });

});

(function () {
  var openModal = _$("#open-modal");
  var closeModal = _$("#close-modal");
  var modalMain = _$("#modal-main");

  const onToogleMenu = () => {
    console.log(openModal, closeModal);
    modalMain.classList.toggle("app-dialog_active");
  };

  openModal.addEventListener("click", onToogleMenu);
  openModal.addEventListener("touch", onToogleMenu);
  closeModal.addEventListener("click", onToogleMenu);
  closeModal.addEventListener("touch", onToogleMenu);
})();

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const slides = $$('.slides');
// const prevSlide = $('#prev-slide');
// const nextSlide = $('#next-slide');

// let slideIndex = 1;
// showSlides(slideIndex);

// function nextSlides() {
//   showSlides((slideIndex += 1));
// }

// function prewSlides() {
//   showSlides((slideIndex += -1));
// }

// function showSlides(index) {
//   console.log('index', index);
//   console.log('slides', slides.length);
  
//   if (index > slides.length) {
//     slideIndex = 1;
//   }

//   if (index < 1) {
//     slideIndex = slides.length;
//   }

//   slides.forEach(slide => { slide.style.display = 'none' });
//   slides[slideIndex - 1].style.display = 'block';
// }

// prevSlide.addEventListener('click', prewSlides);
// nextSlide.addEventListener('click', nextSlides);
