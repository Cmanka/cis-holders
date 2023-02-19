import { StorageKeys } from 'constants/storage-keys';
import { Action } from 'interfaces/action';
import { AsyncStorageKey, AsyncStorageKeyState } from 'store/reducers/async-storage';
import {
  AddKeyFailedPayload,
  AddKeyPayload,
  AddKeySuccessPayload,
  AsyncStorageTypes,
  ClearStorageFailedPayload,
  FetchKeyFailedPayload,
  FetchKeyPayload,
  FetchKeySuccessPayload,
  GetAllKeysFailedPayload,
  GetAllKeysSuccessPayload,
  RemoveKeyFailedPayload,
  RemoveKeyPayload,
  RemoveKeySuccessPayload,
} from 'store/types/async-storage';

export const fetchKey = (key: StorageKeys): Action<AsyncStorageTypes.FetchKey, FetchKeyPayload> => ({
  type: AsyncStorageTypes.FetchKey,
  payload: { key },
});

export const fetchKeySuccess = (
  key: StorageKeys,
): Action<AsyncStorageTypes.FetchKeySuccess, FetchKeySuccessPayload> => ({
  type: AsyncStorageTypes.FetchKeySuccess,
  payload: { key },
});

export const fetchKeyFailed = (error: string): Action<AsyncStorageTypes.FetchKeyFailed, FetchKeyFailedPayload> => ({
  type: AsyncStorageTypes.FetchKeyFailed,
  payload: { error },
});

export const addKey = (key: AsyncStorageKey): Action<AsyncStorageTypes.AddKey, AddKeyPayload> => ({
  type: AsyncStorageTypes.AddKey,
  payload: { key },
});

export const addKeySuccess = (key: AsyncStorageKey): Action<AsyncStorageTypes.AddKeySuccess, AddKeySuccessPayload> => ({
  type: AsyncStorageTypes.AddKeySuccess,
  payload: { key },
});

export const addKeyFailed = (error: string): Action<AsyncStorageTypes.AddKeyFailed, AddKeyFailedPayload> => ({
  type: AsyncStorageTypes.AddKeyFailed,
  payload: { error },
});

export const removeKey = (key: StorageKeys): Action<AsyncStorageTypes.RemoveKey, RemoveKeyPayload> => ({
  type: AsyncStorageTypes.RemoveKey,
  payload: { key },
});

export const removeKeySuccess = (
  key: StorageKeys,
): Action<AsyncStorageTypes.RemoveKeySuccess, RemoveKeySuccessPayload> => ({
  type: AsyncStorageTypes.RemoveKeySuccess,
  payload: { key },
});

export const removeKeyFailed = (error: string): Action<AsyncStorageTypes.RemoveKeyFailed, RemoveKeyFailedPayload> => ({
  type: AsyncStorageTypes.RemoveKeyFailed,
  payload: { error },
});

export const getAllKeys = (): Action<AsyncStorageTypes.GetAllKeys> => ({
  type: AsyncStorageTypes.GetAllKeys,
  payload: {},
});

export const getAllKeysSuccess = (
  keys: AsyncStorageKeyState,
): Action<AsyncStorageTypes.GetAllKeysSuccess, GetAllKeysSuccessPayload> => ({
  type: AsyncStorageTypes.GetAllKeysSuccess,
  payload: { keys },
});

export const getAllKeysFailed = (
  error: string,
): Action<AsyncStorageTypes.GetAllKeysSuccess, GetAllKeysFailedPayload> => ({
  type: AsyncStorageTypes.GetAllKeysSuccess,
  payload: { error },
});

export const clearStorage = (): Action<AsyncStorageTypes.ClearStorage> => ({
  type: AsyncStorageTypes.ClearStorage,
  payload: {},
});

export const clearStorageSuccess = (): Action<AsyncStorageTypes.ClearStorageSuccess> => ({
  type: AsyncStorageTypes.ClearStorageSuccess,
  payload: {},
});

export const clearStorageFailed = (
  error: string,
): Action<AsyncStorageTypes.ClearStorageFailed, ClearStorageFailedPayload> => ({
  type: AsyncStorageTypes.ClearStorageFailed,
  payload: { error },
});
