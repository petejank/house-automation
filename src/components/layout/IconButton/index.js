import classnames from 'classnames'

import createComponent from 'components/utils/createComponent'

const IconButton = ({className, icon, onClick}) => {
  const component = render()
  component.addEventListener('click', onClick)

  return component

  function render() {
    const iconButtonClass = classnames('material-icons mdc-icon-button', className)

    return createComponent(`
      <button class="${iconButtonClass}">
        ${icon}
      </button>
    `)
  }
}

export default IconButton
