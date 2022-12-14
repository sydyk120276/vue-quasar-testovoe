import { defineStore } from 'pinia';

export const useSessionAfterAppointmentsStore = defineStore(
  'session-after-appointments',
  {
    state: () => ({
      medications: '',
      receivingPath: '',
      doses: '',
      dosesValue: '',
      startDate: '',
      endDate: '',
      typeCatheter: '',
      bicorbanat: '',
      typeBicorbanat: '',
      anticoagulation: '',
      voluemAnticoagulation: '',
      weigth: '',
      valueStartDay: 0,
      valueEndDay: 0,
      countDay: 0,
      countDayResult: 0,
      homeResept: [],
      active_el: 0,
      sessionNumber: 0,

      sessionNumberButtons: [
        {
          title: 1,
          id: 1,
        },
        {
          title: 2,
          id: 2,
        },
        {
          title: 3,
          id: 3,
        },
        {
          title: 4,
          id: 4,
        },
        {
          title: 5,
          id: 5,
        },
        {
          title: 6,
          id: 6,
        },
        {
          title: 7,
          id: 7,
        },
      ],

      dialogVisibleMedications: false,
      valueInputMedications: '',
      searchValueMedications: '',
      needToListMedications: [],
      valueOnClickMedications: '',
      allArrayMedications: [],
      searchMedications: [
        {
          title: 'Лекарственные препараты №1',
          id: 1,
        },
        {
          title: 'Лекарственные препараты №2',
          id: 2,
        },
        {
          title: 'Лекарственные препараты №3',
          id: 3,
        },
      ],
      dialogVisibleReceivingPath: false,
      valueInputReceivingPath: '',
      valueOnClickReceivingPath: '',
      valueReceivingPath: '',
      typeReceivingPath: [
        {
          title: 'Перорально',
          id: 1,
        },
        {
          title: 'Подкожно',
          id: 2,
        },
        {
          title: 'Артериально',
          id: 3,
        },
      ],
      dialogVisibleDoses: false,
      valueInputDoses: '',
      valueOnClickDoses: '',
      valueDoses: '',
      typeDoses: [
        {
          title: 'мкг',
          id: 1,
        },
        {
          title: 'мл',
          id: 2,
        },
        {
          title: 'мг/кг',
          id: 3,
        },
      ],

      valueInputStartDate: '',
      valueInputEndDate: '',
    }),

    getters: {
      valueStartDay: (state) => Number(state.valueInputStartDate.split('-')[2]),
      valueEndDay: (state) => Number(state.valueInputEndDate.split('-')[2]),
      countDay: (state) => state.valueEndDay - state.valueStartDay,
      searchArrayMedications: (state) =>
        state.searchMedications.filter((item) =>
          item.title
            .toLowerCase()
            .includes(state.searchValueMedications.toLowerCase())
        ),
    },

    actions: {
      activate(elId, elTitle) {
        (this.active_el = elId), (this.sessionNumber = elTitle);
      },
      showDialogMedications() {
        this.dialogVisibleMedications = true;
      },
      closeShowDialogMedications() {
        this.dialogVisibleMedications = false;
      },
      handleInputMedications(event) {
        this.valueInputMedications = event.target.value;
      },
      handleInputSearchMedications(event) {
        this.searchValueMedications = event.target.value;
      },
      addRecordMedications() {
        if (this.valueInputMedications === '') {
          return;
        }
        this.needToListMedications.push({
          title: this.valueInputMedications,
          id: Math.random(),
        });
        this.valueInputMedications = '';
      },
      onClickMedications(item) {
        this.valueOnClickMedications = item;
        this.dialogVisibleMedications = false;
      },

      removeMaskMedications(index) {
        this.needToListMedications.splice(index, 1);
      },
      removeMedications(index) {
        this.searchMedications.splice(index, 1);
      },
      showDialogReceivingPath() {
        this.dialogVisibleReceivingPath = true;
      },
      closeShowDialogReceivingPath() {
        this.dialogVisibleReceivingPath = false;
      },
      handleInputReceivingPath(event) {
        this.valueInputReceivingPath = event.target.value;
      },
      onClickReceivingPath(item) {
        this.valueOnClickReceivingPath = item;
        this.dialogVisibleReceivingPath = false;
      },
      showDialogDoses() {
        this.dialogVisibleDoses = true;
      },
      closeShowDialogDoses() {
        this.dialogVisibleDoses = false;
      },
      handleInputDoses(event) {
        this.valueInputDoses = event.target.value;
      },
      handleInputDosesWeights(event) {
        this.valueDoses = event.target.value;
      },
      onClickDoses(item) {
        this.valueOnClickDoses = item;
        this.dialogVisibleDoses = false;
      },
      handleInputStartDate(event) {
        this.valueInputStartDate = event.target.value;
      },
      handleInputEndDate(event) {
        this.valueInputEndDate = event.target.value;
      },
      removeResept(index) {
        this.homeResept.splice(index, 1);
      },

      formButtonAfterSession() {
        this.homeResept.push({
          medications: this.valueOnClickMedications,
          receivingPath: this.valueOnClickReceivingPath,
          doses: this.valueInputDoses,
          dosesValue: this.valueOnClickDoses,
          startDate: this.valueInputStartDate,
          endDate: this.valueInputEndDate,
          countDayResult: this.countDay,
          sessionNumbers: this.sessionNumber,
          id: Math.random(),
        });
      },
    },
  }
);
