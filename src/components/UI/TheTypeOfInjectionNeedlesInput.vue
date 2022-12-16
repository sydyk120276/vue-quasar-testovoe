<template lang="">
        <div class="w-[244px] flex justify-between pb-[15px]">
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[85px] h-[20px] flex items-center outline-none"
            placeholder="Спр.Иглы"
            :value="sessionAppointmentsStore.valueOnClick"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <BaseIcon @click="sessionAppointmentsStore.showDialog" />
          </button>
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[85px] h-[20px] flex items-center outline-none"
            placeholder="Спр.Тип иглы"
            :value="sessionAppointmentsStore.valueOnClickList"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <BaseIcon @click="sessionAppointmentsStore.showDialogNeedlessList" />
          </button>
        </div>
    <MyDialog  />
    <MyDialogNeedlesList  />
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import MyDialog from './MyDialog.vue'
import MyDialogNeedlesList from './MyDialogNeedlesList.vue'
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
    MyDialog,
    MyDialogNeedlesList,
  },

}
</script>
<style lang="">

</style>