<template lang="">
    <input type="text"
      class="border border-gray-300 text-[8px] font-semibold w-[121px] h-[20px] flex items-center outline-none"
      placeholder="Спр.Концентратора"
      :value="concentratorStore.valueOnClickConcentrator"
      @input="concentratorStore.handleInputConcentrator"
    >
        <button
      class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
    >
    <BaseIcon @click="concentratorStore.showDialogConcentrator" />
    </button>
    <input type="text"
      class="border border-gray-300 w-[50px] text-[8px] h-[20px] justify-center flex items-center outline-none"
      placeholder="XXX л."
      :value="concentratorStore.valueConcentrator"
      @input="concentratorStore.handleInputWeights"
    />
  <MyConcentratorDialog />
</template>
<script>
import MyConcentratorDialog from './MyConcentratorDialog.vue'
import BaseIcon from './BaseIcon.vue'
import { useConcentratorStore } from '../../stores/useConcentratorStore'
export default {
  components: {
    MyConcentratorDialog,
    BaseIcon
  },
  data() {
      const concentratorStore = useConcentratorStore()
    return {
       concentratorStore,
    }
  },
}
</script>
<style lang="">

</style>