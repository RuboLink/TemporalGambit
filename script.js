const addIncrementBox = document.getElementById("increment_box");
const incrementList = document.getElementById("increment_list");
const differentBox = document.getElementById("different_box");
const differentTimes = document.getElementById("different_times");
const whiteTime = document.getElementById("white_time")
const body = document.getElementsByTagName("body");
const tiemposList = `<select id="tiempos_list">
                    <option>1 min</option>
                    <option>3 min</option>
                    <option>5 min</option>
                    <option>10 min</option>
                    <option>15 min</option>
                    <option>20 min</option>
                    <option>30 min</option>
                    <option>60 min</option>
                    <option>90 min</option>
                </select>`;

const incrementosList = `<select id="incrementos_list">
                        <option>+1 seg</option>
                        <option>+3 seg</option>
                        <option>+5 seg</option>
                        <option>+10 seg</option>
                     </select>`;



async function firstLoad(){
    differentTimes.innerHTML = `<label id="white_time">Tiempo de cada reloj: ${tiemposList}</label>`;
}

addIncrementBox.addEventListener("click", async () => {
    if(addIncrementBox.checked){
        incrementList.innerHTML = `<label>Tiempo de incremento: ${incrementosList}</label>
                                    <br/>`
    } else { incrementList.innerHTML = ""}
})

differentBox.addEventListener("click", async () => {
    if(differentBox.checked){
        differentTimes.innerHTML = `<label>Tiempo de piezas blancas: ${tiemposList}</label>
                                    <br/>
                                    <label>Tiempo de piezas negras: ${tiemposList}</label>
                                    <br/>`
    } else { 
        differentTimes.innerHTML = `<label>Tiempo de cada reloj: ${tiemposList}</label>`;
    }
})


