import { ServiceType } from 'constants/service-type';
import { SortType } from 'constants/sort-type';
import { Action } from 'interfaces/action';
import { Service } from 'interfaces/service';
import { Status } from 'interfaces/status';
import { FetchServiceFailedPayload, FetchServiceSuccessPayload, ServiceTypes } from 'store/types/service';

export const fetchService = (): Action<ServiceTypes.FetchServices> => ({
  type: ServiceTypes.FetchServices,
  payload: {},
});

export const fetchServicesSuccess = (
  services: Service[],
): Action<ServiceTypes.FetchServicesSuccess, FetchServiceSuccessPayload> => ({
  type: ServiceTypes.FetchServicesSuccess,
  payload: { services },
});

export const fetchServicesFailed = (
  error: string,
): Action<ServiceTypes.FetchServicesFailed, FetchServiceFailedPayload> => ({
  type: ServiceTypes.FetchServicesFailed,
  payload: { error },
});

export const addService = (service: Service): Action<ServiceTypes.AddService> => ({
  type: ServiceTypes.AddService,
  payload: { service },
});

export const addServiceSuccess = (service: Service): Action<ServiceTypes.AddServiceSuccess> => ({
  type: ServiceTypes.AddServiceSuccess,
  payload: { service },
});

export const addServiceFailed = (error: string): Action<ServiceTypes.AddServiceFailed> => ({
  type: ServiceTypes.AddServiceFailed,
  payload: { error },
});

export const changeFormStatus = (status: Status): Action<ServiceTypes.ChangeStatus> => ({
  type: ServiceTypes.ChangeStatus,
  payload: { status },
});

export const filterServices = (type: ServiceType): Action<ServiceTypes.FilterServices> => ({
  type: ServiceTypes.FilterServices,
  payload: { type },
});

export const clearServices = (): Action<ServiceTypes.ClearServices> => ({
  type: ServiceTypes.ClearServices,
  payload: {},
});

export const sortServices = (type: SortType): Action<ServiceTypes.SortServices> => ({
  type: ServiceTypes.SortServices,
  payload: { type },
});
