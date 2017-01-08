import { fromJS } from 'immutable';
import { REQUEST_RECENT, RECEIVE_RECENT } from './actions';

const initialState = fromJS({
  isFetching: false,
  posts: false,
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
    default:
      return state;
  }
};

export default recentReducer;
