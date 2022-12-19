<template lang="">
  <div>
    <span class=" ">Лечение на дому</span>
    <div class="flex flex-col pt-[20px]">
      <span class="text-[8px] font-semibold pb-[7px]"
        >Лекарственный препарат</span
      >
      <div class="w-[235px] flex justify-between pb-[7px]">
        <input
          type="text"
          class="border border-gray-300 text-[8px] font-semibold w-[205px] h-[20px] flex items-center justify-start outline-none"
          placeholder="Спр.Препараты"
          :value="sessionHomeTreatmentStore.valueOnClickMedications"
        />
        <button
          class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
        >
          <BaseIcon @click="sessionHomeTreatmentStore.showDialogMedications" />
        </button>
      </div>
    </div>
    <div class="w-[245px] flex justify-between pb-[20px]">
      <div class="w-[105px] flex justify-between pb-[7px]">
        <span class="text-[8px] font-semibold pb-[7px]">Путь приёма</span>
        <input
          type="text"
          class="border border-gray-300 text-[8px] font-semibold w-[75px] h-[20px] flex items-center justify-start outline-none"
          placeholder="Спр.Путь приёма"
          :value="sessionHomeTreatmentStore.valueOnClickReceivingPath"
          @input="sessionHomeTreatmentStore.handleInputReceivingPath"
        />
        <button
          class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
        >
          <BaseIcon
            @click="sessionHomeTreatmentStore.showDialogReceivingPath"
          />
        </button>
      </div>
      <div class="w-[135px] flex flex-col">
        <span class="text-[8px] font-semibold pb-[7px]">Дозировка</span>
        <div class="w-[123px] flex justify-between pb-[7px]">
          <div class="relative">
            <input
              type="text"
              class="border border-gray-300 text-[8px] font-semibold w-[95px] h-[20px] flex items-center justify-start outline-none"
              placeholder="Спр.Дозы препаратов"
              @input="sessionHomeTreatmentStore.handleInputDoses"
            />
            <span
              class="absolute text-[7px] top-[5px] right-[10px] font-bold"
              >{{ sessionHomeTreatmentStore.valueOnClickDoses }}</span
            >
          </div>
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <BaseIcon @click="sessionHomeTreatmentStore.showDialogDoses" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex w-[321px] justify-between pb-[10px]">
    <div class="w-[130px] flex flex-col">
      <span class="text-[8px] font-semibold pb-[10px]">Кратность приёма</span>
      <div class="w-[123px] flex justify-between pb-[7px]">
        <div class="relative">
          <input
            type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[95px] h-[20px] flex items-center justify-start outline-none"
            placeholder="Спр.Кр-ть приёма"
            :value="sessionHomeTreatmentStore.valueOnClickMultiplicity"
            @input="sessionHomeTreatmentStore.handleInputMultiplicity"
          />
        </div>
        <button
          class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
        >
          <BaseIcon @click="sessionHomeTreatmentStore.showDialogMultiplicity" />
        </button>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="text-[8px] font-semibold pb-[10px]">Начало приёма</span>
      <input
        class="w-[87px] h-[21px] border text-[8px] outline-none"
        type="date"
        @input="sessionHomeTreatmentStore.handleInputStartDate"
      />
    </div>
    <div class="flex flex-col">
      <span class="text-[8px] font-semibold pb-[10px]">Конец приёма</span>
      <input
        class="w-[87px] h-[21px] border text-[8px] outline-none"
        type="date"
        @input="sessionHomeTreatmentStore.handleInputEndDate"
      />
    </div>
  </div>
  <span class="text-[8px] font-semibold pb-[7px] flex w-[321px] justify-end"
    >Количество дней
    <span class="text-[8px] font-semibold text-blue-500 pl-[5px]">{{ sessionHomeTreatmentStore.countDayResult }}</span></span
  >
  <div class="mb-[20px]">
    <button
      class="border border-gray-500 w-[60px] text-[8px] h-[20px] justify-center flex items-center mb-[30px]"
      @click="sessionHomeTreatmentStore.formButtonHomeSession"
    >
      Добавить
    </button>
    <span class="text-[8px] font-semibold">Лечение на дому</span>
    <div
      class="w-[330px] h-[105px] border mt-[10px] pl-[10px] flex flex-col pt-[15px] gap-[15px]"
    >
      <span class="text-[8px] font-semibold"
        >Лекарственный препарат Перорально 5 мг
        {{ sessionHomeTreatmentStore.medications }}
        {{ sessionHomeTreatmentStore.receivingPath }}
        {{ sessionHomeTreatmentStore.doses }}
        {{ sessionHomeTreatmentStore.dosesValue }}</span
      >
      <span class="text-[8px] font-semibold"
        >2 раза в день утром и вечером с 01.01.2022 по 10.01.2022 10 дней
        {{ sessionHomeTreatmentStore.multiplicity }} утром и вечером
         {{ sessionHomeTreatmentStore.startDate }} по
         {{ sessionHomeTreatmentStore.endDate }}
         {{ sessionHomeTreatmentStore.countDayResult }} дня(ей)
        </span
      >
    </div>
  </div>
  <MyDialogHomeMedications />
  <MyHomeReceivingPathDialog />
  <MyHomeDosesDialog />
  <MyHomeMultiplicityDialog />
</template>
<script>
import MyDialogHomeMedications from './UI/MyDialogHomeMedications.vue';
import MyHomeReceivingPathDialog from './UI/MyHomeReceivingPathDialog.vue';
import MyHomeDosesDialog from './UI/MyHomeDosesDialog.vue';
import MyHomeMultiplicityDialog from './UI/MyHomeMultiplicityDialog.vue';
import BaseIcon from './UI/BaseIcon.vue';
import { useSessionHomeTreatmentStore } from '../stores/useSessionHomeTreatmentStore';
export default {
  data() {
    const sessionHomeTreatmentStore = useSessionHomeTreatmentStore();
    return {
      sessionHomeTreatmentStore,
    };
  },
  components: {
    MyDialogHomeMedications,
    BaseIcon,
    MyHomeReceivingPathDialog,
    MyHomeDosesDialog,
    MyHomeMultiplicityDialog,
  },
};
</script>
<style lang=""></style>
