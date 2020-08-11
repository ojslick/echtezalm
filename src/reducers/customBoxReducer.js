export default (state = {}, action) => {
  switch (action.type) {
    case 'CUSTOM_BOX':
      return action.payload;
    default:
      return state;
  }
};
