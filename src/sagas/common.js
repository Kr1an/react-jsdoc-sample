import { takeEvery } from 'redux-saga/effects'
import * as commonActions from '../actions/common'

// As a warm up, lets create a simple Error
// handler Saga that just outputs error messages

/** @param {import('redux-act').Action<import('../actions/common').ErrorObj, {}>} action */
export function* catchRaisedError(action) {
    console.error(`Error: ${action.payload.name}`)
    console.error(`Message: ${action.payload.msg}`)
    console.error(`Stack: ${action.payload.stack}`)
}

export default function*() {
    yield takeEvery(commonActions.raiseError, catchRaisedError)
}