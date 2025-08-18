const main = document.querySelector("body");
// console.log(main.appendChild());

for (let index = 10; index <= 200; index++) {
  let p = document.createElement("p");
  p.innerText = `${index}`;
}
