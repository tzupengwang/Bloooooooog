import { REQUEST_RECENT, RECEIVE_RECENT } from './actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  initHeader: {
    position: {
      top: 0,
      left: 0,
    },
    width: 0,
  }
});

const signleReducer = (state = initialState, action) => {
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
}

export default recentReducer;
