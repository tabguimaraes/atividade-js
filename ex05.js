let index = 0;
const input = document.querySelector("#number");
const section = document.querySelector("section");
let entrada = 0;

input.addEventListener("input", function (evento) {
  entrada = +evento.target.value;
  Multiplicar(entrada);
});

function Multiplicar(entrada) {
  while (index <= 10) {
    let p = document.createElement("p");
    p.innerHTML = `${entrada} x ${index} = <span>${entrada * index}</span>`;
    section.appendChild(p);
    index++;
  }
}
