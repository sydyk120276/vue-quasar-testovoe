<template lang="">
      <div>
        <span class=" ">Лечение на дому</span>
        <div class="flex flex-col pt-[20px]">
          <span class="text-[8px] font-semibold pb-[7px]"
            >Лекарственный препарат</span
          >
          <div class="w-[235px] flex justify-between pb-[7px]">
            <button
              class="border border-gray-300 text-[8px] font-semibold w-[205px] h-[20px] flex items-center justify-start"
            >
              Спр."Препараты"
            </button>
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
        </div>
        <div class="w-[235px] flex justify-between pb-[20px]">
          <div class="w-[100px] flex justify-between pb-[7px]">
            <span class="text-[8px] font-semibold pb-[7px]">Путь приёма</span>
            <button
              class="border border-gray-300 text-[8px] font-semibold w-[205px] h-[20px] flex items-center justify-start"
            >
              Спр."Путь приёма"
            </button>
          </div>
          <div class="w-[130px] flex flex-col">
            <span class="text-[8px] font-semibold pb-[7px]">Дозировка</span>
            <div class="w-[125px] flex justify-between pb-[7px]">
              <button
                class="border border-gray-300 text-[8px] font-semibold w-[95px] h-[20px] flex items-center justify-start"
              >
                Спр."Дозы препаратов"
              </button>
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
          </div>
        </div>
      </div>
      <div class="flex w-[321px] justify-between pb-[10px]">
          <div class="w-[130px] flex flex-col">
            <span class="text-[8px] font-semibold pb-[10px]">Кратность приёма</span>
            <div class="w-[127px] flex justify-between">
              <button
                class="border border-gray-300 text-[8px] font-semibold w-[100px] h-[20px] flex items-center justify-start"
              >
                Спр."Кратность приёма"
              </button>
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
          </div>
      <div class="flex flex-col">
        <span class="text-[8px] font-semibold pb-[10px] ">Начало приёма</span>
        <input class="w-[87px] h-[21px] border text-[8px] " type="date">
      </div>
      <div class="flex flex-col">
        <span class="text-[8px] font-semibold pb-[10px] ">Конец приёма</span>
          <input class="w-[87px] h-[21px] border text-[8px] " type="date">
      </div>
      </div>
      <span class="text-[8px] font-semibold pb-[7px] flex w-[321px] justify-end">Количество дней <span class="text-[8px] font-semibold text-blue-500 pl-[5px] ">5</span></span>
      <div class="mb-[20px] ">
        <button
          class="border border-gray-500 w-[60px] text-[8px] h-[20px] justify-center flex items-center mb-[30px]"
        >
          Добавить
        </button>
        <span class="text-[8px] font-semibold ">Лечение на дому</span>
        <div class="w-[330px] h-[105px] border mt-[10px] pl-[10px] flex flex-col pt-[15px] gap-[15px] ">
          <span class="text-[8px] font-semibold ">Лекарственный препарат Перорально 5 мг</span>
          <span class="text-[8px] font-semibold ">2 раза в день утром и вечером с 01.01.2022 по 10.01.2022 10 дней</span>
        </div>
      </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>