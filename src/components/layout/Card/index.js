import classnames from 'classnames'

import createComponent from 'components/utils/createComponent'
import Elevation from 'components/layout/Elevation'

function Card({
  color,
  noPaddingBottom,
  noMargin,
  noBorderTop,
  children,
  elevation = 1,
  tag = 'section'
}) {
  const cardClassName = classnames('home-card', {
    'home-card--no-margin': noMargin
  })
  const cardContentClassName = classnames('home-card__content', {
    'home-card__content--no-padding-bottom': noPaddingBottom,
    'home-card__content--no-border-top': noBorderTop
  })

  return Elevation({
    tag,
    elevation,
    className: cardClassName,
    children: createComponent(`<div class="${cardContentClassName}" style="border-top-color: ${color}" />`, children)
  })
}

export default Card
