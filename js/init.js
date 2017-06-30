/**
 * Created by hades on 2017/6/29.
 */
$(document).ready(function () {
    $('#typetitle').typeIt({
        whatToType: ["Aloha", "欢迎访问mayuko.cn"],
        typeSpeed: 100,
        breakLines: false
    });
    $('#typeit').typeIt({
        whatToType: "感谢来到这里",
        typeSpeed: 100,
        delayStart:3000,
        showCursor:false
    });
    $("#uptop").click(function () {
        $('body,html').animate({scrollTop: 0}, 400);
    })
    $("#tointroduce").click(function () {
        $('body,html').animate({scrollTop: $('#introduce').offset().top}, 800);
    })

})
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
my_init();