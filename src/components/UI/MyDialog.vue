<template lang="">
  <div class="top-0 bottom-0 left-0 right-0 bg-black/50 fixed flex z-30" v-if="show === true" @click.stop="hideDialog">
    <div @click.stop class="m-auto bg-white rounded-[12px] min-w-[500px] min-h-[100px] p-[20px] ">
      <TheTypeOfInjectionCatheterInput />
    </div>
  </div>
</template>
<script>
import TheTypeOfInjectionCatheterInput from './TheTypeOfInjectionCatheterInput.vue'
export default {
  components: {
    TheTypeOfInjectionCatheterInput,
  },
}
</script>
<style lang="">

</style>