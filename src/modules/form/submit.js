import dayjs from "dayjs"
import { scheduleNew } from "../../services/scheduleNew.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    const name = clientName.value.trim()

    if (!name) {
      return alert("Informe o nome do Cliente")
    }

    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Informe o horário do agendamento")
    }

    const [hour] = hourSelected.innerText.split(":")

    const when = dayjs(selectedDate.value).add(hour,"hour")

    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when,
    })

    await schedulesDay()

    clientName.value = ""
  } catch (error) {
    alert("Não foi possível realizar o agendamento!")
  }
}