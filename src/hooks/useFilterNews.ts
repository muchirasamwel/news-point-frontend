// import { useCallback, useEffect, useMemo, useState } from 'react'
// import { NewsArr, NewsFilterObj } from '../types/News'
// import config from '../config'
// import moment from 'moment'
// import useNewsData from './useNewsData'
// import useNews from './useNews'

// const useFilterNews = () => {
//   const [filteredNews, setFilteredNews] = useState<NewsArr>([] as NewsArr)
//   const [filters, setFilters] = useState<NewsFilterObj>({} as NewsFilterObj)
//   const [sourcesOptions, setsourcesOptions] = useState<Array<string>>([])
//   const [authorsOptions, setauthorsOptions] = useState<Array<string>>([])
//   const [categoriesOptions, setcategoriesOptions] = useState<Array<string>>([])

//   const { news } = useNewsData()
//   const filterNews = (filters: NewsFilterObj) => {
//     setFilters(filters)
//     if (filters) {
//       let filtered = news
//       if (filters.author && filters.author != '') {
//         filtered = filtered.filter(n => n.author == filters.author)
//       }
//       if (filters.source && filters.source != '') {
//         filtered = filtered.filter(n => n.source == filters.source)
//       }
//       if (filters.category && filters.category != '') {
//         filtered = filtered.filter(n => n.category == filters.category)
//       }
//       if (filters.date && filters.date != '') {
//         filtered = filtered.filter(
//           n => moment(n.date).format(config.dateFormat) == filters.date
//         )
//       }
//       console.log({ filtered, filters })
//       setFilteredNews(filtered)
//     } else {
//       console.log('filter skiped..')
//       setFilteredNews(news)
//     }
//   }

//   useEffect(() => {
//     filterNews(filters)
//   }, [filters, news])

//   useEffect(() => {
//     console.log('chngeddd..', filteredNews)
//     if (filteredNews) {
//       filteredNews?.forEach(n => {
//         setsourcesOptions(prev => {
//           const vals = [...prev]
//           if (n?.source && !vals.includes(n.source)) {
//             vals.push(n.source)
//           }
//           return vals
//         })
//         setauthorsOptions(prev => {
//           const vals = [...prev]
//           if (n?.author && !vals.includes(n.author)) {
//             vals.push(n.author)
//           }
//           return vals
//         })
//         setcategoriesOptions(prev => {
//           const vals = [...prev]
//           if (n?.category && !vals.includes(n.category)) {
//             vals.push(n.category)
//           }
//           return vals
//         })
//       })
//     } else {
//       setsourcesOptions([])
//       setauthorsOptions([])
//       setcategoriesOptions([])
//     }
//   }, [filteredNews])

//   return {
//     filteredNews,
//     setFilteredNews,
//     filters,
//     setFilters,
//     sourcesOptions,
//     authorsOptions,
//     categoriesOptions
//   }
// }
export const useFilterNews = {}
