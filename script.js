const menuBtn = document.querySelectorAll('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

/* Sidebar open/close */
menuBtn.forEach(btn => {
   btn.addEventListener('click', sideNavToggle);
});

function sideNavToggle() {
   /* animation delay */
   let delay = 100;
   /* Open class toggle */
   menu.classList.toggle('menu-open');
   /* Sidenav link slide animations */
   setTimeout(() => {
      /* Resets animations after use*/
      resetAnimations();
   }, delay * (links.length + 1));
   /* Add animations to links */
   links.forEach(link => {
      /* opacity levels */
      link.style.opacity = "0";
      /* animation */
      link.style.animation = "slideIn 400ms ease-in-out forwards";
      /* Delay */
      link.style.animationDelay = delay + "ms";
      /* Increases delay for each link */
      delay += 100;
   });

   /* Resets animations */
   function resetAnimations() {
      /* Selects all links */
      links.forEach(link => {
         /* Removes animations */
         link.style.animation = "none";
         link.style.opacity = "1";
      });
   }
}

/* Pagination Slider */
const cntrl = document.querySelectorAll('.slider-cntrl');
const cntrlMob = document.querySelectorAll('.pagination-mobile > li');
const title = document.querySelector('.title');
const subTitle = document.querySelectorAll('.sub-title');
const img = document.querySelector('.thumbnail');
const count = document.querySelector('.slider-count');
const progress = document.querySelector('.progress div');

let id = 0;

/* Data array with image paths for the slider */
const images = [
   './img/img1.jpg',
   './img/img2.jpg',
   './img/img3.jpg',
];

/* Progress widths for the slider */
const progresWidth = [
   '33%',
   '66%',
   '100%',
];

const text = [
   'Work',
   'Active',
   'Travel',
];

/* Pagintation Controls */
for (let i = 0; i < cntrl.length; i++) {
   /* click events for pagination */
   cntrl[i].addEventListener('click', () => {
      /* runs slider function */
      slider(i);
      /* sets id to clicked pagination index */
      id = i;
      /* Stops auto slide */
      stopAutoSlide();
   });
   /* Click event for all the pagination on mobile */
   cntrlMob[i].addEventListener('click', () => {
      slider(i);
      stopAutoSlide();
   });
}

function slider(i) {
   /* Changes thumbnail image */
   img.src = images[i];
   /* Progress bar */
   progress.style.width = progresWidth[i];
   /* Changes title */
   title.innerText = text[i] + " Collection";
   /* Changes Sub Title */
   subTitle.forEach(sub => {
      sub.innerText = text[i] + " Collection";
   });
   /* Changes slide number */
   count.innerText = "/0" + (i + 1);
   /* Remove active class from all */
   for (let i = 0; i < cntrl.length; i++) {
      cntrl[i].classList.remove('active');
      cntrlMob[i].classList.remove('pag-active');
   }
   /* Resets active class to clicked element */
   cntrl[i].classList.add('active');
   cntrlMob[i].classList.add('pag-active');
}

/* Slider automation */
function nextSlide() {
   /* Increments img id */
   id++;
   /* Id check to see if its greater than the number of slides */
   if (id > cntrl.length - 1) {
      id = 0;
   }
   slider(id);
}

/* Slider automation let */
let autoSlide = setInterval(nextSlide, 10000);

/* stops automatic slide */
function stopAutoSlide() {
   clearInterval(autoSlide);
   /* restart auto slider */
   autoSlide = setInterval(nextSlide, 10000);
}