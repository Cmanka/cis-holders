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

  public addService(service: Service) {
    this.instance.add(service);
  }

  public async getServices(): Promise<Service[]> {
    const query = await this.instance.get();
    const services: Map<ServiceType, ServiceData[]> = new Map();
    query.forEach(snapshot => {
      const {type, ...data} = snapshot.data() as FirebaseServiceResult;
      if (services.get(type)) {
        services.get(type)!.push(data);
      } else {
        services.set(type, [data]);
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

const serviceInstance = new ServiceClass();

export const useService = () => serviceInstance;
