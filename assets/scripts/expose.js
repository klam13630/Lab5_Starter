// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()
function init() {

  var selector = document.getElementById("horn-select");
  selector.addEventListener('change', function() {
    var choice = selector.value;
    document.querySelector("section img").src = "assets/images/" + choice + ".svg";
    document.getElementsByClassName("hidden")[0].src = "assets/audio/" + choice + ".mp3";
  }) 

  var vol_control = document.getElementById("volume");
  vol_control.addEventListener('input', function() {
    var vol = vol_control.value;
    var vol_img = document.querySelector("div img");
    if (vol == 0) {
      vol_img.src = "assets/icons/volume-level-0.svg";
    }
    else if (vol < 33) {
      vol_img.src = "assets/icons/volume-level-1.svg"
    }
    else if (vol < 67) {
      vol_img.src = "assets/icons/volume-level-2.svg"
    }
    else {
      vol_img.src = "assets/icons/volume-level-3.svg"
    }
    document.getElementsByClassName("hidden")[0].volume = vol / 100;
  })

  var button = document.querySelector("section button");
  button.addEventListener('click', function() {
    document.getElementsByClassName("hidden")[0].play();
    if (selector.value === "party-horn" && document.getElementsByClassName("hidden")[0].volume != 0) {
      jsConfetti.addConfetti()
    }
  }) 
  
}

