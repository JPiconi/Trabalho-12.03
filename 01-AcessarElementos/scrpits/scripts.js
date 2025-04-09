const Titulo = document.getElementById("Titulo");
const inputnome = document.getElementById("nome");
const paragrafos = document.getElementsByClassName("paragrafo");
const itens = document.getElementsByClassName("item");
const itensP = document.getElementsByTagName("p");
const textcard = document.querySelector(".card p");
const textcard2 = document.querySelector(".card #paragrafo2");
const cards = document.querySelectorAll(".card");
const nome = document.getElementsByName("nome");
function getEmail() {
  const email = document.getElementById("email");

  console.log(email.value);
}

console.log(Titulo);
console.log(Titulo.textContent);
console.log(inputnome);
console.log(inputnome.value);
console.log(paragrafos);
console.log(itens);
console.log((itens[0].textContent = "Item modificado!"));
console.log(itensP[4]);
console.log(textcard.textContent);
console.log(textcard2.textContent);
console.log(cards.length);
console.log(nome);
