import { useMemo, useState } from 'react'
import axios from '../utils/axios'
import APIs from '../utils/APIs'
import { NewsArr } from '../types/News'
import useAuth from './useAuth'
import { getFromStorage } from '../utils/storageHelper'

const useNews = () => {
  const [news, setNews] = useState<NewsArr>([] as NewsArr)
  const [search, setSearch] = useState<string>('')
  const { isLoggedIn } = useAuth()
  const getNews = async () => {
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
  }

  useMemo(() => {
    try {
      const userStatus = getFromStorage('isLoggedIn')
      if (isLoggedIn || userStatus) getNews()
    } catch (e) {
      //show message
    }
  }, [search])

  return { news, getNews, search, setSearch }
}
export default useNews
