import { takeEvery } from 'redux-saga';

import { Constants } from '../modules/logs';

function* logAction({ payload: { level, message } }) {
  // eslint-disable-next-line no-console
  console.log(level, message);
}

export default function* () {
  if (process.env.AW_RUN_MODE !== 'debug') {
    return;
  }
  yield* takeEvery(Constants.LogsAppend, logAction);
}
