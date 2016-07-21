import { put } from 'redux-saga/effects';

import { actions as log } from '../modules/logs';

export default function* () {
  yield put(log.append('v', 'starting ble client'));
}
