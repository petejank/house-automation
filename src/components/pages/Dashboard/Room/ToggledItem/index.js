import Item from '../Item'
import boolToLabel from './utils/boolToLabel'

function DashboardRoomToggledItem({id, label, value, prop}) {
  return Item({id, label, value, prop, valueOutput: boolToLabel})
}

export default DashboardRoomToggledItem
