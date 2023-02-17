import { Action } from 'interfaces/action';
import { ModalTypes, OpenModalPayload } from 'store/types/modal';
import { ModalType } from 'constants/modal-type';

export const openModal = (type: ModalType, data?: unknown): Action<ModalTypes.OpenModal, OpenModalPayload> => ({
  type: ModalTypes.OpenModal,
  payload: { type, data },
});

export const closeModal = (): Action<ModalTypes.CloseModal> => ({
  type: ModalTypes.CloseModal,
  payload: {},
});
