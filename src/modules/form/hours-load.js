import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

// recupera o elemento de Ul
const hours = document.querySelector("#hours")

export function hoursLoad({ date, dailySchedules }) {
    // Limpa os horarios 
    hours.innerHTML = ""

    //obtem a lista de ocupado online
    const unavailableHours = dailySchedules.map((schedule) => (dayjs(schedule.when).format("HH:mm")) )
    console.log(unavailableHours)

    const opening = openingHours.map((hour) => {

        // recupero a hora
        const [scheduleHour] = hour.split(":");

        // verifico se a hora ja passou
        const isHourPast = dayjs(date).add(scheduleHour, 'hour').isBefore(dayjs());
        console.log(isHourPast)

        const available = !unavailableHours.includes(hour) && !isHourPast

        return {
            hour,
            available,
        }
    })


    opening.forEach(({ hour, available }) => {

        // cria a linha a ser add
        const li = document.createElement("li")

        // add a classe css
        li.classList.add("hour")

        //verifica se esta ativa ou inativa
        if (available) {
            li.classList.add("hour-available")
        } else {
            li.classList.add("hour-unavailable")
        }
        // Add o valor da hora para
        li.textContent = hour


        // Valido o horario para adicionar o comentario da Manhã - tarde - Noite
        if (hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        // Insere na UL a linha
        hours.append(li)

    })


    // adiciona o evento de click nos horarios disponiveis
    hoursClick()

}

function hourHeaderAdd(titulo) {

    // Cria o elemento linha
    const header = document.createElement("li")

    // Add a classe 
    header.classList.add("hour-period")

    // Add o titulo
    header.textContent = titulo

    // Add a linha no titulo.
    hours.append(header)
}