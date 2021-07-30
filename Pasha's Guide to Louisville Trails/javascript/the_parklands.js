/* Hamburger and Navigational Menu Block */

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */
function myFunction() {
    var x = document.getElementById("myLinks");
    
    if (x.style.display === "block") {
       x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }         

/* Slideshow Block - Backley Park */

  var slideIndex = 1;
  showSlides(slideIndex);


// Next/previous controls
  function plusSlides(n) {
  showSlides(slideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Backley fade");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

/* Slideshow Block - Pope Lick Park*/

var slideIndexpl = 1;
showSlidespl(slideIndexpl);


// Next/previous controls
function plusSlidespl(z) {
showSlidespl(slideIndexpl += z);
}


// Thumbnail image controls
function currentSlidepl(z) {
showSlidespl(slideIndexpl = z);
}


function showSlidespl(z) {
var j;
var slidespl = document.getElementsByClassName("PopeLick fade");
var dotspl = document.getElementsByClassName("dotpl");
if (z > slidespl.length) {slideIndexpl = 1}
if (z < 1) {slideIndexpl = slidespl.length}
for (j = 0; j < slidespl.length; j++) {
    slidespl[j].style.display = "none";
}
for (j = 0; j < dotspl.length; j++) {
    dotspl[j].className = dotspl[j].className.replace(" active", "");
}
slidespl[slideIndexpl-1].style.display = "block";
dotspl[slideIndexpl-1].className += " active";

}

/* Slideshow Block - Turkey Run Park*/

var slideIndextr = 1;
showSlidestr(slideIndextr);


// Next/previous controls
function plusSlidestr(a) {
showSlidestr(slideIndextr += a);
}


// Thumbnail image controls
function currentSlidetr(a) {
showSlidestr(slideIndextr = a);
}


function showSlidestr(a) {
var k;
var slidestr = document.getElementsByClassName("TurkeyRun fade");
var dotstr = document.getElementsByClassName("dottr");
if (a > slidestr.length) {slideIndextr = 1}
if (a < 1) {slideIndextr = slidestr.length}
for (k = 0; k < slidestr.length; k++) {
    slidestr[k].style.display = "none";
}
for (k = 0; k < dotstr.length; k++) {
    dotstr[k].className = dotstr[k].className.replace(" active", "");
}
slidestr[slideIndextr-1].style.display = "block";
dotstr[slideIndextr-1].className += " active";

}

/* Slideshow Block - BroadRun Park*/


var slideIndexbrp = 1;
showSlidesbrp(slideIndexbrp);


// Next/previous controls
function plusSlidesbrp(q) {
showSlidesbrp(slideIndexbrp += q);
}


// Thumbnail image controls
function currentSlidebrp(q) {
showSlidesbrp(slideIndexbrp = q);
}


function showSlidesbrp(q) {
var t;
var slidesbrp = document.getElementsByClassName("BroadRun fade");
var dotsbrp = document.getElementsByClassName("dotbrp");
if (q > slidesbrp.length) {slideIndexbrp = 1}
if (q < 1) {slideIndexbrp = slidesbrp.length}
for (t = 0; t < slidesbrp.length; t++) {
    slidesbrp[t].style.display = "none";
}
for (t = 0; t < dotsbrp.length; t++) {
    dotsbrp[t].className = dotsbrp[t].className.replace(" active", "");
}
slidesbrp[slideIndexbrp-1].style.display = "block";
dotsbrp[slideIndexbrp-1].className += " active";

}

