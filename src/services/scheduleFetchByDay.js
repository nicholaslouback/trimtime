import dayjs from "dayjs"
import { apiConfig } from "./apiConfig"

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
    const data = await response.json()

    const dailySchedules = data.filter(schedule =>
      dayjs(schedule.when).format("YYYY-MM-DD") === date
    )

    return dailySchedules 
  } catch (error) {
    alert("Não foi possível buscar os agendamentos.")
  }
}
