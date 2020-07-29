export default (state = [], action) => {
  switch (action.type) {
    case 'INPUT_DATA':
      return { ...state, ...action.payload };
    // case 'VOORNAAM':
    //   return Object.assign({}, state, {
    //     inputData: action.payload,
    //   });
    // case 'ACHTERNAAM':
    //   return Object.assign({}, state, {
    //     inputData: action.payload,
    //   });
    // case 'EMAIL_ADDRESS':
    //   return Object.assign({}, state, {
    //     inputData: action.payload,
    //   });
    default:
      return state;
  }
};
