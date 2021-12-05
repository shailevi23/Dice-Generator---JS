const element = document.getElementById("title");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var newDice1 = "/images/dice" + randomNumber1 + ".png";
var newDice2 = "/images/dice" + randomNumber2 + ".png";
var diceImages = document.querySelectorAll("img");
diceImages[0].setAttribute("src", newDice1);
diceImages[1].setAttribute("src", newDice2);

if(randomNumber1 > randomNumber2)
{
    element.innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2)
{
    element.innerHTML = "Player 2 Wins!";
}
else
{
    element.innerHTML = "Draw";
}

document.get