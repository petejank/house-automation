import SwitchItem from '../SwitchItem'

const LABEL = 'Lights'
const ROOM_PROP = 'lights'

function LayoutSideBarControlsRoomLights({id, checked}) {
  return SwitchItem({id, checked, label: LABEL, prop: ROOM_PROP})
}

export default LayoutSideBarControlsRoomLights
