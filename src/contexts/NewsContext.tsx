import { ReactNode, createContext } from 'react'
import { NewsArr } from '../types/News'
import useNews from '../hooks/useNews'

type Props = {
  children: ReactNode
}
type NewsContextType = {
  news: NewsArr
  getNews: () => Promise<void>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}
const NewsContext = createContext<NewsContextType>({} as NewsContextType)

export const NewsProvider = (props: Props) => {
  const newsHook = useNews()
  return (
    <NewsContext.Provider value={newsHook}>
      {props.children}
    </NewsContext.Provider>
  )
}
export default NewsContext
