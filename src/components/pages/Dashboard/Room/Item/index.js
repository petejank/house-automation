import createComponent from 'components/utils/createComponent'
import componentToString from 'components/utils/componentToString'
import updateComponent from 'components/utils/updateComponent'
import Typography from 'components/layout/Typography'
import * as store from 'store'

function DashboardRoomItem({id, label, value, prop, valueOutput}) {
  let component = render(value)
  let currentValue = value

  store.subscribe(({rooms}) => {
    const room = rooms.find((room) => id === room.id)
    if (!room) return
    if (room[prop] === currentValue) return

    currentValue = room[prop]
    component = updateComponent(render(currentValue), component)
  })

  return component

  function render(value) {
    return createComponent(`
      <section class="home-dashboard-room-item">
        ${componentToString(Typography({text: label}))}
        ${componentToString(Typography({text: valueOutput(value), weight: 'bold'}))}
      </section>
    `)
  }
}

export default DashboardRoomItem
