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

/* Slideshow Block - Tom Sawyer Park*/


var slideIndextsp = 1;
showSlidestsp(slideIndextsp);


// Next/previous controls
function plusSlidestsp(q) {
showSlidestsp(slideIndextsp += q);
}


// Thumbnail image controls
function currentSlidetsp(q) {
showSlidestsp(slideIndextsp = q);
}


function showSlidestsp(q) {
var t;
var slidestsp = document.getElementsByClassName("TomSawyer fade");
var dotstsp = document.getElementsByClassName("dottsp");
if (q > slidestsp.length) {slideIndextsp = 1}
if (q < 1) {slideIndextsp = slidestsp.length}
for (t = 0; t < slidestsp.length; t++) {
    slidestsp[t].style.display = "none";
}
for (t = 0; t < dotstsp.length; t++) {
    dotstsp[t].className = dotstsp[t].className.replace(" active", "");
}
slidestsp[slideIndextsp-1].style.display = "block";
dotstsp[slideIndextsp-1].className += " active";

}

