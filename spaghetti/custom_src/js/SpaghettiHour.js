var sHour = document.getElementById('spaghetModal');
var closing = document.getElementsByClassName('bye')[0];
var d = new Date();
var hour = d.getHours();

//if it's 5:something, let customer know about spaghetti hour
if(hour === 17){
  sHour.style.display = "block";
}

closing.onclick = function() {
    sHour.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == sHour) {
            sHour.style.display = "none";
    }
}
