import { Service } from 'interfaces/service';
import { ServiceAction, ServiceTypes } from 'store/types/service';
import { Status } from 'interfaces/status';
import { ServiceType } from 'constants/service-type';
import { SortType } from 'constants/sort-type';
import { sortByName } from 'utils/helpers/sort-by-name';

interface ServiceState {
  data: Service[];
  filter: ServiceType | null;
  filtered: Service[];
  sort: SortType | null;
  loading: boolean;
  error: string;
  formStatus: Status;
}

const initialState: ServiceState = {
  data: [],
  filtered: [],
  filter: null,
  sort: null,
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
    case ServiceTypes.FilterServices: {
      return {
        ...state,
        filtered: state.data.filter(({ type }) => type === action.payload.type),
        filter: action.payload.type,
      };
    }
    case ServiceTypes.ClearServices: {
      return {
        ...state,
        filtered: [],
        filter: null,
        sort: null,
      };
    }
    case ServiceTypes.SortServices: {
      const sort = action.payload.type;

      return {
        ...state,
        filtered: state.filter ? sortByName(state.filtered, sort) : sortByName(state.data, sort),
        sort,
      };
    }
    default: {
      return state;
    }
  }
};
