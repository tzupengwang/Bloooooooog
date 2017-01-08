/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectCurrentUser = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('currentUser')
);

const selectWidth = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['viewport', 'width'])
);

const selectHeight = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['viewport', 'height'])
);

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectCurrentUser,
  selectWidth,
  selectHeight,
  selectLocationState,
};
