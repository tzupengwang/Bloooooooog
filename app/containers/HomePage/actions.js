export const REQUEST_RECENT = 'REQUEST_RECENT';
export const RECEIVE_RECENT = 'RECEIVE_RECENT';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const BROADCAST_HIDDEN = 'BROADCAST_HIDDEN';

export const requestRecent = () => ({
  type: REQUEST_RECENT,
});

export const receiveRecent = (posts) => ({
  type: RECEIVE_RECENT,
  receiveAt: Date.now(),
  posts,
});

export const receiveError = (err) => ({
  type: RECEIVE_ERROR,
  err,
});

export const broadcastHidden = (i) => ({
  type: BROADCAST_HIDDEN,
  from: i,
});
