(function($) {
    "use strict";

    $(document).ready(function() {

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