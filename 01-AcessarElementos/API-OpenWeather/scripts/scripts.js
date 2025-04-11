const apiKey = "8847eaccfbf5bcb727539acca64abb9f"; // Substitua pela sua chave da API
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const weatherPanel = document.getElementById("weatherPanel");
const errorMessage = document.getElementById("error");

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();

  if (city === "") {
    errorMessage.textContent = "Por favor, insira o nome de uma cidade.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
    );

    if (!response.ok) {
      throw new Error("Cidade não encontrada.");
    }

    const data = await response.json();
    displayWeather(data);
    errorMessage.textContent = ""; // Limpar a mensagem de erro
  } catch (error) {
    errorMessage.textContent = error.message;
    weatherPanel.style.display = "none"; // Esconder painel de clima em caso de erro
  }
});

function displayWeather(data) {
  weatherPanel.style.display = "block"; // Mostrar o painel
  const cityName = data.name;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const weatherDescription = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

  weatherPanel.innerHTML = `
        <h2>${cityName}</h2>
        <img src="${iconUrl}" alt="Ícone clima">
        <p>Temperatura: ${temperature}°C</p>
        <p>Condições: ${weatherDescription}</p>
        <p>Umidade: ${humidity}%</p>
    `;
}
