import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { actions } from '../modules/counter';

export default function* () {
  while (true) {
    yield call(delay, 5000);
    yield put(actions.increment(10));
  }
}
