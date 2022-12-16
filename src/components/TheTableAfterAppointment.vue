<template lang="">
      <div>

        <div>
          <span class="text-[8px] font-semibold  ">Список назначений после сеанса</span>
          <table class="w-[470px] h-[72] border mt-[10px] mb-[35px] ">
            <thead>
              <tr class="text-[6px] font-semibold">
                <th class="border">Лекарственный препарат</th>
                <th class="border">Путь приёма</th>
                <th class="border">Дозировка</th>
                <th class="border">Начало приёма</th>
                <th class="border">Конец приёма</th>
                <th class="border">Номер сеанса</th>
                <th class="border">Дней</th>
                <th class="border"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-[6px] font-semibold">
                <th class="border">{{ sessionAfterAppointmentsStore.medications }} </th>
                <th class="border">{{ sessionAfterAppointmentsStore.receivingPath }}</th>
                <th class="border">{{ sessionAfterAppointmentsStore.doses }} {{ sessionAfterAppointmentsStore.dosesValue }}</th>
                <th class="border">{{ sessionAfterAppointmentsStore.startDate }}</th>
                <th class="border">{{ sessionAfterAppointmentsStore.endDate }}</th>
                <th class="border">1,2,3</th>
                <th class="border">3</th>
                <th class="border pl-[7px] "><svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 24 24" width="12px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/></svg></th>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
</template>
<script>
import { useSessionAfterAppointmentsStore } from '../stores/useSessionAfterAppointmentsStore'
export default {
    data() {
      const sessionAfterAppointmentsStore = useSessionAfterAppointmentsStore()
    return {
       sessionAfterAppointmentsStore,
    }
  },
}
</script>
<style lang="">

</style>