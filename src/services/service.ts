import firestore from '@react-native-firebase/firestore';
import { Service } from 'interfaces/service';
import { FirebaseCollection } from 'constants/firebase-collection';
import { firebaseStorageInstance } from 'services/firebase-storage';

class ServiceClass {
  private readonly instance;

  constructor() {
    this.instance = firestore().collection(FirebaseCollection.Services);
    this.addService = this.addService.bind(this);
    this.getServices = this.getServices.bind(this);
  }

  public async addService(service: Service): Promise<Service> {
    try {
      const fileName = await firebaseStorageInstance.addSource(service.imageUri);
      const imageUri = await firebaseStorageInstance.getSource(fileName);
      const response = await this.instance.add({ ...service, imageUri });

      return { ...service, id: response.id };
    } catch (e) {
      throw new Error('Cannot add service');
    }
  }

  public async getServices(): Promise<Service[]> {
    const query = await this.instance.get();
    const services: Service[] = [];
    query.forEach((snapshot) => {
      const data = snapshot.data() as Service;
      const id = snapshot.id;

      services.push({ ...data, id });
    });

    return services;
  }
}

export const serviceInstance = new ServiceClass();
