"use strict";

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

});

$(document).ready(function(){
  const owlMasonry = $('#owl-carousel_2');
  owlMasonry.owlCarousel({
    loop:false,
    nav:false, 
    autoWidth: true,
    items: 4,
    margin: 30
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
});

$(document).ready(function(){
  const owl = $('#owl-carousel_3');
  owl.owlCarousel({
    loop:true,
    nav:false,
    items: 1,
    margin: 5
  });
});

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
