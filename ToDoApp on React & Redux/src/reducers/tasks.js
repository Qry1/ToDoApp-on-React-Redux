import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo' });

if(!TASKS) {
  TASKS = {
    tasks: []
  }
}

const tasks = (state = TASKS.tasks, { type, date, label, important, done, id, payload }) => {

  switch(type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          date,
          label,
          important,
          done,
          id
        }
      ];
    
    case 'REMOVE_ITEM':
      return [...state].filter((item) => item.id !== id);

    case 'TOGGLE_IMPORTANT':
      return [...state].map((item) => {
        if (item.id === id) {
          item.important = !item.important;
        };
        return item;
      });

    case 'TOGGLE_DONE':
      return [...state].map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        };
        return item;
      });

    case 'SORT_BY_NAME':
      return [...state].sort((a, b) => (a.label.toLowerCase() > b.label.toLowerCase()) ? 1 : -1);
      
    case 'SORT_BY_DATE':
      return [...state].sort((a, b) => (a.date > b.date) ? 1 : -1);

    default:
      return state;
  };
};

export default tasks;

