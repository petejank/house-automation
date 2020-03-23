export const SIDEBAR_OPEN = 'SIDEBAR:OPEN'
export const SIDEBAR_CLOSE = 'SIDEBAR:CLOSE'

export function open() {
  return {
    type: SIDEBAR_OPEN
  }
}

export function close() {
  return {
    type: SIDEBAR_CLOSE
  }
}
