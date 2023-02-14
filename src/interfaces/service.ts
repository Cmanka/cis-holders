import {ServiceType} from 'constants/service-type';

export interface Service {
  id: string;
  title: string;
  description: string;
  type: ServiceType;
}
