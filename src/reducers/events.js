export default function(state = [], action = {}) {
  switch (action.type) {
    case 'CREATE_EVENT':
      return [...state, action.payload];
    case 'READ_EVENT':
      return action.payload;
    default:
      return state;
  }
}
