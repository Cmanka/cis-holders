import { ModalAction, ModalTypes } from 'store/types/modal';

interface ModalState {
  data: unknown;
  open: boolean;
}

const initialState: ModalState = {
  data: null,
  open: false,
};

export const modalReducer = (state: ModalState = initialState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalTypes.OpenModal: {
      return { ...state, open: true, data: action.payload.data };
    }
    case ModalTypes.CloseModal: {
      return { ...state, open: false, data: null };
    }
    default: {
      return state;
    }
  }
};
