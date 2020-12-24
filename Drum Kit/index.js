var numberOfDrumButtons = document.querySelectorAll(".drum").length;

/*document.querySelectorAll(".drum")[0].addEventListener("click", function (){
  var a1 = new Audio('sounds/crash.mp3');
  a1.play();
});

document.querySelectorAll(".drum")[1].addEventListener("click", function (){
  var a2 = new Audio('sounds/kick-bass.mp3');
  a2.play();
});

document.querySelectorAll(".drum")[2].addEventListener("click", function (){
  var a2 = new Audio('sounds/snare.mp3');
  a2.play();
});

document.querySelectorAll(".drum")[3].addEventListener("click", function (){
  var a2 = new Audio('sounds/tom-1.mp3');
  a2.play();
});

document.querySelectorAll(".drum")[4].addEventListener("click", function (){
  var a2 = new Audio('sounds/tom-2.mp3');
  a2.play();
});

document.querySelectorAll(".drum")[5].addEventListener("click", function (){
  var a2 = new Audio('sounds/tom-3.mp3');
  a2.play();
});

document.querySelectorAll(".drum")[6].addEventListener("click", function (){
  var a2 = new Audio('sounds/tom-4.mp3');
  a2.play();
});*/

for (var i = 0; i<numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var inner = this.innerHTML;
// innerHTMl gives the class of the button

    switch (inner) {
      case 'w':
        var a2 = new Audio('sounds/crash.mp3');
        a2.play();
        break;
      case 'a':
        var a2 = new Audio('sounds/kick-bass.mp3');
        a2.play();
        break;
      case 's':
        var a2 = new Audio('sounds/snare.mp3');
        a2.play();
        break;
      case 'd':
        var a2 = new Audio('sounds/tom-1.mp3');
        a2.play();
        break;
      case 'j':
        var a2 = new Audio('sounds/tom-2.mp3');
        a2.play();
        break;
      case 'k':
        var a2 = new Audio('sounds/tom-3.mp3');
        a2.play();
        break;
      case 'l':
        var a2 = new Audio('sounds/tom-4.mp3');
        a2.play();
        break;
      default:
        alert("Button not mentioned");
    }
  });
}
