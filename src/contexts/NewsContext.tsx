import { ReactNode, createContext } from 'react'
import { NewsArr, NewsFilterObj } from '../types/News'
import useNews from '../hooks/useNews'
import Loader from '../components/Loader'

type Props = {
  children: ReactNode
}
type NewsContextType = {
  news: NewsArr
  getNews: () => Promise<void>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>

  filteredNews: NewsArr
  filters: NewsFilterObj
  setFilters: React.Dispatch<React.SetStateAction<NewsFilterObj>>
  sourcesOptions: Array<string>
  authorsOptions: Array<string>
  categoriesOptions: Array<string>
}
const NewsContext = createContext<NewsContextType>({} as NewsContextType)

export const NewsProvider = (props: Props) => {
  const {
    isLoading,
    news,
    getNews,
    search,
    setSearch,
    filteredNews,
    filters,
    setFilters,
    sourcesOptions,
    authorsOptions,
    categoriesOptions
  } = useNews()

  return (
    <NewsContext.Provider
      value={{
        news,
        getNews,
        search,
        setSearch,
        filteredNews,
        filters,
        setFilters,
        sourcesOptions,
        authorsOptions,
        categoriesOptions
      }}
    >
      {isLoading && <Loader />}
      {props.children}
    </NewsContext.Provider>
  )
}
export default NewsContext
