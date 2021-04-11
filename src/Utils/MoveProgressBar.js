export function moveProgressBar(value, text, statusClasses) {
  const barWidth = [0.2, 0.4, 0.6, 0.8, 1];
  let limit = 0;
  const strengthBar = document.querySelector("#strength");
  let parentWidth = strengthBar.parentElement.clientWidth;
  let width = strengthBar.clientWidth;
  if (text.length === 0) {
    limit = 0;
    strengthBar.className = "";
  } else {
    limit = parentWidth * barWidth[value];
    strengthBar.className = statusClasses[value];
  }
  const id = setInterval(frame, 3);
  function frame() {
    if (width == limit.toFixed(0)) {
      clearInterval(id);
    } else if (limit.toFixed(0) < width) {
      width--;
      strengthBar.style.width = width + "px";
    } else {
      width++;
      strengthBar.style.width = width + "px";
    }
  }
}
