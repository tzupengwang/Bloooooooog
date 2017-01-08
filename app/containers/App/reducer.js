/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import {
  RESIZE_WINDOW,
} from './constants';

// The initial state of the App
//
// viewport: arbitrary initial values, will be set after App is mounted
const initialState = fromJS({
  viewport: {
    width: 3000,
    height: 2000,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case RESIZE_WINDOW:
      return state
        .setIn(['viewport', 'width'], action.viewport.width)
        .setIn(['viewport', 'height'], action.viewport.height);
    default:
      return state;
  }
}

export default appReducer;
