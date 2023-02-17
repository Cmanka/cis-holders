import { AsyncStorageAction, AsyncStorageTypes } from 'store/types/async-storage';
import { StorageKeys } from 'constants/storage-keys';

export interface AsyncStorageKey {
  type: StorageKeys;
  value: string | null;
}

export type AsyncStorageKeyState = Record<StorageKeys | string, string | null>;

interface AsyncStorageState {
  keys: AsyncStorageKeyState;
  loading: boolean;
  error: string;
}

const initialState: AsyncStorageState = {
  keys: {},
  loading: false,
  error: '',
};

export const asyncStorageReducer = (
  state: AsyncStorageState = initialState,
  action: AsyncStorageAction,
): AsyncStorageState => {
  switch (action.type) {
    case AsyncStorageTypes.FetchKey: {
      return { ...state, loading: true };
    }
    case AsyncStorageTypes.FetchKeySuccess: {
      return { ...state, loading: false };
    }
    case AsyncStorageTypes.FetchKeyFailed: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case AsyncStorageTypes.AddKey: {
      return { ...state, loading: true };
    }
    case AsyncStorageTypes.AddKeySuccess: {
      return {
        ...state,
        loading: false,
        keys: { ...state.keys, [action.payload.key.type]: action.payload.key.value },
      };
    }
    case AsyncStorageTypes.AddKeyFailed: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case AsyncStorageTypes.RemoveKey: {
      return { ...state, loading: true };
    }
    case AsyncStorageTypes.RemoveKeySuccess: {
      return {
        ...state,
        loading: false,
        keys: { ...state.keys, [action.payload.key]: null },
      };
    }
    case AsyncStorageTypes.RemoveKeyFailed: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case AsyncStorageTypes.GetAllKeys: {
      return { ...state, loading: true };
    }
    case AsyncStorageTypes.GetAllKeysSuccess: {
      return { ...state, loading: false, keys: action.payload.keys };
    }
    case AsyncStorageTypes.GetAllKeysFailed: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case AsyncStorageTypes.ClearStorage: {
      console.log(2);
      return { ...state, loading: true };
    }
    case AsyncStorageTypes.ClearStorageSuccess: {
      console.log(1);
      return { ...state, loading: false, keys: {} };
    }
    case AsyncStorageTypes.ClearStorageFailed: {
      return { ...state, loading: false, error: action.payload.error };
    }
    default: {
      return state;
    }
  }
};
