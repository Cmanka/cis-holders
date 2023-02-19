import { QUERY_DELAY } from 'constants/query-delay';
import { StorageKeys } from 'constants/storage-keys';
import { Action } from 'interfaces/action';
import { call, delay, put,takeLatest } from 'redux-saga/effects';
import { asyncStorageInstance } from 'services/async-storage';
import {
  addKeyFailed,
  addKeySuccess,
  clearStorageFailed,
  clearStorageSuccess,
  fetchKeyFailed,
  fetchKeySuccess,
  getAllKeysFailed,
  getAllKeysSuccess,
  removeKeyFailed,
  removeKeySuccess,
} from 'store/actions/async-storage';
import { AsyncStorageKeyState } from 'store/reducers/async-storage';
import { AddKeyPayload, AsyncStorageTypes, FetchKeyPayload, RemoveKeyPayload } from 'store/types/async-storage';
import { getErrorMessage } from 'utils/helpers/get-error-message';

function* fetchKeyWorker(asyncStorage: Action<AsyncStorageTypes.FetchKey, FetchKeyPayload>) {
  try {
    yield delay(QUERY_DELAY);
    const key: StorageKeys = yield call(asyncStorageInstance.getItem, asyncStorage.payload.key);
    yield put(fetchKeySuccess(key));
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    yield put(fetchKeyFailed(errorMessage));
  }
}

function* addKeyWorker(asyncStorage: Action<AsyncStorageTypes.AddKey, AddKeyPayload>) {
  try {
    yield delay(QUERY_DELAY);
    yield call(asyncStorageInstance.setItem, asyncStorage.payload.key);
    yield put(addKeySuccess(asyncStorage.payload.key));
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    yield put(addKeyFailed(errorMessage));
  }
}

function* removeKeyWorker(asyncStorage: Action<AsyncStorageTypes.RemoveKey, RemoveKeyPayload>) {
  try {
    const { key } = asyncStorage.payload;
    yield delay(QUERY_DELAY);
    yield call(asyncStorageInstance.removeItem, key);
    yield put(removeKeySuccess(key));
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    yield put(removeKeyFailed(errorMessage));
  }
}

function* getAllKeysWorker() {
  try {
    yield delay(QUERY_DELAY);
    const keys: AsyncStorageKeyState = yield call(asyncStorageInstance.getAllItems);
    yield put(getAllKeysSuccess(keys));
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    yield put(getAllKeysFailed(errorMessage));
  }
}

function* clearWorker() {
  try {
    yield delay(QUERY_DELAY);
    yield call(asyncStorageInstance.clear);
    yield put(clearStorageSuccess());
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    yield put(clearStorageFailed(errorMessage));
  }
}

export function* asyncStorageWatcher() {
  yield takeLatest(AsyncStorageTypes.FetchKey, fetchKeyWorker);
  yield takeLatest(AsyncStorageTypes.AddKey, addKeyWorker);
  yield takeLatest(AsyncStorageTypes.RemoveKey, removeKeyWorker);
  yield takeLatest(AsyncStorageTypes.GetAllKeys, getAllKeysWorker);
  yield takeLatest(AsyncStorageTypes.ClearStorage, clearWorker);
}
