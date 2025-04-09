// const button = document.createElement("a");

// button.style.color = "#fff";
// button.style.fontSize = "24px";
// button.style.fontStyle = "negrito";
// button.style.backgroundColor = "#ff5252";
// button.style.textDecoration = "none";
// button.textContent = "Click me!";

// console.log(button);

const button = document.createElement("a");
button.innerText = "Click Me!";
document.body.prepend(button);
button.setAttribute("onclick", "saudacao()");
button.classList.add("bnt");

if (
  button.classList.contains("bnt") ||
  button.getAttribute("onclick") === "saudacao()"
) {
  button.style.textDecoration = "none";
  button.style.padding = "10px 20px";
  button.style.fontSize = "24px";
  button.style.fontWeight = "bold";
  button.style.textAlign = "center";
  button.style.color = "#fff";
  button.style.backgroundColor = "#ff5252";
  button.style.border = "2px solid #000";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";
  button.style.boxShadow = "5px 5px 0 #000";
  button.style.transition = "all 0.3s ease";
}

console.log(button);
