var widthValue = 20;

function move() {
  var elem = document.getElementById("myBar");
  var widthAnim = widthValue;
  var id = setInterval(frame, 10);
  var widthIncrement = 10;

  widthValue = widthAnim + widthIncrement;

  function frame() {
    if (widthAnim >= widthValue || widthValue > 100) {
      clearInterval(id);
    } else {
      widthAnim++;
      elem.style.width = widthAnim + '%';
      elem.innerHTML = widthAnim * 1 + '%';
    }
  }
}