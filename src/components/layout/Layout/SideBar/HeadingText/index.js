import Typography from 'components/layout/Typography'
import componentToString from 'components/utils/componentToString'

function LayoutSideBarHeadingText({text}) {
  return componentToString(Typography({color: 'white', text, type: 'inherit'}))
}

export default LayoutSideBarHeadingText
