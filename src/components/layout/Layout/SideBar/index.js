import classnames from 'classnames'
import {MDCDrawer} from '@material/drawer'

import Controls from './Controls'
import HeadingText from './HeadingText'
import afterRender from 'components/utils/afterRender'
import addResizeListener from 'utils/addResizeListener'
import isMobile from 'utils/isMobile'
import createComponent from 'components/utils/createComponent'
import * as sidebarActions from 'store/sidebar/actions'
import * as store from 'store'

const DRAWER_MODAL_CLASS = 'mdc-drawer--modal'

function LayoutSideBar() {
  const component = render()
  let drawer

  store.subscribe(({sidebar: {open}}) => {
    if (!drawer) return
    drawer.open = open
  })

  afterRender(toggleModalDrawer)
  addResizeListener(toggleModalDrawer)

  return component

  function toggleModalDrawer() {
    const hasModalClass = component.classList.contains(DRAWER_MODAL_CLASS)

    if (isMobile()) {
      if (!hasModalClass) component.classList.add(DRAWER_MODAL_CLASS)
      if (!drawer) drawer = MDCDrawer.attachTo(component)
      store.dispatch(sidebarActions.close())

      return
    }

    if (hasModalClass) {
      component.classList.remove(DRAWER_MODAL_CLASS)
    }
  }

  function render() {
    const wrapperClass = classnames('mdc-drawer home-dashboard-layout-sidebar', {[DRAWER_MODAL_CLASS]: isMobile()})

    return createComponent(`
      <aside class="${wrapperClass}">
        <header class="mdc-drawer__header">
          <h1 class="mdc-drawer__title">${HeadingText({text: 'Controls'})}</h1>
          <p class="mdc-drawer__subtitle">${HeadingText({text: 'Arranged per room'})}</p>
        </header>
      </aside>
    `, Controls())
  }
}

export default LayoutSideBar
