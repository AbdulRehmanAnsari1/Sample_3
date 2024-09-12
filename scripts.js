$(document).ready(function(){
    $('.banner .info').fadeIn(2000);
    $('.banner h2').fadeOut(1000).fadeIn(1000);
    $(window).scroll(function() {
      let windowHeight = $(this).height();
      let windowTop = $(this).scrollTop();
      let windowBottom = windowTop + windowHeight;
  
      $('section').each(function() {
        let sectionTop = $(this).offset().top;
        let sectionHeight = $(this).outerHeight();
        let sectionBottom = sectionTop + sectionHeight;
  
        if (sectionTop <= windowBottom && sectionBottom >= windowTop) {
          $(this).find('.clients-info').animate({
            width: '100%',
            height: '180px',
            lineHeight: '180px',
            opacity: 1
          }, 1000);
  
          $(this).find('.method').animate({
            opacity: 1
          }, 1000);
  
          $(this).find('.blogs p').animate({
            opacity: 1,
            left: 0
          }, 1000);
  
          $(this).find('.blogs button').animate({
            opacity: 1,
            bottom: 0
          }, 1000);
  
          $(this).find('.blogs img').animate({
            opacity: 1,
            right: 0
          }, 1000);
        }
      });
    });
  });