import { Action } from 'interfaces/action';
import { ModalTypes, OpenModalPayload } from 'store/types/modal';

export const openModal = (data: unknown): Action<ModalTypes.OpenModal, OpenModalPayload> => ({
  type: ModalTypes.OpenModal,
  payload: { data },
});

export const closeModal = (): Action<ModalTypes.CloseModal> => ({
  type: ModalTypes.CloseModal,
  payload: {},
});
