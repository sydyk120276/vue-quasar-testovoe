<template lang="">
    <input type="text"
      class="border border-gray-300 text-[8px] font-semibold w-[121px] h-[20px] flex items-center outline-none"
      placeholder="Спр.Диализатора"
      :value="sessionAppointmentsStore.valueOnClickDializator"
      @input="sessionAppointmentsStore.handleInputDializator"
    />
        <button
      class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center "
    >
   <BaseIcon  @click="sessionAppointmentsStore.showDialogDializator" />
    </button>
    <MyDializatorDialog />
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import MyDializatorDialog from './MyDializatorDialog.vue'
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
    MyDializatorDialog
  },
}
</script>
<style lang="">

</style>