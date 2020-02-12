export default function(state = [], action = {}) {
  switch (action.type) {
    case 'CREATE_EVENT':
      console.log('create event reducer', action.payload);
      return action.payload;
    case 'READ_EVENTS':
      return [...state, action.payload];
    case 'READ_EVENT':
      return action.payload;
    default:
      return state;
  }
}
