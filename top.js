
click.onclick = function () {
   let cut = document.getElementById("cut");
   let numofbamboo = document.getElementById("numofbamboo");
   let click = document.getElementById("click");

   calcut = document.getElementById("calcut");
   calcurry = document.getElementById("calcurry");
   calslide = document.getElementById("calslide");

   calcut.innerHTML = "The amount for cutting is " + numofbamboo.value * 4;
   calcurry.innerHTML = "The amount for bamboo carrier is " + numofbamboo.value * 3.5;
   calslide.innerHTML = "The amount for slider is " + numofbamboo.value * 5.75;

   calcurry.style.color = "yellow";
}

clicktoview.onclick = function () {
   let numofraw = document.getElementById("numofraw");
   let numofraw2 = document.getElementById("numofraw2");
   let clicktoview = document.getElementById("clicktoview");
   let calraw = document.getElementById("calraw");
   let calsix = document.getElementById("calsix");
   let calthree = document.getElementById("calthree");

   let sixValue = numofraw.value * 70;
   let threeValue = numofraw2.value * 65;
   let final = sixValue + threeValue;

   calsix.innerHTML = "The .6 amount is " + sixValue;
   calthree.innerHTML = "The .3 amount is " + threeValue;
   calraw.innerHTML = "The total amount is " + final;

   calraw.style.color = "yellow";
}

cal.onclick = function () {
   let numofout = document.getElementById("numofout");
   let numofin = document.getElementById("numofin");
   let numofdry = document.getElementById("numofdry");
   let cal = document.getElementById("cal");
   let caltotal = document.getElementById("caltotal");
   let calhalf = document.getElementById("calhalf");

   let outValue = numofout.value * 1035;
   let inValue = numofin.value * 920;
   let dryValue = numofdry.value * 5750;
   let total = outValue + inValue + dryValue;
   let half = total / 2;

   caltotal.innerHTML = "The total amount for dryer is " + total;
   calhalf.innerHTML = "The half amount for dryer is " + half;
   caltotal.style.color = "yellow";
}
