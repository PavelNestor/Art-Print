"use strict";

const _$ = document.querySelector.bind(document);
var DIALOG_OPEN_CLASS = "__open";

$(document).ready(function() {
  // nice //

  $("select").niceSelect();

  // carousel 1//

  const owl = $("#owl-carousel_1");

  owl.owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    margin: 5,
    pullDrag: false,
    freeDrag: false,
    mouseDrag: false,
    touchDrag: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    fade: true,
    smartSpeed: 450,
    responsive: {
      0: {
        touchDrag: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        fade: true,
      },
      640: {
        touchDrag: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
      }
    }
  });

  // Custom Button
  $("#next-slide").click(function(event) {
    event.preventDefault();
    owl.trigger("next.owl.carousel");
  });

  $("#prev-slide").click(function(event) {
    event.preventDefault();
    owl.trigger("prev.owl.carousel");
  });

  // carousel 2 //

  const owlMasonry = $("#owl-carousel_2");

  owlMasonry.owlCarousel({
    loop: false,
    nav: false,
    autoWidth: true,
    items: 4,
    margin: 30,
    slideBy: 3,
    responsive: {
      0: {
        slideBy: 1
      },
      640: {
        slideBy: 3
      }
    }
  });

  // Custom Button
  $("#next-slide__masonry").click(function(event) {
    event.preventDefault();
    owlMasonry.trigger("next.owl.carousel");
  });

  $("#prev-slide__masonry").click(function(event) {
    event.preventDefault();
    owlMasonry.trigger("prev.owl.carousel");
  });

  // carousel 3 //

  const owlCarousel3 = $("#owl-carousel_3");

  owlCarousel3.owlCarousel({
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    dotData: true,
    dots: true,
    dotsContainer: "#carousel-custom-dots",
    dotsData: true,
    items: 1,
    loop: false,
    pullDrag: false,
    freeDrag: false,
    mouseDrag: false,
    touchDrag: false,
    margin: 1,
    nav: false,
    smartSpeed: 450,
    // autoWidth: true,
    autoHeight: true
  });

  $("#next-slide__3").click(function(event) {
    event.preventDefault();
    owlCarousel3.trigger("next.owl.carousel");
  });

  $("#prev-slide__3").click(function(event) {
    event.preventDefault();
    owlCarousel3.trigger("prev.owl.carousel");
  });

  $("#carousel-custom-dots").on("click", function() {
    setTimeout(function() {
      $(".slider-right").addClass('slider-visible');
      $(".slider-right").removeClass('slider-hidden');
    }, 1);
  });

  $(".button-close").on("click", function() {
    setTimeout(function() {
      $(this).parent($(".slider-right").addClass('slider-hidden'));
      $(this).parent($(".slider-right").removeClass('slider-visible'));
    }, 1);
  });
  

  $(window).on('resize', function () {
    if($(window).width() < 640 )
      $(".slider-right").removeClass('slider-hidden');
      $(this).parent($(".slider-right").removeClass('slider-visible'));
  })

// var timeoutId;
// var DEBOUNCE_INTERVAL = 2000;
// window.addEventListener('resize', () => {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(() => {
//     // owlCarousel3.trigger('refresh.owl.carousel');

//     });
//   }, DEBOUNCE_INTERVAL);
// });

  // carousel 4 //

  // $(".slider-team").slick({
  //   dots: false,
  //   infinite: false,
  //   slidesToScroll: 1,
  //   slidesToShow: 5,
  //   // variableWidth: true,
  //   // centerMode: true,
  //   responsive: [

  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 730,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: false,
  //         infinite: false,
  //         centerMode: true,
  //         variableWidth: true
  //       }
  //     },
  //   ]
  // });

  const owlCarousel4 = $('#owl-carousel_4');

  owlCarousel4.owlCarousel({
    
    loop:false,
    nav:false,
    items: 4,
    pullDrag: false,
    freeDrag: false,
    mouseDrag: false,
    touchDrag: false,
    smartSpeed: 450,
    
    // center: true,
    responsive: {
      0: {
        slideBy: 1,
        items: 1,
        autoWidth: true,
        margin: 20,
        center: true,
      },
      640: {
        slideBy: 1,
        items: 2,
        autoWidth: false,
        margin: 20,
        center: true,
      },
      820: {
        slideBy: 1,
        items: 2,
        autoWidth: false,
        margin: 20
      },
      920: {
        slideBy: 1,
        items: 4,
        autoWidth: false,
        margin: 20
      },
      1024: {
        items: 4,
        slideBy: 1,
        autoWidth: false,
        margin: 20
      },
      1440: {
        slideBy: 5,
        autoWidth: false,
        margin: 50
      }
    }

  })

  // if($(window).width() < 640 ) {
  //   owlCarousel4.on('initialized.owl.carousel', function() {

  //     let contO = $(this).find('.owl-stage')

  //     // let index = event.item.index 

  //     console.log($(this))

  //     let currS = $('.slider-team .owl-item').eq(index)

  //     let currw = currS.width()
  
  //     let wWidth = $(window).width()
  
  //     let centeredW = ((wWidth - 20) - currw - 20) / 2  
    
  //     $(this).addClass('trigger')

  //     contO.css('--margin',`${centeredW}px`)

  //     // $(this).removeClass('trigger')
        
  //   })
  // }
 

  $('#next-slide__4').click(function(event) {
    event.preventDefault()
    owlCarousel4.trigger('next.owl.carousel');
  });

  $('#prev-slide__4').click(function(event) {
    event.preventDefault()
    owlCarousel4.trigger('prev.owl.carousel');
  });

 
});

