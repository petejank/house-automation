import classnames from 'classnames'

import createComponent from 'components/utils/createComponent'

const Typography = ({text, weight, color, tag = 'span', type = 'body2'}) => {
  const className = classnames('mdc-typography', {
    [`mdc-typography--${type}`]: type,
    [`home-typography--${weight}`]: weight,
    [`home-typography--${color}`]: color
  })

  return createComponent(`<${tag} class="${className}" />`, text)
}

export default Typography
