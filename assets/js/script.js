// navbar fixed
window.onscroll = function(){
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;
   const totop = document.querySelector('#totop');

   if(window.pageYOffset > fixedNav){
      header.classList.add('navbar-fixed');
      totop.classList.remove('hidden');
      totop.classList.add('flex');
   } else {
      header.classList.remove('navbar-fixed');
      totop.classList.remove('flex');
      totop.classList.add('hidden');
   }
}

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener('click', function() {
   hamburger.classList.toggle("hamburger-active");
   navMenu.classList.toggle("hidden");
})

// klik diluar hamburger
window.addEventListener('click', function (e){
   if(e.target != hamburger && e.target != navMenu){
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
   }
})


// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
   if (darkToggle.checked) {
      html.classList.add('dark');
      localStorage.theme = 'dark';
   } else {
      html.classList.remove('dark');
      localStorage.theme = 'light';
   }
})

// pindahkan posisi toggle circle sesuai posisi untuk thema nya
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   darkToggle.checked = true;
} else {
   darkToggle.checked = false;
 }