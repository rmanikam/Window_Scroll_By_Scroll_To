var currentPos = 0;
var targetPos = 1500;

var scrollInterval = setInterval(function () {
  if (currentPos >= targetPos) {
    clearInterval(scrollInterval);
    return;
  }
  currentPos += 50;
  window.scrollBy(0, 50);
}, 50);
