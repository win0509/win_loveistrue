
// ---------------------Header Stiky------------------------

const header = document.querySelector('header');
// const landingWrapper =document.querySelector('.landing-slides');
const scry = window.scrollY;

window.addEventListener("scroll", () => {
if (scry > 0){
    header.setAttribute("style", "background: rgba(255,255,255,0.9); transition: .5s;");
}else {
    header.setAttribute("style", "background: #fff;");
 }
});



//------------------ Overlay Menu Hide And Show------------------
const MenuIcon = document.querySelector(".info-menu-icon");
const Overlay = document.querySelector(".overlay");
const CloseIcon = document.querySelector(".overlay-close a");
MenuIcon.addEventListener("click", function (e) {
  e.preventDefault();
  Overlay.classList.add("on");
  document.body.style.overflow = "hidden";
});
CloseIcon.addEventListener("click", function (e) {
  e.preventDefault();
  Overlay.classList.remove("on");
  document.body.style.overflow = "auto";
});

//------------ Swiper Landing Slider--------------------

var swiper = new Swiper(".landing-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
  
    300: {
    
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    970: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

//--------------- Swiper Ranking Slider -----------------
var swiper = new Swiper(".ranking-slider", {
  slidesPerView: 4,
  spaceBetween: 15,
  freeMode: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    970: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1180: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

//------------ New Arrival section--------------------
const arrivalBtn = document.querySelectorAll('.arrival-tab-btn');
const arrivalPanels = document.querySelectorAll('.arrival-panels');
function onTabs(i){

  arrivalBtn.forEach((btn) => {
   btn.classList.remove('on');

  });
  arrivalPanels.forEach((panel) => {
   panel.classList.remove('on');
  });
  arrivalBtn[i].classList.add('on');
  arrivalPanels[i].classList.add('on');
  
 }

 arrivalBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
   onTabs(idx)
  });   
 });


//------------ Best Stories section--------------------

 var swiper = new Swiper(".stories-slider", {
  slidesPerView: 3,
  spaceBetween: 15,
  // centeredSlides: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    970: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

// TOP BTN
const topBtn = document.querySelector('.top-btn');

window.addEventListener('scroll' , function(){
    const scrY = window.scrollY;
    // console.log(scrY)
    if(scrY > 900){
        topBtn.style.display='block';
    }else{
        topBtn.style.display='none';
    }
});
topBtn.addEventListener('click', function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  });


//AOS
AOS.init();