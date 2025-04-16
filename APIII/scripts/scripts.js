//Fluxo:
// - Evento de submit no formulario disparado pelo botão
// - captura do evento pelo search.addEventLinstener("submit", processar);
// - o evento captura o valor do input e coloca ele na url de requisição
// - é feita a requisição e a resposta é capturada por response.json();
//api key 8847eaccfbf5bcb727539acca64abb9f

//h1
//img
//textos temperatura e tempo
//temp minina e maxima, umidade e ventos

const search = document.getElementById("search");
const cityInput = document.getElementById("city");
const h1 = document.getElementById("h1");
const img = document.getElementById("img");
const temp1 = document.getElementById("temp_value1");
const temp2 = document.getElementById("temp_value2");
const tempmin = document.getElementById("tempmin");
const tempmax = document.getElementById("tempmax");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const processar = async (event) => {
  const cityName = cityInput.value;
  const key = "8847eaccfbf5bcb727539acca64abb9f";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      cityName
    )}&appid=${key}&units=metric&lang=pt_br`
  );

  const data = await response.json();

  console.log(data);
};

console.log(h1, img, temp1, temp2, tempmin, tempmax, humidity, wind);

search.addEventListener("submit", processar);
