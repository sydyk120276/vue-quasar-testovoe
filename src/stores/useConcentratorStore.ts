import { defineStore } from 'pinia';

export const useConcentratorStore = defineStore('concentrator', {
  state: () => ({
    dialogVisibleConcentrator: false,
    valueInputConcentrator: '',
    valueOnClickConcentrator: '',
    valueConcentrator: '',
    typeConcentrator: [
      {
        title: 'Наименование №1',
        id: 1,
      },
      {
        title: 'Наименование №2',
        id: 2,
      },
    ],
  }),

  getters: {},

  actions: {
    showDialogConcentrator() {
      this.dialogVisibleConcentrator = true;
    },
    closeShowDialogConcentrator() {
      this.dialogVisibleConcentrator = false;
    },
    handleInputConcentrator(event) {
      this.valueInputConcentrator = event.target.value;
    },
    handleInputWeights(event) {
      this.valueConcentrator = event.target.value;
    },
    onClickConcentrator(item) {
      this.valueOnClickConcentrator = item;
      this.dialogVisibleConcentrator = false;
    },
  },
});
