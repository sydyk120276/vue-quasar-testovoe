<template lang="">
        <div class="w-[244px] flex justify-between pb-[15px]">
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[85px] h-[20px] flex items-center outline-none"
            placeholder="Спр.Катетеры"
            :value="sessionAppointmentsStore.valueOnClickCatheter"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <BaseIcon @click="sessionAppointmentsStore.showDialogCatheter" />
          </button>
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[85px] h-[20px] flex items-center outline-none"
            placeholder="Спр.Тип Катетеров"
            :value="sessionAppointmentsStore.valueOnClickCatheterType"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <BaseIcon @click="sessionAppointmentsStore.showDialogCatheterType" />
          </button>
        </div>
        <MyCatheterDialog />
        <MyCatheterTypeDialog />
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import MyCatheterDialog from '../UI/MyCatheterDialog.vue'
import MyCatheterTypeDialog from '../UI/MyCatheterTypeDialog.vue'
import { useSessionAppointmentsStore } from '../../stores/useSessionAppointmentsStore'

export default {
    data() {
      const sessionAppointmentsStore = useSessionAppointmentsStore()
    return {
       sessionAppointmentsStore,
    }
  },
  components: {
    BaseIcon,
    MyCatheterDialog,
    MyCatheterTypeDialog
  }
}
</script>
<style lang="">

</style>