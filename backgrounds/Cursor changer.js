var c = prompt("What cursor do you want? The options are none,alias,all-scroll,auto,cell,col-resize,copy,e-resize,help,not-allowed,progress, and grabbing. Be sure you write them exactly as I did.");
(function() {
  var x = document.getElementsByTagName("*");
  for (i = 0; i < x.length; i++) {
    x[i].style.cursor = c;
  }
})();
