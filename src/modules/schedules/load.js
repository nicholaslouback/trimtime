import { scheduleFetchByDay } from "../../services/scheduleFetchByDay"

import { hoursLoad } from "../form/hoursLoad";

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  const date = selectedDate.value

  const dailySchedules = await scheduleFetchByDay({ date })

  hoursLoad({ date })
}