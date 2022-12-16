<template lang="">
      <div class=" ">
        <div
          class="border w-[330px] h-[100px] mb-[20px] flex flex-col gap-[10px] pl-[15px]"
        >
          <span>Назначение сеанса гемодиализа</span>
          <div class="flex">
            <div class="flex">
             <AppointmentIcon />
              <span class="text-[8px] font-semibold pl-[7px]">- Программа</span>
            </div>
            <div class="flex pl-[15px]">
            <DializatorIcon />
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Диализатор</span
              >
            </div>
          </div>
          <div class="flex">
            <div class="flex">
             <ConcentratorIcon />
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Концентратор Объем</span
              >
            </div>
            <div class="flex pl-[15px]">
              <NeedlesIcon />
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Игла/Катетер</span
              >
            </div>
            <div class="flex pl-[15px]">
             <BicorbanageIcon />
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Бикорбанат мл</span
              >
            </div>
          </div>
          <div class="flex">
            <div class="flex">
              <AnticoagulationIcon />
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Антикоагуляция ед.</span
              >
            </div>
            <div class="flex pl-[15px]">
             <WeigthIcon />
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Сухой вес кг</span
              >
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import AppointmentIcon from './UI/AppointmentIcon.vue'
import DializatorIcon from './UI/DializatorIcon.vue'
import ConcentratorIcon from './UI/ConcentratorIcon.vue'
import NeedlesIcon from './UI/NeedlesIcon.vue'
import BicorbanageIcon from './UI/BicorbanageIcon.vue'
import AnticoagulationIcon from './UI/AnticoagulationIcon.vue'
import WeigthIcon from './UI/WeigthIcon.vue'
export default {
  components: {
    AppointmentIcon,
    DializatorIcon,
    ConcentratorIcon,
    NeedlesIcon,
    BicorbanageIcon,
    AnticoagulationIcon,
    WeigthIcon,
  }
}
</script>
<style lang="">

</style>