import Room from './Room'
import Separator from './Separator'
import createComponent from 'components/utils/createComponent'
import * as store from 'store'

function LayoutSideBarControls() {
  const rooms = store.state().rooms.map((room) => [Separator(), Room(room)]).flat()

  return createComponent('<ul class="home-dashboard-layout-sidebar-controls" />', rooms)
}

export default LayoutSideBarControls
