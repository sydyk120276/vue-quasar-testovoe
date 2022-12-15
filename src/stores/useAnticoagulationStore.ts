import { defineStore } from 'pinia';

export const useAnticoagulationStore = defineStore('anticoagulation', {
  state: () => ({
    dialogVisibleAnticoagulation: false,
    valueInputAnticoagulation: '',
    valueOnClickAnticoagulation: '',
    valueAnticoagulation: '',
    typeAnticoagulation: [
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
    showDialogAnticoagulation() {
      this.dialogVisibleAnticoagulation = true;
    },
    closeShowDialogAnticoagulation() {
      this.dialogVisibleAnticoagulation = false;
    },
    handleInputAnticoagulation(event) {
      this.valueInputAnticoagulation = event.target.value;
    },
    handleInputWeights(event) {
      this.valueAnticoagulation = event.target.value;
    },
    onClickAnticoagulation(item) {
      this.valueOnClickAnticoagulation = item;
      this.dialogVisibleAnticoagulation = false;
    },
  },
});
