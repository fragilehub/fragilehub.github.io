const cloak = document.querySelector(".timer");

function timer() {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  let time = h + ":" + m + ":" + s;

  cloak.innerHTML = time;

  setTimeout("timer()", 1000);
}

window.addEventListener("load", () => {
  timer();
});
