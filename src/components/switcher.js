import React from 'react'

import { compose, withState, withProps } from 'recompose'

// When you define types used with Component,
// try to separate them by role. This way you can easily
// combine them. Here I am using InnerProps and OuterProps
// along with Values and Functions props groups.
//
// Outer Props should be set from parent component
// Inner Props is like state. Closed inside component.

/**
 * @typedef OuterProps
 * @property {import('../reducers/switches').LightSwitcher} switcher
 * 
 * @typedef InnerValues
 * @property {boolean} isOn
 * 
 * @typedef InnerFunctions
 * @property {function} handleSwitherClick
 * 
 * @typedef {InnerValues & InnerFunctions} InnerProps
 * 
 * @typedef {InnerProps & OuterProps} Props
 */

// Lets create dammy component that does not have
// any logic what so ever. Then we will enchance it
// with recompose lib

/** @param {Props} props */
const Switcher = props => (
    <pre onClick={() => props.handleSwitherClick()}>
        {
            props.isOn ? `

#|
#|_
#| |_           # # # #
#| | |_        #      #
#| |   |__     #  ON  #
#| |_____ |    #      #
#|_|    | |     # # # #
#|     |***|
#|     |***|
        ` : `
        ___
#|     |***|          
#|_    |***|    # # # #
#| |____| |    #       #
#| |    __|    #  OFF  #
#| |  _|       #       #
#| |_|          # # # #
#|_|
#|
#|
            `
        }
    </pre>
)

// Here is IMPORTANT note:
// to explicitly set outer props types,
// We can use react templates types.
// This way only outer props will be required from
// outer scope.

/** @type {import('react').ComponentClass<OuterProps>}*/
const EnhancedSwitcher =  compose(
    // now we need to add local state
    withState('isOn', 'setIsOn', false),
    // next, lets map 'setIsOn' to dummy component's 'handleSwitherClick'
    withProps(props => ({
        handleSwitherClick: () => props.setIsOn(!props.isOn)
    }))
)(Switcher)


export default EnhancedSwitcher