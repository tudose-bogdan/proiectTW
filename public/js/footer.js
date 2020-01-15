//display dinamic

var myVar = setInterval(myTimer, 1000);
document.getElementById("watch").style.display="none";
function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("watch").innerHTML = t;
}

function myStopFunction() {
  clearInterval(myVar);
} 

var bt = document.getElementById("btn");
bt.addEventListener("click",myfun);


//dynamic display + remove element
function myfun(e)
{
    document.getElementById("watch").style.display = "inline";

    if(e.ctrlKey)
    {
      var element = document.getElementById("watch");
      element.parentNode.removeChild(element);
    }
}

