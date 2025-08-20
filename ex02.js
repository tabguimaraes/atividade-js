let index = 200;
const body = document.querySelector("body");

do {
  console.log(index);
  let p = document.createElement("p");
  p.innerText = `${index}`;
  body.appendChild(p);
  index--;
} while (index >= 10);
