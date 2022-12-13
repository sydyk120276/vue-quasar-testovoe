<template lang="">
      <div>
        <span class="text-[15px] font-semibold">Рекомендации</span>
        <div class="w-[330px] flex justify-between mt-[15px]">
          <button
            class="border border-gray-300 text-[8px] font-semibold w-[300px] h-[20px] flex items-center justify-start"
          >
            Текст рекомендации врача
          </button>
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12px"
              viewBox="0 0 24 24"
              width="12px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
        </div>
        <div
          class="w-[330px] h-[56px] border mt-[10px] mb-[10px] pl-[5px] flex flex-col pt-[10px] gap-[15px]"
        >
          <span class="text-[8px] font-semibold"
            >Рекомендации лечащего врача</span
          >
        </div>
      </div>
      <div class="w-[300px] flex justify-between mb-[20px]">
        <input class="w-[87px] h-[21px] text-[8px]" type="date" />
        <input
          class="w-[87px] h-[21px] text-[8px]"
          placeholder="ФИО лечащего врача"
          type="text"
        />
        <input
          class="w-[87px] h-[21px] text-[8px]"
          placeholder="Должность"
          type="text"
        />
      </div>
      <button
        class="border border-gray-500 w-[110px] text-[8px] h-[20px] justify-center flex items-center mb-[30px]"
      >
        Сохранить назначения
      </button>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>