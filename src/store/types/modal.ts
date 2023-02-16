import { Action } from 'interfaces/action';

export enum ModalTypes {
  OpenModal = 'OPEN_MODAL',
  CloseModal = 'CLOSE_MODAL',
}

export interface OpenModalPayload {
  data: unknown;
}

export type ModalAction = Action<ModalTypes.OpenModal, OpenModalPayload> | Action<ModalTypes.CloseModal>;
