import storage from '@react-native-firebase/storage';
import { getFilenameFromUri } from 'lib/get-filename-from-uri';

class FirebaseStorage {
  public async addSource(uri: string) {
    try {
      const fileName = getFilenameFromUri(uri);

      const ref = storage().ref(fileName);
      await ref.putFile(uri);

      return fileName;
    } catch (e) {
      throw new Error('Cannot add source');
    }
  }

  public async getSource(fileName: string) {
    try {
      const ref = storage().ref(fileName);

      return await ref.getDownloadURL();
    } catch (e) {
      throw new Error('Cannot get source');
    }
  }
}

export const firebaseStorageInstance = new FirebaseStorage();
