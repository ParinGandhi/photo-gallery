$(function () {
    var frame = $("#frame");
    var frameImg = $("#frame img");
    var overlay = $("#overlay");

    // grabbing the current image and displaying it in the frame
    $("#portfolio img").click(function () {

        var src = $(this).attr("src");

        frameImg.attr("src", src);
        frame.fadeIn();
        overlay.fadeIn();
    });

});
