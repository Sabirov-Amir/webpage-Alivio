
//-----------------------------------------------------------------------------------------------------------------------------------------
    
// Smooth scroll on JavaScript #1
const pageNavigation = document.querySelectorAll('.navigation[data-goto]');
if (pageNavigation.length > 0) {
    pageNavigation.forEach(pageNav => {
        pageNav.addEventListener("click", onPageNavClick);
    });

    function onPageNavClick(e) {
        const pageNav = e.target;
        if (pageNav.dataset.goto && document.querySelector(pageNav.dataset.goto)) {
            const gotoBlock = document.querySelector(pageNav.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('.navbar').offsetHeight;

            // Closing menu when click on link (inside menu)* 
            if(navbarMenu.classList.contains('active')){
                document.body.classList.remove('lock') // Prohibit scroll when menu is open
                navbarBurger.classList.remove('active');
                navbarMenu.classList.remove('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
// * Closing menu when click on link (inside menu) - 3 strings after 'if' took from 'Menu burger on JavaScript'  

//-----------------------------------------------------------------------------------------------------------------------------------------

// // Smooth scroll on JavaScript #2
// const navElements = document.querySelectorAll('a[href^="#"]');

// navElements.forEach((link) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = link.getAttribute('href');
//     const target = document.querySelector(id);
//     const offsetTop = target.getBoundingClientRect().top + window.scrollY - document.querySelector('.navbar').offsetHeight;

//     window.scrollTo({
//       top: offsetTop,
//       behavior: "smooth"
//     });
//   });
// });

//-----------------------------------------------------------------------------------------------------------------------------------------

// Menu burger on JavaScript
const navbarBurger = document.querySelector('.navbar__burger');
const navbarMenu = document.querySelector('.navbar__menu');
if (navbarBurger) {
    navbarBurger.addEventListener("click", function(e) {
        document.body.classList.toggle('lock') // Prohibit scroll if menu is open* 
        navbarBurger.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
}
// * In css for body.lock need write 'overflow: hidden'

// Closing menu when click on all content
const closeMenu = document.querySelector('.close-menu');
if (closeMenu) {
    closeMenu.addEventListener("click", function(e) {
        document.body.classList.remove('lock');
        navbarBurger.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
} 

//-----------------------------------------------------------------------------------------------------------------------------------------

// Show 'which blocks' when click
const headerMenuActive = document.querySelector('.header__menu.active');
document.addEventListener('click', (e) => {
       const click = e.composedPath();
       console.log(click);
})