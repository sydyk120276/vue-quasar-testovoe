<template lang="">
    <div class="" v-for="(mask) in sessionAppointmentsStore.nameInjectionButtons" :key="mask.id">
        <button
        class="border w-[63px] h-[20px] flex justify-center items-center text-[8px] font-semibold border-gray-300 text-gray-500"
          :class="{active : sessionAppointmentsStore.active_el == mask.id}"
          @click="sessionAppointmentsStore.activate(mask.id)"
        >
          {{ mask.title }}
        </button>
    </div>
</template>
<script>
import { useSessionAppointmentsStore } from '../../stores/useSessionAppointmentsStore'
export default {
  // props: ['nameButton', 'isActive'],
        data() {
      const sessionAppointmentsStore = useSessionAppointmentsStore()
    return {
       sessionAppointmentsStore,
    }
  },
  computed: {
    // classes() {
    //   const classes = ['border',  'w-[63px]', 'h-[20px]', 'flex', 'justify-center', 'items-center', 'text-[8px]', 'font-semibold']
    //   return this.isActive
    //   ? [...classes, 'border-green-300', 'text-green-500']
    //   : [...classes, 'border-gray-300', 'text-gray-500']
    // }
  }
};
</script>
<style lang=""></style>