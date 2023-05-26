import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { JsxElement } from 'typescript'
import config from '../../config'
import useNewsData from '../../hooks/useNewsData'
import { NewsObj } from '../../types/News'
import { useParams } from 'react-router-dom'
type Props = {}

const NewsContent = (props: Props) => {
  const { news: allNews } = useNewsData()
  const [news, setNews] = useState<NewsObj>()
  const params = useParams()
  useEffect(() => {
    setNews(allNews.find(n => n.id == params?.id))
  }, [news, params])
  return (
    <div className='w-100 d-flex justify-content-center align-items-center'>
      <div className='col-md-8 col-sm-11'>
        <Card className='news-card shadow round-lg'>
          <div className='fade-from-bottom'>
            <Card.Img width={'90%'} variant='top' src={news?.thumbnail} />
          </div>

          <Card.Body>
            <Card.Title>{news?.title}</Card.Title>
            <div className='texts-primary'>{news?.category}</div>
            <div className='text-end texts-secondary'>
              {' '}
              {news?.author ? 'by: ' + news?.author : ''}
            </div>

            <div className=' text-end texts-grey'>
              {news?.date ? moment(news?.date).format(config.dateFormat) : ''}
            </div>
            <div className='text-left texts-secondary'>
              {/* {news?.body ? news?.body : ''} */}
              <p
                dangerouslySetInnerHTML={{
                  __html: news?.body ? news?.body : ''
                }}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default NewsContent
