import SwitchItem from '../SwitchItem'

const LABEL = 'Curtains'
const ROOM_PROP = 'curtains'

function LayoutSideBarControlsRoomCurtains({id, checked}) {
  return SwitchItem({id, checked, label: LABEL, prop: ROOM_PROP})
}

export default LayoutSideBarControlsRoomCurtains
