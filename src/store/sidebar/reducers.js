import * as actions from './actions'

const defaultState = {
  open: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.SIDEBAR_OPEN:
      return {open: true}
    case actions.SIDEBAR_CLOSE:
      return {open: false}
    default:
      return state
  }
}
