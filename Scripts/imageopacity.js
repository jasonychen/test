$(document).ready(function() {
    $("#image1").css("opacity", 1.0);
    $("#image2").css("opacity", 1.0);
    $("#image3").css("opacity", 1.0);
    $("#image1").hover(function() {
        $(this).animate({opacity: 0.75}, 500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });

    $("#image2").hover(function() {
        $(this).animate({opacity: 0.75}, 500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });

    $("#image3").hover(function() {
        $(this).animate({opacity: 0.75}, 500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });
});