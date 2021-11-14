$(function() {
    var current_url = location.href;
    var location_url1 = $(".place a:eq(1)").attr("href");
    var location_url2 = $(".place a:eq(2)").attr("href");
    // 导航栏高亮
    $(".nav li a,.user-nav li a").each(function() {
        var this_url = $(this).attr("href");
        if (this_url == current_url || this_url == location_url1 || this_url == location_url2) {
            $(this).parent().addClass("on").siblings().removeClass("on");
        }
        if ($(this).parent().find("li").length > 0) {
            $(this).addClass("drop");
        }
    });


    $(".data-on").click(function() {
        $(".data-box").slideToggle();
    });

    $(".gotop").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });

    $(".kefu-off").click(function() {
        $(".kefu-on").removeClass("on");
        $(".kefu-box").removeClass("kefu-box-on");
    });
    $(".kefu-on,.wap-kefu-on").click(function() {
        $(".kefu-box").addClass("kefu-box-on");
        $(this).addClass("on");
    });

    $(".info-down-btn").click(function() {
        $('body,html').animate({ scrollTop: $(".info-down-dw").offset().top }, 1000);
    });

    $(".video-info-on").click(function() {
        $(".video-info").toggleClass("video-info-h");
        if ($(this).find('span').html() == '展开简介') {
            $(this).find('span').html("收起简介");
            $(this).find('i').addClass('icon-zhankai1');
        } else {
            $(this).find('span').html("展开简介");
            $(this).find('i').removeClass('icon-zhankai1');
        }
    });

    $('.tx-wide').on('click', '.info-xg', function() {
        var url = $(this).attr("data-url");
        $.ajax({
            type: "post",
            url: url,
            dataType: "html",
            success: function(msg) {
                var html = $(msg).find('.info-xg-box li');
                $(".info-xg-box>ul").html(html);
            },
            error: function(result) {
                alert("参数错误");
            }
        });
    });
});