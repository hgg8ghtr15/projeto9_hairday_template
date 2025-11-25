import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
    try {
        // Buscar Agendamento
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        // converte para Json
        const data = await response.json()

        // Filtra os agendaento
        const dailySchedules = data.filter((schedule) => {
            if (dayjs(date).isSame(schedule.when, "day")) {
                return schedule
            }
        })

        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("Não foi possivel buscar os agendamento do dia selecionado!")
    }
}