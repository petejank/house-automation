import {isUndefined} from 'lodash'

import Typography from 'components/layout/Typography'
import Temperature from './Temperature'
import Lights from './Lights'
import Curtains from './Curtains'
import Card from 'components/layout/Card'

const ROOM_CARD_TAG = 'li'

function LayoutSideBarControlsRoom({id, name, color, temperature, temperatureMin, temperatureMax, lights, curtains}) {
  const children = [
    Typography({text: name, tag: 'h2', weight: 'bold', type: 'body1'})
  ]

  if (!isUndefined(lights)) children.push(Lights({id, checked: lights}))
  if (!isUndefined(curtains)) children.push(Curtains({id, checked: curtains}))
  if (!isUndefined(temperature)) {
    children.push(Temperature({id, value: temperature, min: temperatureMin, max: temperatureMax}))
  }

  return Card({
    color,
    tag: ROOM_CARD_TAG,
    disablePaddingBottom: true,
    children
  })
}

export default LayoutSideBarControlsRoom
