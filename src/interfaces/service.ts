import {ServiceType} from 'constants/service-type';

export interface ServiceData {
  title: string;
  description: string;
}

export interface Service {
  type: ServiceType;
  data: ServiceData[];
}