<template lang="">
  <div class="flex flex-col">
    <span class="text-[8px] font-semibold pb-[10px]">Программа аппарата</span>
    <div class="flex w-[205px] justify-between pb-[18px] " v-for="(mask) in sessionAppointmentsStore.nameButtons" :key="mask.id">
        <button
          :is-active="mask.title === 'HDF'"
          :class="classes"
        >
          {{ mask.title }}
        </button>
          <!-- <button class="text-[8px] font-semibold flex items-center">{{ mask.title }}</button> -->
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
       isActive: true,
    }
  },
    computed: {
    classes() {
      const classes = ['border',  'w-[63px]', 'h-[20px]', 'flex', 'justify-center', 'items-center', 'text-[8px]', 'font-semibold']
      return this.isActive
      ? [...classes, 'border-green-300', 'text-green-500']
      : [...classes, 'border-gray-300', 'text-gray-500']
    }
  }
};
</script>
<style lang=""></style>
