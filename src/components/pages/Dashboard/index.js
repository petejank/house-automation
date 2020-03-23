import createComponent from 'components/utils/createComponent'
import Container from 'components/layout/Container'
import Room from './Room'

import * as store from 'store'

function Dashboard() {
  const rooms = store.state().rooms.map((room) => Room(room))

  return Container({
    children: createComponent('<div class="home-dashboard" />', rooms)
  })
}

export default Dashboard
