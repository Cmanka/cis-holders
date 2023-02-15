import { Service } from 'interfaces/service';
import { ServiceAction, ServiceTypes } from 'store/types/service';
import { Status } from 'interfaces/status';

interface ServiceState {
  data: Service[];
  loading: boolean;
  error: string;
  formStatus: Status;
}

const initialState: ServiceState = {
  data: [],
  loading: false,
  error: '',
  formStatus: 'pending',
};

export const serviceReducer = (state: ServiceState = initialState, action: ServiceAction): ServiceState => {
  switch (action.type) {
    case ServiceTypes.FetchServices: {
      return { ...state, loading: true };
    }
    case ServiceTypes.FetchServicesSuccess: {
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload.services,
      };
    }
    case ServiceTypes.FetchServicesFailed: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case ServiceTypes.AddService: {
      return { ...state, loading: true, formStatus: 'pending' };
    }
    case ServiceTypes.AddServiceSuccess: {
      return {
        ...state,
        loading: false,
        error: '',
        formStatus: 'success',
        data: [...state.data, action.payload.service],
      };
    }
    case ServiceTypes.AddServiceFailed: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        formStatus: 'error',
      };
    }
    case ServiceTypes.ChangeStatus: {
      return {
        ...state,
        formStatus: action.payload.status,
      };
    }
    default: {
      return state;
    }
  }
};
