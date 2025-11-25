import {schedulesDay} from "../schedules/load.js"

// Seleciono o impute de data quando ele mudar
const selectedDate = document.querySelector("#date")

//carrega a função que atualiza os horarios.
// console.log(selectedDate)
selectedDate.onchange = () =>  schedulesDay()