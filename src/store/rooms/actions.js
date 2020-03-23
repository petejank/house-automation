export const ROOMS_SET = 'ROOMS:SET'
export const ROOMS_UPDATE = 'ROOMS:UPDATE'

export function set(rooms) {
  return {
    rooms,
    type: ROOMS_SET
  }
}

export function update(id, params) {
  return {
    id,
    params,
    type: ROOMS_UPDATE
  }
}
