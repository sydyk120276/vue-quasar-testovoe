<template lang="">
        <div>
          <span class="text-[8px] font-semibold pb-[7px]">Бикорбанат</span>
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[78px] h-[20px] flex items-center justify-center"
            placeholder="XXX гр / л"
          />
          </div>
        <button
          class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
        >
          <BaseIcon />
        </button>
        <div class="w-[50px] h-[48px]">
          <p class="text-[8px] font-semibold pb-[4px]">Сухой вес пациента</p>
          <input type="text"
            class="border border-gray-300 w-[50px] text-[8px] h-[20px] justify-center flex items-center"
            placeholder="XXX кг"
          />
          </div>
</template>
<script>
import BaseIcon from './BaseIcon.vue'
export default {
  components: {
    BaseIcon
  }
}
</script>
<style lang="">

</style>