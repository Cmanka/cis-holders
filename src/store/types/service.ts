import {Service} from 'interfaces/service';
import {Action} from 'interfaces/action';

export enum ServiceTypes {
  FetchServices = 'FETCH_SERVICES',
  FetchServicesSuccess = 'FETCH_SERVICES_SUCCESS',
  FetchServicesFailed = 'FETCH_SERVICES_FAILED',
  AddService = 'ADD_SERVICE',
  AddServiceSuccess = 'ADD_SERVICE_SUCCESS',
  AddServiceFailed = 'ADD_SERVICE_FAILED',
}

export interface FetchServiceSuccessPayload {
  services: Service[];
}

export interface FetchServiceFailedPayload {
  error: string;
}

export interface AddServicePayload {
  service: Service;
}

export interface AddServiceSuccessPayload {
  service: Service;
}

export interface AddServiceFailedPayload {
  error: string;
}

export type ServiceAction =
  | Action<ServiceTypes.FetchServices>
  | Action<ServiceTypes.FetchServicesSuccess, FetchServiceSuccessPayload>
  | Action<ServiceTypes.FetchServicesFailed, FetchServiceFailedPayload>
  | Action<ServiceTypes.AddService, AddServicePayload>
  | Action<ServiceTypes.AddServiceSuccess, AddServiceSuccessPayload>
  | Action<ServiceTypes.AddServiceFailed, AddServiceFailedPayload>;