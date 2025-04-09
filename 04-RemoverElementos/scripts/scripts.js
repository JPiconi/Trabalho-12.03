const lista = document.getElementById("lista");

const remove = document.getElementsByClassName("itemParaRemover");

const item = document.getElementById("itemRemove");

lista.removeChild(remove[0]);
item.remove();
