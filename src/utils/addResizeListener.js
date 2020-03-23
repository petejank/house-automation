const RESIZE_EVENT = 'resize'

export default function(cb) {
  window.addEventListener(RESIZE_EVENT, cb)
}
