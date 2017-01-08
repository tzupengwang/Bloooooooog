import { fromJS } from 'immutable';
import { FOCUS_LIST } from './actions';

const initialState = fromJS({
  focused: true,
});

const slideShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOCUS_LIST:
      return state.set('focused', true);
    default:
      return state;
  }
};

export default slideShowReducer;
