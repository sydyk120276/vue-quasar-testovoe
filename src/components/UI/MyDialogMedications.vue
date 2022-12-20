<template lang="">
  <div
    class="top-0 bottom-0 left-0 right-0 bg-black/50 fixed flex z-30"
    v-show="sessionAfterAppointmentsStore.dialogVisibleMedications"
    @click="sessionAfterAppointmentsStore.closeShowDialogMedications"
  >
    <div
      class="m-auto bg-white rounded-[2px] min-w-[275px] p-[20px]"
      @click.stop
    >
      <div>
        <span>Лекарственный препарат</span>
        <button
          class="border border-gray-300 w-[60px] text-[8px] h-[20px] justify-center flex items-center text-gray-500 my-[15px]"
          @click="sessionAfterAppointmentsStore.closeShowDialogMedications"
        >
          Закрыть
        </button>
      </div>
      <div class="flex flex-col">
        <div class="w-[244px] flex justify-between pb-[10px]">
          <input
            :value="sessionAfterAppointmentsStore.searchValueMedications"
            @input="sessionAfterAppointmentsStore.handleInputSearchMedications"
            type="text"
            class="outline-none border border-gray-300 text-[8px] font-semibold w-[215px] h-[20px] flex items-center outline-none"
            placeholder="Поиск позиции по первым символам "
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
          >
            <SearchIcon />
          </button>
        </div>
        <div class="w-[244px] flex justify-between pb-[10px]">
          <input
            :value="sessionAfterAppointmentsStore.valueInputMedications"
            @input="sessionAfterAppointmentsStore.handleInputMedications"
            @keypress.enter="sessionAfterAppointmentsStore.addRecordMedications"
            type="text"
            class="outline-none border border-gray-300 text-[8px] font-semibold w-[215px] h-[20px] flex items-center outline-none"
            placeholder="Добавить новую запись"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
            @click="sessionAfterAppointmentsStore.addRecordMedications"
          >
          <RecordIcon />
          </button>
        </div>
        <div v-for="(mask) in sessionAfterAppointmentsStore.needToListMedications" :key="mask.id" class="w-[244px] flex justify-between relative border border-gray-300">
          <span class="text-[8px] font-semibold flex items-center">{{ mask.title }}</span>
          <button class="absolute right-[25px] top-[3px] "
          @click="sessionAfterAppointmentsStore.removeMaskMedications(index)">
           <DeleteIcon />
          </button>
          <button
            class="w-[23px] h-[20px] justify-center flex items-center border-l"
            @click="sessionAfterAppointmentsStore.onClickMedications(mask.title)"
          >
            <StoreValueIcon />
          </button>
        </div>
        <div v-show="sessionAfterAppointmentsStore.searchValueMedications" v-for="(mask) in sessionAfterAppointmentsStore.searchArrayMedications" :key="mask.id" class="w-[244px] flex justify-between relative border border-gray-300">
          <span class="text-[8px] font-semibold flex items-center">{{ mask.title }}</span>
          <button class="absolute right-[25px] top-[3px] "
          @click="sessionAfterAppointmentsStore.removeMedications(index)"
          >
          <DeleteIcon />
          </button>
          <button
            class="w-[23px] h-[20px] justify-center flex items-center border-l"
            @click="sessionAfterAppointmentsStore.onClickMedications(mask.title)"
          >
            <StoreValueIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useSessionAfterAppointmentsStore } from '../../stores/useSessionAfterAppointmentsStore'
import DeleteIcon from './DeleteIcon.vue'
import StoreValueIcon from './StoreValueIcon.vue'
import RecordIcon from './RecordIcon.vue'
import SearchIcon from './SearchIcon.vue'

export default {

  data() {
      const sessionAfterAppointmentsStore = useSessionAfterAppointmentsStore()
    return {
      sessionAfterAppointmentsStore,
    }
  },
  components: {
    DeleteIcon,
    StoreValueIcon,
    RecordIcon,
    SearchIcon
  },

  methods: {

  }
};
</script>
<style lang=""></style>
