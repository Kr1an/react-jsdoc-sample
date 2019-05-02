import { createAction } from 'redux-act'

/**
 * @typedef ErrorObj
 * @property {string} [msg]
 * @property {string} [stack]
 * @property {string} [name]
 */

export const raiseError = createAction(
    'RAISE_ERROR',
    /**
     * @param {Error} e
     * @returns {ErrorObj}
     */
    e => ({
        msg: e.message,
        stack: e.stack,
        name: e.name,
    })
)