import ToggledItem from '../ToggledItem'

const LABEL = 'Lights'
const ROOM_PROP = 'lights'

function DashboardRoomLights({id, lights}) {
  return ToggledItem({id, label: LABEL, value: lights, prop: ROOM_PROP})
}

export default DashboardRoomLights
