var randomnumber1 =Math.floor(Math.random() *6)+1;//0-0.99999
var randomimage = "dice" + randomnumber1 + ".png";
var randomimagesource = "images/" + randomimage;


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" ,randomImageSource2 );

if(randomnumber1 > randomNumber2){
    document.querySelector("h1").innerHTML=" 🚩player1 wins";

}
else if(randomNumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML="player2 wins 🚩";
}
else{   
    document.querySelector("h1").innerHTML="draw"; 
}