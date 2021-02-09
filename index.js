var drumButtons = document.querySelectorAll(".drum");

function makeSound(key) {
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:

  }
}

function buttonAnimation(key){
  key = key.toLowerCase();
  var activeButton = document.querySelector(("." + key));
  if(activeButton != null){
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    },
    100);
  }
}

//Detecting click on botton

function callBackClick(e){
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
  // this.style.color="white";
  // console.log(this.classList.contains("w"));

  //here I'm assuming that the specific botton class is the first in the list
  var audio;
  var buttonClass = this.classList[0];
  makeSound(buttonClass);
  buttonAnimation(buttonClass);
}

for (var i = 0; i < drumButtons.length; i++){
  drumButtons[i].addEventListener("click", callBackClick);
}

//Detecting keyboard pressed

function callBackKeydown(e){
  makeSound(e.key);
  buttonAnimation(e.key);
}

addEventListener("keydown", callBackKeydown);
