(function($) {

  "use strict";

  $(document).ready(function() {
    
      // Initialize Isotope
      initIsotope();

      // Lightbox
      lightbox.option({
          'resizeDuration': 200,
          'wrapAround': true,
          'fitImagesInViewport': true
      });

      // Swiper
      var testimonialSwiper = new Swiper(".testimonial-swiper", {
          spaceBetween: 20,
          pagination: {
              el: ".testimonial-swiper-pagination",
              clickable: true,
          },
          breakpoints: {
              0: {
                  slidesPerView: 1,
              },
              800: {
                  slidesPerView: 3,
              },
              1400: {
                  slidesPerView: 3,
              }
          },
      });

      // Add highlight functionality for the Education section
      $("#about .h-100").on("click", function() {
        console.log("Section clicked!"); // Debugging line
        
        // Remove the highlight class from other sections
        $("#about .h-100").removeClass("highlight-border active-section");

        // Add the highlight class to the clicked section
        $(this).addClass("highlight-border active-section");
    });
    
  }); // End of document ready

  // init Isotope
  var initIsotope = function() {
      $('.grid').each(function() {
          var $buttonGroup = $('.button-group');
          var $checked = $buttonGroup.find('.is-checked');
          var filterValue = $checked.attr('data-filter');
  
          var $grid = $('.grid').isotope({
              itemSelector: '.portfolio-item',
              filter: filterValue
          });
  
          $('.button-group').on('click', 'a', function(e) {
              e.preventDefault();
              filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
          });

          $buttonGroup.on('click', 'a', function() {
              $buttonGroup.find('.is-checked').removeClass('is-checked');
              $(this).addClass('is-checked');
          });
      });
  };

})(jQuery);
