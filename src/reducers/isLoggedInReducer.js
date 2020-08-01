export default (
  state = { token: '', userId: '', expirationDate: '' },
  action
) => {
  switch (action.type) {
    case 'IS_LOGGED_IN':
      return action.payload;
    default:
      return state;
  }
};
