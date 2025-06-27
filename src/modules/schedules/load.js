import { scheduleFetchByDay } from "../../services/scheduleFetchByDay"

import { hoursLoad } from "../form/hoursLoad";
import { schedulesShow } from "./show";

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  const date = selectedDate.value

  const dailySchedules = await scheduleFetchByDay({ date })

  schedulesShow({ dailySchedules })

  hoursLoad({ date, dailySchedules })
}