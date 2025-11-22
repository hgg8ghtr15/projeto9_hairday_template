import {hoursLoad} from "../form/hours-load.js";

const dataSelecionada = document.querySelector('#date');

export function schedulesDay(){

    const date = dataSelecionada.value;
    hoursLoad({date})
}