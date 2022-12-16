<template lang="">
      <div>
        <span class=" ">Назначение после сеанса</span>
        <div class="flex flex-col pt-[20px]">
          <span class="text-[8px] font-semibold pb-[7px]"
            >Лекарственный препарат</span
          >
          <div class="w-[235px] flex justify-between pb-[7px]">
            <input type="text"
              class="border border-gray-300 text-[8px] font-semibold w-[205px] h-[20px] flex items-center justify-start outline-none"
              placeholder="Спр.Препараты"
              :value="sessionAfterAppointmentsStore.valueOnClickMedications"
            />
            <button
              class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
            >
              <BaseIcon @click="sessionAfterAppointmentsStore.showDialogMedications" />
            </button>
          </div>
        </div>
        <div class="w-[245px] flex justify-between pb-[20px]">
          <div class="w-[105px] flex justify-between pb-[7px]">
            <span class="text-[8px] font-semibold pb-[7px]">Путь приёма</span>
            <input type="text"
              class="border border-gray-300 text-[8px] font-semibold w-[75px] h-[20px] flex items-center justify-start outline-none"
              placeholder="Спр.Путь приёма"
              :value="sessionAfterAppointmentsStore.valueOnClickReceivingPath"
              @input="sessionAfterAppointmentsStore.handleInputReceivingPath"
            />
            <button
              class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
            >
              <BaseIcon @click="sessionAfterAppointmentsStore.showDialogReceivingPath" />
            </button>
          </div>
          <div class="w-[135px] flex flex-col">
            <span class="text-[8px] font-semibold pb-[7px]">Дозировка</span>
            <div class="w-[123px] flex justify-between pb-[7px]">
              <div class="relative">
              <input type="text"
                class="border border-gray-300 text-[8px] font-semibold w-[95px] h-[20px] flex items-center justify-start outline-none"
                placeholder="Спр.Дозы препаратов"
                @input="sessionAfterAppointmentsStore.handleInputDoses"
              />
              <span class="absolute text-[7px] top-[5px] right-[10px] font-bold ">{{ sessionAfterAppointmentsStore.valueOnClickDoses }}</span>
              </div>
              <button
                class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
              >
                <BaseIcon @click="sessionAfterAppointmentsStore.showDialogDoses" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <MyDialogMedications />
      <MyReceivingPathDialog  />
      <MyDosesDialog  />
</template>
<script>
import MyDialogMedications from './UI/MyDialogMedications.vue'
import MyReceivingPathDialog  from './UI/MyReceivingPathDialog .vue'
import MyDosesDialog  from './UI/MyDosesDialog.vue'
import BaseIcon from './UI/BaseIcon.vue'
import { useSessionAfterAppointmentsStore } from '../stores/useSessionAfterAppointmentsStore'
export default {
    data() {
      const sessionAfterAppointmentsStore = useSessionAfterAppointmentsStore()
    return {
       sessionAfterAppointmentsStore,
    }
  },
  components: {
    MyDialogMedications,
    BaseIcon,
    MyReceivingPathDialog,
    MyDosesDialog,
  }
}
</script>
<style lang="">

</style>