<template lang="">
        <div>
          <span class="text-[8px] font-semibold pb-[7px]">Антикоагуляция</span>
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[78px] h-[20px] flex items-center justify-center outline-none"
            placeholder="Наименования"
            :value="anticoagulationStore.valueOnClickAnticoagulation"
            @input="anticoagulationStore.handleInputAnticoagulation"
          />
          </div>
        <button
          class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
        >
          <BaseIcon @click="anticoagulationStore.showDialogAnticoagulation" />
        </button>
        <div class="w-[50px] h-[42px]">
          <span class="text-[8px] font-semibold pb-[7px]">Объем</span>
          <input type="text"
            class="border border-gray-300 w-[50px] text-[8px] h-[20px] justify-center flex items-center outline-none"
            placeholder="XXX ед"
            :value="anticoagulationStore.valueAnticoagulation"
            @input="anticoagulationStore.handleInputAnticoagulation"
          />
          </div>
          <MyAnticoagulationDialog />
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import MyAnticoagulationDialog from './MyAnticoagulationDialog.vue'
import { useAnticoagulationStore } from '../../stores/useAnticoagulationStore'
export default {
    data() {
      const anticoagulationStore = useAnticoagulationStore()
    return {
       anticoagulationStore,
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