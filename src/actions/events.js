import request from 'superagent';
export const CREATE_EVENT = 'CREATE_EVENT';
export const READ_EVENTS = 'READ_EVENTS';
export const READ_EVENT = 'READ_EVENT';

const baseUrl = 'https://warm-sierra-46859.herokuapp.com';

function createEventSuccess(event) {
  return {
    type: CREATE_EVENT,
    payload: event
  };
}

export const createEvent = (
  name,
  description,
  start_date,
  image,
  time,
  price,
  location
) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.users.jwt;
  const userId = state.users.id;
  request
    .post(`${baseUrl}/event`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({
      name,
      description,
      start_date,
      image,
      time,
      location,
      price,
      userId
    })
    .then(response => {
      const action = createEventSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

function readEventsSuccess(events) {
  return {
    type: READ_EVENT,
    payload: events
  };
}

export const readEvents = () => (dispatch, _getState) => {
  request
    .get(`${baseUrl}/event`)
    .then(response => {
      const action = readEventsSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const readEventSuccess = event => ({
  type: READ_EVENT,
  payload: event
});

export const readEvent = (id, event) => (dispatch, _getState) => {
  request
    .get(`${baseUrl}/event/${id}`)
    .send(event)
    .then(response => {
      dispatch(readEventSuccess(response.body));
    })
    .catch(console.error);
};
