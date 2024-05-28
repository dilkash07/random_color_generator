const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const copybtn = document.querySelector(".copy-btn");
const copyMsg = document.querySelector(".copy-msg");
let colorcode = "";

genrateColorCode();
genrateColor();
copyMsg.classList.add("active");

btn.addEventListener("click", () => {
  genrateColorCode();
  genrateColor();
  copybtn.classList.remove("active");
  copyMsg.classList.add("active");
});

copybtn.addEventListener("click", () => {
  navigator.clipboard.writeText(colorcode);
  copybtn.classList.add("active");
  copyMsg.classList.remove("active");
});

function genrateColorCode() {
  const randNum = Math.floor(Math.random() * 16777215);
  colorcode = `#${randNum.toString(16)}`;
}
function genrateColor() {
  input.value = colorcode;
  container.style.backgroundColor = colorcode;
}
