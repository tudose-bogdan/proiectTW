
// selectare cu query
var x = document.querySelector(".TextLocation ul li")

x.style.fontWeight = "bold";


//selectare cu class name
var t = document.getElementsByClassName("TextLocation");

t[0].addEventListener("mouseover", fun);
t[0].addEventListener("mouseout", fun2);
t[0].style.background = "rgb(120,70,70)";



//modificare dinamica de proprietati

function fun()
{
    t[0].style.letterSpacing = "5px";
    t[0].style.opacity = "1";
}

function fun2()
{
    t[0].style.letterSpacing="1px";
    
    t[0].style.opacity = "0.7";
}


//numara cate clickuri s-au dat pe logo
var log = document.getElementsByClassName("logo");

var clicks = 0; // counter 
log[0].onclick = function(b)
{
    console.log(++clicks);
    if(clicks % 5 == 0)
    {
        alert("sau dat " + clicks + " clickuri");
    }
}


