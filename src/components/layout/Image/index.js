import createComponent from 'components/utils/createComponent'
import images from './utils/images'

function Image({className, image}) {
  return createComponent(`<img class="${className}" src="${images[image]}" />`)
}

export default Image
