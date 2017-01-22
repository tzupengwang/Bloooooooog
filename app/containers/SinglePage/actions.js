export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const requestPost = (url) => ({
  type: REQUEST_POST,
  url,
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  receiveAt: Date.now(),
  post,
});

export const receiveError = (err) => ({
  type: RECEIVE_ERROR,
  err,
});
