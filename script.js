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

    // fading out to the main page by clicking on the overlay
    overlay.click(function () {
        overlay.fadeOut();
        frame.fadeOut();
    });

});
