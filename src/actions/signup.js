import request from 'superagent';
export const LOGIN = 'LOGIN';

const baseUrl = 'https://warm-sierra-46859.herokuapp.com';

function loginSuccess(user) {
  return {
    type: LOGIN,
    payload: user
  };
}

export const signup = (username, email, password) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send({ username, email, password })
    .then(response => {
      const action = loginSuccess(response.text);
      dispatch(action);
    })
    .catch(console.error);
};
