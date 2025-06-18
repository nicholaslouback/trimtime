import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

form.onsubmit = (event) => {
  event.preventDefault()
}