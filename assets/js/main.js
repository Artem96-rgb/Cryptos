


// Burger Menu

const BURGER = document.querySelector(".burger");
const NAV    = document.querySelector(".nav");

(BURGER) && BURGER.addEventListener("click", ()=>{
  (NAV) && NAV.classList.toggle("nav-active");
});


// Countdown


function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    const t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}
 
const deadline = new Date(Date.parse(new Date()) + 1 * 12 * 60 * 60 * 1000); // for endless timer
initializeClock('numbers__countdown', deadline);


// Accoedion


const ACCORDION = document.getElementsByClassName("accordion__title");
let i;

for (i = 0; i < ACCORDION.length; i++) {
  ACCORDION[i].addEventListener("click", function() {
    this.classList.toggle("active");

    const PANEL = this.nextElementSibling;
    if (PANEL.style.maxHeight) {
      PANEL.style.maxHeight = null;
    } else {
      PANEL.style.maxHeight = PANEL.scrollHeight + "px";
    }
  });
}

// Modal window

const HEADER_BTN              = document.querySelector(".call-action");
const OVERVIEW_BTN            = document.querySelector(".call-action-modal");
const MODAL                   = document.querySelector(".modal");
const MODAL_OVERVIEW          = document.querySelector(".modal-two");
const MODAL_WINDOW            = document.querySelector(".modal-window");
const BODY                    = document.querySelector("body");
const MODAL_CLOSE             = document.querySelector(".modal__close");
const MODAL_OVERVIEW_CLOSE    = document.querySelector(".modal__close-two");
const MODAL_WINDOW_CLOSE      = document.querySelector(".modal-window__close");

(HEADER_BTN) && HEADER_BTN.addEventListener("click", ()=>{
  (MODAL) && MODAL.classList.add("modal-active");
  (BODY) && BODY.classList.add("body-hidden");
});

(OVERVIEW_BTN) && OVERVIEW_BTN.addEventListener("click", ()=>{
  (MODAL_OVERVIEW) && MODAL_OVERVIEW.classList.add("modal-active");
  (BODY) && BODY.classList.add("body-hidden");
});

(MODAL_CLOSE) && MODAL_CLOSE.addEventListener("click", ()=>{
  (MODAL) && MODAL.classList.remove("modal-active");
  (BODY) && BODY.classList.remove("body-hidden");
});

(MODAL_OVERVIEW_CLOSE) && MODAL_OVERVIEW_CLOSE.addEventListener("click", ()=>{
  (MODAL_OVERVIEW) && MODAL_OVERVIEW.classList.remove("modal-active");
  (BODY) && BODY.classList.remove("body-hidden");
});

(MODAL_WINDOW_CLOSE) && MODAL_WINDOW_CLOSE.addEventListener("click", ()=>{
  (MODAL_WINDOW) && MODAL_WINDOW.classList.add("modal-window-active");
  (BODY) && BODY.classList.remove("body-hidden");
});

// Tabs

function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Back to top


const mybutton = document.querySelector(".back-to-top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

