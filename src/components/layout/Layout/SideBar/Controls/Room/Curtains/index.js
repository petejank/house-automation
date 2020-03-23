import Switch from 'components/layout/Switch'
import Item from '../Item'
import * as store from 'store'
import * as roomsActions from 'store/rooms/actions'

const LABEL = 'Curtains'

function LayoutSideBarControlsRoomCurtains({id, checked}) {
  return Item({children: Switch({label: LABEL, checked, onChange})})

  function onChange(curtains) {
    store.dispatch(roomsActions.update(id, {curtains}))
  }
}

export default LayoutSideBarControlsRoomCurtains
