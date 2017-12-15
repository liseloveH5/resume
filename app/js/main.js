$(function(){
    //个人简介翻转样式
    var s = new Spinning('#container');
    s.render();

    // 专业技能 hover
    $('.professional').find('[data-toggle="popover"]').popover({
            trigger: 'hover',
            container: 'body',
            placement: 'top',
            html: true,
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><div class="popover-content"></div></div>'

        }
    )
})

