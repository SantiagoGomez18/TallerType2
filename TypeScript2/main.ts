import { data } from "./data.js";
import { serie } from "./Serie.js";

let seriesTabla: HTMLElement = document.getElementById("table")!;
let promedio: HTMLElement = document.getElementById("average")!;


let cardImage: HTMLElement = document.getElementById("Serie_image")!;

let serieCardName: String = "";

llenarTabla(data);

function llenarTabla(series: serie[]) :void{
    console.log("Llenando la tabla de series");
    let num_series = 0;
    let temporadas = 0;
    series.forEach((serie)=>{
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${serie.number}</td>
                        <td> <a href="#" class="click"> ${serie.name}</a></td>
                        <td>${serie.channel}</td>
                        <td>${serie.seasons}</td>`;
        seriesTabla.appendChild(tr);
        
        num_series++;
        temporadas += serie.seasons;
        
        tr.querySelector('.click')?.addEventListener('click', ()=>{
            cardDetail(serie);
        }
        );
    })
    console.log("Calculando promedio");

    promedio.innerHTML = temporadas/num_series + "";
}

function cardDetail(serie: serie): void {
    let card: HTMLElement = document.getElementById("card")!;

        serieCardName = serie.name;
        card.style.display = "block";
        cardImage.setAttribute("src", serie.image);
        document.getElementById("Serie_Name")!.textContent = serie.name;
        document.getElementById("Serie_Description")!.textContent = serie.description;
        document.getElementById("Serie_Link")!.setAttribute("href", serie.url);
        document.getElementById("Serie_Link")!.textContent = serie.url;

    
}