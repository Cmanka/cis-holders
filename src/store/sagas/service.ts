import {call, delay, takeLatest, put} from 'redux-saga/effects';
import {serviceInstance} from 'services/service';
import {
  addServiceFailed,
  addServiceSuccess,
  fetchServicesFailed,
  fetchServicesSuccess,
} from 'store/actions/service';
import {Service} from 'interfaces/service';
import {AddServicePayload, ServiceTypes} from 'store/types/service';
import {Action} from 'interfaces/action';

function* fetchServicesWorker() {
  try {
    const data: Service[] = yield call(serviceInstance.getServices);
    yield put(fetchServicesSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchServicesFailed(error.message));
    }
    yield put(fetchServicesFailed('Unexpected error'));
  }
}

function* addServiceWorker(
  service: Action<ServiceTypes.AddService, AddServicePayload>,
) {
  try {
    delay(1000);
    const data: Service = yield call(
      serviceInstance.addService,
      service.payload.service,
    );
    yield put(addServiceSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(addServiceFailed(error.message));
    }
    yield put(addServiceFailed('Unexpected error'));
  }
}

export function* serviceWatcher() {
  yield takeLatest(ServiceTypes.FetchServices, fetchServicesWorker);
  yield takeLatest(ServiceTypes.AddService, addServiceWorker);
}
