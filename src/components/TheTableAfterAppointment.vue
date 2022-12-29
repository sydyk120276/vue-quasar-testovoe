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
              <tr v-for="(mask) in sessionAfterAppointmentsStore.homeResept" :key="mask.id" class="text-[6px] font-semibold">
                <th class="border">{{ mask.medications }} </th>
                <th class="border">{{ mask.receivingPath }}</th>
                <th class="border">{{ mask.doses }} {{ mask.dosesValue }}</th>
                <th class="border">{{ mask.startDate }}</th>
                <th class="border">{{ mask.endDate }}</th>
                <th class="border">{{ mask.sessionNumbers }}</th>
                <th class="border">{{ mask.countDayResult }}</th>
                <th class="border pl-[7px] ">
                  <button
                  class=""
                  @click="sessionAfterAppointmentsStore.removeResept(index)"
                >
                <DeleteIcon />
              </button>
                  </th>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
</template>
<script>
import { useSessionAfterAppointmentsStore } from '../stores/useSessionAfterAppointmentsStore'
import DeleteIcon from './UI/DeleteIcon.vue'
export default {
    data() {
      const sessionAfterAppointmentsStore = useSessionAfterAppointmentsStore()
    return {
       sessionAfterAppointmentsStore,
    }
  },
  components: {
    DeleteIcon
  }
}
</script>
<style lang="">

</style>