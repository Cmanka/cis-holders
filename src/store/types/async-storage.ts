import { Action } from 'interfaces/action';
import { StorageKeys } from 'constants/storage-keys';
import { AsyncStorageKey, AsyncStorageKeyState } from 'store/reducers/async-storage';

export enum AsyncStorageTypes {
  FetchKey = 'FETCH_KEY',
  FetchKeySuccess = 'FETCH_KEY_SUCCESS',
  FetchKeyFailed = 'FETCH_KEY_FAILED',
  AddKey = 'ADD_KEY',
  AddKeySuccess = 'ADD_KEY_SUCCESS',
  AddKeyFailed = 'ADD_KEY_FAILED',
  RemoveKey = 'REMOVE_KEY',
  RemoveKeySuccess = 'REMOVE_KEY_SUCCESS',
  RemoveKeyFailed = 'REMOVE_KEY_FAILED',
  GetAllKeys = 'GET_ALL_KEYS',
  GetAllKeysSuccess = 'GET_ALL_KEYS_SUCCESS',
  GetAllKeysFailed = 'GET_ALL_KEYS_FAILED',
  ClearStorage = 'CLEAR_STORAGE',
  ClearStorageSuccess = 'CLEAR_STORAGE_SUCCESS',
  ClearStorageFailed = 'CLEAR_STORAGE_FAILED',
}

export interface FetchKeyPayload {
  key: StorageKeys;
}

export interface FetchKeySuccessPayload {
  key: StorageKeys;
}

export interface FetchKeyFailedPayload {
  error: string;
}

export interface AddKeyPayload {
  key: AsyncStorageKey;
}

export interface AddKeySuccessPayload {
  key: AsyncStorageKey;
}

export interface AddKeyFailedPayload {
  error: string;
}

export interface RemoveKeyPayload {
  key: StorageKeys;
}

export interface RemoveKeySuccessPayload {
  key: StorageKeys;
}

export interface RemoveKeyFailedPayload {
  error: string;
}

export interface GetAllKeysSuccessPayload {
  keys: AsyncStorageKeyState;
}

export interface GetAllKeysFailedPayload {
  error: string;
}

export interface ClearStorageFailedPayload {
  error: string;
}

export type AsyncStorageAction =
  | Action<AsyncStorageTypes.FetchKey, FetchKeyPayload>
  | Action<AsyncStorageTypes.FetchKeySuccess, FetchKeySuccessPayload>
  | Action<AsyncStorageTypes.FetchKeyFailed, FetchKeyFailedPayload>
  | Action<AsyncStorageTypes.AddKey, AddKeyPayload>
  | Action<AsyncStorageTypes.AddKeySuccess, AddKeySuccessPayload>
  | Action<AsyncStorageTypes.AddKeyFailed, AddKeyFailedPayload>
  | Action<AsyncStorageTypes.RemoveKey, RemoveKeyPayload>
  | Action<AsyncStorageTypes.RemoveKeySuccess, RemoveKeySuccessPayload>
  | Action<AsyncStorageTypes.RemoveKeyFailed, RemoveKeyFailedPayload>
  | Action<AsyncStorageTypes.GetAllKeys>
  | Action<AsyncStorageTypes.GetAllKeysSuccess, GetAllKeysSuccessPayload>
  | Action<AsyncStorageTypes.GetAllKeysFailed, GetAllKeysFailedPayload>
  | Action<AsyncStorageTypes.ClearStorage>
  | Action<AsyncStorageTypes.ClearStorageSuccess>
  | Action<AsyncStorageTypes.ClearStorageFailed, ClearStorageFailedPayload>;
