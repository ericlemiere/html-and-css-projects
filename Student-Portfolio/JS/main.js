// ======= FUNCTION TO OPEN AND CLOSE CONTACT FORM ========

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


//Declare slideIndex variable, then call showSlides() to display first image
//when page loads
var slideIndex = 1;
showSlides(slideIndex);


//This function gets either a 1 or -1 from html when the left or right
//arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//changes the slide when dots are clicked
function currentSlide(n) {
    slideIndex = n; //make slideIndex whatever value is passed from html
    showSlides(slideIndex); //show that slide
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"

    if (n > slides.length) {
        slideIndex = 1 //this catches errors and automatically sets slideIndex to 1
    };
    if (n < 1) {
        slideIndex = slides.length //catches if n is less than 1 and sets slideIndex to length of array
    };

    for (i = 0; i<slides.length; i++) {
        slides[i].style.display="none";
        // This for loop takes each item in the array "slides" and sets the display to none
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
        // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image

}