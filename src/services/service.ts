import firestore from '@react-native-firebase/firestore';
import {Service, ServiceData} from 'interfaces/service';
import {ServiceType} from 'constants/service-type';

interface FirebaseServiceResult {
  type: ServiceType;
  title: string;
  description: string;
}

class ServiceClass {
  private instance;

  constructor() {
    this.instance = firestore().collection('services');
    this.addService = this.addService.bind(this);
    this.getServices = this.getServices.bind(this);
  }

  public addService(service: Service): Service {
    this.instance.add(service);

    return service;
  }

  public async getServices(): Promise<Service[]> {
    const query = await this.instance.get();
    const services: Map<ServiceType, ServiceData[]> = new Map();
    query.forEach(snapshot => {
      const {type, ...data} = snapshot.data() as FirebaseServiceResult;
      const id = snapshot.id;
      if (services.get(type)) {
        services.get(type)!.push({...data, id});
      } else {
        services.set(type, [{...data, id}]);
      }
    });

    if (!services.size) {
      return [];
    }

    return Array.from(services.entries()).map(([type, data]) => ({
      type,
      data,
    }));
  }
}

export const serviceInstance = new ServiceClass();
