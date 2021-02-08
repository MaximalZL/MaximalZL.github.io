$(".clickit").click(function() {
    $("#card").css("top","-200px");  // Added px to make it work, 
                                     //   or get rid of quotes -500
    var href = $(this).attr('href');

         // Delay setting the location 
    setTimeout(function() {window.location = href}, 3000);
    return false;
});