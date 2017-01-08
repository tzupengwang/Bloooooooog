import fetch from 'isomorphic-fetch';
import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';  // eslint-disable-line no-unused-vars
import { receiveRecent, receiveError, REQUEST_RECENT } from './actions';


const fetchPosts = url => (
  fetch(url).then(res => res.json())
);

export function* fetchRecent() {
  const url = '/api/posts/recent';
  try {
    const posts = yield call(fetchPosts, url);
    yield put(receiveRecent(posts));
  } catch (err) {
    yield put(receiveError(err));
  }
}

export function* fetchRecentWatcher() {
  yield fork(takeLatest, REQUEST_RECENT, fetchRecent);
}

export default [
  fetchRecentWatcher,
];
