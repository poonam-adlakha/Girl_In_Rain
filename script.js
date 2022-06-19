var dropCount =  300;
var w = window.innerWidth;
var h = window.innerHeight;
var iw = document.documentElement.clientWidth;
var ih = document.documentElement.clientHeight;
var bw = document.getElementsByTagName("body")[0].clientWidth;
var bh = document.getElementsByTagName("body")[0].clientHeight;


var block = document.getElementsByTagName("body")[0];
var rain = document.getElementById("rainDrop");
var dot = document.getElementById("dot");

var initialTop = block.clientHeight * -1;

var width = w || iw || bw;
var height = h || ih || bh;


for(var i = 0; i < dropCount; ++i) {
  var posY = Math.round(Math.random() * height);
  var posX = Math.round(Math.random() * width);
  var drops = document.createElement("div");
  drops.innerHTML = rain.outerHTML;
  var speed = 1000 * 30;
  var speedDelay = 2000;
  drops.setAttribute("class", "drops" + (3 - Math.floor(speed / 1000 / 8)));
  block.appendChild(drops);

  
  drops.animate (
    [
      {
        transform: "translate3d(" + 0 + "vw, " + initialTop + "vh, 0)"
      },
      {
        transform:
          "translate3d(" +  Math.random() * 256  + "vw, " +  posY + "vh, 0)"
      }
    ],
    {
      delay: Math.random() * -speed,
      duration: speedDelay,
      iterations: 1000
    }
  );
}