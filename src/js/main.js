"use strict";


const _$ = document.querySelector.bind(document);
var DIALOG_OPEN_CLASS = '__open';

$(document).ready(function(){

  $('select').niceSelect();

  const owl = $('#owl-carousel_1');

  owl.owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    margin: 5,
    mouseDrag: false, 
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
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
    loop: false,
    nav: false, 
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
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    dotData: true,
    dots: true,
    dotsContainer: '#carousel-custom-dots',
    dotsData: true,
    items: 1,
    loop:true,
    margin: 1,
    nav:false,
    smartSpeed:450,
    autoHeight: true
  });

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

      }, 1);

  });

  const owlCarousel4 = $('#owl-carousel_4');

  owlCarousel4.owlCarousel({
    loop:false,
    nav:false,
    stagePadding: 50,
    items: 5,
    autoWidth: true,
    margin: 300
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
  var triggers = Array.from(document.querySelectorAll('[data-modal-open], [data-modal-close]'));
  triggers.forEach(element => {
    element.addEventListener('click', function () {
      var isOpen = !!element.dataset.modalOpen;
      var selector = isOpen ? element.dataset.modalOpen : element.dataset.modalClose;
      var modal = document.querySelector(selector);
      if (!modal) {
        console.warn('there is no dilaog ' + selector);
        return;
      }
        modal.classList[isOpen ? 'add' : 'remove'](DIALOG_OPEN_CLASS);
    });
  });
})();

// Navbar show on scroll

const navEl = document.getElementById('navbar-scroll');

const height = window.innerHeight;

let lastScrollPosition = 0;
function showNavOnScroll() {

  const scrollPosition = document.body.getBoundingClientRect().top;

  const isScrollDirectionBackwards = lastScrollPosition < scrollPosition;
  
  if (isScrollDirectionBackwards && scrollPosition < -height) {

    navEl.classList.add('navbar-scroll_active');

  } else {

    navEl.classList.remove('navbar-scroll_active');

  }

  lastScrollPosition = scrollPosition;
};

window.addEventListener('scroll', showNavOnScroll);


const menu = document.getElementById('menu')

const menuNavBurger = document.getElementById('menu-nav-burger-desc')

const navBurgers = document.querySelectorAll('.nav-burger')


for (var i = 0; i < navBurgers.length; i++) {
  navBurgers[i].addEventListener("click", function() {
    menu.classList.add('__active');
  });
}

menuNavBurger.addEventListener("click", function() {

  menu.classList.remove('__active');

})



const container = document.querySelector('#carousel-masonry');

const btnPrev = document.querySelector('#prev-slide__masonry');

const btnNext = document.querySelector('#next-slide__masonry');

var elementsArr = Array.from(document.querySelectorAll('#carousel-masonry > *'))

var index = 0;

var lastIndex = elementsArr.length - 2;

const breakpointsArray = [];

elementsArr.reduce((baseOffset, element) => {
  const offset = element.clientWidth + 30;
  const result = baseOffset + offset;
  breakpointsArray.push(-result);
  return result;

}, 0);

btnNext.addEventListener("click", function(event) {

  event.preventDefault();

  index++

  var transform = container.style.transform = `translateX(${breakpointsArray[index]}px)`;

  if (index >= lastIndex) {
    index = lastIndex - 1
  }
  
});

btnPrev.addEventListener("click", function(event) {
  
  event.preventDefault();

  index--

  var transform =  container.style.transform = `translateX(${breakpointsArray[index]}px)`;
  
  if (index <= 0) {
    index = 0;
    container.style.transform = `translateX(0)`;
  }
  
});





