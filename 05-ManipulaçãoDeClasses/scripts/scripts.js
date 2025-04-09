const container = document.getElementById("container");
container.classList.add("ativo"); //adiciona
container.classList.add("qualquer_coisa"); //adiciona
container.classList.remove("qualquer_coisa"); //remove
container.classList.toggle("ativo0000"); //se a classe ja existir, ele removerá, se não existir esta classe ele adicionará
if (container.classList.contains("ativo")) {
  //verificará se a classe escrita existe ou não, retornará true ou false
  console.log("A caixa esta ativa");
}
