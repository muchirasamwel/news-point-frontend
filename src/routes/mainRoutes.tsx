import AppContainer from '../pages/layout/AppContainer'
import News from '../pages/main/News'
import NewsContent from '../pages/main/NewsContent'
import Profile from '../pages/main/Profile'

const mainRoutes = {
  // path: '/',
  element: <AppContainer />,
  children: [
    {
      path: '/',
      element: <News />
    },
    {
      path: 'news/:id',
      element: <NewsContent />
    },
    {
      path: 'profile',
      element: <Profile />
    }
  ]
}

export default mainRoutes
