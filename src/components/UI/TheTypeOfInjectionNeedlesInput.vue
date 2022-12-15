<template lang="">
        <div class="w-[244px] flex justify-between pb-[15px]">
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[85px] h-[20px] flex items-center outline-none"
            placeholder="Спр.Иглы"
            :value="storePania.valueOnClick"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <BaseIcon @click="storePania.showDialog" />
          </button>
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[85px] h-[20px] flex items-center outline-none"
            placeholder="Спр.Тип иглы"
            :value="needlessListStore.valueOnClickList"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <BaseIcon @click="needlessListStore.showDialogNeedlessList" />
          </button>
        </div>
    <MyDialog  />
    <MyDialogNeedlesList  />
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import MyDialog from './MyDialog.vue'
import MyDialogNeedlesList from './MyDialogNeedlesList.vue'
import { useCounterStore } from '../../stores/useCounterStore'
import { useNeedlessListStore } from '../../stores/useNeedlessListStore'

export default {

  data() {
      const storePania = useCounterStore()
      const needlessListStore = useNeedlessListStore()
    return {
       storePania,
       needlessListStore,
    }
  },

  components: {
    BaseIcon,
    MyDialog,
    MyDialogNeedlesList,
  },

}
</script>
<style lang="">

</style>