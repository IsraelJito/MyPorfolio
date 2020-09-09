
/*=========link scrolling=========*/

	$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});


// ==========Gallary Modal===========


function galleryFunction(img) {

var galleryModal = document.getElementById("galleryModal");
var modalContent = document.getElementById("modalContent");
var caption = document.getElementById("caption");

galleryModal.style.display = "block";
modalContent.src = img.src;
caption.innerHTML = img.alt;
}

var close = document.getElementById("close");

close.onclick = function () {
  var galleryModal = document.getElementById("galleryModal");
	galleryModal.style.display = "none";
}

// function closeFunction() {
//   galleryModal.style.display = "none";
// }

// $("#img6").click(function () {
// 	var img = document.getElementById("img6").src;
// 	var result = document.getElementById("modalContent");
// 	result.src = img;
// 	document.getElementById("galleryModal").style.display = "block";

// })