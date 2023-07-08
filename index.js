// Roll the dice button
var button = document.querySelector(".btn");
button.addEventListener("click", start);

function start() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
  var image1 = document.querySelectorAll("img")[0]; //first image
  image1.setAttribute("src", randomImageSource); //set the image source to the random image

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
  var image2 = document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomImageSource2);

  //player 1

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML =
      "<span>🚩</span> Player 1 Wins! <span>🚩</span>";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML =
      "<span>🚩</span> Player 2 wins! <span>🚩</span>";
  } else {
    document.querySelector("h1").innerHTML =
      "<span>🚩</span> Draw! <span>🚩</span>";
  }
}
