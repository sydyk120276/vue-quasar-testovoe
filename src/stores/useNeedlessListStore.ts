import { defineStore } from 'pinia';

export const useNeedlessListStore = defineStore('needless', {
  state: () => ({
    dialogVisibleList: false,
    valueInputList: '',
    searchValueList: '',
    needToListList: [],
    valueOnClickList: '',
    searchArrayList: [],
    searchNeedlesList: [
      {
        title: 'Венозные',
        id: 1,
      },
      {
        title: 'Артериальные',
        id: 2,
      },
    ],
  }),

  getters: {},

  actions: {
    showDialogNeedlessList() {
      this.dialogVisibleList = true;
    },
    closeShowDialogNeedlessList() {
      this.dialogVisibleList = false;
    },
    handleInputNeedlessList(event) {
      this.valueInputList = event.target.value;
    },
    addRecordNeedlessList() {
      if (this.valueInputList === '') {
        return;
      }
      this.needToListList.push({
        title: this.valueInputList,
        id: Math.random(),
      });
      this.valueInputList = '';
    },
    onClickNeedlessList(item) {
      this.valueOnClickList = item;
      this.dialogVisibleList = false;
    },
    needlessFilterNeedlessList() {
      this.searchArrayList = this.searchNeedlesList.filter((item) =>
        item.title.toLowerCase().includes(this.searchValueList.toLowerCase())
      );
    },
    removeMaskNeedlessList(index) {
      this.needToListList.splice(index, 1);
    },
    removeNeedlessList(index) {
      this.searchNeedlesList.splice(index, 1);
    },
  },
});
