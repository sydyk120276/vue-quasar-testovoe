<template lang="">
      <div>
        <span class="text-[8px] font-semibold pb-[10px]">Диализатор</span>
        <div class="pb-[20px] flex w-[150px] flex justify-between">
          <TheDializatorInput />
        </div>
      </div>
</template>
<script>
import TheDializatorInput from './UI/TheDializatorInput.vue'
export default {
  components: {
    TheDializatorInput,
  }
}
</script>
<style lang="">

</style>