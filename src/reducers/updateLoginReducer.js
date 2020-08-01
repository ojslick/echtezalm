export default (state = { token: '', userId: '' }, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN':
      return action.payload;
    default:
      return state;
  }
};
