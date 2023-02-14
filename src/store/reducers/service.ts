import {Service} from 'interfaces/service';
import {ServiceAction, ServiceTypes} from 'store/types/service';

interface ServiceState {
  data: Service[];
  loading: boolean;
  error: string;
}

const initialState: ServiceState = {
  data: [],
  loading: false,
  error: '',
};

export const serviceReducer = (
  state: ServiceState = initialState,
  action: ServiceAction,
): ServiceState => {
  switch (action.type) {
    case ServiceTypes.FetchServices: {
      return {...state, loading: true};
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
      return {...state, loading: false, error: action.payload.error};
    }
    case ServiceTypes.AddService: {
      return {...state, loading: true};
    }
    case ServiceTypes.AddServiceSuccess: {
      return {
        ...state,
        loading: false,
        error: '',
        data: [...state.data, action.payload.service],
      };
    }
    case ServiceTypes.AddServiceFailed: {
      return {...state, loading: false, error: action.payload.error};
    }
    default: {
      return state;
    }
  }
};
