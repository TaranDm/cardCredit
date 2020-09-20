$(document).ready(function () {
    "use strict";
    $('#myCollapsible').collapse({
        toggle: true,
    });
    $('.search__link').click(function () {
        $(this).hide();
        $('.search__group').show();
    });
   /*=======================================*/

    function is_shown(target) {
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var eh = $(target).outerHeight();
        var et = $(target).offset().top;
        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
            return true;
        } else {
            return false;
        }
    }
    $(window).on('scroll', function () {
        if (!is_shown('.search__entry-field') && ($('.search__entry-field').is(":visible")) ) {
            $('.search__link').show();
            $('.search__wrapper').collapse('hide');
        }
    });
    /*=======================================*/
    $('#myForm').validate({
        rules: {
            date: {
                required: true,
            },
            income: {
                required: true,
            },
            city: {
                required: true,
            },
        },
        messages: {
            city: {
                required: 'поле должно быть заполнено'
            },
            income: {
                required: 'поле должно быть заполнено'
            },
            date: {
                required: 'поле должно быть заполнено'
            },
        }
    });
});

