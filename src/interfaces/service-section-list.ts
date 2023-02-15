import {ServiceType} from 'constants/service-type';

export interface ServiceSectionListData {
  id: string;
  title: string;
  imageUri: string;
}

export interface ServiceSectionList {
  type: ServiceType;
  data: ServiceSectionListData[];
}
