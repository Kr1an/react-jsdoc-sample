import React from 'react'

import { connect } from 'react-redux'

import Switcher from './switcher'

import * as switchesActions from '../actions/switches'

/**
 * @typedef {import('../reducers/switches').State} Values
 * 
 * @typedef Functions
 * @property {function} handleCreateSwitcheBtnClick 
 * 
 * @typedef {Values & Functions} Props
 */

// Create absolutly dummy component
// that just renders its props and listen for events

/** @param {Props} props */
const SwitchesFactory = props => (
    <div>
        <button onClick={() => props.handleCreateSwitcheBtnClick()}>Create Switcher</button>
        {
            props.items.map(x => <Switcher key={x.id} switcher={x} />)
        }
    </div>
)

export default connect(
    // Use Reducer type to make state mapping easier
    /** @param {import('../reducers').State} state */
    state => ({
        ...state.switches
    }),
    dispatch => ({
        handleCreateSwitcheBtnClick: () => dispatch(switchesActions.buildNLightSwitches(1))
    })
)(SwitchesFactory)