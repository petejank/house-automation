import IconButton from 'components/layout/IconButton'
import createComponent from 'components/utils/createComponent'
import * as sidebarActions from 'store/sidebar/actions'
import * as store from 'store'

const BUTTON_SLOT_CLASS = 'home-app-bar-button-slot'

function LayoutAppBar() {
  const component = render()
  component.querySelector(`.${BUTTON_SLOT_CLASS}`).prepend(renderMenuButton())

  function onMenuButtonClick() {
    store.dispatch(sidebarActions.open())
  }

  return component

  function render() {
    return createComponent(`
      <header class="mdc-top-app-bar home-dashboard-layout-appbar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start ${BUTTON_SLOT_CLASS}">
            <span class="mdc-top-app-bar__title">Rooms preview</span>
          </section>
        </div>
      </header>
    `)
  }

  function renderMenuButton() {
    return IconButton({
      className: 'mdc-top-app-bar__navigation-icon home-dashboard-layout-appbar__menu-button',
      icon: 'menu',
      onClick: onMenuButtonClick
    })
  }
}

export default LayoutAppBar
