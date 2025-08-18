let entrada1 = prompt("Digite o primeiro valor: ");

let entrada2 = prompt("Digite o segundo valor: ");

if (entrada1 < entrada2) {
  for (; entrada1 <= entrada2; entrada1++) {
    console.log(entrada1);
  }
} else {
  for (; entrada1 >= entrada2; entrada1--) {
    console.log(entrada1);
  }
}
