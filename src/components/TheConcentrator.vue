<template lang="">
      <div class="w-[215px]">
        <div class="flex justify-between pb-[10px]">
          <span class="text-[8px] font-semibold">Концентратор</span>
          <span class="text-[8px] font-semibold">Объем л.</span>
        </div>
        <div class="pb-[20px] flex justify-between">
          <TheConcentratorInput />
          <TheConcentratorButton />
        </div>
      </div>
</template>
<script>
import TheConcentratorInput from './UI/TheConcentratorInput.vue'
import TheConcentratorButton from './UI/TheConcentratorButton.vue'
export default {
  components: {
    TheConcentratorInput,
    TheConcentratorButton,
  }
}
</script>
<style lang="">

</style>