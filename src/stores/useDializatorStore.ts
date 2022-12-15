import { defineStore } from 'pinia';

export const useDializatorStore = defineStore('dializator', {
  state: () => ({
    dialogVisibleDializator: false,
    valueInputDializator: '',
    valueOnClickDializator: '',
    valueDializator: '',
    typeDializator: [
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
    showDialogDializator() {
      this.dialogVisibleDializator = true;
    },
    closeShowDialogDializator() {
      this.dialogVisibleDializator = false;
    },
    handleInputDializator(event) {
      this.valueInputDializator = event.target.value;
    },
    handleInputWeights(event) {
      this.valueDializator = event.target.value;
    },
    onClickDializator(item) {
      this.valueOnClickDializator = item;
      this.dialogVisibleDializator = false;
    },
  },
});
