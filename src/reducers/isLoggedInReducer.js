export default (state = null, action) => {
  switch (action.type) {
    case 'IS_LOGGED_IN':
      return action.payload;
    default:
      return state;
  }
};
