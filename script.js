const addIncrementBox = document.getElementById("increment_box");
const incrementList = document.getElementById("increment_list");
const differentBox = document.getElementById("different_box");
const differentTimes = document.getElementById("different_times");
const whiteTime = document.getElementById("white_time")
const body = document.getElementsByTagName("body");

addIncrementBox.addEventListener("click", async () => {
    if(addIncrementBox.checked){
        incrementList.innerHTML = `<label
                                    >Tiempo de incremento: <input list="incrementos" name="increments"/></label>
                                    <br/>

                                    <datalist id="incrementos">
                                        <option value="+3 segundos"></option>
                                        <option value="+5 segundos"></option>
                                        <option value="+10 segundos"></option>
                                        </datalist>
                                        `
    } else { incrementList.innerHTML = ""}
})

differentBox.addEventListener("click", async () => {
    if(differentBox.checked){
        whiteTime.innerHTML = `Tiempo de piezas blancas: <input list="tiempos" name="White_time"/>
                                <br/>`
        differentTimes.innerHTML = `<label
                                    >Tiempo de piezas negras: <input list="tiempos" name="black_time"/></label>
                                    <br/>`
    } else { 
        differentTimes.innerHTML = "";
        whiteTime.innerHTML = `<label id="white_time">Tiempo de cada reloj: <input list="tiempos" name="Tiempos"/></label>`
    }
})
