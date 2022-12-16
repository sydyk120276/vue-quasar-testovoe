<template lang="">
  <div
    class="top-0 bottom-0 left-0 right-0 bg-black/50 fixed flex z-30"
    v-show="sessionAppointmentsStore.dialogVisibleDializator"
    @click="sessionAppointmentsStore.closeShowDialogDializator"
  >
    <div
      class="m-auto bg-white rounded-[2px] min-w-[275px] p-[20px]"
      @click.stop
    >
        <div v-for="(mask) in sessionAppointmentsStore.typeDializator" :key="mask.id" class="w-[200px] flex justify-between border border-gray-300">
          <button
            class="w-full justify-center flex items-center"
            @click="sessionAppointmentsStore.onClickDializator(mask.title)"
          >
          {{ mask.title }}
          </button>
        </div>
      </div>
    </div>
</template>
<script>
import { useSessionAppointmentsStore } from '../../stores/useSessionAppointmentsStore'

export default {

      data() {
      const sessionAppointmentsStore = useSessionAppointmentsStore()
    return {
       sessionAppointmentsStore,
    }
  },
  components: {
  },

  methods: {

  }
};
</script>
<style lang=""></style>
