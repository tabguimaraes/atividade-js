const main = document.querySelector(".main");

for (let index = 10; index <= 200; index++) {
  let p = document.createElement("p");
  p.innerText = `${index}`;

  main.appendChild(p);
}
