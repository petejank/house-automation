import classnames from 'classnames'

import createComponent from 'components/utils/createComponent'

function LayoutSideBarControlsRoomItem({padded, children}) {
  const className = classnames('home-dashboard-layout-sidebar-controls-room-item', {
    'home-dashboard-layout-sidebar-controls-room-item--padded': padded
  })

  return createComponent(`<section class="${className}" />`, children)
}

export default LayoutSideBarControlsRoomItem
