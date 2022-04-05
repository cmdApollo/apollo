let thunder = document.getElementById("thunder");
let mountain = document.getElementById("mountain");
let header = document.getElementById("header");
window.addEventListener("scroll", function() {
  var value = window.scrollY;
  thunder.style.top = value * 0.5 + "px";
  mountain.style.top = value * 0.10 + "px";
  header.style.top = value * 0.35 + "px";
})
