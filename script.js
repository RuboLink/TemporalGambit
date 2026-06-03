const addIncrementBox = document.getElementById("increment_box");
const incrementList = document.getElementById("increment_list");
const differentBox = document.getElementById("different_box");
const differentTimes = document.getElementById("different_times");
const main = document.getElementsByTagName("main");
const readyButton = document.getElementById("ready_button")
const configButtons = document.getElementsByClassName("config_buttons");

const tiemposList = `<select class="tiempos_list">
                        <option value="1">1 min</option>
                        <option value="3">3 min</option>
                        <option value="5">5 min</option>
                        <option value="10">10 min</option>
                        <option value="15">15 min</option>
                        <option value="20">20 min</option>
                        <option value="30">30 min</option>
                        <option value="60">60 min</option>
                        <option value="90">90 min</option>
                    </select>`;

const incrementosList = `<select id="incrementos_list">
                        <option value="1">+1 seg</option>
                        <option value="3">+3 seg</option>
                        <option value="5">+5 seg</option>
                        <option value="10">+10 seg</option>
                    </select>`;


addIncrementBox.addEventListener("click", async () => {
    if(addIncrementBox.checked){
        incrementList.innerHTML = `<label>Tiempo de incremento: ${incrementosList}</label>
                                    <br/>`
    } else { incrementList.innerHTML = ""}
})

differentBox.addEventListener("click", async () => {
    if(differentBox.checked){
        differentTimes.innerHTML = `<label id="white_time">Tiempo de piezas blancas: ${tiemposList}</label>
                                    <br/>
                                    <label id="black_time">Tiempo de piezas negras: ${tiemposList}</label>
                                    <br/>`
    } else { 
        differentTimes.innerHTML = `<label>Tiempo de cada reloj: ${tiemposList}</label>`;
    }
})

readyButton.addEventListener("click", async () => {
    readyButton.hidden = true;
    configButtons[0].hidden = false;
    if(differentBox.checked){
        let whiteLabel = document.getElementById("white_time");
        let whiteSelect = whiteLabel.querySelector("select");
        console.log(whiteSelect.value)
        
        let blackLabel = document.getElementById("black_time");
        let blackSelect = blackLabel.querySelector("select");
        console.log(blackSelect.value)
        
    } else {
        let timeLabel = document.getElementById("both_times");
        let times = timeLabel.querySelector("#tiempos_list");
        console.log(times.value)

        
    }

    readyButton.hidden = false;
})

// async function setClocks(playerTime1, playerTime2){
//     main.innerHTML = 
// }
