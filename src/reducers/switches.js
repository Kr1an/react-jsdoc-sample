import { createReducer } from 'redux-act'
import * as actions from '../actions/switches'

// I've noticed that its good idea to declare JSDoc model types
// in corresponding reducer file

/**
 * @typedef LightSwitcher
 * @property {number} id
 */

// Each reducer has state. It usually contains some
// models/extra props

/**
 * @typedef State
 * @property {LightSwitcher[]} items
 */

/** @type {State} */
const defaultState = {
  items: []
}

// Empty reducer is created. Empty means without handlers
// and with default state
const reducer = createReducer({}, defaultState)


// .on() bind action to handler
// it has full typescript support. So,
// validator and auto-suggester is on your side here
reducer.on(actions.reset, () => defaultState)

// Same here. Additionaly the payload argument is of
// type {LightSwitcher[]}
reducer.on(actions.setLightSwitches, (state, payload) => ({ ...state, items: payload}))

export default reducer