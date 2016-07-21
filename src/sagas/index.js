import { fork } from 'redux-saga/effects';

import counter from './counter';
import client from './client';
import logs from './logs';

export default function* () {
  yield fork(counter);
  yield fork(client);
  yield fork(logs);
}
