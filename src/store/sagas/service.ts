import { QUERY_DELAY } from 'constants/query-delay';
import { Action } from 'interfaces/action';
import { Service } from 'interfaces/service';
import { call, delay, put,takeLatest } from 'redux-saga/effects';
import { serviceInstance } from 'services/service';
import { addServiceFailed, addServiceSuccess, fetchServicesFailed, fetchServicesSuccess } from 'store/actions/service';
import { AddServicePayload, ServiceTypes } from 'store/types/service';
import { getErrorMessage } from 'utils/helpers/get-error-message';

function* fetchServicesWorker() {
  try {
    yield delay(QUERY_DELAY);
    const data: Service[] = yield call(serviceInstance.getServices);
    yield put(fetchServicesSuccess(data));
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    yield put(fetchServicesFailed(errorMessage));
  }
}

function* addServiceWorker(service: Action<ServiceTypes.AddService, AddServicePayload>) {
  try {
    yield delay(QUERY_DELAY);
    const data: Service = yield call(serviceInstance.addService, service.payload.service);
    yield put(addServiceSuccess(data));
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    yield put(addServiceFailed(errorMessage));
  }
}

export function* serviceWatcher() {
  yield takeLatest(ServiceTypes.FetchServices, fetchServicesWorker);
  yield takeLatest(ServiceTypes.AddService, addServiceWorker);
}
