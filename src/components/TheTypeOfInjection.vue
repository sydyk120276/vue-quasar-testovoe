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
    methods: {

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