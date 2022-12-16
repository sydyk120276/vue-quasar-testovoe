<template lang="">
  <div>
    <span class="text-[8px] font-semibold">Номер сеансов:</span>
    <div class="flex w-[206px] justify-between pt-[10px] pb-[27px]">
      <button
        class="border bg-blue-500 text-white w-[23px] h-[20px] text-[9px] justify-center flex items-center"
      >
        1
      </button>
      <button
        class="border bg-blue-500 text-white text-[9px] w-[23px] h-[20px] justify-center flex items-center"
      >
        2
      </button>
      <button
        class="border bg-blue-500 text-white text-[9px] w-[23px] h-[20px] justify-center flex items-center"
      >
        3
      </button>
      <button
        class="border border-gray-300 w-[23px] text-[9px] h-[20px] justify-center flex items-center"
      >
        4
      </button>
      <button
        class="border border-gray-300 text-[9px] w-[23px] h-[20px] justify-center flex items-center"
      >
        5
      </button>
      <button
        class="border border-gray-300 w-[23px] text-[9px] h-[20px] justify-center flex items-center"
      >
        6
      </button>
      <button
        class="border border-gray-300 w-[23px] text-[9px] h-[20px] justify-center flex items-center"
      >
        7
      </button>
    </div>
  </div>
  <div class="flex w-[290px] justify-between pb-[20px]">
    <div class="flex flex-col">
      <span class="text-[8px] font-semibold pb-[10px]">Начало приёма</span>
      <input
        class="w-[87px] h-[21px] border text-[8px] outline-none"
        type="date"
        @input="sessionAfterAppointmentsStore.handleInputStartDate"
      />
    </div>
    <div class="flex flex-col">
      <span class="text-[8px] font-semibold pb-[10px]">Конец приёма</span>
      <input
        class="w-[87px] h-[21px] border text-[8px] outline-none"
        type="date"
         @input="sessionAfterAppointmentsStore.handleInputEndDate"
      />
    </div>
    <span class="text-[8px] font-semibold flex items-end"
      >Количество сеансов:
      <span class="text-[8px] font-semibold text-blue-500 pl-[5px]">
        3</span
      ></span
    >
    <button
      class="border border-gray-500 w-[68px] text-[8px] h-[20px] justify-center flex items-center mt-[30px]"
      @click="sessionAfterAppointmentsStore.formButtonAfterSession"
    >
      Сформировать
    </button>
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
};
</script>
<style lang=""></style>
