import { apiConfig } from "./apiConfig.js"

export async function scheduleCancel({ id }){
  try {
    await fetch(`${apiConfig.baseURL}/shedules/${id}`, {
      method: "DELETE"
    })
  alert("Cancelamento realizado com sucesso")
  } catch (error) {
    alert("Erro ao cancelar o agendamento, tente mais tarde")
  }
}