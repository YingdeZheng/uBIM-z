$(function() {
	//获取主体div
    var mainContent = $("#main");

     $(".nav>li").each(function() {
        $(this).on("click", function() {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        });
    });

});
