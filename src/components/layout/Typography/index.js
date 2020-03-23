import classnames from 'classnames'

import createComponent from 'components/utils/createComponent'

const Typography = ({text, weight, tag = 'span', type = 'body2'}) => {
  const className = classnames('mdc-typography', `mdc-typography--${type}`, {
    [`home-typography--${weight}`]: weight
  })

  return createComponent(`<${tag} class="${className}" />`, text)
}

export default Typography
