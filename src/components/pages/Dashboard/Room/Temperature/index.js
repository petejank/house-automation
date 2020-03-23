import Item from '../Item'
import numberToLabel from './utils/numberToLabel'

const LABEL = 'Temperature'
const ROOM_PROP = 'temperature'

function DashboardRoomTemperature({id, value}) {
  return Item({id, label: LABEL, value, prop: ROOM_PROP, valueOutput: numberToLabel})
}

export default DashboardRoomTemperature
