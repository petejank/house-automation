import {isArray, isString} from 'lodash'

function createComponent(html, children) {
  const range = document.createRange()
  const el = html ? range.createContextualFragment(html.trim()).firstChild : document.createDocumentFragment()

  if (children) {
    if (isArray(children)) {
      children.forEach((child) => appendChild(el, child))
    } else {
      appendChild(el, children)
    }
  }

  return el
}

function appendChild(el, child) {
  el.appendChild(isString(child) ? createComponent(child) : child)
}

export default createComponent
