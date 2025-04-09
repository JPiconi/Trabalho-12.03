const lista = document.getElementsByTagName("ul");
const paragrafo = document.createElement("p");
const item1 = document.createElement("li");
const item3 = document.createElement("li");
const item5 = document.createElement("li");

//paragrafo.innerText = "Meu Primeiro paragrafo via javascript"
paragrafo.style.color = "#4f4e4e";
paragrafo.style.fontSize = "18px";
paragrafo.style.fontStyle = "italic";
paragrafo.textContent = "Meu Primeiro paragrafo via javascript";
console.log(paragrafo);

item1.textContent = "Item 1";
item3.textContent = "Item 3";
item5.textContent = "Item 5";

document.body.prepend(paragrafo); //acima de todos
document.body.appendChild(paragrafo); //abaixo de todos

lista[0].prepend(item1);
lista[0].insertBefore(item3, lista[0].children[2]);
lista[0].appendChild(item5);
