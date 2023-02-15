import { Action as ReduxAction } from 'redux';
export interface Action<Type, Payload = {}> extends ReduxAction<Type> {
  payload: Payload;
}
