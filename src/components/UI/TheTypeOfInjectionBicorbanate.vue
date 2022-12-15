<template lang="">
        <div>
          <span class="text-[8px] font-semibold pb-[7px]">Бикорбанат</span>
          <div class="relative">
          <input type="text"
            class="border border-gray-300 pl-[10px] text-[8px] font-semibold w-[78px] h-[20px] flex items-center justify-center outline-none"
            placeholder="XXX гр / л"
             @input="bicorbanateStore.handleInputBicorbanate"
          />
          <span class="absolute text-[7px] top-[5px] right-[10px] ">{{ bicorbanateStore.valueOnClickBicorbanate }}</span>
          </div>

          </div>
        <button
          class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
        >
          <BaseIcon  @click="bicorbanateStore.showDialogBicorbanate" />
        </button>
        <div class="w-[50px] h-[48px]">
          <p class="text-[8px] font-semibold pb-[4px]">Сухой вес пациента</p>
          <input type="text"
            class="border border-gray-300 w-[50px] text-[8px] h-[20px] justify-center flex items-center outline-none"
            placeholder="XXX кг"
            :value="bicorbanateStore.valueWeights"
            @input="bicorbanateStore.handleInputWeights"
          />
          </div>
          <MyBicorbanateDialog />
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import MyBicorbanateDialog from './MyBicorbanateDialog.vue'
import { useBicorbanateStore } from '../../stores/useBicorbanateStore'

export default {
      data() {
      const bicorbanateStore = useBicorbanateStore()
    return {
       bicorbanateStore,
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