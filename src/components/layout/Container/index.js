import createComponent from 'components/utils/createComponent'

function Container({children, tag = 'main'}) {
  return createComponent(`<${tag} class="home-container" />`, children)
}

export default Container
