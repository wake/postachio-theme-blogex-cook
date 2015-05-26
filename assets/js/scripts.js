(function($) {
  "use strict";

  $(document).ready(function() {

    $('.post-content').each (function () {
      $(this).find ('img').appendTo ($(this).parent ().find ('.post-img'));
    });

    /*
    $('.posts-container, .post-container, .link-container').each (function () {

      var hc = $(this).find ('a[title=hidden-cover]');

      if (hc.size () > 0) {

        var photo = $('<div>')
          .css ('background-image', 'url("' + hc.attr ('href') + '")')
          .addClass ('back-photo');

        $(this)
          .prev ()
          .find ('.back-img')
          .append (photo);
      }
    });
    */

    /*===iso tope blog start===*/
    var $container = $('.masonry-list'),
      colWidth = function() {
        var w = $container.width(),
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum = 2;
        } else if (w > 900) {
          columnNum = 2;
        } else if (w > 600) {
          columnNum = 2;
        } else if (w > 300) {
          columnNum = 1;
        }
        columnWidth = Math.floor(w / columnNum);
        $container.find('.post-item').each(function() {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/item-w(\d)/),
            multiplier_h = $item.attr('class').match(/item-h(\d)/),
            width = multiplier_w ? columnWidth * multiplier_w[1] - 20 : columnWidth - 20;
          //                                height = multiplier_h ? columnWidth*multiplier_h[1]*0.5-4 : columnWidth*0.5-4;
          $item.css({
            width: width
            //                            height: height
          });
        });
        return columnWidth;
      },
      isotope = function() {
        $container.isotope({
          resizable: false,
          itemSelector: '.post-item',
          masonry: {
            columnWidth: colWidth()
            //                            gutterWidth: 10
          }
        });
      };
    isotope();
    $(window).smartresize(isotope);
    $(window).load(isotope);
    /*===iso tope blog end===*/


    // scroll up

    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
      activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

  });
})(jQuery);