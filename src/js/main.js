"use strict";

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const columns = $$('.columns');
// const prevSlide = $('#prev-slide__masonry');
// const nextSlide = $('#next-slide__masonry');

// prevSlide.onclick = left;

// function left() {
  
// }

$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop:true,
    nav:false,
    items: 1,
    margin: 5
  });
  
  // Custom Button
  $('#next-slide').click(function(e) {
    e.preventDefault()
    owl.trigger('next.owl.carousel');
  });
  $('#prev-slide').click(function(e) {
    e.preventDefault()
    owl.trigger('prev.owl.carousel');
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
