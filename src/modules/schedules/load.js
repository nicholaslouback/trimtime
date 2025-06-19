import { hoursLoad } from "../form/hoursLoad";

const selectedDate = document.getElementById("date")

export function schedulesDay() {
  const date = selectedDate.value
  hoursLoad({ date })
}