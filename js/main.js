//jQuery
$(function () {
  //change nav color on scroll
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    $('body').scrollspy({
      target: '#main-nav'
    });

  });

  // animate progress bar
  var $section = $('.skills');

  $(document).bind('scroll', function () {
    var scrollOffset = $(document).scrollTop();
    var containerOffset = $section.offset().top - window.innerHeight;

    if (scrollOffset > containerOffset) {
      $(document).unbind('scroll');
      $(".skills").each(function () {
        var progressBar = $(".progress-bar");
        progressBar.each(function () {
          $(this).animate({
            "width": $(this).attr("aria-valuenow") + "%"
          }, 200);
        });
      });
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.scroll-top').fadeIn('slow');
    } else {
      $('.scroll-top').fadeOut('slow');
    }
  });


});
//spinner
window.onload = function () {
  //hide spinner
  $('.spinner').delay(2000).fadeOut('slow');

  //iso top shuffle
  var portfolioIsotope = $('#container').isotope({
    itemSelector: '.mix'
  });

  $('.portfolio__list li').on('click', function () {
    $(".portfolio__list li").removeClass('selected');
    $(this).addClass('selected');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });
}
///bootstrap


// mixitup
// var mixer = mixitup('#container');
// $('.portfolio__list li').click(function () {
//   $(this).addClass('selected').siblings().removeClass('selected');
// });

// fancybox
$('[data-fancybox="gallary"]').fancybox({
  afterLoad: function (instance, current) {
    var pixelRatio = window.devicePixelRatio || 1;

    if (pixelRatio > 1.5) {
      current.width = current.width / pixelRatio;
      current.height = current.height / pixelRatio;
    }
  }
});
// AOS
AOS.init();
// Init AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  });
}

$(function () {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});
$('.accordion > .collapse').on('show.bs.collapse', function (e) {
  $(this).find('.card-header li p').toggleClass("active-time");
});

// Skills section with way point
// $('.skills').waypoint(function() {
//   $('.progress .progress-bar').each(function() {
//     $(this).css("width", $(this).attr("aria-valuenow") + '%');
//   });
// }, {
//   offset: '80%'
// });