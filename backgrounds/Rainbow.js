function rainbowBackground() {
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  var i = 0;

  function changeColor() {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }

  // Change color every 100ms
  setInterval(changeColor, 100);
}

// Run the function when loaded
rainbowBackground();
