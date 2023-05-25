import { useMemo, useState } from 'react'
import axios from '../utils/axios'
import APIs from '../utils/APIs'
import { NewsArr } from '../types/News'

const useNews = () => {
  const [news, setNews] = useState<NewsArr>([] as NewsArr)
  const [search, setSearch] = useState<string>('')

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
      console.log('get news...')
      getNews()
    } catch (e) {
      //show message
    }
  }, [])

  return { news, getNews, search, setSearch }
}
export default useNews
