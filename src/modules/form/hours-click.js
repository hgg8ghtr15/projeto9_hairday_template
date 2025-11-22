export function hoursClick() {
  const hours = document.querySelectorAll('.hour-available')

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {

      // removo os itens selecionado
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      // add ao iten selecionado a seleção de classe css
      selected.target.classList.add("hour-selected")
    })
  })
}