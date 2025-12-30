const counter = document.getElementById("counter");
const Minus = document.getElementById("Minus-btn");
const Reset = document.getElementById("Reset-btn");
const Plus = document.getElementById("Plus-btn");
let count = 0;
Minus.addEventListener("click", () => {
  count -= 1;
  count.textContent = count;
  console.log(counter);
  if (count < 0) {
    counter.style.color = "Red";
  }
});
Plus.addEventListener("click", () => {
  count += 1;
  count.textContent = count;
  console.log(counter);
  if (count > 0) {
    counter.style.color = "Green";
  }
});
Reset.addEventListener("click", () => {
  count = 0;
  count.textContent = count;
  conscole.log("counter");
  if (count == 0) {
    counter.style.color = "gray";
  }
});
