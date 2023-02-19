import { ModalType } from 'constants/modal-type';
import { ModalAction, ModalTypes } from 'store/types/modal';

interface ModalState {
  data: unknown;
  type: ModalType | null;
  open: boolean;
}

const initialState: ModalState = {
  data: null,
  open: false,
  type: null,
};

export const modalReducer = (state: ModalState = initialState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ModalTypes.OpenModal: {
      return { ...state, open: true, type: action.payload.type, data: action.payload.data };
    }
    case ModalTypes.CloseModal: {
      return { ...state, open: false, data: null, type: null };
    }
    default: {
      return state;
    }
  }
};
