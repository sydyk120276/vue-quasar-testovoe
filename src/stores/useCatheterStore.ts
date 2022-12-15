import { defineStore } from 'pinia';

export const useCatheterStore = defineStore('catheter', {
  state: () => ({
    dialogVisibleCatheter: false,
    valueInputCatheter: '',
    searchValueCatheter: '',
    needToListCatheter: [],
    valueOnClickCatheter: '',
    searchArrayCatheter: [],
    searchCatheter: [
      {
        title: 'Катетер №1',
        id: 1,
      },
      {
        title: 'Катетер №2',
        id: 2,
      },
      {
        title: 'Катетер №3',
        id: 3,
      },
    ],
  }),

  getters: {},

  actions: {
    showDialogCatheter() {
      this.dialogVisibleCatheter = true;
    },
    closeShowDialogCatheter() {
      this.dialogVisibleCatheter = false;
    },
    handleInputCatheter(event) {
      this.valueInputCatheter = event.target.value;
    },
    addRecordCatheter() {
      if (this.valueInputCatheter === '') {
        return;
      }
      this.needToListCatheter.push({
        title: this.valueInputCatheter,
        id: Math.random(),
      });
      this.valueInputCatheter = '';
    },
    onClickCatheter(item) {
      this.valueOnClickCatheter = item;
      this.dialogVisibleCatheter = false;
    },
    needlessFilterCatheter() {
      this.searchArrayCatheter = this.searchCatheter.filter((item) =>
        item.title
          .toLowerCase()
          .includes(this.searchValueCatheter.toLowerCase())
      );
    },
    removeCatheter(index) {
      this.needToListCatheter.splice(index, 1);
    },
    removeMaskCatheter(index) {
      this.searchCatheter.splice(index, 1);
    },
  },
});
