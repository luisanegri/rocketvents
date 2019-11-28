export default function(state = [], action = {}) {
  switch (action.type) {
    case 'CREATE_TICKET':
      return action.payload;
    case 'READ_TICKETS':
      return action.payload;
    case 'READ_TICKET':
      console.log('read ticket reducer', action.payload);
      return action.payload;
    case 'UPDATE_TICKET':
      return action.payload;

    default:
      return state;
  }
}
