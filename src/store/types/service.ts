import { ServiceType } from 'constants/service-type';
import { SortType } from 'constants/sort-type';
import { Action } from 'interfaces/action';
import { Service } from 'interfaces/service';
import { Status } from 'interfaces/status';

export enum ServiceTypes {
  FetchServices = 'FETCH_SERVICES',
  FetchServicesSuccess = 'FETCH_SERVICES_SUCCESS',
  FetchServicesFailed = 'FETCH_SERVICES_FAILED',
  AddService = 'ADD_SERVICE',
  AddServiceSuccess = 'ADD_SERVICE_SUCCESS',
  AddServiceFailed = 'ADD_SERVICE_FAILED',
  ChangeStatus = 'CHANGE_STATUS',
  FilterServices = 'FILTER_SERVICES',
  ClearServices = 'CLEAR_SERVICES',
  SortServices = 'SORT_SERVICES',
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

export interface ChangeStatusPayload {
  status: Status;
}

export interface FilterServicesPayload {
  type: ServiceType;
}

export interface SortServicesPayload {
  type: SortType;
}

export type ServiceAction =
  | Action<ServiceTypes.FetchServices>
  | Action<ServiceTypes.FetchServicesSuccess, FetchServiceSuccessPayload>
  | Action<ServiceTypes.FetchServicesFailed, FetchServiceFailedPayload>
  | Action<ServiceTypes.AddService, AddServicePayload>
  | Action<ServiceTypes.AddServiceSuccess, AddServiceSuccessPayload>
  | Action<ServiceTypes.AddServiceFailed, AddServiceFailedPayload>
  | Action<ServiceTypes.ChangeStatus, ChangeStatusPayload>
  | Action<ServiceTypes.FilterServices, FilterServicesPayload>
  | Action<ServiceTypes.ClearServices>
  | Action<ServiceTypes.SortServices, SortServicesPayload>;
