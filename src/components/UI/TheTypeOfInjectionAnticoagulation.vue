<template lang="">
        <div>
          <span class="text-[8px] font-semibold pb-[7px]">Антикоагуляция</span>
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[78px] h-[20px] flex items-center justify-center outline-none"
            placeholder="Наименования"
            :value="sessionAppointmentsStore.valueOnClickAnticoagulation"
            @input="sessionAppointmentsStore.handleInputAnticoagulation"
          />
          </div>
        <button
          class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
        >
          <BaseIcon @click="sessionAppointmentsStore.showDialogAnticoagulation" />
        </button>
        <div class="w-[50px] h-[42px]">
          <span class="text-[8px] font-semibold pb-[7px]">Объем</span>
          <input type="text"
            class="border border-gray-300 w-[50px] text-[8px] h-[20px] justify-center flex items-center outline-none"
            placeholder="XXX ед"
            :value="sessionAppointmentsStore.valueAnticoagulation"
            @input="sessionAppointmentsStore.handleInputAnticoagulationVolume"
          />
          </div>
          <MyAnticoagulationDialog />
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import MyAnticoagulationDialog from './MyAnticoagulationDialog.vue'
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
    MyAnticoagulationDialog
  }
}
</script>
<style lang="">

</style>