const display = document.getElementById("display");
const container = document.getElementById("container");

input = (num) => {
  display.value += num;
}

clearInput = () => {
    display.value = "";
}

calculate = () => {
    try{
      display.value = eval(display.value);
    }
    catch(error){
      display.value = "Error";
    }
}

deleteBack = () => {
    display.value = display.value.slice(0,-1);
}

percentage = () => {
  display.value /= 100;
}
const randomColor=[
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
  "#61754D"];
function getRandom(){
 const getColor= Math.floor(randomColor.length * Math.random());
 return getColor;
}

changeMe = () => {
  const color = randomColor[getRandom()];
  document.getElementById("container").style.backgroundColor = color;
  document.getElementById("display").style.backgroundColor = color;
}