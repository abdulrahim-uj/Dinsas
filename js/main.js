$(".heroSlider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
    speed: 800,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  });


// Function to animate text elements in a slide
function animateSlideContent(slideElement) {
    // First reset all animations
    gsap.set(slideElement.find('.text-mask h1, .text-mask span, .heroCont p, .heroBtn'), {
      y: '10%',
      opacity: 0
    });
  
    // Create a timeline for the animations
    const tl = gsap.timeline();
  
    // Animate main heading
    tl.to(slideElement.find('.text-mask h1'), {
      y: '0%',
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    })
    // Animate spans inside heading (if any)
    .to(slideElement.find('.text-mask span'), {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.5')
    // Animate paragraph
    .to(slideElement.find('.heroCont p'), {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.3')
    // Animate button
    .to(slideElement.find('.heroBtn'), {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5');
  
    return tl;
  }
  
  // Initialize first slide animation
  document.addEventListener('DOMContentLoaded', () => {
    animateSlideContent($('.heroSlider .slick-current'));
  });
  
  // Handle slide changes
  $('.heroSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    // Reset all text elements in the next slide
    const nextSlideElement = $(slick.$slides[nextSlide]);
    gsap.set(nextSlideElement.find('.text-mask h1, .text-mask span, .heroCont p, .heroBtn'), {
      y: '100%',
      opacity: 0
    });
  });
  
  $('.heroSlider').on('afterChange', function(event, slick, currentSlide) {
    // Animate the new current slide
    const currentSlideElement = $(slick.$slides[currentSlide]);
    animateSlideContent(currentSlideElement);
  });

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