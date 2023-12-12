const audio = new Audio("mp3.mp3");
const buttons = document.querySelectorAll("#wwww");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});


const audi = new Audio("zvuk-vzryva.mp3");
const button = document.querySelectorAll("#www");

button.forEach(button => {
  button.addEventListener("click", () => {
    audi.play();
  });
});
