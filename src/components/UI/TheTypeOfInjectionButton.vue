<template lang="">
  <button
    :class="classes"
  >
    {{ nameButton }}
  </button>
</template>
<script>
export default {
  props: ['nameButton', 'isActive'],
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