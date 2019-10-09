"use strict";

var _$ = document.querySelector.bind(document);
var DIALOG_OPEN_CLASS = "__open";

$(document).ready(function () {
  // nice //

  $("select").niceSelect();

  // carousel 1//

  var owl = $("#owl-carousel_1");

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
        fade: true
      },
      640: {
        touchDrag: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
      }
    }
  });

  // Custom Button
  $("#next-slide").click(function (event) {
    event.preventDefault();
    owl.trigger("next.owl.carousel");
  });

  $("#prev-slide").click(function (event) {
    event.preventDefault();
    owl.trigger("prev.owl.carousel");
  });

  // carousel 2 //

  var owlMasonry = $("#owl-carousel_2");

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
  $("#next-slide__masonry").click(function (event) {
    event.preventDefault();
    owlMasonry.trigger("next.owl.carousel");
  });

  $("#prev-slide__masonry").click(function (event) {
    event.preventDefault();
    owlMasonry.trigger("prev.owl.carousel");
  });

  // carousel 3 //

  var owlCarousel3 = $("#owl-carousel_3");

  owlCarousel3.owlCarousel({
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    dotData: true,
    dots: true,
    dotsContainer: "#carousel-custom-dots",
    dotsData: true,
    items: 1,
    loop: true,
    pullDrag: false,
    freeDrag: false,
    mouseDrag: false,
    touchDrag: false,
    margin: 1,
    nav: false,
    smartSpeed: 450,
    autoHeight: true
  });

  $("#next-slide__3").click(function (event) {
    event.preventDefault();
    owlCarousel3.trigger("next.owl.carousel");
  });

  $("#prev-slide__3").click(function (event) {
    event.preventDefault();
    owlCarousel3.trigger("prev.owl.carousel");
  });

  $("#carousel-custom-dots").on("click", function () {
    setTimeout(function () {
      $(".slider-right").css("display", "block");
    }, 1);
  });

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

  var owlCarousel4 = $('#owl-carousel_4');

  owlCarousel4.owlCarousel({

    loop: false,
    nav: false,
    items: 4,
    smartSpeed: 450,

    // center: true,
    responsive: {
      0: {
        slideBy: 1,
        items: 1,
        autoWidth: true,
        margin: 20
      },
      640: {
        slideBy: 1,
        items: 2,
        autoWidth: false,
        margin: 20
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

  });

  if ($(window).width() < 640) {
    owlCarousel4.on('translate.owl.carousel', function (event) {

      var contO = $(this).find('.owl-stage');

      var index = event.item.index;

      if (index > 0) {

        var currS = $('.slider-team .owl-item').eq(index);

        var currw = currS.width();

        var wWidth = $(window).width();

        var centeredW = (wWidth - 20 - currw - 20) / 2;

        $(this).addClass('trigger');

        contO.css('--margin', centeredW + "px");
      } else {

        $(this).removeClass('trigger');

        contO.css('--margin', '0');
      }
    });
  }

  $('#next-slide__4').click(function (event) {
    event.preventDefault();
    owlCarousel4.trigger('next.owl.carousel');
  });

  $('#prev-slide__4').click(function (event) {
    event.preventDefault();
    owlCarousel4.trigger('prev.owl.carousel');
  });

  $(".button-close").on("click", function () {
    setTimeout(function () {
      $(this).parent($(".slider-right").css("display", "none"));
    }, 1);
  });
});

// modals //

(function () {
  var triggers = Array.from(document.querySelectorAll("[data-modal-open], [data-modal-close]"));
  triggers.forEach(function (element) {
    element.addEventListener("click", function () {
      var isOpen = !!element.dataset.modalOpen;
      var selector = isOpen ? element.dataset.modalOpen : element.dataset.modalClose;
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

var navEl = document.getElementById("navbar-scroll");

var height = window.innerHeight;

var lastScrollPosition = 0;
function showNavOnScroll() {
  var scrollPosition = document.body.getBoundingClientRect().top;

  var isScrollDirectionBackwards = lastScrollPosition < scrollPosition;

  if (isScrollDirectionBackwards && scrollPosition < -height) {
    navEl.classList.add("navbar-scroll_active");
  } else {
    navEl.classList.remove("navbar-scroll_active");
  }

  lastScrollPosition = scrollPosition;
}

window.addEventListener("scroll", showNavOnScroll);

// menu //

var menu = document.getElementById("menu");

var menuNavBurger = document.getElementById("menu-nav-burger-desc");

var navBurgers = document.querySelectorAll(".nav-burger");

for (var i = 0; i < navBurgers.length; i++) {
  navBurgers[i].addEventListener("click", function () {
    menu.classList.add("__active");
  });
}

menuNavBurger.addEventListener("click", function () {
  menu.classList.remove("__active");
});

// slider masonry //

var container = document.querySelector("#carousel-masonry");

var btnPrev = document.querySelector("#prev-slide__masonry");

var btnNext = document.querySelector("#next-slide__masonry");

var elementsArr = Array.from(document.querySelectorAll("#carousel-masonry > *"));

var index = 0;

var breakpointsArray = [];

elementsArr.reduce(function (baseOffset, element) {
  var offset = element.clientWidth + 30;
  var result = baseOffset + offset;
  breakpointsArray.push(-result);
  return result;
}, 0);

if (window.outerWidth <= 640) {

  var lastIndex = elementsArr.length - 1;
} else {

  var lastIndex = elementsArr.length - 4;
}

btnNext.addEventListener("click", function (event) {
  event.preventDefault();

  var transform = container.style.transform = "translateX(" + breakpointsArray[index] + "px)";

  index++;

  if (index >= lastIndex) {
    index = lastIndex - 1;
  }
});

btnPrev.addEventListener("click", function (event) {
  event.preventDefault();

  index--;

  var transform = container.style.transform = "translateX(" + breakpointsArray[index] + "px)";

  if (index <= 0) {
    index = 0;
    container.style.transform = "translateX(0)";
  }
});

// anchors scroll //

var anchors = document.querySelectorAll(".navbar__link");

var _loop = function _loop(anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.remove("__active");
    var blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var anchor = _step.value;

    _loop(anchor);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}