<template lang="">
      <div class=" ">
        <div
          class="border w-[330px] mb-[20px] flex flex-col pl-[15px]"
        >
          <span class="pb-[7px]">Назначение сеанса гемодиализа</span>
          <div class="flex">
            <div class="flex pb-[7px]">
             <AppointmentIcon />
              <span class="text-[8px] font-semibold pl-[7px]">- Программа - <span class="text-blue-400">HD</span></span>
            </div>
            <div class="flex pl-[15px] pb-[7px]">
            <DializatorIcon />
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Диализатор - <span class="text-blue-400">{{ sessionAppointmentsStore.dializator }}</span> </span
              >
            </div>
          </div>
          <div class="flex">
            <div class="flex pb-[7px] ">
             <ConcentratorIcon />
              <span class="text-[8px] font-semibold pl-[7px]  "
                >- Концентратор - <span class="text-blue-400">{{ sessionAppointmentsStore.concentrator }}</span> Объем <span class="text-blue-400">{{ sessionAppointmentsStore.concentratorValue }}</span> л.</span
              >
            </div>
            <div class="flex pb-[7px]">
              <NeedlesIcon />
              <span class="text-[8px] font-semibold pl-[7px] "
                >- Игла - <span class="text-blue-400">{{ sessionAppointmentsStore.needles }}</span> <span class="text-blue-400">{{ sessionAppointmentsStore.typeNeedles }}</span> /Катетер <span class="text-blue-400">{{ sessionAppointmentsStore.catheter }}</span><span class="text-blue-400"> {{ sessionAppointmentsStore.typeCatheter }}</span></span
              >
            </div>
            <div class="flex pb-[7px]">
             <BicorbanageIcon />
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Бикорбанат - <span class="text-blue-400">{{ sessionAppointmentsStore.bicorbanat }}</span> <span class="text-blue-400"> {{ sessionAppointmentsStore.typeBicorbanat }}</span></span
              >
            </div>
          </div>
          <div class="flex">
            <div class="flex pb-[7px]">
              <AnticoagulationIcon />
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Антикоагуляция - <span class="text-blue-400">{{ sessionAppointmentsStore.anticoagulation }}</span> <span class="text-blue-400">{{ sessionAppointmentsStore.voluemAnticoagulation }}</span> ед.</span
              >
            </div>
            <div class="flex pb-[7px]">
             <WeigthIcon />
              <span class="text-[8px] font-semibold pl-[7px]"
                >- Сухой вес - <span class="text-blue-400">{{ sessionAppointmentsStore.weigth }}</span> кг</span
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
import { useSessionAppointmentsStore } from '../stores/useSessionAppointmentsStore'

export default {

  data() {
      const sessionAppointmentsStore = useSessionAppointmentsStore()
    return {
       sessionAppointmentsStore,
    }
  },
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