


var pic1 = document.getElementById("fig1").addEventListener("click",fun);
var pic2 = document.getElementsByClassName("fig_2");
pic2[0].addEventListener("click",fun);

var pic3 = document.getElementById("fig3").addEventListener("click",fun);

//create elem to display mouse x and y
var p = document.createElement("p");
p.id = "crp";
p.style.position = "absolute";
p.style.top = "-2%";
p.style.left = "96%";
document.body.append(p);


//display mouse x and y
function fun(e)
{
    
    var x = e.clientX;
    var y = e.clientY;
    p.innerHTML=x +' '+ y;

    if(e.altKey)
    {
        p.innerHTML='';
    }
   
}



var log = document.getElementsByClassName("logo");

log[0].addEventListener("click",logofun);

var myWindow;

function logofun(){

    myWindow = window.open("", "myWindow", "width=200, height=100");
    myWindow.document.write("<p style='color:violet;text-align:center;letter-spacing:5px;background:brown;'>Bine ati venit!</p>");
    i = 0;

}







var elchange = document.getElementById("schimba1").addEventListener("dblclick",fun3);

function fun3(e)
{
    document.getElementById("schimba1").src = "images/interior3.jpg";

    document.getElementById("schimba2").src="images/interior1.jpg";

    if(e.altKey)
    {
        document.getElementById("schimba1").src = "images/interior1.jpg";

        document.getElementById("schimba2").src="images/interior3.jpg";
    }


}

//dark mode


var b1 = document.getElementById("don");
var b2 = document.getElementById("dof");
b2.defaultValue = true;
b1.addEventListener("click",darkon);
b2.addEventListener("click",darkof);

function darkon()
{
    var f = document.getElementById("myradio");
    f.checked =true;
    var f2 = document.getElementById("myradio2");
    f2.checked = false;

    var b = document.getElementsByClassName("features");

    b[0].style.color = 'black';
    b[0].style.backgroundColor = 'black';

    var b2 = document.getElementsByClassName("imag");

    b2[0].style.color = 'black';
    b2[0].style.backgroundColor = 'black';

    var b3 = document.getElementById("h");
    b3.style.color = 'black';
    b3.style.backgroundColor = 'black';
    b3.style.background = 'black';

    
}

function darkof()
{
    var f = document.getElementById("myradio");
    f.checked =false;
    var f2 = document.getElementById("myradio2");
    f2.checked = true;


    var b = document.getElementsByClassName("features");

    b[0].style.color = 'white';
    b[0].style.backgroundColor = 'white';

    var b2 = document.getElementsByClassName("imag");

    b2[0].style.color = 'white';
    b2[0].style.backgroundColor = 'white';

    var b3 = document.getElementById("h");
    b3.style.backgroundImage = "url('images/hero.jpg')";
    b3.style.backgroundSize = "100%";
    b3.style.backgroundPosition="center";
  


    
}