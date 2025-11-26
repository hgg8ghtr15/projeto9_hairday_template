import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js";
import {schedulesShow} from "./show.js"

const dataSelecionada = document.querySelector('#date');

export async function schedulesDay() {
    // Obtem o impute da hora
    const date = dataSelecionada.value;

    // Busca o agendamento da Api
    const dailySchedules = await scheduleFetchByDay({ date })

    // Renderiza o agendamentos.
    schedulesShow({ dailySchedules })

    // Renderiza os horarios disponiveis para o agendamento
    hoursLoad({ date, dailySchedules})
}