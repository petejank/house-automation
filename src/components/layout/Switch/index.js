import classnames from 'classnames'
import {MDCSwitch} from '@material/switch'

import afterRender from 'components/utils/afterRender'
import createComponent from 'components/utils/createComponent'

const SWITCH_SELECTOR = '.mdc-switch'
const SWITCH_CHANGE_EVENT = 'change'
const SWITCH_ID = 'switch-'

function Switch({label, checked, onChange, ariaLevel = 3}) {
  const component = createComponent(render())
  const switchElm = component.querySelector(SWITCH_SELECTOR)

  afterRender(() => {
    const switchControl = new MDCSwitch(switchElm)
    switchControl.listen(SWITCH_CHANGE_EVENT, ({target: {checked}}) => onChange(checked))
  })

  return component

  function render() {
    const switchElmClass = classnames('mdc-switch', {'mdc-switch--checked': checked})
    const inputId = `${SWITCH_ID}${Math.random()}`

    return `
      <div class="home-switch" role="heading" aria-level="${ariaLevel}">
        <label for="${inputId}">
          ${label}
        </label>
        <div class="${switchElmClass}">
          <div class="mdc-switch__track"></div>
          <div class="mdc-switch__thumb-underlay">
            <div class="mdc-switch__thumb"></div>
            <input
              id="${inputId}"
              type="checkbox"
              class="mdc-switch__native-control"
              role="switch"
              ${checked ? 'checked' : ''}
            >
          </div>
        </div>
      </div>
    `
  }
}

export default Switch
