function resizeIframe(bool) {
    if (bool == true) document.getElementById("navbarIframe").style.height = "344px";
    else document.getElementById("navbarIframe").style.height = "61px";
}

function resizeIndex() {
    
    var w = window.innerWidth;
    var h = window.innerHeight;
    if(w/h < 1.5 ){
        h2 = w/1.5;
        document.getElementById("indexFrame").style.height = h2+"px";
    }
    else document.getElementById("indexFrame").style.height = h+"px";
    if(w/h < 1.25) {
        document.getElementById("divide").style.display = "none";

        document.getElementById("headerTXT").style.display = "inline-block";
        document.getElementById("headerIMG").style.display = "inline-block";
        document.getElementById("headerTXT").style.width = "80%";
        document.getElementById("headerIMG").style.width = "15%";

        document.getElementById("arrow").style.display = "none";
    }
    else {
        document.getElementById("divide").style.display = "initial";

        document.getElementById("headerTXT").style.display = "initial";
        document.getElementById("headerIMG").style.display = "initial";
        document.getElementById("headerTXT").style.width = "";
        document.getElementById("headerIMG").style.width = "175px";

        document.getElementById("arrow").style.display = "initial";
    }
}

function scrollTo(element) {
    document.getElementById(element).scrollIntoView();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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
