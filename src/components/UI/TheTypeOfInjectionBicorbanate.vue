<template lang="">
        <div>
          <span class="text-[8px] font-semibold pb-[7px]">Бикорбанат</span>
          <div class="relative">
          <input type="text"
            class="border border-gray-300 pl-[10px] text-[8px] font-semibold w-[78px] h-[20px] flex items-center justify-center outline-none"
            placeholder="XXX гр / л"
             @input="sessionAppointmentsStore.handleInputBicorbanate"
          />
          <span class="absolute text-[7px] top-[5px] right-[10px] ">{{ sessionAppointmentsStore.valueOnClickBicorbanate }}</span>
          </div>

          </div>
        <button
          class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
        >
          <BaseIcon  @click="sessionAppointmentsStore.showDialogBicorbanate" />
        </button>
        <div class="w-[50px] h-[48px]">
          <p class="text-[8px] font-semibold pb-[4px]">Сухой вес пациента</p>
          <input type="text"
            class="border border-gray-300 w-[50px] text-[8px] h-[20px] justify-center flex items-center outline-none"
            placeholder="XXX кг"
            :value="sessionAppointmentsStore.valueWeights"
            @input="sessionAppointmentsStore.handleInputWeights"
          />
          </div>
          <MyBicorbanateDialog />
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import MyBicorbanateDialog from './MyBicorbanateDialog.vue'
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
    MyBicorbanateDialog
  }
}
</script>
<style lang="">

</style>