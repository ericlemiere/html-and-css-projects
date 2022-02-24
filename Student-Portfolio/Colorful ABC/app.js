// $(document).ready(function()
// {
//     $(".swatch").mouseover(function()
//     {
//         var val = $("data-swatch-num");
//         console.log(val);
//         var x = document.getElementById("th2");
//         x.innerHTML = $(this).text();
//     });
//     $(".swatch").mouseleave(function()
//     {
//         var x = document.getElementById("th2");
//         x.innerHTML = "";
//     });
// });

$(document).ready(() => {
    $("#banner").fadeIn(2500);
})

$(document).ready(function() {
    $("#gotIt").mouseover(function() {
        document.getElementById("gotIt").innerHTML = "Let's Go!";
    });
    $("#gotIt").mouseleave(function() {
        document.getElementById("gotIt").innerHTML = "Ready?";
    });
});

$(document).ready(function(){
    $("#gotIt").click(function(){
      $("#mainDiv").fadeIn();
      $("#banner").fadeOut();
    });
});



function showColor(id) {
    $(document).ready(function()
    {
        var color = $(".swatch")[id];
        var x = document.getElementById(`th-${id}`);
        x.innerHTML = $(color).text();
        $("h3").fadeIn();
    });
}



function hideColor(id) {
    document.getElementById(`th-${id}`).innerHTML = "";
}



// $(window).on("load",function() {
//     $(window).scroll(function() {
//       var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//       $(".row").each(function() {
//         /* Check the location of each desired element */
//         var objectBottom = $(this).offset().top + $(this).outerHeight();
        
//         /* If the element is completely within bounds of the window, fade it in */
//         if (objectBottom < windowBottom + 500) { //object comes into view (scrolling down)
//           if ($(this).css("opacity")==0) {$(this).fadeTo(800,1);}
//         } else { //object goes out of view (scrolling up)
//           if ($(this).css("opacity")==1) {$(this).fadeTo(800,0);}
//         }
//       });
//     }).scroll(); //invoke scroll-handler on page-load
// });