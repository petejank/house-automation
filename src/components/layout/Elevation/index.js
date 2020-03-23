import classnames from 'classnames'

import createComponent from 'components/utils/createComponent'

function Elevation({className, elevation, children, tag = 'div'}) {
  const elevationClass = classnames('home-elevation', `mdc-elevation--z${elevation}`, className)

  return createComponent(`<${tag} class="${elevationClass}" />`, children)
}

export default Elevation
