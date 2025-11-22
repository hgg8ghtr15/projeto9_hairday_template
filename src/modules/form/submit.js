import dayjs from "dayjs";
const form = document.querySelector('form');

const dataSelecionada = document.querySelector('#date');

/**
 * Define a data minima e inicial do input date do formulario
 */
const dataHoje = dayjs(new Date()).format('YYYY-MM-DD');
dataSelecionada.value = dataHoje;   // add a data iniciada para hoje quando carrega o sistema
dataSelecionada.min = dataHoje  // add um data minima para o input date

const clienteName = document.querySelector("#client")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
        // Pego o nome do cliente tratando os espaços
        const name = clienteName.value.trim()

        // Valido o nome do cliente vazio
        if (!name) {
            return alert("Nome do cliente deve ser preenchido! ")
        }

        // Recupero o campo de hora cliente
        const hourSelected = document.querySelector(".hour-selected")

        // Valido o campo de hora agendamento do cliente
        if (!hourSelected) {
            return alert("Deve ser preenchido com um horário Válido! ")
        }

        // Tranformo a hora com minuto em hora
        const [hour]  = hourSelected.innerHTML.split(":")

        // Crio a data com hora
        const when = dayjs(dataSelecionada.value).add(hour, "hour")
        console.log(when)

        // Gera um Id para o cliente
        const id = new Date().getTime()

        console.log({
            id,
            name,
            when
        })

    } catch (error) {
        console.log("Error, não foi possivel realizar o agendamento.")
    }
});