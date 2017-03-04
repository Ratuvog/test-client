import { put } from 'redux-saga/effects';
import { setLoading, setError } from '../../actions/location';

export function* loadAsync (generator) {
  try {
    yield put(setLoading(true));
    yield put(setError(''));
    yield * generator();
  } catch (e) {
    yield put(setError(e))
  } finally {
    yield put(setLoading(false))
  }
}
