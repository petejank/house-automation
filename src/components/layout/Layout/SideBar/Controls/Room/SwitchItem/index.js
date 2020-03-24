import Item from '../Item'
import Switch from 'components/layout/Switch'
import Typography from 'components/layout/Typography'
import componentToString from 'components/utils/componentToString'
import * as store from 'store'
import * as roomsActions from 'store/rooms/actions'

function LayoutSideBarControlsRoomSwitchItem({id, label: text, prop, checked}) {
  const label = componentToString(Typography({text, color: 'white'}))
  return Item({children: Switch({label, checked, onChange})})

  function onChange(value) {
    store.dispatch(roomsActions.update(id, {[prop]: value}))
  }
}

export default LayoutSideBarControlsRoomSwitchItem
