export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const requestPost = () => ({
  type: REQUEST_POST,
});

export const receivePost = (posts) => ({
  type: RECEIVE_POST,
  receiveAt: Date.now(),
  posts,
});

export const receiveError = (err) => ({
  type: RECEIVE_ERROR,
  err,
});
