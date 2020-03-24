import Slider from 'components/layout/Slider'
import Typography from 'components/layout/Typography'
import Item from '../Item'
import * as store from 'store'
import * as roomsActions from 'store/rooms/actions'

const LABEL = 'Temperature'

function LayoutSideBarControlsRoomTemperature({id, value, min, max}) {
  return Item({
    padded: true,
    children: [
      Typography({text: LABEL, tag: 'h3', color: 'white'}),
      Slider({min, max, value, onChange})
    ]
  })

  function onChange(temperature) {
    store.dispatch(roomsActions.update(id, {temperature}))
  }
}

export default LayoutSideBarControlsRoomTemperature
