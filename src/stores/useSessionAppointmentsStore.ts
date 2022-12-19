import { defineStore } from 'pinia';

export const useSessionAppointmentsStore = defineStore('session-appointments', {
  state: () => ({
    dializator: '',
    concentrator: '',
    concentratorValue: '',
    needles: '',
    typeNeedles: '',
    catheter: '',
    typeCatheter: '',
    bicorbanat: '',
    typeBicorbanat: '',
    anticoagulation: '',
    voluemAnticoagulation: '',
    weigth: '',

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

    valueInputRecommendations: '',
    arrayRecommendations: [],
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
      this.needToList.splice(index, 1);
    },
    removeMaskNeedless(index) {
      this.searchNeedles.splice(index, 1);
    },
    showDialogDializator() {
      this.dialogVisibleDializator = true;
    },
    closeShowDialogDializator() {
      this.dialogVisibleDializator = false;
    },
    handleInputDializator(event) {
      this.valueInputDializator = event.target.value;
    },
    onClickDializator(item) {
      this.valueOnClickDializator = item;
      this.dialogVisibleDializator = false;
    },
    showDialogConcentrator() {
      this.dialogVisibleConcentrator = true;
    },
    closeShowDialogConcentrator() {
      this.dialogVisibleConcentrator = false;
    },
    handleInputConcentrator(event) {
      this.valueInputConcentrator = event.target.value;
    },
    handleInputConcentratorWeights(event) {
      this.valueConcentrator = event.target.value;
    },
    onClickConcentrator(item) {
      this.valueOnClickConcentrator = item;
      this.dialogVisibleConcentrator = false;
    },
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
    showDialogBicorbanate() {
      this.dialogVisibleBicorbanate = true;
    },
    closeShowDialogBicorbanate() {
      this.dialogVisibleBicorbanate = false;
    },
    handleInputBicorbanate(event) {
      this.valueInputBicorbanate = event.target.value;
    },
    onClickBicorbanate(item) {
      this.valueOnClickBicorbanate = item;
      this.dialogVisibleBicorbanate = false;
    },
    handleInputAliveWeights(event) {
      this.valueWeights = event.target.value;
    },
    showDialogAnticoagulation() {
      this.dialogVisibleAnticoagulation = true;
    },
    closeShowDialogAnticoagulation() {
      this.dialogVisibleAnticoagulation = false;
    },
    handleInputAnticoagulation(event) {
      this.valueInputAnticoagulation = event.target.value;
    },
    handleInputAnticoagulationVolume(event) {
      this.valueAnticoagulation = event.target.value;
    },
    handleInputAnticoagulation(event) {
      this.valueInputAnticoagulation = event.target.value;
    },
    onClickAnticoagulation(item) {
      this.valueOnClickAnticoagulation = item;
      this.dialogVisibleAnticoagulation = false;
    },
    handleInputRecommendationst(event) {
      this.valueInputRecommendations = event.target.value;
    },
    addRecordRecommendationst() {
      if (this.valueInputRecommendations === '') {
        return;
      }
      this.arrayRecommendations.push({
        title: this.valueInputRecommendations,
        id: Math.random(),
      });
      this.valueInputRecommendations = '';
    },
    formButton() {
      (this.dializator = this.valueOnClickDializator),
        (this.concentrator = this.valueOnClickConcentrator),
        (this.concentratorValue = this.valueConcentrator),
        (this.needles = this.valueOnClick),
        (this.typeNeedles = this.valueOnClickList),
        (this.catheter = this.valueOnClickCatheter),
        (this.typeCatheter = this.valueOnClickCatheterType),
        (this.bicorbanat = this.valueInputBicorbanate),
        (this.typeBicorbanat = this.valueOnClickBicorbanate),
        (this.anticoagulation = this.valueOnClickAnticoagulation),
        (this.voluemAnticoagulation = this.valueAnticoagulation),
        (this.weigth = this.valueWeights);
    },
  },
});
