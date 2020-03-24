import Typography from 'components/layout/Typography'
import componentToString from 'components/utils/componentToString'

const LayoutSideBarHeadingText = ({text}) => {
  return componentToString(Typography({color: 'white', text, type: 'inherit'}))
}

export default LayoutSideBarHeadingText
