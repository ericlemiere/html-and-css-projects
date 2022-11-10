let isTouchScreen = false;
$(document).ready(() => {
    if ("ontouchstart" in document.documentElement)
    {
        document.getElementById("browser").innerHTML = "Click on the blocks of color to reveal the color name!";
        isTouchScreen = true;
    }
    else
    {
        document.getElementById("browser").innerHTML = "Hover over the blocks of color to reveal the color name!";
    }
})




$(document).ready(() => {
    $("#banner").fadeIn(2500);
})

// $(document).ready(function() {
//     $("#gotIt").mouseover(function() {
//         document.getElementById("gotIt").innerHTML = "Let's Go!";
//     });
//     $("#gotIt").mouseleave(function() {
//         document.getElementById("gotIt").innerHTML = "Ready?";
//     });
// });

$(document).ready(function(){
    $("#gotIt").click(function() {
        btn = document.getElementById("gotIt");
        btn.innerHTML = "Let's Go!";
        
        setTimeout(() => {
            $("#mainDiv").fadeIn("slow");
            $("#banner").fadeOut("slow");
        }, 700);
      
    });
});


// This is the onclick function
let textFadeOut;
function showColor(id) {
    if (isTouchScreen) {
        $(document).ready(function()
        {
            clearTimeout(textFadeOut);
            var color = $(".swatch")[id];
            var x = document.getElementById(`th-${id}`);
            x.innerHTML = "";
            x.innerHTML = $(color).text();
            $("h3").fadeIn();
            textFadeOut = setTimeout(() => {
                $("h3").fadeOut();
            }, 2000);
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