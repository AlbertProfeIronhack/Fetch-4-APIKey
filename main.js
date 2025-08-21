// conexion api del tiempo con api key

const urlTiempo = "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=mi_API_KEY&units=metric&lang=es";

const ubicacion = document.getElementById("ubicacion");
const icono = document.getElementById("icono");
const general = document.getElementById("general");
const temperatura = document.getElementById("temperatura");
const humedad = document.getElementById("humedad");

fetch(urlTiempo)
.then(res=>res.json())
.then((data)=>{
    console.log(data);
    // ubicacion, general, icono, temperatura, humedad
    console.log(data.name);
    console.log(data.weather[0].main);
    console.log(data.weather[0].icon);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    let icon = data.weather[0].icon

    //******** visualmente */
    ubicacion.innerText = data.name;
    icono.innerHTML = `<img src= https://openweathermap.org/img/wn/${icon}.png>`;
    general.innerText = data.weather[0].main;
    temperatura.innerText = `${data.main.temp} ºC`;
    humedad.innerText = `${data.main.humidity} %`;

})
.catch((error)=>{
    console.error(error);
});
