import { takeEvery, call, select, put } from 'redux-saga/effects'

import * as switchesActions from '../actions/switches'
import * as commonActions from '../actions/common'

// Lets create some function that will
// play a role of asynchronous operation

/**
 * @param {number} n  number of switches to create
 */
const createNSwitches = async n => {
    const result = []

    for(let i = 0; i < n; i++) {
        /** @type {import('../reducers/switches').LightSwitcher} */
        const toggler = {
            id: Math.round(Math.random() * 2000)
        }
        result.push(toggler)
    }

    return result
}

/** 
 * @param {import('redux-act').Action<number, {}>} action
 */
export function* buildSwitches(action) {  
    try {
      const newSwitches = yield call(createNSwitches, action.payload)
  
      // You may want to use global state inside
      // of saga

      /** @type {import('../reducers/index').State} */
      const state = yield select()
  
      // Full auto-suggestion support over here
      const allTogglers = [
        ...state.switches.items,
        ...newSwitches,
      ]
  
      yield put(switchesActions.setLightSwitches(allTogglers))
    } catch (e) {
      // Here is a good place to use our
      // raiseError action
      yield put(commonActions.raiseError(e))
    }
  }


export default function* () {
    yield takeEvery(switchesActions.buildNLightSwitches, buildSwitches)
}