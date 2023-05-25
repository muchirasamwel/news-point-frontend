import React from 'react'
import { Card } from 'react-bootstrap'

type Props = {
  title: string
  thumbnail?: string
  category?: string
  author?: string
  date: string
}

const NewsCard = (props: Props) => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6'>
      {/* <div className='fade-from-bottom'>
        <img src={props.thumbnail} alt='Your Image' />
      </div> */}
      <Card className='news-card shadow round-lg'>
        <div className='fade-from-bottom'>
          <Card.Img height={150} variant='top' src={props.thumbnail} />
        </div>

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Some quick</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default NewsCard
