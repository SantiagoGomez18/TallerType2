import { data } from "./data.js";
var seriesTabla = document.getElementById("table");
var promedio = document.getElementById("average");
var cardImage = document.getElementById("Serie_image");
var serieCardName = "";
llenarTabla(data);
function llenarTabla(series) {
    console.log("Llenando la tabla de series");
    var num_series = 0;
    var temporadas = 0;
    series.forEach(function (serie) {
        var _a;
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>".concat(serie.number, "</td>\n                        <td> <a href=\"#\" class=\"click\"> ").concat(serie.name, "</a></td>\n                        <td>").concat(serie.channel, "</td>\n                        <td>").concat(serie.seasons, "</td>");
        seriesTabla.appendChild(tr);
        num_series++;
        temporadas += serie.seasons;
        (_a = tr.querySelector('.click')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            cardDetail(serie);
        });
    });
    console.log("Calculando promedio");
    promedio.innerHTML = temporadas / num_series + "";
}
function cardDetail(serie) {
    var card = document.getElementById("card");
    serieCardName = serie.name;
    card.style.display = "block";
    cardImage.setAttribute("src", serie.image);
    document.getElementById("Serie_Name").textContent = serie.name;
    document.getElementById("Serie_Description").textContent = serie.description;
    document.getElementById("Serie_Link").setAttribute("href", serie.url);
    document.getElementById("Serie_Link").textContent = serie.url;
}
