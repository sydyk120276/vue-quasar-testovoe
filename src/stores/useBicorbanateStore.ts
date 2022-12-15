import { defineStore } from 'pinia';

export const useBicorbanateStore = defineStore('bicorbanate', {
  state: () => ({
    dialogVisibleBicorbanate: false,
    valueInputBicorbanate: '',
    valueOnClickBicorbanate: '',
    valueWeights: '',
    typeBicorbanate: [
      {
        title: 'граммов',
        id: 1,
      },
      {
        title: 'литров',
        id: 2,
      },
    ],
  }),

  getters: {},

  actions: {
    showDialogBicorbanate() {
      this.dialogVisibleBicorbanate = true;
    },
    closeShowDialogBicorbanate() {
      this.dialogVisibleBicorbanate = false;
    },
    handleInputBicorbanate(event) {
      this.valueInputBicorbanate = event.target.value;
    },
    handleInputWeights(event) {
      this.valueWeights = event.target.value;
    },
    onClickBicorbanate(item) {
      this.valueOnClickBicorbanate = item;
      this.dialogVisibleBicorbanate = false;
    },
  },
});
