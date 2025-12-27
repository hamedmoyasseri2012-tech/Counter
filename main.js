const counter = document.getElementById(counter);
const Minus = document.getElementById(Minus);
const Reset = document.getElementById(Reset);
const Plus = document.getElementById(Plus);
Minus.addEventListener("click", () => {
  Cont -= 1;
  Cont.textContent = Cont;
  console.log(conter);
  if (cont < 0) {
    counter.style.color = "Red";
  }
});
Plus.addEventListener("click", () => {
  cont += 1;
  Cont.textContent = Count;
  console.log(conter);
  if (cont > 0) {
    counter.style.color = "Green";
  }
});
Reset.addEventListener("click", () => {
  cont = 0;
  Cont.textContent = Count;
  conscole.log(conter);
  if (Cont == 0) {
    Conter.style.color = gray;
  }
});
