import Storage from '@react-native-async-storage/async-storage';
import { StorageKeys } from 'constants/storage-keys';
import { AsyncStorageKey } from 'store/reducers/async-storage';

class AsyncStorage {
  public async setItem({ type, value }: AsyncStorageKey) {
    try {
      await Storage.setItem(type, value as string);
    } catch {
      throw new Error('Cannot add to async storage');
    }
  }

  public async getItem(key: StorageKeys) {
    try {
      return await Storage.getItem(key);
    } catch {
      throw new Error('Cannot get from async storage');
    }
  }

  public async removeItem(key: StorageKeys) {
    try {
      await Storage.removeItem(key);
    } catch {
      throw new Error('Cannot remove from async storage');
    }
  }

  public async getAllItems() {
    try {
      const response = await Storage.multiGet([StorageKeys.Filter, StorageKeys.Sort]);

      if (!response.length) {
        return null;
      }

      return Object.fromEntries(response);
    } catch {
      throw new Error('Cannot get all items from async storage');
    }
  }

  public async clear() {
    try {
      await Storage.clear();
    } catch {
      throw new Error('Cannot clear async storage');
    }
  }
}

export const asyncStorageInstance = new AsyncStorage();
