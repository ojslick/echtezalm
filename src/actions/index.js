export const inputData = (data) => async (dispatch) => {
  dispatch({ type: 'INPUT_DATA', payload: data });
};

export const isLoggedIn = (data) => async (dispatch) => {
  dispatch({ type: 'IS_LOGGED_IN', payload: data });
};

export const updateLogin = (data) => async (dispatch) => {
  dispatch({ type: 'UPDATE_LOGIN', payload: data });
};

export const product = (data) => async (dispatch) => {
  dispatch({ type: 'PRODUCT', payload: data });
};

export const collection = (data) => async (dispatch) => {
  dispatch({ type: 'COLLECTION', payload: data });
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
