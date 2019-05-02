import { combineReducers } from 'redux'

import switches from './switches'

/**
 * @typedef State
 * @property {import('./switches').State} switches
 */

export default combineReducers({
    switches
})