/* This function loads in an image & then puts it
 * onto the body tag as a background image. It's a very 
 * crude lazy loading method, but it does work. This method
 * is required for me currently as I don't want to animate
 * my text until the image is loaded -- so I need an event.
 *
 * TODO: Optimize with async/await instead of jQuery & nested callbacks.
 * It *is* 2019, after all.
 */

$(function(){
  $('<img/>').attr('src', 'images/bg.jpg').on('load', function() {
     $(this).remove();
     $('body').css('background-image', 'url(images/bg.jpg)');
     animateCSS('.content__header', 'fadeInUp', function() {
       animateCSS('.content__text', 'fadeIn');
     });
  });
});

/* This function comes from my CSS animation plugin -- allows me to
 * programmatically animate my elements. I added a class on when the
 * element is done animating so that it can stay at opacity: 1.
 */

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element);
    node.classList.add('animated', animationName);

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.classList.add('animationComplete');
        node.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') callback();
    }

    node.addEventListener('animationend', handleAnimationEnd);
}
