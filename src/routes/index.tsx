import { useRoutes } from 'react-router-dom'
import mainRoutes from './mainRoutes'
import loginRoutes from './authRoutes'

type Props = {}

const Routes = (props: Props) => {
  return useRoutes([mainRoutes, loginRoutes])
}

export default Routes
