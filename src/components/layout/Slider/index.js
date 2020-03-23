import {MDCSlider} from '@material/slider'

import afterRender from 'components/utils/afterRender'
import Image from 'components/layout/Image'
import componentToString from 'components/utils/componentToString'
import createComponent from 'components/utils/createComponent'
import * as store from 'store'

const SLIDER_WORKAROUND_TIMEOUT = 250
const SLIDER_SELECTOR = '.mdc-slider'
const SLIDER_CHANGE_EVENT = 'MDCSlider:change'

function Slider({value, min, max, onChange}) {
  const component = createComponent(render())
  let currentDrawerState = store.state().sidebar.open
  let slider

  afterRender(() => {
    slider = new MDCSlider(component.querySelector(SLIDER_SELECTOR))
    slider.listen(SLIDER_CHANGE_EVENT, (ev) => onChange(slider.value))
  })

  // Workaround for https://github.com/material-components/material-components-web/issues/1017
  store.subscribe(({sidebar: {open}}) => {
    if (open !== currentDrawerState) {
      currentDrawerState = open
      setTimeout(() => slider.layout(), SLIDER_WORKAROUND_TIMEOUT)
    }
  })

  return component

  function render() {
    return `
      <div class="home-slider">
        <div
          class="mdc-slider mdc-slider--discrete mdc-slider--display-markers"
          tabindex="0"
          role="slider"
          aria-valuemin="${min}"
          aria-valuemax="${max}"
          aria-valuenow="${value}"
        >
          <div class="mdc-slider__track-container">
            <div class="mdc-slider__track"></div>
            <div class="mdc-slider__track-marker-container"></div>
          </div>
          <div class="mdc-slider__thumb-container">
            <div class="mdc-slider__pin">
              <span class="mdc-slider__pin-value-marker"></span>
            </div>
            ${componentToString(Image({className: 'mdc-slider__thumb', image: 'thumb'}))}
            <div class="mdc-slider__focus-ring"></div>
          </div>
        </div>
      </div>
    `
  }
}

export default Slider
