export const inputData = (data) => async (dispatch) => {
  dispatch({ type: 'INPUT_DATA', payload: data });
};

// export const voornaam = (data) => async (dispatch) => {
//   dispatch({ type: 'VOORNAAM', payload: data });
// };

// export const achternaam = (data) => async (dispatch) => {
//   dispatch({ type: 'ACHTERNAAM', payload: data });
// };

// export const emailAddress = (data) => async (dispatch) => {
//   dispatch({ type: 'EMAIL_ADDRESS', payload: data });
// };
