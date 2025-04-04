// JavaScript Document
var typed = new Typed('.element', {
               	strings: ["Web Designer.", "Grapic Designer."],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();

AOS.init();





