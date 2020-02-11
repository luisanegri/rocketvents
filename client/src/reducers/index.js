import { combineReducers } from 'redux';
import users from './users';
import events from './events';
import comments from './comments';

export default combineReducers({
  users,
  events,
  comments
});
