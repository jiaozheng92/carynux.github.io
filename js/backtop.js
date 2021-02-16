$(document).ready(function() {

    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        var headerHeight = $('.navbar-custom').height(),
            bannerHeight  = $('.intro-header .container').height();     
        $(window).on('scroll', {
            previousTop: 0
                },
                function() {
                    var currentTop = $(window).scrollTop(),
                        $catalog = $('.side-catalog');

                    //check if user is scrolling up by mouse or keyborad
                    if (currentTop < this.previousTop) {
                        //if scrolling up...
                        if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                            $('.navbar-custom').addClass('is-visible');
                        } else {
                            $('.navbar-custom').removeClass('is-visible is-fixed');
                        }
                    } else {
                        //if scrolling down...
                        $('.navbar-custom').removeClass('is-visible');
                        if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                    }
                    this.previousTop = currentTop;


                    //adjust the appearance of side-catalog
                    $catalog.show()
                    if (currentTop > (bannerHeight + 41)) {
                        $catalog.addClass('fixed')
                    } else {
                        $catalog.removeClass('fixed')
                    }
                });
        
    });

});
