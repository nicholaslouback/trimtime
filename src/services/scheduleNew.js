import { apiConfig } from "./apiConfig.js";

export async function scheduleNew({ id, name, when }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Erro ${response.status}: ${errorText}`)
    }

    alert("Agendamento Realizado!")
  } catch (error) {
    console.error("Erro ao salvar agendamento:", error)
    alert("Tente novamente mais tarde.")
  }
}

