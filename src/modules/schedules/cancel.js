import { scheduleCancel } from "../../services/scheduleCancel.js"
import { schedulesDay } from "./load.js"

const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")){
      const item = enevnt.target.closest("li")
      const { id } = item.dataset

      if (id) {
        const isConfirm = confirm("Deseja cancelar o agendamento?")
        
        if(isConfirm){
          await scheduleCancel({ id })
          schedulesDay()
        }
      }
    }
  })
})