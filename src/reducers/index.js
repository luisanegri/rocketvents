import { combineReducers } from 'redux';
import users from './users';
import events from './events';
import comments from './comments';
import messages from './messages';

export default combineReducers({
  users,
  events,
  comments,
  messages
});
