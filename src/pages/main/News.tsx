import React from 'react'
import { JsxElement } from 'typescript'
import useNewsData from '../../hooks/useNewsData'
import NewsCard from '../../components/cards/NewsCard'
import '../../styles/_news.scss'

type Props = {}

const News = (props: Props) => {
  const { news: newsList } = useNewsData()
  return (
    <div className='container '>
      <div className='row md-gx-5 sm-gx-3 gy-3'>
        {newsList?.map(news => (
          <NewsCard {...news} />
        ))}
      </div>
    </div>
  )
}

export default News
