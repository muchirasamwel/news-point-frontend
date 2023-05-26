import { useEffect, useMemo, useState } from 'react'
import axios from '../utils/axios'
import APIs from '../utils/APIs'
import { NewsArr, NewsFilterObj } from '../types/News'
import useAuth from './useAuth'
import { getFromStorage } from '../utils/storageHelper'
import config from '../config'
import moment from 'moment'

const useNews = () => {
  const [news, setNews] = useState<NewsArr>([] as NewsArr)
  const [search, setSearch] = useState<string>('')
  const { isLoggedIn } = useAuth()
  const [isLoading, setisLoading] = useState(false)
  const getNews = async () => {
    setisLoading(true)
    try {
      const response = await axios.post(APIs.NEWS, { search })
      if (response.status == 200) {
        const fetchedNews: NewsArr = response.data.data
        setNews(fetchedNews)
      } else {
        // show error message
      }
    } catch (e) {
      // show error message
    }
    setisLoading(false)
  }

  useMemo(() => {
    try {
      const userStatus = getFromStorage('isLoggedIn')
      if (isLoggedIn || userStatus) getNews()
    } catch (e) {
      //show message
    }
  }, [search])

  const [filteredNews, setFilteredNews] = useState<NewsArr>([] as NewsArr)
  const [filters, setFilters] = useState<NewsFilterObj>({} as NewsFilterObj)
  const [sourcesOptions, setsourcesOptions] = useState<Array<string>>([])
  const [authorsOptions, setauthorsOptions] = useState<Array<string>>([])
  const [categoriesOptions, setcategoriesOptions] = useState<Array<string>>([])

  const filterNews = (filters: NewsFilterObj) => {
    setFilters(filters)
    if (filters) {
      let filtered = news
      if (filters.author && filters.author != '') {
        filtered = filtered.filter(n => n.author == filters.author)
      }
      if (filters.source && filters.source != '') {
        filtered = filtered.filter(n => n.source == filters.source)
      }
      if (filters.category && filters.category != '') {
        filtered = filtered.filter(n => n.category == filters.category)
      }
      if (filters.date && filters.date != '') {
        filtered = filtered.filter(
          n => moment(n.date).format(config.dateFormat) == filters.date
        )
      }
      setFilteredNews(filtered)
    } else {
      setFilteredNews(news)
    }
  }

  useEffect(() => {
    filterNews(filters)
  }, [filters, news])

  useEffect(() => {
    if (filteredNews) {
      filteredNews?.forEach(n => {
        setsourcesOptions(prev => {
          const vals = [...prev]
          if (n?.source && !vals.includes(n.source)) {
            vals.push(n.source)
          }
          return vals
        })
        setauthorsOptions(prev => {
          const vals = [...prev]
          if (n?.author && !vals.includes(n.author)) {
            vals.push(n.author)
          }
          return vals
        })
        setcategoriesOptions(prev => {
          const vals = [...prev]
          if (n?.category && !vals.includes(n.category)) {
            vals.push(n.category)
          }
          return vals
        })
      })
    } else {
      setsourcesOptions([])
      setauthorsOptions([])
      setcategoriesOptions([])
    }
  }, [filteredNews])

  return {
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
  }
}
export default useNews
