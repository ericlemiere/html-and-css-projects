let isTouchScreen = false;
if ("ontouchstart" in document.documentElement)
{
    isTouchScreen = true;
}



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


// This is the onclick function
function showColor(id) {
    if (isTouchScreen) {
        $(document).ready(function()
        {
            var color = $(".swatch")[id];
            var x = document.getElementById(`th-${id}`);
            x.innerHTML = "";
            x.innerHTML = $(color).text();
            $("h3").fadeIn();
        });
    }  
}

function showColorHover(id) {
    if (!isTouchScreen) {
        $(document).ready(function()
        {
            var color = $(".swatch")[id];
            var x = document.getElementById(`th-${id}`);
            x.innerHTML = $(color).text();
            $("h3").fadeIn();
        });
    }
}



function hideColor(id) {
    document.getElementById(`th-${id}`).innerHTML = "";
}

function NavBarClickable() {
    document.getElementById("NavBar").style.pointerEvents = "auto";
}