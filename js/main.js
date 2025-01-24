gsap.to(".text-mask h1, .text-mask span", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power4.out"
});
const tl = gsap.timeline({
    defaults: {
        ease: "power4.out"
    }
});

tl.to(".heroCont h1", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    y: 0,
    duration: 1.2
})
.to(".heroLine", {
    scaleX: 1,
    duration: 0.8,
    ease: "power2.out"
}, "-=0.6")

.from(".heroCont p", {
    opacity: 0,
    y: 10,
    duration: 0.8
}, "-=0.5")

.from(".heroBtn", {
    opacity: 0,
    y: 10,
    duration: 0.6
}, "-=0.3");

$('.resTogg').click(function(){
  $('.resTogg').toggleClass('open');
  $('.mainMenu').toggleClass('show')
})

$('.toggle').click(function(){
  $('.contactSlide').addClass('show')
});
$('.clseMenu').click(function(){
  $('.contactSlide').removeClass('show')
})