<template lang="">
        <div class="w-[244px] flex justify-between pb-[15px]">
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[85px] h-[20px] flex items-center"
            placeholder="Спр.Катетеры"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <BaseIcon />
          </button>
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[85px] h-[20px] flex items-center"
            placeholder="Спр.Тип Катетеров"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="10px"
              viewBox="0 0 24 24"
              width="10px"
              fill="#000000"
            >
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path
                d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
              />
            </svg>
          </button>
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