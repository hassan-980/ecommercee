let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function changeSlide(n) {
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  showSlide(currentSlide);
}

function setSlide(n) {
  currentSlide = n;
  showSlide(currentSlide);
}

setInterval(() => {
  changeSlide(1);
}, 5000);





var slideIndex = 1;
showSlides12(slideIndex);

function plusSlides(n) {
  showSlides12(slideIndex += n);
}


function showSlides12(n) {
  var i;
  var slides12 = document.getElementsByClassName("mySlides");
  var dots12 = document.getElementsByClassName("dot1");


  if (n > slides12.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides12.length}
  for (i = 0; i < slides12.length; i++) {
      slides12[i].style.display = "none";  
  }
  for (i = 0; i < dots12.length; i++) {
      dots12[i].className = dots12[i].className.replace(" active", "");
  }
  slides12[slideIndex-1].style.display = "block";  
  dots12[slideIndex-1].className += " active";
}

window.onload= function () {
  setInterval(function(){ 
     plusSlides(1);
  }, 800);
 }
