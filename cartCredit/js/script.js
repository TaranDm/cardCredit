$(document).ready(function () {
    "use strict";


   /*=======================================*/
/*Function for hiding and opening the search__link Block when scrolling*/
    $('#myCollapsible').collapse({
        toggle: true,
    });
    $('.search__link').click(function () {
        $(this).hide();
        $('.search__group').show();
    });
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
    /*========Block "selection" Form Validation===========*/



    $('.carousel').carousel({
        interval: false,
    });


    $('.load-more').on('click', function(e) {
        e.preventDefault();
        const btn = $(this);
        const loader = btn.find('span');
        const row = '<tr class="rating__row">\n' +
            '                    <td class="rating__colum">\n' +
            '                        <div class="rating__img rating__inner">\n' +
            '                            <picture><source srcset="img/logo/citibank.webp" type="image/webp"><img src="img/logo/citibank.png" alt="" class="img-fluid"></picture>\n' +
            '                        </div>\n' +
            '                    </td>\n' +
            '                    <td class="rating__colum">\n' +
            '                        <div class="rating__rate-box rating__inner  rate-box">\n' +
            '                            <span class="rating-box__item1 rating-box__item1_rate">Ставка</span>\n' +
            '                            <span class="rating-box__item2 icon">от 6.5%</span>\n' +
            '                            <span class="rating-box__item3 icon">Универсальный</span>\n' +
            '                        </div>\n' +
            '                    </td>\n' +
            '                    <td class="rating__colum">\n' +
            '                        <div class="rating__sum-box rating__inner sum-box">\n' +
            '                            <span class="rating-box__item1 rating-box__item1_sum">Сумма и срок</span>\n' +
            '                            <span class="rating-box__item2">50 000 ₽ - 3 000 000 ₽</span>\n' +
            '                            <span class="rating-box__item3">На срок до 5 лет</span>\n' +
            '                        </div>\n' +
            '                    </td>\n' +
            '                    <td>\n' +
            '                        <div class="ratting__button-box col-md-12 rating__inner">\n' +
            '                            <a class="btn ratting__btn orange-btn ratting__btn-1" href="#" role="button">Оставить заявку</a>\n' +
            '                            <a class="btn ratting__btn  transparent-btn" href="#" role="button">Подробнее</a>\n' +
            '                        </div>\n' +
            '                    </td>\n' +
            '                </tr>';
        btn.attr('disabled', true);
        loader.addClass('d-inline-block');
        setTimeout(function(){
            for (var i = 0; i < 4; i++) {
                $('.rating__table').append(row);
            }
            loader.removeClass('d-inline-block');
            btn.attr('disabled', false);
        }, 1000);

        // $.ajax({
        //     url: '/data.html',
        //     type: 'GET',
        //     crossDomain: true,
        //     dataType: "html",
        //     beforeSend: function(){
        //         btn.attr('disabled', true);
        //         loader.addClass('d-inline-block');
        //     },
        //     success: function(response){
        //         setTimeout(function(){
        //             loader.removeClass('d-inline-block');
        //             btn.attr('disabled', false);
        //             $('after-posts').before(response);
        //         }, 1000);
        //     },
        //     error: function(){
        //         alert('Error!!!!!');
        //         loader.removeClass('d-inline-block');
        //         btn.attr('disabled', false);
        //     }
        // });
    });
});



/*function validate*/
$('#myForm').validate({
    highlight: function(element) {
        $(element).parent().addClass("field-error");
    },
    unhighlight: function(element) {
        $(element).parent().removeClass("field-error");
    },
    rules: {
        term: {
            required: true,
        },

        date: {
            required: true,
        },
        income: {
            required: true,
        },
        city: {
            required: true,
        },
        sum : {
            required: true,
        },
        name : {
            required: true,
        },
        last_name : {
            required: true,
        },
        mail : {
            required: true,
            email: true,
        },
        region: {
            required: true,
        },
        tell: {
            required: true,
        }
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
        sum: {
            required: 'поле должно быть заполнено'
        },
        name: {
            required: 'поле должно быть заполнено'
        },
        last_name: {
            required: 'поле должно быть заполнено'
        },
        mail: {
            required: 'поле должно быть заполнено'
        },
        region: {
            required: 'поле должно быть заполнено'
        },
        tel: {
            required: 'поле должно быть заполнено'
        },
        term: {
            required: 'поле должно быть заполнено'
        },


    }
});
