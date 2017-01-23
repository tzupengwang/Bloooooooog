import fetch from 'isomorphic-fetch';
import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';  // eslint-disable-line no-unused-vars
import { receivePost, receiveError, REQUEST_POST } from './actions';


const fetchData = url => (
  fetch(url).then(res => res.json())
);

export function* fetchPost(action) {
  try {
    const post = yield call(fetchData, action.url);
    yield put(receivePost(post));
  } catch (err) {
    yield put(receiveError(err));
  }
}

export function* fetchPostWatcher() {
  yield fork(takeLatest, REQUEST_POST, fetchPost);
}

export default [
  fetchPostWatcher,
];
