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
        delayStart: 3000,
        showCursor: false
    });
    $("#postGugu").click(function () {
        PostData();
    });
    $("#uptop").click(function () {
        $('body,html').animate({scrollTop: 0}, 400);
    });
    $("#tointroduce").click(function () {
        $('body,html').animate({scrollTop: $('#introduce').offset().top}, 800);
    });
    $("#s2t-btn").click(function () {
        if ($('#t2s').val() == "s") {
            $('html').s2t();
            $('#s2t').html('<li class="icon-exchange"></li>&nbsp;&nbsp;切换为简体');
            $('#t2s').attr('value', 't');
        }
        else if ($('#t2s').val() == 't') {
            $('html').t2s();
            $('#s2t').html('<li class="icon-exchange"></li>&nbsp;&nbsp;切換為繁體');
            $('#t2s').attr('value', 's');
        }

    });

});
function PostData() {
    if ($('#postName').val() != '') {
        if ($('#postEmail').val() != '') {
            var reg = /\w+[@]{1}\w+[.]\w+/;
            if (reg.test($('#postEmail').val())) {
                if ($('#postContent').val() != '') {
                    $.ajax({
                        url: 'memobird.php',
                        type: 'GET',
                        async: true,
                        data: {
                            n: $('#postName').val(),
                            e: $('#postEmail').val(),
                            c: $('#postContent').val(),
                            u: $('#postUrl').val()
                        },
                        dataType: 'json',
                        success: function (data) {
                            console.log(data);
                            if (data.code == 1) {
                                $('#postStatus').html('<li class="icon-ok"></li>&nbsp;咕咕机已成功接收。');
                            } else {
                                $('#postStatus').html('<li class="icon-exclamation"></li>&nbsp;哎呀，连接失败。');
                            }
                        },
                        error: function () {
                            $('#postStatus').html('<li class="icon-exclamation"></li>&nbsp;哎呀，网络连接失败。');
                        }
                    })
                } else {
                    $('#postStatus').html('<li class="icon-exclamation"></li>&nbsp;内容还没写。');
                }
            }else {
                $('#postStatus').html('<li class="icon-exclamation"></li>&nbsp;Email出错了。');
            }
        } else {
            $('#postStatus').html('<li class="icon-exclamation"></li>&nbsp;Email还没写。');
        }
    } else {
        $('#postStatus').html('<li class="icon-exclamation"></li>&nbsp;昵称还没写。');

    }


}
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
my_init();