const filter = (state = '', { type, terms }) => {
  switch (type) {
    case 'FILTER':
      return terms;
    default:
      return state;
  };
};

export default filter;