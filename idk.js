// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunctionNav()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunctionNav() {
    document.getElementById("myDropdown").classList.toggle("show");
}

    function myFunction() {
        var x = document.getElementById('myDIV');
        if (x.style.display === 'block') {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
        }
    }

    function myFunction2() {
        var x = document.getElementById('myDIV2');
        if (x.style.display === 'block') {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
        }
    }

    function myFunction3() {
        var x = document.getElementById('myDIV3');
        if (x.style.display === 'block') {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
        }
    }

    function myFunction4() {
        var x = document.getElementById('myDIV4');
        if (x.style.display === 'block') {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
        }
    }

    //lightbox javascript

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
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }
