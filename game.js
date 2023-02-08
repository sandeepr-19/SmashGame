// document.getElementById("start").addEventListener("onclick", ()=>{
// });
let img = document.getElementById("clickMe");
let container = document.getElementById("container");
let score = document.getElementById("score");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let easy = document.getElementById("easy");
medium.addEventListener("click", () => {
  level = 900;
  medium.style.backgroundColor = "rgb(255, 25, 0)";
  easy.style.backgroundColor = "white";
  hard.style.backgroundColor = "white";
});
hard.addEventListener("click", () => {
  level = 600;
  hard.style.backgroundColor = "rgb(255, 25, 0)";
  easy.style.backgroundColor = "white";
  medium.style.backgroundColor = "white";
});
easy.addEventListener("click", () => {
  level = 1300;
  easy.style.backgroundColor = "rgb(255, 25, 0)";
  medium.style.backgroundColor = "white";
  hard.style.backgroundColor = "white";
});
let level = 1300;
function initial() {
  let t = 10;
  let s = 0;
  score.style.display = "inline";
  // function move() {}

  medium.addEventListener("click", () => {
    level = 900;
    medium.style.backgroundColor = "rgb(255, 25, 0)";
    easy.style.backgroundColor = "white";
    hard.style.backgroundColor = "white";
  });
  hard.addEventListener("click", () => {
    level = 600;
    hard.style.backgroundColor = "rgb(255, 25, 0)";
    easy.style.backgroundColor = "white";
    medium.style.backgroundColor = "white";
  });
  easy.addEventListener("click", () => {
    level = 1300;
    easy.style.backgroundColor = "rgb(255, 25, 0)";
    medium.style.backgroundColor = "white";
    hard.style.backgroundColor = "white";
  });

  document.getElementById("start").disabled = true;
  easy.disabled = true;
  medium.disabled = true;
  hard.disabled = true;
  setInterval(() => {
    t -= 1;
  }, 1000);
  globalThis.inv = setInterval(() => {
    if (t === 0) {
      clearInterval(inv);
      t = 10;
      score.style.display = "none";
      score.innerHTML = 0;
      //document.getElementById("start").disabled = false;
      easy.disabled = false;
      medium.disabled = false;
      hard.disabled = false;
      document.getElementById("time").innerHTML = 10;
      alert("your score is " + s + " kid");
      return;
    }
    img.style.top = Math.round(Math.random() * (70 - 21) + 21) + "vh";
    img.style.left = Math.round(Math.random() * (70 - 0) + 0) + "vw";

    document.getElementById("time").innerHTML = t;
  }, level);
  img.addEventListener("click", () => {
    score.innerHTML = s += 1;
  });
}
function reset() {
  score.innerHTML = 0;
  easy.disabled = false;
  medium.disabled = false;
  hard.disabled = false;
  clearInterval(inv);
  document.getElementById("time").innerHTML = 10;

  document.getElementById("start").disabled = false;
}