// modals //

(function() {
  var triggers = Array.from(
    document.querySelectorAll("[data-modal-open], [data-modal-close]")
  );
  triggers.forEach(element => {
    element.addEventListener("click", function() {
      var isOpen = !!element.dataset.modalOpen;
      var selector = isOpen
        ? element.dataset.modalOpen
        : element.dataset.modalClose;
      var modal = document.querySelector(selector);
      if (!modal) {
        console.warn("there is no dilaog " + selector);
        return;
      }
      modal.classList[isOpen ? "add" : "remove"](DIALOG_OPEN_CLASS);
    });
  });
})();

// Navbar show on scroll //

const navEl = document.getElementById("navbar-scroll");

const height = window.innerHeight;

let lastScrollPosition = 0;
function showNavOnScroll() {
  const scrollPosition = document.body.getBoundingClientRect().top;

  const isScrollDirectionBackwards = lastScrollPosition < scrollPosition;

  if (isScrollDirectionBackwards && scrollPosition < -height) {
    navEl.classList.add("navbar-scroll_active");
  } else {
    navEl.classList.remove("navbar-scroll_active");
  }

  lastScrollPosition = scrollPosition;
}

window.addEventListener("scroll", showNavOnScroll);

// menu //

const menu = document.getElementById("menu");

const menuNavBurger = document.getElementById("menu-nav-burger-desc");

const navBurgers = document.querySelectorAll(".nav-burger");

for (var i = 0; i < navBurgers.length; i++) {
  navBurgers[i].addEventListener("click", function() {
    menu.classList.add("__active");
  });
}

menuNavBurger.addEventListener("click", function() {
  menu.classList.remove("__active");
});

// slider masonry //

const container = document.querySelector("#carousel-masonry");

const btnPrev = document.querySelector("#prev-slide__masonry");

const btnNext = document.querySelector("#next-slide__masonry");

var elementsArr = Array.from(
  document.querySelectorAll("#carousel-masonry > *")
);


var index = 0;

const breakpointsArray = [];

elementsArr.reduce((baseOffset, element) => {
  const offset = element.clientWidth + 30;
  const result = baseOffset + offset;
  breakpointsArray.push(-result);
  return result;
}, 0);

if(window.outerWidth >= 640) {
  for (var i = 0; i < breakpointsArray.length; i++) {
    breakpointsArray.splice(i + 1, 1).push();
  }
}
console.log(elementsArr);

console.log(breakpointsArray);


if(window.outerWidth <= 640) {

  var lastIndex = breakpointsArray.length - 1;

} else {

  var lastIndex = breakpointsArray.length;

}

btnNext.addEventListener("click", function(event) {
  event.preventDefault();

  

  var transform = (container.style.transform = `translateX(${breakpointsArray[index]}px)`);

  index++;

  if (index >= lastIndex) {
    index = lastIndex - 1;
  }
});


btnPrev.addEventListener("click", function(event) {
  event.preventDefault();

  index--;

  var transform = (container.style.transform = `translateX(${breakpointsArray[index]}px)`);  

  if (index <= 0) {
    index = 0;
    container.style.transform = `translateX(0)`;
  }
});

// anchors scroll //

const anchors = document.querySelectorAll(".navbar__link");

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    menu.classList.remove("__active");
    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
