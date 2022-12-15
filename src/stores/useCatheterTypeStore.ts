import { defineStore } from 'pinia';

export const useCatheterTypeStore = defineStore('catheter-type', {
  state: () => ({
    dialogVisibleCatheterType: false,
    valueInputCatheterType: '',
    searchValueCatheterType: '',
    needToListCatheterType: [],
    valueOnClickCatheterType: '',
    searchArrayCatheterType: [],
    searchCatheterType: [
      {
        title: 'Катетер Фолея',
        id: 1,
      },
      {
        title: 'Катетер Малеко',
        id: 2,
      },
      {
        title: 'Катетер Пеццера',
        id: 3,
      },
      {
        title: 'Катетер Тиммана',
        id: 4,
      },
      {
        title: 'Катетер Нелатона',
        id: 5,
      },
    ],
  }),

  getters: {},

  actions: {
    showDialogCatheterType() {
      this.dialogVisibleCatheterType = true;
    },
    closeShowDialogCatheterType() {
      this.dialogVisibleCatheterType = false;
    },
    handleInputCatheterType(event) {
      this.valueInputCatheterType = event.target.value;
    },
    addRecordCatheterType() {
      if (this.valueInputCatheterType === '') {
        return;
      }
      this.needToListCatheterType.push({
        title: this.valueInputCatheterType,
        id: Math.random(),
      });
      this.valueInputCatheterType = '';
    },
    onClickCatheterType(item) {
      this.valueOnClickCatheterType = item;
      this.dialogVisibleCatheterType = false;
    },
    needlessFilterCatheterType() {
      this.searchArrayCatheterType = this.searchCatheterType.filter((item) =>
        item.title
          .toLowerCase()
          .includes(this.searchValueCatheterType.toLowerCase())
      );
    },
    removeCatheterType(index) {
      this.needToListCatheterType.splice(index, 1);
    },
    removeMaskCatheterType(index) {
      this.searchCatheterType.splice(index, 1);
    },
  },
});
