const photo = require("./galleryitem.json");

const store = {
  _state: {
    gallery: photo,
  },
  getState() {
    return this._state;
  },
  _renderEntriesTree() {
    console.log(
      "Function was changhe STATE. if you see this messages something was wrong "
    );
  },
  subscribe(observer) {
    this._renderEntriesTree = observer;
  },

  /* ======== Методы, которые влияют на изменения state ======== */
};

export default store;
