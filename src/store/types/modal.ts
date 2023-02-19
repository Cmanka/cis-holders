import { ModalType } from 'constants/modal-type';
import { Action } from 'interfaces/action';

export enum ModalTypes {
  OpenModal = 'OPEN_MODAL',
  CloseModal = 'CLOSE_MODAL',
}

export interface OpenModalPayload {
  type: ModalType;
  data?: unknown;
}

export type ModalAction = Action<ModalTypes.OpenModal, OpenModalPayload> | Action<ModalTypes.CloseModal>;
