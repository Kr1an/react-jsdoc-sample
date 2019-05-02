import { fork } from 'redux-saga/effects'

import common from './common'
import switches from './switches'

export default function* () {
    yield fork(common)
    yield fork(switches)
}