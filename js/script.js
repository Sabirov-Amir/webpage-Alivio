
// Add smooth scroll on jQuery 
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top -10
    }, 500);
    return false;
});
// .top -10 - регулирует отступ сверху в пикселях
// 500 - скорость скролла

//------------------------------------------------------------------------

// Menu burger
$(document).ready(function() {
	$('.navbar__burger').click(function(event) {
        $('.navbar__burger,.navbar__menu').toggleClass('active');
	});
});