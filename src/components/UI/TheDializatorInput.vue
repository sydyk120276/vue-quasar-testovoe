<template lang="">
    <input type="text"
      class="border border-gray-300 text-[8px] font-semibold w-[121px] h-[20px] flex items-center outline-none"
      placeholder="Спр.Диализатора"
      :value="dializatorStore.valueOnClickDializator"
      @input="dializatorStore.handleInputDializator"
    />
        <button
      class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center "
    >
   <BaseIcon  @click="dializatorStore.showDialogDializator" />
    </button>
    <MyDializatorDialog />
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import MyDializatorDialog from './MyDializatorDialog.vue'
import { useDializatorStore } from '../../stores/useDializatorStore'

export default {
   data() {
      const dializatorStore = useDializatorStore()
    return {
       dializatorStore,
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