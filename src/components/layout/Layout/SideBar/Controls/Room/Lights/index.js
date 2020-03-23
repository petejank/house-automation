import Switch from 'components/layout/Switch'
import Item from '../Item'
import * as store from 'store'
import * as roomsActions from 'store/rooms/actions'

const LABEL = 'Lights'

function LayoutSideBarControlsRoomLights({id, checked}) {
  return Item({children: Switch({label: LABEL, checked, onChange})})

  function onChange(lights) {
    store.dispatch(roomsActions.update(id, {lights}))
  }
}

export default LayoutSideBarControlsRoomLights
