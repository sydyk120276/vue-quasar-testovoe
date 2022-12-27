<template lang="">
  <div class="flex flex-col">
    <span class="text-[8px] font-semibold pb-[10px]">Программа аппарата</span>
    <div class="flex w-[205px] justify-between pb-[18px] ">
    <div class="" v-for="(mask) in sessionAppointmentsStore.nameButtons" :key="mask.id">
        <button
        class="border w-[63px] h-[20px] flex justify-center items-center text-[8px] font-semibold border-gray-300 text-gray-500"
          :class="{active : sessionAppointmentsStore.active_el == mask.id}"
          @click="sessionAppointmentsStore.activate(mask.id, mask.title)"
        >
          {{ mask.title }}
        </button>
    </div>
    </div>
  </div>
</template>
<script>
import { useSessionAppointmentsStore } from '../stores/useSessionAppointmentsStore'
export default {
      data() {
      const sessionAppointmentsStore = useSessionAppointmentsStore()
    return {
       sessionAppointmentsStore,
      //  isActive: true,
      //  active_el: 0,
    }
  },
    computed: {
    // classes() {
    //   const classes = ['border',  'w-[63px]', 'h-[20px]', 'flex', 'justify-center', 'items-center', 'text-[8px]', 'font-semibold']
    //   return this.isActive
    //   ? [...classes, 'border-green-300', 'text-green-500']
    //   : [...classes, 'border-gray-300', 'text-gray-500']
    // }
  },
  // methods: {
  //   activate: function(el) {
  //     this.active_el = el
  //   }
  // }
};
</script>
<style lang="">

</style>
