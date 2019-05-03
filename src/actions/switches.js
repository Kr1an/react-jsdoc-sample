import { createAction } from 'redux-act'

// No-arguments-actions
// Simple and compact

export const reset = createAction()


// Create actions with context-via-arguments with
// template types of redux-act
// Linter will expect action to receive one {number} argument

/** @type {import('redux-act').ActionCreator1<number, number, {}>} */
export const buildNLightSwitches = createAction()


// You can create context-via-arguments actions
// with more explicit declaration. Type will be
// generated automatically.

export const setLightSwitches = createAction(
  'SET_LIGHT_SWITCHES',
  /** @param {import('../reducers/switches').LightSwitcher[]} list */
  list => list
)