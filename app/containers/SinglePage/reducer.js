import { REQUEST_POST, RECEIVE_POST } from './actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  lastUpdated: '',
  isFetching: false,
  post: false,
});

const singleReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POST:
      return state.set('isFetching', true);
    case RECEIVE_POST:
      return state
        .set('isFetching', false)
        .set('post', action.post)
        .set('lastUpdated', action.receiveAt);
    default:
      return state;
  }
}

export default singleReducer;
