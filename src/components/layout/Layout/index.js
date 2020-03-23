import createComponent from 'components/utils/createComponent'
import AppBar from './AppBar'
import SideBar from './SideBar'
import DrawerScrim from './SideBar/DrawerScrim'
import Dashboard from 'components/pages/Dashboard'
import * as roomsActions from 'store/rooms/actions'
import * as store from 'store'
import rooms from 'static/rooms'

function Layout() {
  store.dispatch(roomsActions.set(rooms))

  return createComponent('<div class="home-dashboard-layout" />', [
    AppBar(),
    SideBar(),
    DrawerScrim(),
    Dashboard()
  ])
}

export default Layout
