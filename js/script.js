
// // Smooth scroll on jQuery 
// var $page = $('html, body');
// $('a[href*="#"]').click(function() {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top -15}, 500);
//     return false;
// });
// // .top -10 - регулирует отступ сверху в пикселях
// // 500 - скорость скролла

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

            // Закрываем меню при нажатии на ссылку* 
            if(navbarBurger.classList.contains('active')){
                document.body.classList.remove('lock') // запрещаем скролить при открытом меню
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

// * Закрываем меню при нажатии на ссылку - 3 строчки после if взяты из меню бургера  
// if(navbarBurger.classList.contains('active')){
//     document.body.classList.toggle('lock') 
//     navbarBurger.classList.toggle('active');
//     navbarMenu.classList.toggle('active');
// }


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

// // Menu burger on jQuerry
// $(document).ready(function() {
// 	$('.navbar__burger').click(function(event) {
//         $('.navbar__burger,.navbar__menu').toggleClass('active');
// 	});
// });

//-----------------------------------------------------------------------------------------------------------------------------------------

// Menu burger on JavaScript
const navbarBurger = document.querySelector('.navbar__burger');
const navbarMenu = document.querySelector('.navbar__menu');
if (navbarBurger) {
    navbarBurger.addEventListener("click", function(e) {
        document.body.classList.toggle('lock') // запрещаем скролить при открытом меню* 
        navbarBurger.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
}

// * document.body.classList.toggle('lock') // в css в body пишем overflow: hidden;

//-----------------------------------------------------------------------------------------------------------------------------------------