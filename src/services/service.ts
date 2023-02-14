import firestore from '@react-native-firebase/firestore';
import {Service} from 'interfaces/service';
import {FirebaseCollection} from 'constants/firebase-collection';

class ServiceClass {
  private instance;

  constructor() {
    this.instance = firestore().collection(FirebaseCollection.Services);
    this.addService = this.addService.bind(this);
    this.getServices = this.getServices.bind(this);
  }

  public addService(service: Service): Service {
    this.instance.add(service);

    return service;
  }

  public async getServices(): Promise<Service[]> {
    const query = await this.instance.get();
    const services: Service[] = [];
    query.forEach(snapshot => {
      const data = snapshot.data() as Service;
      const id = snapshot.id;

      services.push({...data, id});
    });

    return services;
  }
}

export const serviceInstance = new ServiceClass();
