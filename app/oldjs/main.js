define(function (require) {

    //预加载jquery
    var $ = require("jquery");

    //加载样式
    require("bootstrap/js/bootstrap.min.js");
    //进度条
    require("progressbar/js/bootstrap-progressbar.min.js");
    require("./code.min.js");


    //个人简介翻转样式
    var Spinning = require('./spinning');
    var s = new Spinning('#container');
    s.render();

    //进度条加载
    $('.progress .progress-bar').progressbar({
        transition_delay: 1000
    });

    $('.professional [data-toggle="popover"]').popover({
        "trigger": "hover",
        "container": "body",
        "placement": "top",
        "html": true
    })

    $(".mScroll").click(function(){
        var id = $.trim($(this).attr("targetId"));
        mScroll(id);
    })

});


//屏幕滚动方法
function mScroll(id) {
    $("html,body").stop(true);
    $("html,body").animate({scrollTop: $("#" + id).offset().top}, 600);
}

