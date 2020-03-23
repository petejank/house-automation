import ToggledItem from '../ToggledItem'

const LABEL = 'Curtains'
const ROOM_PROP = 'curtains'

function DashboardRoomCurtains({id, curtains}) {
  return ToggledItem({id, label: LABEL, value: curtains, prop: ROOM_PROP})
}

export default DashboardRoomCurtains
