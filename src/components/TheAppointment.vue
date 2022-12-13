<template lang="">
  <div class="flex flex-col">
    <span class="text-[8px] font-semibold pb-[10px]">Программа аппарата</span>
    <div class="flex w-[205px] justify-between pb-[18px]">
      <MyButtonAppointment
        v-for="nameButton in nameButtons"
        :key="nameButton"
        :nameButton="nameButton"
        :is-active="nameButton === 'HDF'"
      />
    </div>
  </div>
</template>
<script>
import MyButtonAppointment from 'src/components/UI/MyButtonAppointment.vue';
export default {
  data() {
    return {
      nameButtons: ['HD', 'HDF', 'UF'],
    };
  },
  components: { MyButtonAppointment },
};
</script>
<style lang=""></style>
