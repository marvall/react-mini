const photo = require("./galleryitem.json");

let renderEntriesTree = () => {
  console.log(
    "Function was changhe STATE. if you see this messages something was wrong "
  );
};

const state = {
  gallery: photo,
};

export const subscribe = (observer) => {
  renderEntriesTree = observer;
};
export default state;
