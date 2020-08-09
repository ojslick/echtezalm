export default (state = {}, action) => {
  switch (action.type) {
    case 'COLLECTION':
      return action.payload;
    default:
      return state;
  }
};
