<template lang="">
        <div class="w-[244px] flex justify-between pb-[15px]">
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[85px] h-[20px] flex items-center"
            placeholder="Спр.Иглы"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <BaseIcon @click="showDialog" />
          </button>
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[85px] h-[20px] flex items-center"
            placeholder="Спр.Тип иглы"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <BaseIcon />
          </button>
        </div>

</template>
<script>
import BaseIcon from './BaseIcon.vue'
export default {
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true
    },
  },
  components: {
    BaseIcon,
  }
}
</script>
<style lang="">

</style>