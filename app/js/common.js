$('.btn-toggle').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parents('.timeline-block__body').siblings('.timeline-block__content').find('.block-toggle');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Свернуть');

        content.slideDown();
    } else {
        $this.removeClass('trigger');
        $this.html('Подробнее');

        content.slideUp();
    }
});

$('.links-add-comment').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('click').siblings('.form-box-hidden').slideToggle().find('textarea').focus();
});


$('.links-load-list').on('click', function (e) {
    e.preventDefault();
    $('.list-time-lapse li:hidden').slice(0, 17).slideDown();

    var onBlock = $('.list-time-lapse li:hidden').length;
    if(onBlock <= 0) {
        $('.links-load-list').hide();
    }
});


$('.btn-input-add').on('click', function (e) {
   e.preventDefault();
   $(this).parent().append('<input type="text" class="form-control form-control-my" name="">');
});

$(window).on("load",function(){
    $(".scroll-horizontal-modal").mCustomScrollbar({
        axis:"y"
    });
});

