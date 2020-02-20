import request from 'superagent';
export const LOGIN = 'LOGIN';

const baseUrl = 'https://warm-sierra-46859.herokuapp.com';

function loginSuccess(user) {
  return {
    type: LOGIN,
    payload: user
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      const action = loginSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
