import React from 'react'
import { Card } from 'react-bootstrap'
import config from '../../config'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

type Props = {
  id: string | number
  title: string
  thumbnail?: string
  category?: string
  author?: string
  date: string
}

const NewsCard = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <Card
        className='news-card shadow round-lg'
        onClick={() => {
          navigate('news/' + props.id)
        }}
      >
        <div className='fade-from-bottom'>
          <Card.Img height={150} variant='top' src={props.thumbnail} />
        </div>

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <div className='texts-primary'>{props.category}</div>
          <div className='text-end texts-secondary'>
            {' '}
            {props.author ? 'by: ' + props.author : ''}
          </div>
          <div className=' text-end texts-grey'>
            {props.date ? moment(props.date).format(config.dateFormat) : ''}
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default NewsCard
