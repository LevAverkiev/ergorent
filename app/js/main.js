$(function() {

    /* Локализация datepicker */
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);


    // $("#datepicker-1").datepicker({
    //     dateFormat: 'DD, dd MM yy',
    //     showOn: "button",
    //     buttonImage: "images/calendar.png",
    //     buttonImageOnly: true,
    //     minDate: date,
    //     minDate: 0, - чтобы был
    // });



    $('.advantage__items').slick({
        slidesToShow: 5,
        responsive: [{
                breakpoint: 1351,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1251,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1181,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 831,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    });

    $('.comment__items').slick({
        slidesToShow: 3,
        responsive: [{
                breakpoint: 1551,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".rateYo").rateYo({
        rating: 4,
        readOnly: true,
        starWidth: "18px",
        spacing: "7px"
    });

    var date = new Date();
    date.setDate(date.getDate() + 1);

    $("#datepicker").datepicker({
        dateFormat: 'DD, dd MM yy',
        minDate: 0,
    });

    $("#datepicker").datepicker().datepicker('setDate', 'today');

    $("#datepicker-1").attr('disabled', 'disabled');

    $("#datepicker-3").attr('disabled', 'disabled');

    $("#datepicker-1").datepicker({
        dateFormat: 'DD, dd MM yy',
        // showOn: "button",
        // buttonImage: "images/calendar.png",
        // buttonImageOnly: true,
        // minDate: date,
        minDate: 0,
    });

    $("#datepicker-2").datepicker({
        // minDate: date,
        dateFormat: "dd.mm.yy",
        minDate: 0,
    });

    let tomorrow = new Date();

    $("#datepicker-1").datepicker().datepicker('setDate', tomorrow);

    $("#datepicker-2").datepicker().datepicker('setDate', 'today');


    $("#datepicker-3").datepicker({
        // minDate: date,
        dateFormat: "dd.mm.yy",
        minDate: 0,
    });

    let tomorrow1 = new Date();

    $("#datepicker-3").datepicker().datepicker('setDate', tomorrow1);


    $("#datepicker").on('change', function() {
        onCheckin();
    });

    $("#datepicker-2").on('change', function() {
        onCheckin1();
    });

    function onCheckin() {
        if ($("#datepicker").val() !== '') {
            $("#datepicker-1").removeAttr('disabled');
            let dateMin = $("#datepicker").datepicker('getDate');
            let rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(), dateMin.getDate() + 1);
            $("#datepicker-1").datepicker('option', 'minDate', new Date(rMin));
        } else {
            $("#datepicker-1").val('');
            $("#datepicker-1").attr('disabled', 'disabled');
        }
    }

    function onCheckin1() {
        if ($("#datepicker-2").val() !== '') {
            $("#datepicker-3").removeAttr('disabled');
            let dateMin = $("#datepicker-2").datepicker('getDate');
            let rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(), dateMin.getDate() + 1);
            $("#datepicker-3").datepicker('option', 'minDate', new Date(rMin));
        } else {
            $("#datepicker-3").val('');
            $("#datepicker-3").attr('disabled', 'disabled');
        }
    }

    $('.burger-menu').on('click', function() {
        $('.menu').slideToggle();
        $(this).toggleClass('active');
        $('.header__inner').toggleClass('active');
        $('.header__wrapper').toggleClass('active');
        $('.header__box').slideToggle();
        $('.header__box-wrap').slideToggle();
    });

    $('.header__box-img img').on('click', function() {
        $('.header__box-wrap').slideToggle();
    });

    $('[data-fancybox="images"]').fancybox({
        loop: true,
    });

    $('.variant-box__expand span').on('click', function() {
        $('.variant-box__par-wrap').addClass('active');
        $('.variant-box__expand').css('display', 'none');
        $('.variant-box__roll-up').css('display', 'block');
    });

    $('.variant-box__roll-up span').on('click', function() {
        $('.variant-box__par-wrap').removeClass('active');
        $('.variant-box__expand').css('display', 'block');
        $('.variant-box__roll-up').css('display', 'none');
        $('html, body').animate({
            scrollTop: $('.variant-box__title').offset().top - 200,
        }, 400);
    });

    $('.service__expand span').on('click', function() {
        $('.service__box').slideToggle();
        $('.service__expand').css('display', 'none');
        $('.service__roll-up').css('display', 'block');
    });

    $('.service__triangle').on('click', function() {
        $(this).toggleClass('active');
        $('.service__box').slideToggle();
        $('.service__roll-up').slideToggle();
    });

    $('.service__roll-up span').on('click', function() {
        $('.service__box').slideToggle();
        $('.service__expand').css('display', 'block');
        $('.service__roll-up').css('display', 'none');
        $('html, body').animate({
            scrollTop: $('.service__title').offset().top - 200,
        }, 400);
        $('.service__triangle').toggleClass('active');
    });


});