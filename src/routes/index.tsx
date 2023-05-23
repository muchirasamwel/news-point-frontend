import { useRoutes } from 'react-router-dom'

import mainRoutes from './mainRoutes'

type Props = {}

const Routes = (props: Props) => {
  return useRoutes([mainRoutes])
}

export default Routes
