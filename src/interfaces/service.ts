import { ServiceType } from 'constants/service-type';
import { Coordinates } from 'interfaces/coordinates';

export interface Service {
  id: string;
  title: string;
  description: string;
  type: ServiceType;
  imageUri: string;
  coordinates: Coordinates;
}
