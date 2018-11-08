$('.help').click(function() {
    $(this).toggleClass('clicked');
});

//REFILL FROM CUSTOMER SIDE
// Get the modal
 var popup = document.getElementById('refillModal');

 // Get the button that opens the modal
 var btnup = document.getElementById("refillBtn");

 // Get the <span> element that closes the modal
 var spanup = document.getElementsByClassName("exit")[0];

 // When the user clicks the button, open the modal
 btnup.onclick = function() {
     popup.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 spanup.onclick = function() {
     popup.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == popup) {
             popup.style.display = "none";
     }
 }
