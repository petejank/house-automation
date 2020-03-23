export default function(newEl, oldEl) {
  oldEl.parentNode.replaceChild(newEl, oldEl)
  return newEl
}
