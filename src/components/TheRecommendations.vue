<template lang="">
      <div>
        <span class="text-[15px] font-semibold">Рекомендации</span>
        <div class="w-[330px] flex justify-between mt-[15px]">
          <input type="text"
            class="border border-gray-300 text-[8px] font-semibold w-[300px] h-[20px] flex items-center justify-start outline-none"
            placeholder="Текст рекомендации врача"
            :value="sessionAppointmentsStore.valueInputRecommendations"
            @input="sessionAppointmentsStore.handleInputRecommendationst"
            @keypress.enter="sessionAppointmentsStore.addRecordRecommendationst"
          >
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
            @click="sessionAppointmentsStore.addRecordRecommendationst"
          >
            <RecordIcon />
          </button>
        </div>
        <div
          class="w-[330px] h-[56px] border mt-[10px] mb-[10px] pl-[5px] flex flex-col pt-[10px] gap-[15px]"
          v-for="(mask) in sessionAppointmentsStore.arrayRecommendations" :key="mask.id"
        >
          <span class="text-[8px] font-semibold"
            >{{ mask.title }}</span
          >
        </div>
      </div>
      <div class="w-[300px] flex justify-between mb-[20px]">
        <input class="w-[87px] h-[21px] text-[8px] outline-none" type="date" />
        <input
          class="w-[87px] h-[21px] text-[8px] outline-none"
          placeholder="ФИО лечащего врача"
          type="text"
        />
        <input
          class="w-[87px] h-[21px] text-[8px] outline-none"
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
import RecordIcon from './UI/RecordIcon.vue'
import { useSessionAppointmentsStore } from '../stores/useSessionAppointmentsStore'
export default {
    data() {
      const sessionAppointmentsStore = useSessionAppointmentsStore()
    return {
      sessionAppointmentsStore,
    }
  },
  components: {
    RecordIcon,
  }
}
</script>
<style lang="">

</style>