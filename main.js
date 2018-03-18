document.addEventListener('DOMContentLoaded', function() {
  // tutaj będziemy umieszczać kod ze wszystkich zadań
  //

  var forDropdown = document.querySelector('.for-dropdown');
  var dropdown = document.querySelector('.dropdown');
  console.log(forDropdown, dropdown);

  forDropdown.addEventListener("mouseenter", function(){

    dropdown.style.display = "block";

  });


  forDropdown.addEventListener("mouseleave", function(){

    dropdown.style.display = "none";

  });


var readMore = document.querySelectorAll(".read-more");

var more = document.querySelectorAll('.more');

for (var i = 0; i < readMore.length; i++) {
  readMore[i].addEventListener('click', function(){
    console.log(this.innerText);


    if(this.innerText === "WIĘCEJ") {
      this.previousElementSibling.style.display = "block";
      this.innerText = "MNIEJ";
    } else {
      this.previousElementSibling.style.display = "none";
      this.innerText = "WIĘCEJ";
    }




  })
}

});

















