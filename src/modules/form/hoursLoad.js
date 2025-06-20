import dayjs from "dayjs"
import { openingHours } from "../../utils/openingHours"
import { hoursClick } from "./hoursClick"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {

  hours.innerHTML = ""

  const opening = openingHours.map((hour) =>{
    const [sheduleHour] = hour.split(":")

    const isHourPast = dayjs(date).add(sheduleHour, "Hour").isAfter(dayjs())

    return {
      hour,
      available: isHourPast,
    }

  })

  opening.forEach(({hour, available}) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if(hour === "9:00") {
      hourHeaderAdd("Manhã")
    } else if(hour === "13:00") {
      hourHeaderAdd("Tarde")
    } else if(hour === "18:00" ) {
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)

}