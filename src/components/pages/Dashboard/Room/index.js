import {isUndefined} from 'lodash'

import createComponent from 'components/utils/createComponent'
import Typography from 'components/layout/Typography'
import Card from 'components/layout/Card'
import Lights from './Lights'
import Curtains from './Curtains'
import Temperature from './Temperature'

function DashboardRoom({id, name, color, temperature, lights, curtains}) {
  const children = [
    Typography({text: name, tag: 'h2', weight: 'bold', type: 'body1'})
  ]

  if (!isUndefined(lights)) children.push(Lights({id, lights}))
  if (!isUndefined(curtains)) children.push(Curtains({id, curtains}))
  if (!isUndefined(temperature)) children.push(Temperature({id, value: temperature.toString()}))

  return createComponent('<div class="home-dashboard-room" />', Card({disableMarginBottom: true, color, children}))
}

export default DashboardRoom
