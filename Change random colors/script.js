function clickFunction() {
  let bg = document.getElementById("background");
  let colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "indigo",
    "brown",
    "cyan",
    "pink",
  ];

  const colorIndex = parseInt(Math.random() * colors.length);
  bg.style.backgroundColor = colors[colorIndex];
}
