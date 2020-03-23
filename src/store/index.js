import createStore from './utils/createStore'
import roomsReducers from './rooms/reducers'
import sidebarReducers from './sidebar/reducers'

const store = createStore({rooms: roomsReducers, sidebar: sidebarReducers})
const storeSubscribers = []

export function dispatch(action) {
  const state = store.dispatch(action)

  storeSubscribers.forEach((cb) => cb(state))
}

export function state() {
  return store.state()
}

export function subscribe(cb) {
  storeSubscribers.push(cb)
}
