// Get the modal element
var modal = document.getElementById("commentModal");

// Get all the comment buttons
var commentBtns = document.querySelectorAll(".fa-comment");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks any comment button, open the modal
commentBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

// When the user clicks on the close button, close the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
