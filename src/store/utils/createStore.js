import {reduce, set} from 'lodash'

export default function(reducersObj) {
  let state = reduceState()

  return {
    dispatch(action) {
      state = reduceState(action, state)

      return state
    },
    state() {
      return state
    }
  }

  function reduceState(action = {}, state = {}) {
    return reduce(reducersObj, (acc, reducer, key) => set(acc, key, reducer(state[key], action)), {})
  }
}
