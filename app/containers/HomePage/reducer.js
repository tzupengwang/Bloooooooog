import { fromJS } from 'immutable';
import { REQUEST_RECENT, RECEIVE_RECENT, BROADCAST_HIDDEN } from './actions';

const initialState = fromJS({
  isFetching: false,
  posts: false,
  displayPost: false,
});

const recentReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECENT:
      return state.set('isFetching', true);
    case RECEIVE_RECENT:
      return state
        .set('isFetching', false)
        .set('posts', action.posts)
        .set('lastUpdated', action.receiveAt);
    case BROADCAST_HIDDEN:
      console.log('broadcasting');
      return state
        .set('displayPost', action.from);
    default:
      return state;
  }
};

export default recentReducer;
