	(function ($) {
    'use strict';
    $(document).ready(function () {


    		$(window).scroll(function(){                          
            if ($(this).scrollTop() > 500) {
                $('.site-navigation').css('background-color', '#1c1d1dc');
            } else {
               $('.site-navigation').css('background-color', 'transparent');
            }
        });
            



     /*
         * ----------------------------------------------------------------------------------------
         *  AUTO SCROLL
         * ----------------------------------------------------------------------------------------
         */
  
         $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

         });








    })(jQuery);

