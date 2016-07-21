import { takeEvery } from 'redux-saga';
import { take } from 'redux-saga/effects';

import { constants, selectors } from '../modules/logs';

function* logAction({ payload: { level, message }}) {
  console.log(level, message);
}

export default function* () {
  if (process.env.AW_RUN_MODE !== 'debug') {
    return;
  }
  yield* takeEvery(constants.LOGS_APPEND, logAction);
}
