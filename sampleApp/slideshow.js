document.addEventListener("DOMContentLoaded", function(event) { 
  displayResolution();
});
function displayResolution(){
  if(window.screen){
    // window.devicePixelRatio
    var width=window.innerWidth;
    var height=window.innerHeight;
  }
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  document.getElementById("show-time").innerHTML = "Updated at " + h + " : " + m + " : " + s;
  document.getElementById("screen-resolution").innerHTML = "screen.width and screen.height: " + width +"x"+ height; 
}