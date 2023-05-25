import React from 'react'
import { Container, Nav, Navbar, Image } from 'react-bootstrap'
import NewsSearch from '../forms/NewsSearch'
import NavLink from './NavLink'
import NewsFilter from '../forms/NewsFilter'

type Props = {}

const AppNavBar = (props: Props) => {
  return (
    <Navbar variant='pills' bg='dark' expand='lg' fixed='top'>
      <Container fluid>
        <Navbar.Brand href='#'>
          <Image
            style={{ width: 50, height: 50 }}
            src={require('../../assets/news.png')}
          />
          <span
            style={{
              paddingLeft: '10px',
              paddingRight: '10px',
              color: 'white'
            }}
          >
            {' '}
            News Point
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink path='/' title='All News' />
            <NavLink path='/profile' title='Profile' />
          </Nav>
          <NewsSearch />
          <NewsFilter />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavBar
