// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  setTimeout(() => {
    voices = window.speechSynthesis.getVoices();
    populateVoiceList();
  }, 100);
  var img = document.querySelector("section img");
  var button = document.querySelector("section button");
  var text = document.getElementById("text-to-speak");
  button.addEventListener('click', function() {
    
    if (text.value.length != 0) {
      var utterThis = new SpeechSynthesisUtterance(text.value);
      var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      
      for(var i = 0; i < voices.length ; i++) {
        if(voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }
      img.src = "assets/images/smiling-open.png";
      synth.speak(utterThis);
    }
    else {
      alert("You have not entered any text.");
    }
    
    utterThis.addEventListener('end', function(event) {
      img.src = "assets/images/smiling.png"
    });
  })
 

  // TODO
}

//below code is from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
var synth = window.speechSynthesis;
var voiceSelect = document.querySelector('select');
var voices = [];

function populateVoiceList() {
  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}