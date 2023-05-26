import { useContext } from 'react'
import NewsContext from '../contexts/NewsContext'

const useNewsData = () => {
  return useContext(NewsContext)
}
export default useNewsData
