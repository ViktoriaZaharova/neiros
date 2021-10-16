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