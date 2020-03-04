const initialState = {
  pending: false,
  events: [],
  error: null
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case 'CREATE_EVENT':
      console.log('create event reducer', action.payload);
      return action.payload;
    case 'READ_EVENTS_PENDING':
      return {
        ...state,
        peding: true
      };
    case 'READ_EVENTS_SUCCESS':
      return { ...state, events: action.payload, pending: false };
    case 'READ_EVENTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case 'READ_EVENT':
      return action.payload;
    default:
      return state;
  }
}
