var randomNumberGenerator1 = Math.floor((Math.random() * 6) + 1);
var randomDiceImgSrc1= "images/dice"+randomNumberGenerator1+".png";
//var randomDiceImgSrc1="images/"+randomDiceImg1;
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceImgSrc1);

var randomNumberGenerator2 = Math.floor((Math.random() * 6) + 1);
var randomDiceImgSrc2= "images/dice"+randomNumberGenerator2+".png";
//var randomDiceImgSrc2="images/"+randomDiceImg2;
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",randomDiceImgSrc2);


if (randomNumberGenerator1 > randomNumberGenerator2){
    document.querySelector("h1").innerHTML="Player A Wins 😎";
}
else if (randomNumberGenerator1 < randomNumberGenerator2){
    document.querySelector("h1").innerHTML="Player B Wins 😎";
}
else if (randomNumberGenerator1 == randomNumberGenerator2){
    document.querySelector("h1").innerHTML="It's a Tie, Try again 😕";
}




