import { createSelector } from 'reselect';

const selectSlideshow = () => (state) => state.get('slideshow');

const selectFocused = () => createSelector(
  selectSlideshow(),
  (slideshowState) => slideshowState.get('focused')
);

export {
  selectSlideshow,
  selectFocused,
};
