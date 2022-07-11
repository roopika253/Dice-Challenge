var rand1=Math.floor((Math.random()*6))+1
var rand2=Math.floor((Math.random()*6))+1
var img_source1="images/dice"+rand1+".png"
var img_source2="images/dice"+rand2+".png"
document.getElementsByClassName("img1")[0].setAttribute('src',img_source1)
document.getElementsByClassName("img2")[0].setAttribute('src',img_source2)
function compare()
{
if (rand1>rand2)
{
    document.querySelector("h1").innerHTML="PLAYER 1 WINS"
}
else if( rand1<rand2 )
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS"
}
else{
    document.querySelector("h1").innerHTML="BOTH PLAYERS WIN"
}}