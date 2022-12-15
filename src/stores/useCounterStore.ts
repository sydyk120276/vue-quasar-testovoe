import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    dialogVisible: false,
    valueInput: '',
    searchValue: '',
    needToList: [],
    valueOnClick: '',
    searchArray: [],
    allArray: [],
    searchNeedles: [
      {
        title: 'Игла размер №1',
        id: 1,
      },
      {
        title: 'Игла размер №2',
        id: 2,
      },
      {
        title: 'Игла размер №3',
        id: 3,
      },
    ],
  }),

  getters: {},

  actions: {
    showDialog() {
      this.dialogVisible = true;
    },
    closeShowDialog() {
      this.dialogVisible = false;
    },
    handleInput(event) {
      this.valueInput = event.target.value;
    },
    addRecord() {
      if (this.valueInput === '') {
        return;
      }
      this.needToList.push({
        title: this.valueInput,
        id: Math.random(),
      });
      this.valueInput = '';
    },
    onClick(item) {
      this.valueOnClick = item;
      this.dialogVisible = false;
    },
    needlessFilter() {
      this.searchArray = this.searchNeedles.filter((item) =>
        item.title.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
    removeMask(index) {
      this.needToList.splice(index, 1)
    },
    removeMaskNeedless(index) {
      this.searchNeedles.splice(index, 1)
    }
  },
});
