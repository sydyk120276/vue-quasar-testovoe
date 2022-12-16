<template lang="">
  <div
    class="top-0 bottom-0 left-0 right-0 bg-black/50 fixed flex z-30"
    v-show="sessionHomeTreatmentStore.dialogVisibleReceivingPath"
    @click="sessionHomeTreatmentStore.closeShowDialogReceivingPath"
  >
    <div
      class="m-auto bg-white rounded-[2px] min-w-[275px] p-[20px]"
      @click.stop
    >
        <div v-for="(mask) in sessionHomeTreatmentStore.typeReceivingPath" :key="mask.id" class="w-[200px] flex justify-between border border-gray-300">
          <button
            class="w-full justify-center flex items-center"
            @click="sessionHomeTreatmentStore.onClickReceivingPath(mask.title)"
          >
          {{ mask.title }}
          </button>
        </div>
      </div>
    </div>
</template>
<script>
import { useSessionHomeTreatmentStore } from '../../stores/useSessionHomeTreatmentStore'

export default {

  data() {
      const sessionHomeTreatmentStore = useSessionHomeTreatmentStore()

    return {

      sessionHomeTreatmentStore,
    }
  },
  components: {
  },

  methods: {

  }
};
</script>
<style lang=""></style>
