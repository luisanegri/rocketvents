import request from 'superagent';
import { url } from '../urls';
export const CREATE_EVENT = 'CREATE_EVENT';
export const READ_EVENTS_PENDING = 'READ_EVENTS_PENDING';
export const READ_EVENTS_SUCCESS = 'READ_EVENTS_SUCCESS';
export const READ_EVENTS_ERROR = 'READ_EVENTS_ERROR';
export const READ_EVENT = 'READ_EVENT';

const baseUrl = url;

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

function readEventsPending() {
  return {
    type: READ_EVENTS_PENDING
  };
}

function readEventsSuccess(events) {
  return {
    type: READ_EVENTS_SUCCESS,
    payload: events
  };
}

function readEventsError(error) {
  return {
    type: READ_EVENTS_ERROR,
    error: error
  };
}

export const readEvents = () => (dispatch, _getState) => {
  return dispatch => {
    dispatch(readEventsPending())
      .get(`${baseUrl}/event`)
      .then(response => {
        if (response.error) {
          throw response.error;
        }
        dispatch(readEventsSuccess(response.body));
        return response.body;
      })
      .catch(error => {
        dispatch(readEventsError(error));
      });
  };
};

// request
//     .get(`${baseUrl}/event`)
//     .then(response => {
//       const action = readEventsSuccess(response.body);
//       dispatch(action);
//     })
//     .catch(console.error);
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
