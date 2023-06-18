var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}


function makeSound(key) {

  switch (key) {
    case "w":
      var a = new Audio("sounds/mixkit-cinematic-tribal-flute-2306.wav");
      a.play();
      break;

    case "a":
      var v= new Audio("sounds/mixkit-game-flute-bonus-2313.wav");
      v.play();
      break;

    case "s":
      var n = new Audio('sounds/mixkit-possitive-indian-flute-2312.wav');
      n.play();
      break;

    case "d":
      var t= new Audio('sounds/mixkit-uplifting-flute-notification-2317.wav');
      t.play();
      break;

    case "j":
      var k = new Audio('sounds/mixkit-flute-cell-phone-alert-2315.wav');
      k.play();
      break;


    default: console.log(key);

  }
}




  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);


