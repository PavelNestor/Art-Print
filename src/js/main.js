"use strict";

const _$ = document.querySelector.bind(document);
var DIALOG_OPEN_CLASS = "__open";
var DIALOG_ANIMATE_CLASS = "__animate";






$(document).ready(function() {

  // TOP SLIDER //
  const containerSlider = document.getElementsByClassName("slideshow-container");

  if(containerSlider.length > 0) {
    
    let slides = document.querySelectorAll(".slideshow-container .my-slides");

    let currentSlide = 0;
    
    let slideInterval = setInterval(nextSlide, 5000);
    
    function nextSlide(){
      slides[currentSlide].className = slides[currentSlide].className.replace(" active", "")
      currentSlide = (currentSlide+1)%slides.length;
      slides[currentSlide].className += " active";
    }
    
    
    function nextSlide(){
      goToSlide(currentSlide+1);
    }
    
    function previousSlide(){
      goToSlide(currentSlide-1);
    }
  
    let pagination = document.querySelector(".slider-pagination__custom");
  
    
  
    for(let i = 0; i < slides.length; i++){
      pagination.insertAdjacentHTML("afterbegin", `<span class="owl-dot"></span>`)
    }

    function positionButton() {

      let elementTitle = document.querySelectorAll(".slider-title")
    
      let slideLeftPos = document.getElementsByClassName("slides-side__left")
    
      let heightTitle = elementTitle[currentSlide].offsetHeight / 2;
    
      slideLeftPos = slideLeftPos[currentSlide].offsetHeight / 2
    
      let position = slideLeftPos + heightTitle
    
      let btn = document.getElementById("wrap-button")
    
      btn.style.top = `${position}px`

    }

    positionButton();
      

    window.addEventListener('resize', function(event){
      positionButton()
    });
  
    let paginationItem = document.querySelectorAll(".slider-pagination__custom .owl-dot");
  
    paginationItem[currentSlide].className += " active";
  
  
    function goToSlide(newSlide){ 
    
      slides[currentSlide].className = slides[currentSlide].className.replace(" active", "")
  
      paginationItem[currentSlide].className = paginationItem[currentSlide].className.replace(" active", "")
    
      currentSlide = (newSlide + slides.length)%slides.length;
      
      paginationItem[currentSlide].className += " active";
    
      slides[currentSlide].className += " active";
    
      positionButton()
  
    }
  
    
  
    
    let next = document.querySelector("#next-slide");
    
    let previous = document.querySelector("#prev-slide");
    
    next.onclick = function(e){
      e.preventDefault()

      nextSlide();
      clearTimeout(slideInterval)
      this.classList.add("pointer-event")
  
      setTimeout(function () {
        next.classList.remove("pointer-event")
      }, 800)
  
    }
    
    previous.onclick = function(e){
      e.preventDefault()
      previousSlide();
      clearTimeout(slideInterval)
      this.classList.add("pointer-event")
  
      setTimeout(function () {
        previous.classList.remove("pointer-event")
      }, 800)
    }
  
    let containerSlider = document.querySelector(".slideshow-container")
  
    containerSlider.addEventListener('touchstart', handleTouchStart, false);        
    containerSlider.addEventListener('touchmove', handleTouchMove, false);

      var xDown = null;                                                        
      var yDown = null;

      function getTouches(evt) {
        // evt.preventDefault()
        return evt.touches ||             // browser API
              evt.originalEvent.touches; // jQuery
      }                                                     

      function handleTouchStart(evt) {
          // evt.preventDefault()
          const firstTouch = getTouches(evt)[0];                                      
          xDown = firstTouch.clientX;                                      
          yDown = firstTouch.clientY;                                      
      };                                                

      function handleTouchMove(evt) {
          // evt.preventDefault()

          if ( ! xDown || ! yDown ) {
              return;
          }

          var xUp = evt.touches[0].clientX;                                    
          var yUp = evt.touches[0].clientY;

          var xDiff = xDown - xUp;
          var yDiff = yDown - yUp;

          if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
              if ( xDiff > 0 ) {
                next.click();  
              } else {
                previous.click(); 
              }                       
          } 
          xDown = null;
          yDown = null;                                             
      };

  }
  // END TOP SLIDER //


  ////////// validation //////////

    $("#submit-main-form").on("click", function(event) {
      const COUNT_SELECT = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        // "13",
        // "14",
        // "15",
        // "16",


      ];
      const COUNT_INPUT = [
        "1",
        "2",
        "3",
        "4",
        "5",

      ];

      var selects = COUNT_SELECT.map(item => {
        const itemDOM = _$(`div.form__select${item}`);
        const value = _$(`#formCalc${item}`).value;
  
        if (value === "") {
          itemDOM.className += " errors";
          return false;
        } else {
          itemDOM.className = `nice-select form__select form__select${item}`;
          return true;
        }
      });
      var input = COUNT_INPUT.map(item => {
        const itemDOM = _$(`#form-input-wrap${item}`);
        const value = _$(`#form-input${item}`).value;
  
        if (value === "") {
          itemDOM.className += " errors";
          return false;
        } else {
          itemDOM.className = "";
          return true;
        }
      });  
  
      if ((selects.indexOf(false) === -1) && (input.indexOf(false) === -1) ) {
        event.preventDefault();
        $("#form-submit").trigger("click");
        event.preventDefault();
      }
    });
  
  
  const footerForm = $("submit-footer-form");

  if(footerForm.length > 0) {
    $("#submit-footer-form").on("click", function(event) {
      const input1 = () => {
        const itemDOM = _$(`#form-input-wrap`);
        const value = _$(`#form-footer-input-name`).value;
  
        if (value === "") {
          itemDOM.className += " errors";
          return false;
        } else {
          itemDOM.className = "form-input-wrap";
          return true;
        }
      };
  
      const name = input1();
  
      const input2 = () => {
        const itemDOM = _$(`#form-input-wrap2`);
        const value = _$(`#form-footer-input-mail`).value;
  
        if (value === "") {
          itemDOM.className += " errors";
          return false;
        } else {
          itemDOM.className = "form-input-wrap";
          return true;
        }
      };
  
      const mail = input2();
  
      const input3 = () => {
        const itemDOM = _$(`#form-input-wrap3`);
        const value = _$(`#form-footer-input-text`).value;
  
        if (value === "") {
          itemDOM.className += " errors";
          return false;
        } else {
          itemDOM.className = "form-input-wrap";
          return true;
        }
      };
  
      const text = input3();
  
      if (name && mail && text) {
        event.preventDefault();
        $("#form-footer-submit").trigger("click");
        event.preventDefault();
      }
    });
  }

  

  // NICE SELECT //
  
  $("select").niceSelect();

  // NICE SELECT //


  // OWL CAROUSEL BLUE// 

  const owlCarousel3 = $("#owl-carousel_3");

  if(owlCarousel3.length > 0) {
    owlCarousel3.owlCarousel({
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dotData: true,
      dots: true,
      dotsContainer: "#carousel-custom-dots",
      dotClass: "owl-dot",
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
        $(".slider-right").addClass("slider-visible");
        $(".slider-right").removeClass("slider-hidden");
        if ($(window).width() < 1030) {
          document.body.style.overflow = "hidden"
        }


      setTimeout(function() {
        $(".slider-right").addClass("__animate");
      }, 400);

    });
  
    $(".button-close").on("click", function() {
        $(this).parent($(".slider-right").removeClass("__animate"));
        if ($(window).width() < 1030) {
          document.body.style.overflow = "unset"
        }

      setTimeout(function() {
        $(this).parent($(".slider-right").addClass("slider-hidden"));
        $(this).parent($(".slider-right").removeClass("slider-visible"));
      }, 400);
        

    });
  
    $(window).on("resize", function() {
      if ($(window).width() < 640)
        $(".slider-right").removeClass("slider-hidden");
      $(this).parent($(".slider-right").removeClass("slider-visible"));
    });
  
  }
  // OWL CAROUSEL BLUE END// 

  
  // PRELOADER //

  const loading = {
    avgTime: 3000,
    finished: false,
    preloader: document.querySelector(".preloader"),
    preloaderBar: document.querySelector(".preloader > .preloaderBar"),
    state: 0,
    trg: 1,
    loaded: function(force) {
      if (++loading.state === loading.trg || force === true) {
        loading.status(1);
        setTimeout(loading.done, 500);
      } else {
        loading.status(loading.state / loading.trg / 1.1);
      }
    },

    status: function(mult) {
      if (loading.finished) {
        return;
      }
      const value = Math.ceil(mult * 100);

      if (value > 0) {
        loading.preloaderBar.style.width = `${value}%`;
      }
    },

    restart: function() {
      loading.status(0);
      loading.preloader.classList.remove("preloader_loaded");
    },

    done: function() {
      if (loading.finished) {
        return;
      }

      // hide preloader
      loading.preloader.classList.add("preloader_loaded");
      loading.status(0);
      loading.finished = true;
    }
  };

  // force loading status
  setTimeout(function(slideInterval) {
    loading.loaded(true);
    clearTimeout(slideInterval)
  }, 3000);

  // on load
  window.onload = function(slideInterval) {
    loading.loaded(true);
    clearTimeout(slideInterval)
  };

  // on ready
  function ready(fn) {
    if (document.readyState != "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(() => {
    const images = Array.from(document.querySelectorAll("img"));
    images.forEach(image => {
      if (image.complete) {
        return;
      }
      loading.trg++;
      image.addEventListener("load", loading.loaded);
    });

    const links = Array.from(document.querySelectorAll("a"));
    links.forEach(link => {
      const href = link.getAttribute("href");
      const ifNoReload = new RegExp("^#|mailto|tel").test(href);

      if (!href || ifNoReload) {
        return;
      }

      link.addEventListener("click", e => {
        loading.restart();
        e.preventDefault();

        setTimeout(() => {
          document.location.href = href;
        }, 400);
      });
    });
  });
  // PRELOADER END//

  // MODALS //

  (function() {
    var triggers = Array.from(
      document.querySelectorAll("[data-modal-open], [data-modal-close]")
    );
    triggers.forEach(element => {
      element.addEventListener("click", function(event) {
        event.preventDefault();
        var isOpen = !!element.dataset.modalOpen;
        var selector = isOpen ? element.dataset.modalOpen : element.dataset.modalClose;
        var modal = document.querySelector(selector);
        if (!modal) {
          console.warn("there is no dilaog " + selector);
          return;
        }

        if (isOpen) {
          modal.classList.add(DIALOG_OPEN_CLASS);
          document.body.style.overflow = "hidden"
          setTimeout(() => {
            modal.classList.add(DIALOG_ANIMATE_CLASS)
          }, 2);
        } else {
          modal.classList.remove(DIALOG_ANIMATE_CLASS)
          document.body.style.overflow = "unset"

          setTimeout(() => {
            modal.classList.remove(DIALOG_OPEN_CLASS);
        }, 600);
        }

      });
      
    });
  })();
  
  // MODALS END//

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
  

  

  // MENU //

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
  

  // END MENU //
 

  // slider masonry //

  const initSlider = () => {
    const container = document.querySelector("#carousel-masonry");

    const btnPrevM = document.querySelector("#prev-slide__masonry");

    const btnNextM = document.querySelector("#next-slide__masonry");

    const slides = document.querySelectorAll("#carousel-masonry > *");

    let sliderWidth = document.querySelector(".wrap-masonry").offsetWidth;

    let widthArray = [0];

    let newWidthArray = [0];

    let containerWidth = 0;

    let offset = 0;

    let step = 0;

    let remainder = 0;

    for (let i = 0; i < slides.length; i++) {
      widthArray.push(slides[i].offsetWidth + 30);
      containerWidth += slides[i].offsetWidth + 30;

      if (window.innerWidth <= 640) {
        newWidthArray = widthArray[1];
      } else {
        newWidthArray = widthArray.reduce((sum, cur, index) => {
          if (index <= 3) {
            return sum + cur;
          } else {
            return sum;
          }
        }, 0);
      }
    }

    container.style.width = containerWidth + "px";

    btnNextM.addEventListener("click", function(event) {
      event.preventDefault();
      remainder = containerWidth - sliderWidth - (offset + newWidthArray);

      if (remainder >= 0) {
        step++;

        offset = offset + newWidthArray;
        container.style.transform = `translateX(${-offset}px)`;
        container.classList.add("last-margin");

        if (window.innerWidth <= 640 && widthArray.length - 3 == step) {
          container.style.margin = "0 0 0 -7.5rem";
        }
      } else {
        container.style.transform = `translateX(${-(
          containerWidth - sliderWidth
        )}px)`;
      }
    });

    btnPrevM.addEventListener("click", function(event) {
      event.preventDefault();

      if (offset > 0) {
        offset = offset - newWidthArray;
      }

      container.style.transform = `translateX(${-offset}px)`;
      step--;

      if (offset <= 0) {
        container.style.transform = "translateX(" + 0 + "px)";
        container.classList.remove("last-margin");
        container.style.margin = "0";
      }
    });

    const containerMasonry = document.querySelector('.section-masonry')

    
    containerMasonry.addEventListener('touchstart', handleTouchStart, false);        
    containerMasonry.addEventListener('touchmove', handleTouchMove, false);

      var xDown = null;                                                        
      var yDown = null;

      function getTouches(evt) {
        return evt.touches ||             
              evt.originalEvent.touches; 
      }                                                     

      function handleTouchStart(evt) {
          const firstTouch = getTouches(evt)[0];                                      
          xDown = firstTouch.clientX;                                      
          yDown = firstTouch.clientY;                                      
      };                                                

      function handleTouchMove(evt) {
          if ( ! xDown || ! yDown ) {
              return;
          }

          var xUp = evt.touches[0].clientX;                                    
          var yUp = evt.touches[0].clientY;

          var xDiff = xDown - xUp;
          var yDiff = yDown - yUp;

          if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
              if ( xDiff > 0 ) {
                btnNextM.click(); 
              } else {
                btnPrevM.click(); 
              }                       
          }                                                                

          xDown = null;
          yDown = null;                                             
      };
  };

  initSlider();

  //owl-carousel_4

  const sliderTeam = () => {
    const container = document.querySelector(".slider-team");

    const btnPrev = document.querySelector("#prev-slide__4");

    const btnNext = document.querySelector("#next-slide__4");

    const slides = document.querySelectorAll(".slider-team > *");

    let sliderWidth = document.querySelector(".wrap-slider__team").clientWidth;

    let widthArray = [0];

    let containerWidth = 0;

    let offset = 0;

    let step = 0;

    let remainder = 0;

    for (let i = 0; i < slides.length; i++) {
      widthArray.push(slides[i].clientWidth + 50);
      containerWidth += slides[i].clientWidth + 50;
    }

    container.style.width = containerWidth + "px";

    btnNext.addEventListener("click", function(event) {
      event.preventDefault();
      remainder = containerWidth - sliderWidth - (offset + widthArray[step]);

      if (remainder >= 0) {
        step++;
        offset = offset + widthArray[step];
        container.style.transform = `translateX(${-offset}px)`;

        if (window.outerWidth <= 640 && widthArray.length -1 === step) {
          container.style.margin = "0 0 0 -7.5rem";
        }
        container.classList.add("last-margin");
      } else {
        container.style.transform = `translateX(${-(
          containerWidth - sliderWidth
        )}px)`;
      }
    });

    btnPrev.addEventListener("click", function(event) {
      event.preventDefault();
      offset = offset - widthArray[step];
      container.style.transform = `translateX(${-offset}px)`;
      step--;

      if (step <= 0) {
        step = 0;
        container.classList.remove("last-margin");
      }
      if (window.outerWidth <= 640 && widthArray.length -2 > step) {
        container.style.margin = "0";
        console.log('back')
      }
    });

    let containerTeam = document.querySelector('.section-team')

    containerTeam.addEventListener('touchstart', handleTouchStart, false);        
    containerTeam.addEventListener('touchmove', handleTouchMove, false);

      var xDown = null;                                                        
      var yDown = null;

      function getTouches(evt) {
        return evt.touches ||             
              evt.originalEvent.touches; 
      }                                                     

      function handleTouchStart(evt) {
          const firstTouch = getTouches(evt)[0];                                      
          xDown = firstTouch.clientX;                                      
          yDown = firstTouch.clientY;                                      
      };                                                

      function handleTouchMove(evt) {
          if ( ! xDown || ! yDown ) {
              return;
          }

          var xUp = evt.touches[0].clientX;                                    
          var yUp = evt.touches[0].clientY;

          var xDiff = xDown - xUp;
          var yDiff = yDown - yUp;

          if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
              if ( xDiff > 0 ) {
                btnNext.click();  
              } else {
                btnPrev.click(); 
              }                       
          }
          xDown = null;
          yDown = null;                                             
      };
  };

  sliderTeam();

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


  if (window.innerWidth < 640) {
    const highlight = () => {
      let divs = document.querySelectorAll(".services-card_mobile__hilight");
      divs.forEach(element => {
        element.classList.remove("light");
      });
      let random = Math.floor(Math.random() * divs.length);

      divs[random].classList.add("light");
    };

    highlight();
    setInterval(highlight, 1200);
  }
  
  AOS.init({
    once: true,
    disable: 'tablet'
  });


});


