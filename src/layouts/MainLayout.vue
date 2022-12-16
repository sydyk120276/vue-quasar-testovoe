<template>
  <div class="w-full h-screen flex justify-center">
    <div class="w-[550px] flex flex-col border-2 mt-[15px] pl-[40px]">
      <TheHeader />
      <span class="text-[11px] font-semibold pb-[20px]"
        >Назначения сеанса гемодеализа</span
      >
      <TheAppointment />
      <TheDializator />
      <TheConcentrator />
      <TheTypeOfInjection />
      <TheTableAppointment />
      <TheAfterAppointment />
      <TheNumberOfSession />
      <TheTableAfterAppointment />
      <TheHomeTreatment />
      <TheRecommendations />
    </div>
  </div>
</template>

<script lang="ts">
import TheAppointment from 'src/components/TheAppointment.vue';
import TheHeader from 'src/components/TheHeader.vue';
import TheDializator from 'src/components/TheDializator.vue';
import TheConcentrator from 'src/components/TheConcentrator.vue';
import TheTypeOfInjection from 'src/components/TheTypeOfInjection.vue';
import TheTableAppointment from 'src/components/TheTableAppointment.vue';
import TheAfterAppointment from 'src/components/TheAfterAppointment.vue';
import TheNumberOfSession from 'src/components/TheNumberOfSession.vue';
import TheTableAfterAppointment from 'src/components/TheTableAfterAppointment.vue';
import TheHomeTreatment from 'src/components/TheHomeTreatment.vue';
import TheRecommendations from 'src/components/TheRecommendations.vue';
import { defineComponent, ref } from 'vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
];

export default defineComponent({
  components: {
    TheHeader,
    TheAppointment,
    TheDializator,
    TheConcentrator,
    TheTypeOfInjection,
    TheTableAppointment,
    TheAfterAppointment,
    TheNumberOfSession,
    TheTableAfterAppointment,
    TheHomeTreatment,
    TheRecommendations,
  },
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
