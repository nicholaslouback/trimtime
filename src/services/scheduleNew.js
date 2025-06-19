import { apiCOnfig } from "./apiConfig.js";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    })

    alert("Agendamento Realizado!")
  } catch (error) {
    alert("Tente novamente mais tarde.")
  }
}
