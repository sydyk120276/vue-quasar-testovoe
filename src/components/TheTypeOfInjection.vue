<template lang="">
      <div class=" ">
        <span class="text-[8px] font-semibold">Тип инъекции</span>
        <div class="flex justify-between w-[133px] pt-[18px] pb-[14px]">
          <TheTypeOfInjectionButton/>
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
        <button type="submit"
          class="border border-gray-500 w-[110px] text-[8px] h-[20px] justify-center flex items-center mt-[30px] mb-[30px]"
          @click="sessionAppointmentsStore.formButton"
        >
          Сформировать сеанс
        </button>
</template>
<script>
import TheTypeOfInjectionButton from './UI/TheTypeOfInjectionButton.vue'
import TheTypeOfInjectionNeedlesInput from './UI/TheTypeOfInjectionNeedlesInput.vue'
import TheTypeOfInjectionCatheterInput from './UI/TheTypeOfInjectionCatheterInput.vue'
import TheTypeOfInjectionBicorbanate from './UI/TheTypeOfInjectionBicorbanate.vue'
import TheTypeOfInjectionAnticoagulation from './UI/TheTypeOfInjectionAnticoagulation.vue'
import { useSessionAppointmentsStore } from '../stores/useSessionAppointmentsStore'

export default {
    data() {
        const sessionAppointmentsStore = useSessionAppointmentsStore()
    return {
      sessionAppointmentsStore

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