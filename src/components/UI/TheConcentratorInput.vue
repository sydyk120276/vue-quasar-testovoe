<template lang="">
    <input type="text"
      class="border border-gray-300 text-[8px] font-semibold w-[121px] h-[20px] flex items-center outline-none"
      placeholder="Спр.Концентратора"
      :value="sessionAppointmentsStore.valueOnClickConcentrator"
      @input="sessionAppointmentsStore.handleInputConcentrator"
    >
        <button
      class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
    >
    <BaseIcon @click="sessionAppointmentsStore.showDialogConcentrator" />
    </button>
    <input type="text"
      class="border border-gray-300 w-[50px] text-[8px] h-[20px] justify-center flex items-center outline-none"
      placeholder="XXX л."
      :value="sessionAppointmentsStore.valueConcentrator"
      @input="sessionAppointmentsStore.handleInputConcentratorWeights"
    />
  <MyConcentratorDialog />
</template>
<script>
import MyConcentratorDialog from './MyConcentratorDialog.vue'
import BaseIcon from './BaseIcon.vue'
import { useSessionAppointmentsStore } from '../../stores/useSessionAppointmentsStore'
export default {
  components: {
    MyConcentratorDialog,
    BaseIcon
  },
  data() {
      const sessionAppointmentsStore = useSessionAppointmentsStore()
    return {
       sessionAppointmentsStore,
    }
  },
}
</script>
<style lang="">

</style>