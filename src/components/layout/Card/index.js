import classnames from 'classnames'

import createComponent from 'components/utils/createComponent'
import Elevation from 'components/layout/Elevation'

const ELEVATION = 1

function Card({color, disablePaddingBottom, disableMarginBottom, children, tag = 'section'}) {
  const cardClassName = classnames('home-card', {
    'home-card--no-margin-bottom': disableMarginBottom
  })
  const cardContentClassName = classnames('home-card__content', {
    'home-card__content--no-padding-bottom': disablePaddingBottom
  })

  return Elevation({
    className: cardClassName,
    tag,
    elevation: ELEVATION,
    children: createComponent(`<div class="${cardContentClassName}" style="border-top-color: ${color}" />`, children)
  })
}

export default Card
