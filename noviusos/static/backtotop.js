(function($) {
    $(document).ready(function() {
        // Back 2 top
        init_back2top();

        $('.related select').change(function() {
            document.location.href = $(this).find(':selected').val();
        });

        $("[data-toggle='rst-current-version']").click(function() {
            $("[data-toggle='rst-versions']").toggleClass("shift");
        });
    });
    function init_back2top() {
        var $back2top = $('<div><div></div></div>').css({
            opacity     : 0
        }).bind('click', function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 400);
            }).addClass('back2top').hide();

        $('body').append($back2top);

        $(window).bind('scroll', function() {

            // offset bottom de la page
            var v_bottom = $(document).scrollTop() + $(window).height();

            // offset bottom du menu
            var m_bottom = $('.sphinxsidebar').offset().top + $('.sphinxsidebar').height();

            if (v_bottom - m_bottom > 200 + $back2top.height()) {
                // Affiche
                $back2top.stop().show().fadeTo(200, 1);
            } else {
                // Cache
                $back2top.stop().fadeTo(200, 0).hide();
            }
        });
        $(window).trigger('scroll');
    }
}($19));