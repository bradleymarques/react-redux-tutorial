import { createStore } from 'redux'
import catApp from './reducers'

let store = createStore(catApp) // Optional second argument to set initial state (from server)
