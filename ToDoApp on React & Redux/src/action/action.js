const addItem = (date, label, important, done, id ) => {
  return {
    type: 'ADD_ITEM',
    date,
    label,
    important,
    done,
    id
  };
};

const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    id
  };
};

const toggleImportant = (id) => {
  return {
    type: 'TOGGLE_IMPORTANT',
    id
  };
};

const toggleDone = (id) => {
  return {
    type: 'TOGGLE_DONE',
    id
  };
};

const sortByName = () => {
  return {
    type: 'SORT_BY_NAME',
  };
};

const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE',
  };
};

const changeFilter = (terms) => {
  return {
    type: 'FILTER',
    terms
  };
};

const checkByDate = (payload) => {
  return {
    type: 'CHECK_BY_DATE',
    payload
  };
};

export {
  addItem,
  removeItem,
  toggleImportant,
  toggleDone,
  changeFilter,
  sortByName,
  sortByDate,
  checkByDate
};