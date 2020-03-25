"use strict";

const _$ = document.querySelector.bind(document);
var DIALOG_OPEN_CLASS = "__open";
var DIALOG_ANIMATE_CLASS = "__animate";

$(document).ready(function() {

  // NICE SELECT //

  $("select").niceSelect();
  const mainSelect = $("#formCalc1")

  $(".owl-item.active").on('click', console.log('asd'));
  // console.log(containerElem);

  // .onmouseover = () => {
  //   console.log('hover triggered');
  // };

  // const elem = document.getElementsByClassName('slide-content aos-init aos-animate');
  // elem.map(item => item.setAttribute('style', "display: block") );

  // on

  mainSelect.on('change', (event) => {
    // targetElement.insertAdjacentHTML(beforeend, "<div> asdasd </div>");
    const wrap = document.getElementById("hiddenWrapp");
    const formWrap = document.getElementById("main-form-modal");

    switch (event.target.value) {
      case 'Журналы':
      case 'Брошюры':
      case 'Газеты':
      case 'Каталоги':
        let select1_4 = document.getElementById("select__wrap4");
        wrap.append(select1_4);
        let select1_14 = document.getElementById("select__wrap14");
        wrap.append(select1_14);
        // end hidden //

        // start display //
        var wrap1_2 = document.getElementById("select__wrap2");
        formWrap.append(wrap1_2);
        var wrap1_3 = document.getElementById("select__wrap3");
        formWrap.append(wrap1_3);
        const title1_1 = document.getElementById("title__wrap1");
        formWrap.append(title1_1);
        const inputWrap6 = document.getElementById("form-input-wrap6");
        formWrap.append(inputWrap6);
        const wrap1_4 = document.getElementById("select__wrap4");
        formWrap.append(wrap1_4);
        const wrap1_6 = document.getElementById("select__wrap6");
        formWrap.append(wrap1_6);
        var wrap1_8 = document.getElementById("select__wrap8");
        formWrap.append(wrap1_8);
        var wrap1_7 = document.getElementById("select__wrap7");
        formWrap.append(wrap1_7);
        var wrap1_1 = document.getElementById("bigwrap1");
        formWrap.append(wrap1_1);
        const title1_2 = document.getElementById("title__wrap2");
        formWrap.append(title1_2);
        var wrap1_2 = document.getElementById("bigwrap2");
        formWrap.append(wrap1_2);
        var wrap1_9 = document.getElementById("select__wrap9");
        formWrap.append(wrap1_9);
        var wrap1_12 = document.getElementById("select__wrap12");
        formWrap.append(wrap1_12);
        const select1_10 = document.getElementById("select__wrap10");
        formWrap.append(select1_10);
        const select1_11 = document.getElementById("select__wrap11");
        formWrap.append(select1_11);
        const select1_13 = document.getElementById("select__wrap13");
        formWrap.append(select1_13);
        break;

      case 'Листовки':
      case 'Буклеты':
      case 'Наклейки':
      case 'Евро-флаеры':
      case 'Папки':
      case 'Этикетки':
      case 'Календари':
      case 'Открытки':
        const select2_3 = document.getElementById("select__wrap3");
        const select2_8 = document.getElementById("select__wrap8"); 
        const select2_9 = document.getElementById("select__wrap9");
        const select2_10 = document.getElementById("select__wrap10");
        const select2_11 = document.getElementById("select__wrap11");
        const select2_12 = document.getElementById("select__wrap12");
        const select2_14 = document.getElementById("select__wrap14");
        wrap.append(select2_3);
        wrap.append(select2_8);
        wrap.append(select2_9);
        wrap.append(select2_10);
        wrap.append(select2_11);
        wrap.append(select2_12);
        wrap.append(select2_14);

        const input2_1 = document.getElementById("form-input-wrap6");
        wrap.append(input2_1);

        const title2_1 = document.getElementById("title__wrap1");
        wrap.append(title2_1);
        const title2_2 = document.getElementById("title__wrap2");
        wrap.append(title2_2);

        const wrap2_2 = document.getElementById("bigwrap2");
        wrap.append(wrap2_2);
        // end hiddent //
        const select2_2 = document.getElementById("select__wrap2");
        formWrap.append(select2_2);
        const select2_4 = document.getElementById("select__wrap4");
        formWrap.append(select2_4);
        const select2_6 = document.getElementById("select__wrap6");
        formWrap.append(select2_6);
        const select2_7 = document.getElementById("select__wrap7");
        formWrap.append(select2_7);
        const select2_13 = document.getElementById("select__wrap13");
        formWrap.append(select2_13);

        break;

      case 'Плакаты':
      case 'Постеры':
        const select3_3 = document.getElementById("select__wrap3");
        const select3_8 = document.getElementById("select__wrap8");
        const select3_9 = document.getElementById("select__wrap9");
        const select3_14 = document.getElementById("select__wrap14");
        const select3_12 = document.getElementById("select__wrap12");
        wrap.append(select3_3);
        wrap.append(select3_8);
        wrap.append(select3_9); 
        wrap.append(select3_12);
        wrap.append(select3_14);


        const input3_1 = document.getElementById("form-input-wrap6");
        wrap.append(input3_1);

        const title3_1 = document.getElementById("title__wrap1");
        wrap.append(title3_1);
        const title3_2 = document.getElementById("title__wrap2");
        wrap.append(title3_2);

        const wrap3_2 = document.getElementById("bigwrap2");
        wrap.append(wrap3_2);

        //end hiddent //
        const select3_2 = document.getElementById("select__wrap2");
        formWrap.append(select3_2);
        const select3_4 = document.getElementById("select__wrap4");
        formWrap.append(select3_4);
        const select3_6 = document.getElementById("select__wrap6");
        formWrap.append(select3_6);
        const select3_7 = document.getElementById("select__wrap7");
        formWrap.append(select3_7);
        const select3_13 = document.getElementById("select__wrap13");
        formWrap.append(select3_13);

        break;

      case 'Сборный тираж':

        const wrap4_1 = document.getElementById("bigwrap1");
        wrap.append(wrap4_1);
        const wrap4_2 = document.getElementById("bigwrap2");
        wrap.append(wrap4_2);

        const select4_2 = document.getElementById("select__wrap2");
        const select4_3 = document.getElementById("select__wrap3");
        const select4_4 = document.getElementById("select__wrap4");
        const select4_6 = document.getElementById("select__wrap6");
        const select4_7 = document.getElementById("select__wrap7");
        const select4_8 = document.getElementById("select__wrap8");
        const select4_9 = document.getElementById("select__wrap9");
        const select4_10 = document.getElementById("select__wrap10");
        const select4_11 = document.getElementById("select__wrap11");
        const select4_12 = document.getElementById("select__wrap12");
        // const select4_13 = document.getElementById("select__wrap13");
        // const select4_14 = document.getElementById("select__wrap14");
        wrap.append(select4_2);
        wrap.append(select4_3);
        wrap.append(select4_4);
        wrap.append(select4_6);
        wrap.append(select4_7);
        wrap.append(select4_8);
        wrap.append(select4_9);
        wrap.append(select4_10);
        wrap.append(select4_11);
        wrap.append(select4_12);
        // wrap.append(select4_13);
        // wrap.append(select4_14);

        const input4_1 = document.getElementById("form-input-wrap6");
        wrap.append(input4_1);

        const title4_1 = document.getElementById("title__wrap1");
        const title4_2 = document.getElementById("title__wrap2");
        wrap.append(title4_1);
        wrap.append(title4_2);

        break;

      default:
        console.log('Error')
        break;
    }
  });
  const modal = _$("#modal-order");

  const openMainModal = document.querySelectorAll(".js_open_main_modal");
  for (let i = 0; i < openMainModal.length; i++) {
    openMainModal && openMainModal[i].addEventListener('click', function () {
      modal.style.display = 'block';
    })
  }

  const BODY = _$("body");

  const closeMainModal = _$("#closeMainModal");
  closeMainModal && closeMainModal.addEventListener('click', function () {
    modal.style.display = 'none';
    BODY.style.overflow = 'auto';
  });

  // NICE SELECT //
  if ($('form[name="test"]') && $('form[name="test"]')[0]) {
    const COUNT_ITEM = $('form[name="test"]')[0].length - 1;
    const $form = $('form[name="test"]');
    for (let i = 0; i < COUNT_ITEM; i++) {
      if ($form[0][i].value === '' || $form[0][i].value === ' ') {
        const item = $form[0][i];
        const id = item.id.match(/\d+/g)[0]
        const DOM = _$(`#form-input-wrap${id}`)
        item.addEventListener('blur', function () {

          if (item.value === "") {
            DOM.className = "errors";
          } else {
            DOM.className = " ";
            return true;
          } 
        })
      }
    }

    $('#main-form-modal').submit(function (e) {

      var $form = $(this);
      const COUNT_ITEM = $('form[name="test"]')[0].length - 1;

      for (let i = 0; i < COUNT_ITEM; i++) {
        if ($form[0][i].id !== 'form-submit' && $form[0][i].value === '' || $form[0][i].value === ' ') {
          console.log('errors', $form[0][i]);
          return false
        }
      }

      e.preventDefault();

      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: {
          "_token": document.querySelector("meta[name='_token']").getAttribute("content"),
          "data": {
            "name": document.getElementById("form-input1").value,
            "phone": document.getElementById("form-input2").value,
            "email": document.getElementById("form-input3").value,
            "comment": document.getElementById("form-input4").value,
            "product": document.getElementById("formCalc1").value,
            "form_product": document.getElementById("formCalc2").value,
            "type_of_bond": document.getElementById("formCalc3").value,
            "order_proofing": document.getElementById("formCalc4").value,
            "number_of_pages_in_the_block": document.getElementById("form-input6").value,
            "paper_type": document.getElementById("formCalc13").value,
            "paper_weight": document.getElementById("formCalc7").value,
            "number_of_colors": document.getElementById("formCalc8").value,
            "coating_and_decoration": document.getElementById("formCalc12").value,
            "cover_paper_type": document.getElementById("formCalc13").value,
            "cover_paper_weight": document.getElementById("formCalc10").value,
            "cover_number_of_colors": document.getElementById("formCalc11").value,
            "cover_coating_and_decoration": document.getElementById("formCalc12").value,
            "number_of_copies": document.getElementById("form-input5").value
          }
        },
      }).done(function () {
        const elem = _$("#success");
        elem.style.display = `flex`;
        const close = _$("#success__close");
        close.addEventListener('click', () => {
          elem.style.display = 'none';
          modal.style.display = 'none';
          document.location.reload(true);
        })
        const closeOk = _$("#success__closeOk");
        closeOk.addEventListener('click', () => {
          elem.style.display = 'none';
          modal.style.display = 'none';
          document.location.reload(true);
        })
      }).fail(function () {
        const elem = _$("#error");
        elem.style.display = `flex`;
        const close = _$("#error__close");
        close.addEventListener('click', () => {
          elem.style.display = 'none';
          modal.style.display = 'none';
          document.location.reload(true);
        })
        const closeOk = _$("#error__closeOk");
        closeOk.addEventListener('click', () => {
          elem.style.display = 'none';
          modal.style.display = 'none';
          document.location.reload(true);
        })
        console.log('fail');
      });
      $form[0].reset();
      return false
    });

    $("#submit-main-form").on("click", function (event) {
      for (let i = 0; i <= COUNT_ITEM; i++) {

        const item = $form[0][i];

        if (item && item.id && item.id !== 'form-submit' && item.id[4] !== 'C') {

          const id = item.id.match(/\d+/g)[0]
          const DOM = _$(`#form-input-wrap${id}`);

          if (item.value === "") {
            DOM.className = "errors";
          } else {
            DOM.className = " ";
          }
        }
      }
      // var selects = arraySelect.map(item => {
      //   const itemDOM = _$(`div.form__select${item}`);
      //   const value = _$(`#formCalc${item}`).value;

      //   if (value === "") {
      //     itemDOM.className += " errors";
      //     return false;
      //   } else {
      //     itemDOM.className = `nice-select form__select form__select${item}`;
      //     return true;
      //   }
      // });
      $("#form-submit").trigger("click");
    });

    $("#submit-main-formMobile").on("click", function (event) {
      for (let i = 0; i <= COUNT_ITEM; i++) {

        const item = $form[0][i];

        if (item && item.id && item.id !== 'form-submit' && item.id[4] !== 'C') {

          const id = item.id.match(/\d+/g)[0]
          const DOM = _$(`#form-input-wrap${id}`);

          if (item.value === "") {
            DOM.className = "errors";
          } else {
            DOM.className = " ";
          }
        }
      }
      $("#form-submit").trigger("click");
    });
  }
  /////// footer form ////////
  if ($('form[name="footer"]') && $('form[name="footer"]')[0]) {
    const COUNT_ITEM = $('form[name="footer"]')[0].length - 1;
    const $form = $('form[name="footer"]');
    
    for (let i = 0; i <= COUNT_ITEM-1 ; i++) {
      if ($form[0][i].value === '' || $form[0][i].value === ' ') {
        const item = $form[0][i];
        const DOM = _$(`#form-input-wrap__f${i}`);
        item.addEventListener('blur', function () {

          if (item.value === "") {
            DOM.className = "errors";
          } else {
            DOM.className = " ";
          }
        })
      }
    }
    $('#form__footer').submit(function (e) {
      e.preventDefault();
      var $form = $(this);
      let checkErr = false;
      for (let i = 0; i < $('form[name="footer"]')[0].length-2; i++) {
        if ($form[0][i].value === '' || $form[0][i].value === ' ') {
          const item = $form[0][i];
          const DOM = _$(`#form-input-wrap__f${i}`);
          
          if (item.value === "") {
            DOM.className = "errors";
            checkErr = true;
          } else {
            DOM.className = " ";
          }
        }}

      if (checkErr) {
        return 0;
      }
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: {
          "_token": document.querySelector("meta[name='_token']").getAttribute("content"),
          "data": {
            "name": document.getElementById("form-footer-input-name").value,
            "email": document.getElementById("form-footer-input-mail").value,
            "comment": document.getElementById("form-footer-input-text").value,
          }
        },
      }).done(function () {
        const elem = _$("#success");
        elem.style.display = `flex`;
        const close = _$("#success__close");
        close.addEventListener('click', () => {
          elem.style.display = 'none';
          modal.style.display = 'none';
          document.querySelectorAll('.button-close')[1].click()
        })
        const closeOk = _$("#success__closeOk");
        closeOk.addEventListener('click', () => {
          elem.style.display = 'none';
          modal.style.display = 'none';
          document.querySelectorAll('.button-close')[1].click()
        })
      }).fail(function () {
        const elem = _$("#error");
        elem.style.display = `flex`;
        const close = _$("#error__close");
        close.addEventListener('click', () => {
          elem.style.display = 'none';
          document.querySelectorAll('.button-close')[1].click()
        })
        const closeOk = _$("#error__closeOk");
        closeOk.addEventListener('click', () => {
          elem.style.display = 'none';
          document.querySelectorAll('.button-close')[1].click()
        })
      });
      $form[0].reset();
      return false
    });
  };
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
              return ;
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
      const ifNoReload = new RegExp("^#|mailto|tel|.php|http://").test(href);

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
