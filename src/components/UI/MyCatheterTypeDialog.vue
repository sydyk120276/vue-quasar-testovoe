<template lang="">
  <div
    class="top-0 bottom-0 left-0 right-0 bg-black/50 fixed flex z-30"
    v-show="sessionAppointmentsStore.dialogVisibleCatheterType"
    @click="sessionAppointmentsStore.closeShowDialogCatheterType"
  >
    <div
      class="m-auto bg-white rounded-[2px] min-w-[275px] p-[20px]"
      @click.stop
    >
      <div>
        <span>Катетеры</span>
        <button
          class="border border-gray-300 w-[60px] text-[8px] h-[20px] justify-center flex items-center text-gray-500 my-[15px]"
          @click="sessionAppointmentsStore.closeShowDialogCatheterType"
        >
          Закрыть
        </button>
      </div>
      <div class="flex flex-col">
        <div class="w-[244px] flex justify-between pb-[10px]">
          <input
            :value="sessionAppointmentsStore.searchValueCatheterType"
            @change="sessionAppointmentsStore.catheterFilterCatheterType"
            type="text"
            class="outline-none border border-gray-300 text-[8px] font-semibold w-[215px] h-[20px] flex items-center"
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
            :value="sessionAppointmentsStore.valueInputCatheterType"
            @input="sessionAppointmentsStore.handleInputCatheterType"
            @keypress.enter="sessionAppointmentsStore.addRecordCatheterType"
            type="text"
            class="outline-none border border-gray-300 text-[8px] font-semibold w-[215px] h-[20px] flex items-center"
            placeholder="Добавить новую запись"
          />
          <button
            class="border border-gray-300 w-[23px] h-[20px] justify-center flex items-center"
            @click="sessionAppointmentsStore.addRecordCatheterType"
          >
           <RecordIcon />
          </button>
        </div>
        <div v-for="(mask) in sessionAppointmentsStore.needToListCatheterType" :key="mask.id" class="w-[244px] flex justify-between relative border border-gray-300">
          <span class="text-[8px] font-semibold flex items-center">{{ mask.title }}</span>
          <button class="absolute right-[25px] top-[3px] "
          @click="sessionAppointmentsStore.removeCatheterType(index)">
            <DeleteIcon />
          </button>
          <button
            class="w-[23px] h-[20px] justify-center flex items-center border-l"
            @click="sessionAppointmentsStore.onClickCatheterType(mask.title)"
          >
          <StoreValueIcon />
          </button>
        </div>
        <div v-for="(mask) in sessionAppointmentsStore.searchCatheterType" :key="mask.id" class="w-[244px] flex justify-between relative border border-gray-300">
          <span class="text-[8px] font-semibold flex items-center">{{ mask.title }}</span>
          <button class="absolute right-[25px] top-[3px] "
          @click="sessionAppointmentsStore.removeMaskCatheterType(index)"
          >
          <DeleteIcon />
          </button>
          <button
            class="w-[23px] h-[20px] justify-center flex items-center border-l"
            @click="sessionAppointmentsStore.onClickCatheterType(mask.title)"
          >
           <StoreValueIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useSessionAppointmentsStore } from '../../stores/useSessionAppointmentsStore'
import DeleteIcon from './DeleteIcon.vue'
import StoreValueIcon from './StoreValueIcon.vue'
import RecordIcon from './RecordIcon.vue'
import SearchIcon from './SearchIcon.vue'

export default {

  data() {
      const sessionAppointmentsStore = useSessionAppointmentsStore()

    return {

      sessionAppointmentsStore,
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
