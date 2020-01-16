

document.body.addEventListener("keypress", function onKeyPress1(event) {
    if (event.key === "c") {

        alert("apasat c");
      // După prima apăsare dezactivez această funcționalitate
      document.body.removeEventListener("keypress", onKeyPress1);

      // La fiecare 3 secunde, schimbăm aleator culoarea unei celule.
      let handle = setInterval(changeCellColor, 1500);

      document.body.addEventListener("keypress", function onKeyPress2(event) {
        if (event.key === "s") {

            alert("apasat s");
          document.body.removeEventListener("keypress", onKeyPress2);

          // Oprește-te din colorat aleator celulele
          clearInterval(handle);

          var elems = document.getElementsByClassName("ch");

            var i;

          for(i=0; i<elems.length;i++)
             {
         elems[i].style.color = "white";
             }
            
        }
      });
    }
  },true);


  function randomInt(a, b) {
    return Math.floor(a + Math.random() * (b - a));
  }

function changeCellColor()
{
    var elems = document.getElementsByClassName("ch");

    var i;

    


    for(i=0; i<elems.length;i++)
    {
        let r = randomInt(0, 255);
        let g = randomInt(0, 255);
        let b = randomInt(0, 255);

    elems[i].style.color = `rgb(${r}, ${g}, ${b})`;
        

    }
}