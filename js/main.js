var myList = document.getElementsByClassName("link");
var myBurger = document.getElementsByClassName("burger");
var close = document.getElementsByClassName("close");
myBurger[0].onclick = function(){
    myList[0].style.left = "0";
}
close[0].onclick = function(){
    myList[0].style.left = "100%";
}