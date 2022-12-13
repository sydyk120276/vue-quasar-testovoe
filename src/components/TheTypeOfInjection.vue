<template lang="">
      <div class=" ">
        <span class="text-[8px] font-semibold">Тип инъекции</span>
        <div class="flex justify-between w-[133px] pt-[18px] pb-[14px]">
          <TheTypeOfInjectionButton
            v-for="nameButton in nameButtons"
            :key="nameButton"
            :nameButton="nameButton"
            :is-active="nameButton === 'Катетер'"
           />
        </div>
      </div>
      <div>
        <TheTypeOfInjectionNeedlesInput />
        <TheTypeOfInjectionCatheterInput />
      </div>
      <div class="pb-[20px] flex justify-between w-[325px] items-end pb-[10px]">
        <TheTypeOfInjectionBicorbanate />
        <TheTypeOfInjectionAnticoagulation />
                <button
          class="border border-gray-500 w-[110px] text-[8px] h-[20px] justify-center flex items-center mt-[30px]"
        >
          Сформировать сеанс
        </button>
      </div>
</template>
<script>
import TheTypeOfInjectionButton from './UI/TheTypeOfInjectionButton.vue'
import TheTypeOfInjectionNeedlesInput from './UI/TheTypeOfInjectionNeedlesInput.vue'
import TheTypeOfInjectionCatheterInput from './UI/TheTypeOfInjectionCatheterInput.vue'
import TheTypeOfInjectionBicorbanate from './UI/TheTypeOfInjectionBicorbanate.vue'
import TheTypeOfInjectionAnticoagulation from './UI/TheTypeOfInjectionAnticoagulation.vue'
export default {
    data() {
    return {
      nameButtons: ['Игла', 'Катетер'],
    };
  },
  components: {
    TheTypeOfInjectionButton,
    TheTypeOfInjectionNeedlesInput,
    TheTypeOfInjectionCatheterInput,
    TheTypeOfInjectionBicorbanate,
    TheTypeOfInjectionAnticoagulation,
  }
}
</script>
<style lang="">

</style>